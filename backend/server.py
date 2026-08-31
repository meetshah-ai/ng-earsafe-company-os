from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import random
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="SafeBuds PDP API")
api_router = APIRouter(prefix="/api")


def now_iso():
    return datetime.now(timezone.utc).isoformat()


# ---------- Models ----------
class EventIn(BaseModel):
    session_id: str
    event: str
    payload: Dict[str, Any] = Field(default_factory=dict)


class OrderItem(BaseModel):
    variantId: str
    variantName: str
    name: str
    price: float
    qty: int


class OrderIn(BaseModel):
    session_id: str
    items: List[OrderItem]
    total: float
    kind: str = "checkout"  # buy_now | checkout


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "SafeBuds PDP API running"}


@api_router.post("/events")
async def create_event(evt: EventIn):
    doc = {
        "id": str(uuid.uuid4()),
        "session_id": evt.session_id,
        "event": evt.event,
        "payload": evt.payload,
        "ts": now_iso(),
    }
    await db.events.insert_one(doc)
    return {"id": doc["id"], "ok": True}


@api_router.get("/events/summary")
async def events_summary():
    pipeline = [{"$group": {"_id": "$event", "count": {"$sum": 1}}}]
    by_event = {}
    total = 0
    async for row in db.events.aggregate(pipeline):
        by_event[row["_id"]] = row["count"]
        total += row["count"]
    return {"total": total, "by_event": by_event}


@api_router.post("/orders")
async def create_order(order: OrderIn):
    if not order.items:
        raise HTTPException(status_code=400, detail="No items in order")
    order_number = "NG" + str(random.randint(100000, 999999))
    doc = {
        "id": str(uuid.uuid4()),
        "order_number": order_number,
        "session_id": order.session_id,
        "items": [i.dict() for i in order.items],
        "total": order.total,
        "kind": order.kind,
        "status": "created",
        "ts": now_iso(),
    }
    await db.orders.insert_one(doc)
    return {"id": doc["id"], "order_number": order_number, "status": "created"}


@api_router.get("/orders/{order_id}")
async def get_order(order_id: str):
    doc = await db.orders.find_one({"id": order_id}, {"_id": 0})
    if not doc:
        raise HTTPException(status_code=404, detail="Order not found")
    return doc


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
