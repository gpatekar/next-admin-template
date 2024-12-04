"use client";
import { Button } from "flowbite-react";

import { Header, SideNav } from "../component";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex"> 
        <SideNav />
      <div className="flex-grow">
        <Header />
        <div className="py-5 px-10">{children}</div>
        
      </div>
    </div>
  );
}
