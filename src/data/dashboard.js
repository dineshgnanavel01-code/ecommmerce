export const stats = [
  { label: "Total Orders", value: "12,480", change: "+12.8%", icon: "orders", tone: "violet" },
  { label: "Total Sales", value: "$284,560", change: "+18.6%", icon: "sales", tone: "emerald" },
  { label: "Total Customers", value: "8,942", change: "+9.4%", icon: "customers", tone: "blue" },
  { label: "Total Products", value: "1,248", change: "+4.2%", icon: "products", tone: "amber" },
];

export const weeklySales = [
  { day: "Mon", sales: 3200 },
  { day: "Tue", sales: 4100 },
  { day: "Wed", sales: 2800 },
  { day: "Thu", sales: 5200 },
  { day: "Fri", sales: 4600 },
  { day: "Sat", sales: 6200 },
  { day: "Sun", sales: 5100 },
];

export const salesDistribution = [
  { label: "Electronics", value: 42 },
  { label: "Fashion", value: 26 },
  { label: "Home & Living", value: 18 },
  { label: "Accessories", value: 14 },
];

export const orders = [
  { id: "#ORD-10482", customer: "Olivia Martin", product: "Wireless ANC Headphones", date: "Aug 21, 2026", amount: "$199.99", status: "Delivered" },
  { id: "#ORD-10481", customer: "Ethan Williams", product: "5G Smartphone 256GB", date: "Aug 21, 2026", amount: "$799.00", status: "Processing" },
  { id: "#ORD-10480", customer: "Sophia Brown", product: "Performance Running Shoes", date: "Aug 20, 2026", amount: "$129.50", status: "Shipped" },
  { id: "#ORD-10479", customer: "James Davis", product: "Smart Desk Lamp", date: "Aug 20, 2026", amount: "$64.99", status: "Delivered" },
  { id: "#ORD-10478", customer: "Ava Wilson", product: "Travel Backpack", date: "Aug 19, 2026", amount: "$84.00", status: "Cancelled" },
  { id: "#ORD-10477", customer: "Noah Taylor", product: "Programmable Coffee Maker", date: "Aug 19, 2026", amount: "$89.99", status: "Delivered" },
];

export const products = [
  { name: "5G Smartphone 256GB", category: "Electronics", sold: 842, revenue: "$673,958", trend: "+24.8%", image: "/assets/smartphone.jpg" },
  { name: "Wireless ANC Headphones", category: "Electronics", sold: 724, revenue: "$144,776", trend: "+18.2%", image: "/assets/headphones.jpg" },
  { name: "Performance Running Shoes", category: "Footwear", sold: 618, revenue: "$80,031", trend: "+12.6%", image: "/assets/shoes.jpg" },
  { name: "Programmable Coffee Maker", category: "Appliances", sold: 492, revenue: "$44,275", trend: "+8.9%", image: "/assets/coffeemaker.jpg" },
];

export const notifications = [
  { title: "New order received", text: "Order #ORD-10482 was placed.", time: "4 min ago" },
  { title: "Low stock alert", text: "Wireless ANC Headphones has 12 left.", time: "28 min ago" },
  { title: "Payment completed", text: "Order #ORD-10479 was paid successfully.", time: "1 hr ago" },
];
