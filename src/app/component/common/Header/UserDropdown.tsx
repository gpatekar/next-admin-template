"use client";
import { Avatar, Dropdown } from "flowbite-react";

export default function UserDropdown() {
  return (
    <div>
      <Dropdown
        label="Dropdown button" 
        dismissOnClick={false}  renderTrigger={() => <span><Avatar rounded className="cursor-pointer" /></span>} 
      >
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
     </div>
  );
}
