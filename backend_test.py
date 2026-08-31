#!/usr/bin/env python3
"""
Backend API Testing for SafeBuds PDP
Tests all API endpoints with various scenarios
"""

import requests
import json
import sys
from typing import Dict, Any

# Base URL from frontend/.env
BASE_URL = "https://safebuds-pdp-v2.preview.emergentagent.com/api"

class Colors:
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    END = '\033[0m'

def print_test(name: str):
    print(f"\n{Colors.BLUE}{'='*60}{Colors.END}")
    print(f"{Colors.BLUE}TEST: {name}{Colors.END}")
    print(f"{Colors.BLUE}{'='*60}{Colors.END}")

def print_success(msg: str):
    print(f"{Colors.GREEN}✓ {msg}{Colors.END}")

def print_error(msg: str):
    print(f"{Colors.RED}✗ {msg}{Colors.END}")

def print_info(msg: str):
    print(f"{Colors.YELLOW}ℹ {msg}{Colors.END}")

# Track test results
test_results = {
    "passed": 0,
    "failed": 0,
    "errors": []
}

def test_health_check():
    """Test 1: GET /api/ - Health check"""
    print_test("Health Check - GET /api/")
    
    try:
        response = requests.get(f"{BASE_URL}/", timeout=10)
        print_info(f"Status Code: {response.status_code}")
        print_info(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "SafeBuds PDP API running":
                print_success("Health check passed - API is running")
                test_results["passed"] += 1
                return True
            else:
                print_error(f"Unexpected message: {data.get('message')}")
                test_results["failed"] += 1
                test_results["errors"].append("Health check: Unexpected message")
                return False
        else:
            print_error(f"Expected 200, got {response.status_code}")
            test_results["failed"] += 1
            test_results["errors"].append(f"Health check: Status {response.status_code}")
            return False
    except Exception as e:
        print_error(f"Health check failed with exception: {str(e)}")
        test_results["failed"] += 1
        test_results["errors"].append(f"Health check: {str(e)}")
        return False

def test_create_events():
    """Test 2: POST /api/events - Create multiple events"""
    print_test("Create Events - POST /api/events")
    
    events_to_create = [
        {
            "session_id": "test-sess-1",
            "event": "product_page_viewed",
            "payload": {"product": "safebuds"}
        },
        {
            "session_id": "test-sess-1",
            "event": "add_to_cart",
            "payload": {"product": "safebuds", "variant": "black"}
        },
        {
            "session_id": "test-sess-1",
            "event": "buy_now",
            "payload": {"product": "safebuds", "variant": "black", "price": 2999}
        },
        {
            "session_id": "test-sess-1",
            "event": "variant_selected",
            "payload": {"variant": "white"}
        }
    ]
    
    created_ids = []
    all_passed = True
    
    for i, event_data in enumerate(events_to_create, 1):
        try:
            print_info(f"\nCreating event {i}: {event_data['event']}")
            response = requests.post(
                f"{BASE_URL}/events",
                json=event_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            print_info(f"Status Code: {response.status_code}")
            print_info(f"Response: {response.json()}")
            
            if response.status_code == 200:
                data = response.json()
                if "id" in data and data.get("ok") == True:
                    created_ids.append(data["id"])
                    print_success(f"Event '{event_data['event']}' created with ID: {data['id']}")
                else:
                    print_error(f"Missing 'id' or 'ok' field in response")
                    all_passed = False
                    test_results["errors"].append(f"Event {event_data['event']}: Missing fields")
            else:
                print_error(f"Expected 200, got {response.status_code}")
                all_passed = False
                test_results["errors"].append(f"Event {event_data['event']}: Status {response.status_code}")
        except Exception as e:
            print_error(f"Failed to create event '{event_data['event']}': {str(e)}")
            all_passed = False
            test_results["errors"].append(f"Event {event_data['event']}: {str(e)}")
    
    if all_passed:
        print_success(f"\nAll {len(events_to_create)} events created successfully")
        test_results["passed"] += 1
        return created_ids
    else:
        print_error("\nSome events failed to create")
        test_results["failed"] += 1
        return created_ids

def test_events_summary():
    """Test 3: GET /api/events/summary - Get event summary"""
    print_test("Events Summary - GET /api/events/summary")
    
    try:
        response = requests.get(f"{BASE_URL}/events/summary", timeout=10)
        print_info(f"Status Code: {response.status_code}")
        print_info(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "total" in data and "by_event" in data:
                print_success(f"Summary retrieved - Total events: {data['total']}")
                print_info(f"Events breakdown: {json.dumps(data['by_event'], indent=2)}")
                
                # Verify we have at least the events we created
                if data["total"] >= 4:
                    print_success("Event count matches expected minimum")
                    test_results["passed"] += 1
                    return True
                else:
                    print_error(f"Expected at least 4 events, got {data['total']}")
                    test_results["failed"] += 1
                    test_results["errors"].append(f"Events summary: Expected >=4, got {data['total']}")
                    return False
            else:
                print_error("Missing 'total' or 'by_event' fields")
                test_results["failed"] += 1
                test_results["errors"].append("Events summary: Missing fields")
                return False
        else:
            print_error(f"Expected 200, got {response.status_code}")
            test_results["failed"] += 1
            test_results["errors"].append(f"Events summary: Status {response.status_code}")
            return False
    except Exception as e:
        print_error(f"Failed to get events summary: {str(e)}")
        test_results["failed"] += 1
        test_results["errors"].append(f"Events summary: {str(e)}")
        return False

def test_create_order_valid():
    """Test 4: POST /api/orders - Create valid order"""
    print_test("Create Valid Order - POST /api/orders")
    
    order_data = {
        "session_id": "test-sess-1",
        "items": [
            {
                "variantId": "var-black",
                "variantName": "Black",
                "name": "SafeBuds Open-Ear AI Earbuds",
                "price": 2999,
                "qty": 1
            }
        ],
        "total": 2999,
        "kind": "buy_now"
    }
    
    try:
        print_info(f"Creating order with data: {json.dumps(order_data, indent=2)}")
        response = requests.post(
            f"{BASE_URL}/orders",
            json=order_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print_info(f"Status Code: {response.status_code}")
        print_info(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "id" in data and "order_number" in data and "status" in data:
                if data["order_number"].startswith("NG") and data["status"] == "created":
                    print_success(f"Order created successfully")
                    print_success(f"Order ID: {data['id']}")
                    print_success(f"Order Number: {data['order_number']}")
                    print_success(f"Status: {data['status']}")
                    test_results["passed"] += 1
                    return data["id"]
                else:
                    print_error(f"Order number doesn't start with 'NG' or status is not 'created'")
                    test_results["failed"] += 1
                    test_results["errors"].append("Create order: Invalid order_number or status")
                    return None
            else:
                print_error("Missing required fields in response")
                test_results["failed"] += 1
                test_results["errors"].append("Create order: Missing fields")
                return None
        else:
            print_error(f"Expected 200, got {response.status_code}")
            test_results["failed"] += 1
            test_results["errors"].append(f"Create order: Status {response.status_code}")
            return None
    except Exception as e:
        print_error(f"Failed to create order: {str(e)}")
        test_results["failed"] += 1
        test_results["errors"].append(f"Create order: {str(e)}")
        return None

def test_create_order_invalid():
    """Test 5: POST /api/orders - Create order with empty items (should fail)"""
    print_test("Create Invalid Order - POST /api/orders (empty items)")
    
    order_data = {
        "session_id": "test-sess-1",
        "items": [],
        "total": 0,
        "kind": "buy_now"
    }
    
    try:
        print_info(f"Creating order with empty items")
        response = requests.post(
            f"{BASE_URL}/orders",
            json=order_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print_info(f"Status Code: {response.status_code}")
        print_info(f"Response: {response.text}")
        
        if response.status_code == 400:
            print_success("Correctly rejected order with empty items (400)")
            test_results["passed"] += 1
            return True
        else:
            print_error(f"Expected 400, got {response.status_code}")
            test_results["failed"] += 1
            test_results["errors"].append(f"Invalid order: Expected 400, got {response.status_code}")
            return False
    except Exception as e:
        print_error(f"Failed to test invalid order: {str(e)}")
        test_results["failed"] += 1
        test_results["errors"].append(f"Invalid order: {str(e)}")
        return False

def test_get_order_valid(order_id: str):
    """Test 6a: GET /api/orders/{id} - Get existing order"""
    print_test(f"Get Valid Order - GET /api/orders/{order_id}")
    
    try:
        response = requests.get(f"{BASE_URL}/orders/{order_id}", timeout=10)
        print_info(f"Status Code: {response.status_code}")
        print_info(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "id" in data and data["id"] == order_id:
                print_success(f"Order retrieved successfully")
                print_success(f"Order details: {json.dumps(data, indent=2)}")
                test_results["passed"] += 1
                return True
            else:
                print_error("Order ID mismatch or missing")
                test_results["failed"] += 1
                test_results["errors"].append("Get order: ID mismatch")
                return False
        else:
            print_error(f"Expected 200, got {response.status_code}")
            test_results["failed"] += 1
            test_results["errors"].append(f"Get order: Status {response.status_code}")
            return False
    except Exception as e:
        print_error(f"Failed to get order: {str(e)}")
        test_results["failed"] += 1
        test_results["errors"].append(f"Get order: {str(e)}")
        return False

def test_get_order_invalid():
    """Test 6b: GET /api/orders/{id} - Get non-existent order"""
    print_test("Get Invalid Order - GET /api/orders/{random-id}")
    
    fake_id = "non-existent-order-id-12345"
    
    try:
        response = requests.get(f"{BASE_URL}/orders/{fake_id}", timeout=10)
        print_info(f"Status Code: {response.status_code}")
        print_info(f"Response: {response.text}")
        
        if response.status_code == 404:
            print_success("Correctly returned 404 for non-existent order")
            test_results["passed"] += 1
            return True
        else:
            print_error(f"Expected 404, got {response.status_code}")
            test_results["failed"] += 1
            test_results["errors"].append(f"Get invalid order: Expected 404, got {response.status_code}")
            return False
    except Exception as e:
        print_error(f"Failed to test invalid order retrieval: {str(e)}")
        test_results["failed"] += 1
        test_results["errors"].append(f"Get invalid order: {str(e)}")
        return False

def print_summary():
    """Print test summary"""
    print(f"\n{Colors.BLUE}{'='*60}{Colors.END}")
    print(f"{Colors.BLUE}TEST SUMMARY{Colors.END}")
    print(f"{Colors.BLUE}{'='*60}{Colors.END}")
    
    total = test_results["passed"] + test_results["failed"]
    print(f"\nTotal Tests: {total}")
    print(f"{Colors.GREEN}Passed: {test_results['passed']}{Colors.END}")
    print(f"{Colors.RED}Failed: {test_results['failed']}{Colors.END}")
    
    if test_results["errors"]:
        print(f"\n{Colors.RED}Errors:{Colors.END}")
        for error in test_results["errors"]:
            print(f"  {Colors.RED}• {error}{Colors.END}")
    
    print(f"\n{Colors.BLUE}{'='*60}{Colors.END}\n")
    
    return test_results["failed"] == 0

def main():
    print(f"\n{Colors.BLUE}{'='*60}{Colors.END}")
    print(f"{Colors.BLUE}SafeBuds PDP Backend API Testing{Colors.END}")
    print(f"{Colors.BLUE}Base URL: {BASE_URL}{Colors.END}")
    print(f"{Colors.BLUE}{'='*60}{Colors.END}")
    
    # Run all tests in sequence
    test_health_check()
    test_create_events()
    test_events_summary()
    order_id = test_create_order_valid()
    test_create_order_invalid()
    
    if order_id:
        test_get_order_valid(order_id)
    else:
        print_error("Skipping valid order retrieval test (no order ID)")
        test_results["failed"] += 1
        test_results["errors"].append("Get order: Skipped due to order creation failure")
    
    test_get_order_invalid()
    
    # Print summary
    all_passed = print_summary()
    
    # Exit with appropriate code
    sys.exit(0 if all_passed else 1)

if __name__ == "__main__":
    main()
