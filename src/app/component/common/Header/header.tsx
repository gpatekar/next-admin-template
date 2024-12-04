"use client"

import UserDropdown from "./UserDropdown"
export default function Header() {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 h-[3.8rem] px-10">
        <h1 className="text-lg">Dashboard</h1>
        <UserDropdown />
    </div>
  )
}
