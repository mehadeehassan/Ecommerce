import React from "react";

const customers = [
  {
    id: 1,
    name: "Mehedi Hasan",
    email: "mehedi@gmail.com",
    orders: 12,
    totalSpent: "$1,240.00",
    status: "Active",
    joined: "Jan 14, 2026",
  },
  {
    id: 2,
    name: "Tuli",
    email: "tuli@gmail.com",
    orders: 8,
    totalSpent: "$640.50",
    status: "Active",
    joined: "Feb 02, 2026",
  },
  {
    id: 3,
    name: "Atika",
    email: "atika@gmail.com",
    orders: 0,
    totalSpent: "$0.00",
    status: "Inactive",
    joined: "Mar 20, 2026",
  },
  {
    id: 4,
    name: "Mehedi Ahnaf",
    email: "mehedi212@gmail.com",
    orders: 5,
    totalSpent: "$312.00",
    status: "Active",
    joined: "Apr 11, 2026",
  },
  {
    id: 5,
    name: "Sadia Islam",
    email: "sadia@gmail.com",
    orders: 21,
    totalSpent: "$2,890.00",
    status: "Active",
    joined: "May 03, 2026",
  },
  {
    id: 6,
    name: "Rafiq Ahmed",
    email: "rafiq@gmail.com",
    orders: 1,
    totalSpent: "$45.00",
    status: "Inactive",
    joined: "Jun 18, 2026",
  },
];

const getInitials = (name) => {
  const parts = name.trim().split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (
    parts[0].charAt(0).toUpperCase() +
    parts[parts.length - 1].charAt(0).toUpperCase()
  );
};

const getStatusStyle = (status) =>
  status === "Active"
    ? "bg-green-50 text-green-600"
    : "bg-red-50 text-red-500";

const avatarColors = [
  "bg-orange-400",
  "bg-blue-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-teal-400",
];
const getAvatarColor = (id) => avatarColors[id % avatarColors.length];

const StatCard = ({ label, value, icon, accent }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-3">
    <div
      className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm shrink-0 ${accent.bg}`}
    >
      <span className={accent.text}>{icon}</span>
    </div>
    <div>
      <p className="text-[10px] text-gray-400 uppercase font-medium tracking-wide">
        {label}
      </p>
      <p className="text-lg font-bold text-gray-800 mt-0.5">{value}</p>
    </div>
  </div>
);

const Customers = () => {
  const totalCustomers = customers.length;
  const activeCustomers = customers.filter((c) => c.status === "Active").length;
  const totalOrders = customers.reduce((sum, c) => sum + c.orders, 0);
  const totalRevenue = customers.reduce(
    (sum, c) => sum + parseFloat(c.totalSpent.replace(/[$,]/g, "")),
    0,
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total customers"
          value={totalCustomers}
          icon="◎"
          accent={{ bg: "bg-orange-50", text: "text-orange-500" }}
        />
        <StatCard
          label="Active customers"
          value={activeCustomers}
          icon="✓"
          accent={{ bg: "bg-green-50", text: "text-green-500" }}
        />
        <StatCard
          label="Total orders"
          value={totalOrders}
          icon="▤"
          accent={{ bg: "bg-blue-50", text: "text-blue-500" }}
        />
        <StatCard
          label="Total revenue"
          value={`$${totalRevenue.toFixed(2)}`}
          icon="$"
          accent={{ bg: "bg-purple-50", text: "text-purple-500" }}
        />
      </div>

      {/* Customers table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-800 text-sm">Customer list</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search customers..."
              className="text-xs border border-gray-200 rounded-lg pl-3 pr-3 py-1.5 outline-none focus:border-orange-400 w-48 text-gray-600 placeholder:text-gray-300"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/70 text-[10px] text-gray-400 uppercase font-medium tracking-wide">
                <th className="px-4 py-2.5">Customer</th>
                <th className="px-4 py-2.5">Email</th>
                <th className="px-4 py-2.5 text-center">Orders</th>
                <th className="px-4 py-2.5 text-center">Total spent</th>
                <th className="px-4 py-2.5 text-center">Status</th>
                <th className="px-4 py-2.5">Joined</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-semibold shrink-0 ${getAvatarColor(
                          customer.id,
                        )}`}
                      >
                        {getInitials(customer.name)}
                      </div>
                      <span className="text-xs font-medium text-gray-700">
                        {customer.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-2.5 text-xs text-gray-400">
                    {customer.email}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-gray-500 text-center">
                    {customer.orders}
                  </td>
                  <td className="px-4 py-2.5 text-xs font-medium text-gray-700 text-center">
                    {customer.totalSpent}
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${getStatusStyle(
                        customer.status,
                      )}`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-xs text-gray-400">
                    {customer.joined}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;