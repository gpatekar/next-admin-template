"use client";
import { Sidebar } from "flowbite-react";

export default function SideNav() {
  return (
    <Sidebar
      aria-label="Default sidebar example"
      className="[&>div]:bg-white [&>div]:p-0 border-r border-gray-200 h-screen"
    >
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#">
          <h1 className="text-xl">Admin template</h1>
        </Sidebar.Item>
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" active>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item href="#" label="3">
          Inbox
        </Sidebar.Item>
        <Sidebar.Item href="#">Users</Sidebar.Item>
        <Sidebar.Item href="#">Products</Sidebar.Item>
        <Sidebar.Item href="#">Sign In</Sidebar.Item>
        <Sidebar.Item href="#">Sign Up</Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar>
  );
}
