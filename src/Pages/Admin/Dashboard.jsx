import React from "react";
import AdminMainCard from "../../components/AdminPanelCard/DashboardCard";

const weeklySales = [
  { day: "Sat", value: 45 },
  { day: "Sun", value: 60 },
  { day: "Mon", value: 38 },
  { day: "Tue", value: 75 },
  { day: "Wed", value: 52 },
  { day: "Thu", value: 90 },
  { day: "Fri", value: 68 },
];

const recentOrders = [
  {
    id: "#ORD-7841",
    customer: "Mehedi Hasan",
    product: "Wireless Headphones",
    amount: "$129.00",
    status: "Delivered",
    date: "Jun 26, 2026",
  },
  {
    id: "#ORD-7840",
    customer: "Tuli",
    product: "Smart Watch",
    amount: "$89.50",
    status: "Processing",
    date: "Jun 26, 2026",
  },
  {
    id: "#ORD-7839",
    customer: "Atika",
    product: "Bluetooth Speaker",
    amount: "$45.00",
    status: "Pending",
    date: "Jun 25, 2026",
  },
  {
    id: "#ORD-7838",
    customer: "Mehedi Ahnaf",
    product: "Gaming Mouse",
    amount: "$32.00",
    status: "Cancelled",
    date: "Jun 25, 2026",
  },
  {
    id: "#ORD-7837",
    customer: "Aleena Islam",
    product: "Phone Case",
    amount: "$14.00",
    status: "Delivered",
    date: "Jun 24, 2026",
  },
];

const topProducts = [
  { name: "Wireless Headphones", sold: 320, revenue: "$12,800", icon: "🎧" },
  { name: "Smart Watch", sold: 210, revenue: "$9,450", icon: "⌚" },
  { name: "Bluetooth Speaker", sold: 180, revenue: "$5,940", icon: "🔊" },
  { name: "Gaming Mouse", sold: 150, revenue: "$3,600", icon: "🖱️" },
];

const orderStatus = [
  { label: "Delivered", value: 68, color: "bg-green-500" },
  { label: "Processing", value: 20, color: "bg-blue-500" },
  { label: "Pending", value: 8, color: "bg-orange-400" },
  { label: "Cancelled", value: 4, color: "bg-red-500" },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Delivered":
      return "bg-green-50 text-green-600";
    case "Processing":
      return "bg-blue-50 text-blue-600";
    case "Pending":
      return "bg-orange-50 text-orange-600";
    case "Cancelled":
      return "bg-red-50 text-red-500";
    default:
      return "bg-gray-50 text-gray-500";
  }
};

const Dashboard = () => {
  const maxSales = Math.max(...weeklySales.map((d) => d.value));

  return (
    <div>
      <div className="space-y-4 mb-4">
        {/* Top stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AdminMainCard({
            adminSection: {
              title: "Today's Revenue",
              number: "$1,240",
              percentage: "+15% from yesterday",
              textColor: "text-green-500",
              icon: "💰",
              borderColor: "border-green-500",
            },
          })}
          {AdminMainCard({
            adminSection: {
              title: "New Customers",
              number: "42",
              percentage: "+10% from yesterday",
              textColor: "text-blue-500",
              icon: "👤",
              borderColor: "border-blue-500",
            },
          })}
          {AdminMainCard({
            adminSection: {
              title: "Pending Orders",
              number: "18",
              percentage: "-2% from yesterday",
              textColor: "text-red-500",
              icon: "📦",
              borderColor: "border-red-500",
            },
          })}
          {AdminMainCard({
            adminSection: {
              title: "Total Products",
              number: "1,450",
              percentage: "0% from yesterday",
              textColor: "text-purple-500",
              icon: "🛒",
              borderColor: "border-purple-500",
            },
          })}
        </div>

        {/* Sales chart + Order status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-800 text-sm">
                Weekly sales overview
              </h2>
              <span className="text-[10px] text-gray-400">Last 7 days</span>
            </div>
            <div className="flex items-end justify-between gap-2 h-36">
              {weeklySales.map((d) => (
                <div
                  key={d.day}
                  className="flex flex-col items-center gap-1.5 flex-1"
                >
                  <div className="w-full flex items-end justify-center h-28">
                    <div
                      style={{ height: `${(d.value / maxSales) * 100}%` }}
                      className="w-full max-w-8 bg-orange-400 hover:bg-orange-500 rounded-t-md transition-all duration-300"
                    />
                  </div>
                  <span className="text-[10px] text-gray-400">{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h2 className="font-bold text-gray-800 text-sm mb-4">
              Order status
            </h2>
            <div className="space-y-3">
              {orderStatus.map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">{s.label}</span>
                    <span className="font-medium text-gray-700">
                      {s.value}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div
                      style={{ width: `${s.value}%` }}
                      className={`h-1.5 rounded-full ${s.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders + Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-4 overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-800 text-sm">
                Recent orders
              </h2>
              <button className="text-[11px] text-orange-500 font-medium hover:underline">
                View all
              </button>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] text-gray-400 uppercase border-b border-gray-100 tracking-wide">
                  <th className="py-2 pr-4">Order ID</th>
                  <th className="py-2 pr-4">Customer</th>
                  <th className="py-2 pr-4">Product</th>
                  <th className="py-2 pr-4">Amount</th>
                  <th className="py-2 pr-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="py-2.5 pr-4 text-xs font-medium text-gray-600">
                      {order.id}
                    </td>
                    <td className="py-2.5 pr-4 text-xs text-gray-500">
                      {order.customer}
                    </td>
                    <td className="py-2.5 pr-4 text-xs text-gray-400">
                      {order.product}
                    </td>
                    <td className="py-2.5 pr-4 text-xs font-medium text-gray-700">
                      {order.amount}
                    </td>
                    <td className="py-2.5 pr-4">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${getStatusStyle(
                          order.status,
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h2 className="font-bold text-gray-800 text-sm mb-4">
              Top selling products
            </h2>
            <div className="space-y-3">
              {topProducts.map((product) => (
                <div
                  key={product.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center text-sm">
                      {product.icon}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-700">
                        {product.name}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {product.sold} sold
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-gray-700">
                    {product.revenue}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;