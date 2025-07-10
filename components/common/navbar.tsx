"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import logo from "@/assets/codeZenLogo.svg";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Products", href: "/products" },
  { name: "Solutions", href: "/solutions" },
  { name: "Resources", href: "/resources" },
  { name: "Pricing", href: "/pricing" },
  { name: "Developers", href: "/developers" },
];

export default function Navbar() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 flex flex-wrap  items-center justify-between px-4 py-2 bg-background/80 backdrop-blur-md border border-gray-100/10 rounded-2xl shadow-md"
    >
      {/* Logo */}
      <motion.div
        className="flex items-center gap-2 text-white font-bold text-xl"
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
        className="hidden md:flex gap-3"
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
              className="px-4 py-2 text-sm text-white/50 hover:text-white hover:bg-emerald-500/20 rounded-md transition duration-200"
            >
              {name}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex items-center gap-3 mt-0"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button
          variant="dashed"
          className="bg-emerald-500/30 hover:bg-emerald-600 text-white transition"
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          variant="dashed"
          className="text-white border-white/20 hover:bg-white/10 transition"
          onClick={handleSignup}
        >
          SignUp
        </Button>
      </motion.div>
    </motion.nav>
  );
}
