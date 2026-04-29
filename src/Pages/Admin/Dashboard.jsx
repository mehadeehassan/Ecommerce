import React from "react";
import AdminMainCard from "../../components/AdminPanelCard/DashboardCard";

const Dashboard = () => {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* dashboard Card  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {AdminMainCard({
          adminSection: {
            title: "Today's Revenue",
            number: "$1,240",
            percentage: "+15% from yesterday",
            icon: "💰",
          },
        })}
        {AdminMainCard({
          adminSection: {
            title: "New Customers",
            number: "42",
            percentage: "+10% from yesterday",
            icon: "👤",
          },
        })}
        {AdminMainCard({
          adminSection: {
            title: "Pending Orders",
            number: "18",
            percentage: "-2% from yesterday",
            icon: "📦",
          },
        })}
        {AdminMainCard({
          adminSection: {
            title: "Total Products",
            number: "1,450",
            percentage: "0% from yesterday",
            icon: "🛒",
          },
        })}
      </div>
    </div>
  );
};

export default Dashboard;
