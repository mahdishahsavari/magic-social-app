import React from "react";
import { Metadata } from "next";
import Sidebar from "@/components/dashboard/Sidebar";

const metadata: Metadata = {
  title: "Magic Social App",
};

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-gray-50 h-screen">
      <div className="fixed hidden md:block md:w-64">
        <Sidebar />
      </div>
      <div className="bg-gray-50 h-fit md:ml-64 pb-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;
