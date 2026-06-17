import React from "react";
import AdminMainCard from "../../components/AdminPanelCard/DashboardCard";

const Dashboard = () => {
  return (
    <div>
      <div className=" space-y-8 mb-8">
        {/* dashboard Card  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </div>
  );
};

export default Dashboard;
