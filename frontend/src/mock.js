// All PDP data sourced from the reference PDP (ngearsafe.com/products/ngwehear)
// Verified values used consistently across the whole page.

export const PRODUCT = {
  id: "ngwehear-safebuds",
  handle: "ngwehear",
  brand: "NG EarSafe \u00d7 WeHear",
  title: "SafeBuds Open-Ear AI Earbuds",
  sku: "NGWH-SAFEBUDS",
  price: 2999,
  mrp: 5999,
  currency: "INR",
  taxesLine: "Inclusive of all taxes",
  rating: 4.53,
  reviewCount: 17,
  eyebrow: "OPEN-EAR COMFORT \u00b7 AI INSIDE",
  headline1: "Nothing in your ears.",
  headline2: "Everything in the conversation.",
  supporting:
    "Hear your music, calls and surroundings at the same time \u2014 plus live translation and AI meeting notes in 100+ languages.",
  benefits: [
    "Nothing inserted inside the ear canal",
    "Live translation and AI meeting notes",
    "Multipoint connection for phone and laptop",
    "Up to 35 hours total playback",
  ],
};

export const VARIANTS = [
  { id: "var-black", name: "Black", swatch: "#111827", available: true },
  { id: "var-ivory", name: "Ivory", swatch: "#EDE9E0", available: false },
];

export const GALLERY = [
  { type: "image", src: "https://ngearsafe.com/cdn/shop/files/Untitled_design_1.png?v=1776592936&width=1200", alt: "SafeBuds open-ear earbuds with charging case" },
  { type: "video", src: "https://ngearsafe.com/cdn/shop/files/Gemini_Generated_Image_x5ir8qx5ir8qx5ir.webp?v=1776599389&width=1200", alt: "See how SafeBuds fit", youtube: "l5M6NMpJGQY", label: "See how SafeBuds fit" },
  { type: "image", src: "https://ngearsafe.com/cdn/shop/files/Untitleddesign_2.png?v=1776599389&width=1200", alt: "Close-up showing the ear canal remaining open" },
  { type: "image", src: "https://ngearsafe.com/cdn/shop/files/Untitleddesign_3.png?v=1776599389&width=1200", alt: "SafeBuds worn comfortably with glasses" },
  { type: "image", src: "https://ngearsafe.com/cdn/shop/files/Gemini_Generated_Image_rc51dirc51dirc51.webp?v=1776599389&width=1200", alt: "WeHear app live translation screen" },
  { type: "image", src: "https://ngearsafe.com/cdn/shop/files/Untitled_design_3.png?v=1776599389&width=1200", alt: "AI meeting notes screen" },
  { type: "image", src: "https://ngearsafe.com/cdn/shop/files/openart-image_DSrkwwVU_1776597525767_raw.webp?v=1776599389&width=1200", alt: "Charging case and what is included" },
];

export const PROOF_STRIP = [
  { title: "OPEN EAR", copy: "Nothing inside your ear canal", icon: "Ear" },
  { title: "AI TRANSLATION", copy: "Live conversations in 100+ languages", icon: "Languages" },
  { title: "AI NOTES", copy: "Record, transcribe and summarise meetings", icon: "NotebookPen" },
  { title: "ALL-DAY POWER", copy: "Up to 35 hours with charging case", icon: "BatteryFull" },
];

export const OPEN_EAR = {
  inear: [
    "Inserted inside the canal",
    "Pressure during long listening",
    "Blocks surrounding sounds",
    "Requires frequent removal to hear people",
  ],
  safebuds: [
    "Rests outside the ear canal",
    "No canal pressure",
    "Keeps you aware of your surroundings",
    "Designed for long calls, work and entertainment",
  ],
};

export const AI_CARDS = [
  {
    title: "Live Translation",
    copy: "Have real-time conversations across languages without constantly passing a phone back and forth.",
    benefits: [
      "One-to-one conversations",
      "Group conversation mode",
      "Major Indian and international languages",
      "Saved translated transcript",
      "Works through the WeHear app",
    ],
    image: "https://ngearsafe.com/cdn/shop/files/Gemini_Generated_Image_rc51dirc51dirc51.webp?v=1776599389&width=800",
  },
  {
    title: "AI Meeting Notes",
    copy: "Stay present in the conversation while SafeBuds help capture, transcribe and summarise what was discussed.",
    benefits: [
      "Live transcription",
      "Automatic summary",
      "Saved notes",
      "Useful for meetings, interviews and lectures",
    ],
    image: "https://ngearsafe.com/cdn/shop/files/Untitled_design_3.png?v=1776599389&width=800",
  },
];

export const POSITIONING = {
  bestFor: [
    "Long work calls",
    "Buyers who dislike in-ear pressure",
    "Staying aware while listening",
    "Multilingual conversations",
    "Meetings, lectures and interviews",
    "Switching between laptop and phone",
    "Everyday music, podcasts and entertainment",
  ],
  notFor: [
    "Maximum bass isolation",
    "Active noise cancellation",
    "Blocking all surrounding sound",
    "Audiophile in-ear monitoring",
    "Swimming or complete water immersion",
  ],
};

