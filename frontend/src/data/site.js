// NG EarSafe — catalog, categories & site data.
// Open-ear audio products/prices are REAL (from ngearsafe.com).
// New-category products are realistic placeholders (swap when real SKUs go live).

const img = {
  // real audio
  comm: "https://ngearsafe.com/cdn/shop/files/Comm2Listing1.webp?v=1745217871&width=720",
  safebuds: "https://ngearsafe.com/cdn/shop/files/Untitled_design_1.png?v=1776592936&width=720",
  lite: "https://ngearsafe.com/cdn/shop/files/black-open-ear-wireless-headphones-neckband-front.webp?v=1758523892&width=720",
  openwire: "https://ngearsafe.com/cdn/shop/files/1_wired_c76caf90-c4f4-4402-84b5-7a3456805c9b.webp?v=1765349128&width=720",
  earplugs: "https://ngearsafe.com/cdn/shop/files/ng-earsafe-earplugs-with-case_webp_96d75bad-82af-4ac2-b995-b3b763b6ffd5.jpg?v=1757313380&width=720",
  pulse: "https://ngearsafe.com/cdn/shop/files/swatch-black.webp?v=1787581041&width=720",
  // stock — wearables
  watch1: "https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  watch2: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  watch3: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  // beauty
  beauty1: "https://images.unsplash.com/photo-1710839214353-49077cb9098f?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  beauty2: "https://images.unsplash.com/photo-1712482937676-398342a92e81?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  beauty3: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  // massagers
  mass1: "https://images.unsplash.com/photo-1662350689234-4068dadadc44?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  mass2: "https://images.unsplash.com/photo-1649301093204-5d984386835a?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  mass3: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  // car
  car1: "https://images.unsplash.com/photo-1698314440055-5aa837af0a7f?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  car2: "https://images.unsplash.com/photo-1559232212-9c37e0b94ba7?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  car3: "https://images.unsplash.com/photo-1518613457753-943af5077db6?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  // mobile
  mob1: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  mob2: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  mob3: "https://images.unsplash.com/photo-1609692814867-a2129e0d0f42?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
};

const SHOP_ALL = "https://ngearsafe.com/collections/all";

// Flagship open-ear audio range (REAL) — stays the star of the page.
export const flagshipProducts = [
  {
    id: "comm-2",
    name: "NG EarSafe Comm 2.0",
    tagline: "Noise-cancelling open-ear with mic",
    price: "₹3,499",
    mrp: "₹5,599",
    badge: "Bestseller",
    image: img.comm,
    stage: "light",
    href: "https://ngearsafe.com/products/noise-cancelling-open-ear-headphones-with-mic-ng-ear-safe-comm-2-0",
    description:
      "Crystal-clear calls with a dual-mic ENC system, all in a featherlight open-ear frame that never seals your canal.",
    specs: ["Air conduction", "Dual-mic ENC", "Bluetooth 5.3", "Up to 10h playtime", "IPX5 sweat-proof"],
  },
  {
    id: "safebuds",
    name: "NG x Wehear Safebuds",
    tagline: "OWS open-ear buds",
    price: "₹2,999",
    mrp: "₹5,999",
    badge: "New",
    image: img.safebuds,
    stage: "light",
    href: "https://ngearsafe.com/products/ngwehear",
    description:
      "True open-wearable stereo buds that hook comfortably over the ear for all-day, canal-free listening.",
    specs: ["Open-wearable stereo", "Bluetooth 5.3", "9h + 26h with case", "Touch controls", "Fast charge"],
  },
  {
    id: "lite",
    name: "NG EarSafe Lite",
    tagline: "Open-ear wireless headphones",
    price: "₹1,799",
    mrp: "₹2,999",
    badge: null,
    image: img.lite,
    stage: "dark",
    href: "https://ngearsafe.com/products/open-ear-wireless-headphones-ng-ear-safe-lite",
    description:
      "The everyday open-ear neckband — secure, light and loud enough for the commute and the gym.",
    specs: ["Air conduction", "Neckband design", "Bluetooth 5.2", "Up to 8h playtime", "Magnetic buds"],
  },
  {
    id: "openwire",
    name: "NG EarSafe OpenWire",
    tagline: "Wired open-ear headphones",
    price: "₹799",
    mrp: "₹1,499",
    badge: "Value",
    image: img.openwire,
    stage: "dark",
    href: "https://ngearsafe.com/products/open-ear-headphones-wired-ng-earsafe",
    description:
      "Zero-lag wired open-ear audio with a 3.5mm jack — plug in and stay aware, no charging needed.",
    specs: ["Air conduction", "3.5mm wired", "In-line mic", "Situational awareness", "Ultra-light"],
  },
];

