import React from "react";
import AdminLayout from "../../Hoc/AdminLayout";

const Dashboard = (props) => {
  return (
    <AdminLayout title="DashBoard">
      <div className="user_dashboard">
        <div>This is your Dashboard.</div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