export const COMPARISON = {
  columns: ["Traditional in-ear", "Typical open-ear", "SafeBuds"],
  rows: [
    { label: "Ear-canal contact", values: ["Sealed inside", "Mostly outside", "Outside canal"], win: true },
    { label: "Awareness of surroundings", values: ["Blocked", "Partial", "Full awareness"], win: true },
    { label: "Long-wear comfort", values: ["Pressure in 2\u20134 hrs", "Good", "All-day comfort"], win: true },
    { label: "Live translation", values: ["\u2717", "\u2717", "100+ languages"], win: true },
    { label: "AI meeting notes", values: ["\u2717", "\u2717", "Transcribe + summarise"], win: true },
    { label: "App customisation", values: ["Varies", "Basic", "Custom EQ"], win: true },
    { label: "Multipoint connection", values: ["Varies", "Varies", "Phone + laptop"], win: true },
    { label: "Microphone system", values: ["1\u20132 mic", "1\u20132 mic", "Quad ENC \u221232dB"], win: true },
    { label: "Battery life", values: ["20\u201330 hrs", "~25 hrs", "35 hours"], win: true },
    { label: "Water resistance", values: ["Varies", "Varies", "Sweat & splash"], win: false },
    { label: "Subscription required", values: ["\u2014", "\u2014", "None"], win: true },
    { label: "Price", values: ["\u20b93,000\u201325,000+", "\u20b92,000\u20135,000", "\u20b92,999"], win: true },
  ],
};

export const SPECS = [
  { k: "Product name", v: "SafeBuds Open-Ear AI Earbuds" },
  { k: "Product type", v: "Open-ear wireless TWS earbuds" },
  { k: "Audio technology", v: "Open-ear air conduction" },
  { k: "Driver size", v: "12 \u00d7 17 mm" },
  { k: "Bluetooth version", v: "Bluetooth 5.4" },
  { k: "Bluetooth range", v: "Up to 10 m" },
  { k: "Microphone system", v: "Quad ENC microphones (\u221232dB)" },
  { k: "Multipoint connectivity", v: "Yes \u2014 phone + laptop" },
  { k: "Battery per charge", v: "Up to 9 hours (buds)" },
  { k: "Total battery with case", v: "Up to 35 hours" },
  { k: "Charging time", v: "~1 hour to full" },
  { k: "Charging connection", v: "USB-C" },
  { k: "Earbud weight", v: "9 grams (per bud)" },
  { k: "Water resistance", v: "Sweat & splash resistant" },
  { k: "App compatibility", v: "WeHear app (iOS & Android)" },
  { k: "Device compatibility", v: "iOS, Android, Windows, macOS" },
  { k: "Standby time", v: "Up to 60 hours" },
  { k: "Touch controls", v: "Yes" },
  { k: "Colours", v: "Black (Ivory coming soon)" },
  { k: "Warranty", v: "1 year" },
];

export const BOX_ITEMS = [
  "SafeBuds earbuds (pair)",
  "Charging case",
  "USB-C charging cable",
  "S / M / L silicone ear hooks",
  "Quick-start guide",
  "Warranty card",
];

export const DELIVERY = [
  { label: "Dispatch", value: "Ships in 1\u20132 days" },
  { label: "Delivery", value: "Delivered in 4\u20135 days" },
  { label: "Shipping", value: "Free shipping across India" },
  { label: "Cash on Delivery", value: "Available at checkout" },
  { label: "Returns", value: "7-day easy returns with pickup" },
  { label: "Refund", value: "Processed after pickup & QC" },
  { label: "Warranty", value: "1-year manufacturer warranty" },
  { label: "Support", value: "support@ngearsafe.com \u00b7 WhatsApp" },
];