export const heroProduct = { name: "NG EarSafe Comm 2.0", image: img.comm };

// Categories, each with its own top-selling product slider.
export const catalog = [
  {
    id: "wearables",
    name: "Wearables",
    blurb: "Fitness bands & smartwatches that track every move.",
    href: SHOP_ALL,
    products: [
      { id: "ng-pulse", name: "NG Pulse Fitness Band", tagline: "Fitness tracker", price: "₹3,499", mrp: "₹5,999", badge: "Bestseller", image: img.pulse, stage: "light", href: "https://ngearsafe.com/products/ng-pulse", description: "A slim AMOLED fitness band with heart-rate, SpO2 and 14-day battery to keep pace with your day.", specs: ["1.1\" AMOLED", "Heart-rate + SpO2", "14-day battery", "5ATM water-resistant", "100+ sport modes"] },
      { id: "ng-active", name: "NG Active Smartwatch", tagline: "AMOLED smartwatch", price: "₹4,499", mrp: "₹7,999", badge: "New", image: img.watch1, stage: "dark", href: SHOP_ALL, description: "A premium AMOLED smartwatch with Bluetooth calling and always-on display.", specs: ["1.43\" AMOLED", "BT calling", "Always-on display", "SpO2 & sleep", "7-day battery"] },
      { id: "ng-move", name: "NG Move Sport", tagline: "GPS running watch", price: "₹5,999", mrp: "₹9,999", badge: null, image: img.watch2, stage: "dark", href: SHOP_ALL, description: "Built-in GPS, running dynamics and rugged build for serious training.", specs: ["Built-in GPS", "Running dynamics", "10-day battery", "Corning glass", "Route tracking"] },
      { id: "ng-band-lite", name: "NG Band Lite", tagline: "Everyday tracker", price: "₹1,999", mrp: "₹3,499", badge: "Value", image: img.watch3, stage: "dark", href: SHOP_ALL, description: "Lightweight essentials band for steps, sleep and notifications.", specs: ["Step & sleep", "Notifications", "IP68", "12-day battery", "Slim fit"] },
    ],
  },
  {
    id: "beauty",
    name: "Beauty Tech",
    blurb: "Salon-grade facial & grooming devices for home.",
    href: SHOP_ALL,
    products: [
      { id: "ng-glow", name: "NG Glow Facial Device", tagline: "LED + microcurrent", price: "₹4,999", mrp: "₹8,999", badge: "Bestseller", image: img.beauty1, stage: "dark", href: SHOP_ALL, description: "Microcurrent and red-light therapy to lift, firm and refresh skin in minutes.", specs: ["Microcurrent", "Red-light therapy", "3 intensity modes", "USB-C rechargeable", "Skin-safe alloy"] },
      { id: "ng-lumi", name: "NG Lumi IPL Handset", tagline: "At-home IPL", price: "₹6,499", mrp: "₹11,999", badge: "New", image: img.beauty2, stage: "dark", href: SHOP_ALL, description: "500K-flash IPL handset for gentle, long-lasting hair reduction at home.", specs: ["500K flashes", "5 energy levels", "Skin-tone sensor", "Glide mode", "Corded power"] },
      { id: "ng-sculpt", name: "NG Sculpt Roller", tagline: "Facial massager", price: "₹2,499", mrp: "₹3,999", badge: null, image: img.beauty3, stage: "dark", href: SHOP_ALL, description: "Cooling contour roller with sonic vibration to de-puff and sculpt.", specs: ["Sonic vibration", "Cooling head", "Ergonomic grip", "USB-C", "IPX6"] },
      { id: "ng-shine", name: "NG Shine Hair Dryer", tagline: "Ionic fast-dry", price: "₹3,999", mrp: "₹6,499", badge: "Value", image: img.beauty1, stage: "dark", href: SHOP_ALL, description: "High-speed ionic dryer for frizz-free, salon-smooth results.", specs: ["110,000 RPM", "Ionic care", "3 heat settings", "Lightweight", "Concentrator nozzle"] },
    ],
  },
  {
    id: "massagers",
    name: "Massagers",
    blurb: "Recovery & relaxation, engineered for real relief.",
    href: SHOP_ALL,
    products: [
      { id: "ng-recover", name: "NG Recover Massage Gun", tagline: "Percussion therapy", price: "₹4,499", mrp: "₹7,999", badge: "Bestseller", image: img.mass1, stage: "dark", href: SHOP_ALL, description: "Deep-tissue percussion with 5 heads and a quiet brushless motor for fast recovery.", specs: ["Brushless motor", "5 massage heads", "6 speeds", "3200 RPM", "6h battery"] },
      { id: "ng-mini", name: "NG Recover Mini", tagline: "Pocket massager", price: "₹2,999", mrp: "₹4,999", badge: "New", image: img.mass2, stage: "dark", href: SHOP_ALL, description: "Palm-sized percussion massager that goes in any gym bag.", specs: ["Compact build", "4 speeds", "USB-C", "Whisper-quiet", "3 heads"] },
      { id: "ng-neck", name: "NG Neck & Shoulder", tagline: "Heated kneader", price: "₹3,499", mrp: "₹5,999", badge: null, image: img.mass3, stage: "dark", href: SHOP_ALL, description: "Shiatsu kneading nodes with heat to melt neck and shoulder tension.", specs: ["Shiatsu nodes", "Heat therapy", "Cordless", "Auto shut-off", "Adjustable straps"] },
      { id: "ng-foot", name: "NG Foot Relief", tagline: "Foot massager", price: "₹5,499", mrp: "₹8,999", badge: "Value", image: img.mass1, stage: "dark", href: SHOP_ALL, description: "Air-compression and heat foot massager for all-day comfort.", specs: ["Air compression", "Heat modes", "3 intensities", "Washable liners", "Remote control"] },
    ],
  },
  {
    id: "car",
    name: "Car Tech",
    blurb: "Mounts, chargers & gadgets for every drive.",
    href: "https://ngearsafe.com/collections/car-accessories",
    products: [
      { id: "ng-mag-mount", name: "NG MagMount Pro", tagline: "Magnetic car mount", price: "₹1,299", mrp: "₹2,499", badge: "Bestseller", image: img.car1, stage: "dark", href: SHOP_ALL, description: "Strong MagSafe-compatible vent mount that holds firm on any road.", specs: ["MagSafe compatible", "N52 magnets", "Vent + dash", "360° rotation", "One-hand use"] },
      { id: "ng-car-charge", name: "NG Drive 65W Charger", tagline: "Dual USB-C car charger", price: "₹999", mrp: "₹1,799", badge: "New", image: img.car2, stage: "dark", href: SHOP_ALL, description: "65W dual-port fast car charger that powers phone and laptop together.", specs: ["65W PD", "Dual USB-C", "GaN tech", "LED indicator", "Surge protection"] },
      { id: "ng-fm", name: "NG AirTune FM", tagline: "Bluetooth FM kit", price: "₹1,499", mrp: "₹2,999", badge: null, image: img.car3, stage: "dark", href: SHOP_ALL, description: "Bluetooth FM transmitter with fast charging and hands-free calling.", specs: ["BT 5.0", "FM transmit", "QC3.0 port", "Hands-free calls", "Color display"] },
      { id: "ng-wireless-mount", name: "NG ChargeMount 15W", tagline: "Wireless charging mount", price: "₹2,299", mrp: "₹3,999", badge: "Value", image: img.car1, stage: "dark", href: SHOP_ALL, description: "Auto-clamp wireless charging mount — dock and charge in one move.", specs: ["15W wireless", "Auto-clamp", "Vent + suction", "Fast align", "Overheat safe"] },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Accessories",
    blurb: "Charging & connectivity essentials, done right.",
    href: SHOP_ALL,
    products: [
      { id: "ng-magpad", name: "NG MagPad 15W", tagline: "Wireless charger", price: "₹1,499", mrp: "₹2,799", badge: "Bestseller", image: img.mob1, stage: "dark", href: SHOP_ALL, description: "Slim MagSafe-style 15W pad that snaps on and charges fast.", specs: ["15W wireless", "Magnetic align", "USB-C", "Anti-slip", "LED status"] },
      { id: "ng-powerbank", name: "NG Charge 20K", tagline: "20,000mAh power bank", price: "₹2,499", mrp: "₹4,499", badge: "New", image: img.mob2, stage: "dark", href: SHOP_ALL, description: "20,000mAh 22.5W power bank with triple output for days off-grid.", specs: ["20,000mAh", "22.5W fast", "USB-C in/out", "Triple output", "Digital display"] },
      { id: "ng-cable", name: "NG FlexCable 100W", tagline: "Braided USB-C cable", price: "₹599", mrp: "₹1,199", badge: null, image: img.mob3, stage: "dark", href: SHOP_ALL, description: "100W braided USB-C to USB-C cable rated for 30,000 bends.", specs: ["100W PD", "Braided nylon", "30K-bend rated", "1.5m length", "E-marker chip"] },
      { id: "ng-gan", name: "NG GaN 65W Charger", tagline: "Wall charger", price: "₹1,799", mrp: "₹2,999", badge: "Value", image: img.mob1, stage: "dark", href: SHOP_ALL, description: "Compact 65W GaN charger that fast-charges phone and laptop.", specs: ["65W GaN", "Dual USB-C + A", "Foldable pins", "Compact body", "Multi-device"] },
    ],
  },
];

export const manifesto = [
  { no: "01", title: "Situational Awareness", body: "Open-ear leaves your ear canal free so you stay tuned to traffic, teammates and the world around you — never sealed off." },
  { no: "02", title: "Zero Ear Fatigue", body: "No silicone tips, no pressure. Air & bone conduction rest gently on the cheekbone for all-day wear without soreness." },
  { no: "03", title: "Hearing Safety", body: "Eliminates the risk of ear infections and hearing loss from prolonged in-ear use, for a healthier way to listen." },
  { no: "04", title: "ENT Doctor Certified", body: "Engineered and vetted with ENT specialists so comfort and clarity never come at the cost of your hearing." },
];

export const stats = [
  { value: "1.1B", label: "young people at risk of hearing loss (WHO)" },
  { value: "0", label: "silicone tips inside your ear canal" },
  { value: "9+26h", label: "playtime with the charging case" },
  { value: "1 yr", label: "warranty + easy 7-day returns" },
];

export const mediaLogos = ["IANS", "YourStory", "VCCircle", "ISN", "Entrepreneur", "ENTracker"];

export const marqueeWords = [
  "ENT-CERTIFIED", "OPEN-EAR AUDIO", "SITUATIONAL AWARENESS", "ZERO EAR FATIGUE",
  "AIR CONDUCTION", "BONE CONDUCTION", "MADE FOR INDIA",
];

export const announcements = [
  "Free shipping across India on all prepaid orders",
  "New drop — NG x Wehear Safebuds now live",
  "1-year warranty + easy 7-day returns on everything",
];

// Social reels — vertical lifestyle clips (image-driven cards).
export const reels = [
  {
    id: "reel-run",
    caption: "Morning miles, ears wide open.",
    tag: "Comm 2.0",
    likes: "12.4k",
    comments: "318",
    image:
      "https://images.unsplash.com/photo-1758506971986-b0d0edebd8d5?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  },
  {
    id: "reel-gym",
    caption: "Push harder, stay aware.",
    tag: "Safebuds",
    likes: "9.1k",
    comments: "204",
    image:
      "https://images.unsplash.com/photo-1574680088814-c9e8a10d8a4d?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  },
  {
    id: "reel-cycle",
    caption: "Sunrise rides hit different.",
    tag: "EarSafe Pro",
    likes: "15.7k",
    comments: "421",
    image:
      "https://images.unsplash.com/photo-1606224547099-b15c94ca5ef2?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  },
  {
    id: "reel-street",
    caption: "Your city, your soundtrack.",
    tag: "EarSafe Lite",
    likes: "7.8k",
    comments: "156",
    image:
      "https://images.unsplash.com/photo-1490476323407-63a2b2baa393?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  },
  {
    id: "reel-runher",
    caption: "No canal. No compromise.",
    tag: "Comm 2.0",
    likes: "20.2k",
    comments: "512",
    image:
      "https://images.unsplash.com/photo-1558442156-06a7f01d9ae8?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  },
  {
    id: "reel-commute",
    caption: "Tune in without tuning out.",
    tag: "OpenWire",
    likes: "6.3k",
    comments: "98",
    image:
      "https://images.unsplash.com/photo-1542397656-5dfd6adec561?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  },
];
