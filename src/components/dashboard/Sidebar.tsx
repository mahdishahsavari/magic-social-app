"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CreditCard, History, WandSparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const menuList = [
  {
    name: "Magic Tools",
    icon: WandSparkles,
    path: "/dashboard",
  },
  {
    name: "Output History",
    icon: History,
    path: "/dashboard/history",
  },
  {
    name: "Upgrade",
    icon: CreditCard,
    path: "/dashboard/upgrade",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="p-5 bg-white h-[800px] flex flex-col">
      <Link href="/" className="flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-xl hover:scale-110 hover:transition-all hover:border hover:border-teal-500"
        />
      </Link>
      <div className="mt-10 h-max flex flex-col justify-between">
        {menuList.map((menu, index) => (
          <Link
            href={menu.path}
            key={index}
            className={cn(
              "flex items-center gap-2 mb-2 p-3 hover:bg-gradient-to-br hover:from-pink-600 hover:via-purple-500 hover:to-blue-600 hover:shadow-2xl hover:scale-110 hover:transition-all hover:duration-300 hover:text-zinc-50 cursor-pointer rounded-xl",
              pathname === menu.path &&
                "bg-gradient-to-br from-pink-600 via-purple-500 to-blue-600 text-zinc-50 shadow-2xl rounded-xl scale-110"
            )}
          >
            <menu.icon className="h-4 w-4"></menu.icon>
            <h2 className="text-base">{menu.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
