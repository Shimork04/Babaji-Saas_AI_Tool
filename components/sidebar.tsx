"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat, Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Settings2Icon, SettingsIcon, Video } from "lucide-react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const poppins = Poppins({
    weight: "600",
    subsets: ["latin"],
  });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Chat",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    href: "/image",
    color: "text-sky-500",
  },
  {
    label: "Video Generator",
    icon: Video,
    href: "/video",
    color: "text-sky-500",
  },
  {
    label: "Code Generator",
    icon: Code,
    href: "/code",
    color: "text-green-500",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    href: "/settings",
    color: "text-grey-500",
  },
  
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-10 h-10 mr-4">
            <Image fill src="/Logo.png" alt="Logo" />
          </div>
          <h1 className={cn("text-2xl font-weight:900", poppins.className)}>
            Babaji
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
