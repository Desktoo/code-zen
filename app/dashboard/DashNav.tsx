"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import logo from "@/assets/codeZenLogo.svg";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronDown, User } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Explore", href: "/dashboard/explore" },
  { name: "Problems", href: "/dashboard/problems" },
  { name: "Contest", href: "/dashboard/contest" },
  { name: "Certify", href: "/dashboard/certify" },
];

export default function DashNav() {

  const [tab, setTab] = useState<"Explore" | "Problems" | "Contest" | "Certify">("Explore");

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 flex flex-wrap w-full items-center justify-between px-4 py-2 bg-background/80 backdrop-blur-md border border-gray-100/10 rounded-2xl shadow-md"
    >
      <div className="flex  items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 border-r-2 pr-5 border-white/20 text-white font-bold text-xl"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Image src={logo} alt="CodeZen Logo" width={30} />
          <span className="text-emerald-500">
            Code<span className="font-light">Zen</span>
          </span>
        </motion.div>

        {/* Links */}
        <motion.div
          className="hidden md:flex ml-6 gap-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {navLinks.map(({ name, href }) => (
            <motion.div
              key={name}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href={href}
                onClick={() => setTab(name as "Explore" | "Problems" | "Contest" | "Certify")}
                className={`${name === tab ? "bg-emerald-500/20 text-white" : "text-white/50"} px-4 py-2 text-sm  hover:text-white hover:bg-emerald-500/20  rounded-md transition duration-200`}
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <div className="flex items-center rounded-full bg-white/20 p-1.5  text-sm text-white/70 hover:bg-white/40 transition duration-200">
          <User size={20} />
        </div>
      </div>
    </motion.nav>
  );
}