export const FAQS = [
  { q: "How do SafeBuds stay on the ear?", a: "An over-ear hook holds each bud in place while the driver rests just outside the ear canal at the tragus \u2014 secure for calls, work and movement." },
  { q: "Are SafeBuds bone-conduction earbuds?", a: "No. SafeBuds are open-ear air-conduction earbuds. The 12\u00d717mm driver sits outside the canal, giving fuller sound than bone conduction while keeping ears unblocked." },
  { q: "Will the sound be weaker because nothing goes inside the ear?", a: "The 12\u00d717mm driver is tuned for open-ear delivery with clear, full-range audio. Custom EQ in the WeHear app lets you adjust bass and treble. It is different from a sealed in-ear \u2014 by design, not lesser." },
  { q: "Do other people hear my audio?", a: "At moderate volume in a normal room, leakage is minimal. In very quiet spaces at high volume some sound may be audible nearby, like any open-ear product." },
  { q: "Are they suitable for calls?", a: "Yes. Quad ENC microphones at \u221232dB help isolate your voice from surrounding noise for clearer calls." },
  { q: "Do they work with Zoom, Teams, Meet and WhatsApp?", a: "Yes \u2014 SafeBuds work with Zoom, Microsoft Teams, Google Meet, WhatsApp calls and regular phone calls." },
  { q: "How does live translation work?", a: "Open the free WeHear app, choose one-to-one or group mode and pick languages. Conversations are translated in real time into your ear, with a transcript saved automatically." },
  { q: "How do AI meeting notes work?", a: "The WeHear app transcribes your conversation live and generates an automatic summary you can save \u2014 useful for meetings, interviews and lectures." },
  { q: "Is a subscription required?", a: "No subscription. Live translation and AI notes are included via the free WeHear app on iOS and Android." },
  { q: "Which languages are supported?", a: "100+ languages, including major Indian languages (Hindi, Tamil, Telugu, Marathi, Bengali and more) and major global languages." },
  { q: "Does the app work on iPhone and Android?", a: "Yes. The WeHear app is free on both iOS and Android." },
  { q: "Can I connect to two devices?", a: "Yes \u2014 multipoint connectivity lets you stay paired to your phone and laptop together." },
  { q: "What is the verified battery life?", a: "Up to 9 hours per charge on the buds and 26 more from the case \u2014 35 hours total. USB-C charges to full in about 1 hour, with up to 60 hours standby." },
  { q: "Are they sweat and water resistant?", a: "They are sweat and splash resistant for daily use. They are not designed for swimming or full water immersion." },
  { q: "Will they fit with glasses?", a: "Yes. The slim over-ear hook is designed to sit comfortably alongside glasses." },
  { q: "What happens if they do not fit?", a: "SafeBuds include S/M/L silicone ear hooks to adapt to different ear shapes. If it still is not right, our 7-day return applies." },
  { q: "What is the return policy?", a: "7-day easy returns. Email support@ngearsafe.com and we arrange pickup and a full refund." },
  { q: "What does the warranty cover?", a: "A 1-year warranty covers manufacturing defects. Reach out to support for a repair or replacement." },
];

export const REVIEWS = {
  average: 4.53,
  total: 17,
  distribution: { 5: 12, 4: 4, 3: 0, 2: 0, 1: 1 },
  photos: [
    "https://review-images.judgeme.com/ng-earsafe/1787255612__247691__original.jpg?quality=80&width=200",
    "https://review-images.judgeme.com/ng-earsafe/1785484049__42637bc2-e87c-4c39-b954-0db28db5a4c9__original.jpeg?quality=80&width=200",
  ],
  featured: [
    { name: "Krishnan Pillai", rating: 5, title: "Absolute Comfort, Premium Finish, Correct Fit", body: "The first experience of opening the box and trying the earphones is ultimately good. Quality, finish, comfort and sound is perfect. Love the product comfort and feel.", tag: "comfort", verified: true },
    { name: "Niraj Kumar", rating: 5, title: "Excellent open ear safe buds", body: "Crystal clear sound. If you are a bass lover then it will disappoint a bit \u2014 but for calls and awareness it is superb.", tag: "sound", verified: true },
    { name: "M Jagan", rating: 4, title: "Great for long calls", body: "Comfortable through back-to-back calls and colleagues hear me clearly. Good value for money.", tag: "calls", verified: true },
  ],
  all: [
    { name: "Devendra .", rating: 4, title: "good product", body: "Good open ear feel. In a live movie there was no translation, but for calls it works well.", tag: "sound", verified: true, response: "Thanks Devendra! Live translation works best in the WeHear app conversation mode \u2014 our team can help you set it up." },
    { name: "Phinas Digal", rating: 5, title: "NG x WeHear SafeBuds", body: "Happy with the purchase, comfortable to wear all day.", tag: "comfort", verified: true },
    { name: "M Jagan", rating: 4, title: "Value for money", body: "Good value for money and comfortable for calls.", tag: "calls", verified: true },
    { name: "Krishnan Pillai", rating: 5, title: "Absolute Comfort, Premium Finish", body: "Quality, finish, comfort and sound is perfect. Love the product comfort and feel.", tag: "fit", verified: true },
    { name: "Niraj Kumar", rating: 5, title: "Excellent open ear safe buds", body: "Crystal clear sound. If you are a bass lover it will disappoint a bit.", tag: "sound", verified: true },
  ],
};

export const BRAND = {
  ngLogo: "https://ngearsafe.com/cdn/shop/files/ng-logo.png?v=1780318722&width=120",
  wehearLogo: "https://ngearsafe.com/cdn/shop/files/wehear-logo.jpg?v=1780318724&width=120",
  sharkTankYoutube: "l5M6NMpJGQY",
};

export const PANELS = [
  { tab: "WFH Pro", image: "https://ngearsafe.com/cdn/shop/files/sb-panel-wfh.webp?v=1780296527&width=800" },
  { tab: "Multilingual", image: "https://ngearsafe.com/cdn/shop/files/sb-panel-multilingual.webp?v=1780296527&width=800" },
  { tab: "Entertainment", image: "https://ngearsafe.com/cdn/shop/files/sb-panel-entertainment.webp?v=1780296527&width=800" },
  { tab: "Parent", image: "https://ngearsafe.com/cdn/shop/files/sb-panel-parent.webp?v=1780296527&width=800" },
];
