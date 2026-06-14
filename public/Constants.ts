const friends = [
  {
    img: "https://i.pravatar.cc/32?img=11",
    name: "Ryan Franci",
    status: "Playing GTA V",
    online: true,
    action: "Join the game",
  },
  {
    img: "https://i.pravatar.cc/32?img=5",
    name: "Kierra Donin",
    status: "Last played 2 hours ago",
    online: false,
  },
  {
    img: "https://i.pravatar.cc/32?img=8",
    name: "Brandon Vaccaro",
    status: "Last played yesterday",
    online: false,
  },
];
const wishlistGames = [
  {
    title: "Grand Theft Auto V",
    bg: "linear-gradient(135deg, #1a0a00, #3d1a00)",
    watermark: "GTA V",
  },
  {
    title: "Death Stranding",
    bg: "linear-gradient(135deg, #0a1a1a, #002222)",
    watermark: "DEATH\nSTRANDING",
  },
];
const user = {
  name: "Jakob Gouse",
  username: "@jakobgouse",
  avatar: "https://i.pravatar.cc/150?img=12",
  balance: "$124.50",
};

const menuItems = [
  { icon: "👤", label: "Profile", shortcut: "" },
  { icon: "💳", label: "Payment Methods", shortcut: "" },
  { icon: "🛒", label: "My Purchases", shortcut: "" },
  { icon: "💌", label: "Wishlist", shortcut: "" },
  { icon: "🔔", label: "Notifications", shortcut: "" },
  { icon: "⚙️", label: "Settings", shortcut: "" },
];
export { friends, wishlistGames, menuItems, user };
