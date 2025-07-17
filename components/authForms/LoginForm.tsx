"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function LoginForm({onClick}: {onClick: () => void}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
      className="w-1/2 p-6"
    >
      <h1 className="text-xl font-semibold pb-2">Login</h1>
      <p className="text-sm mb-6 border-b pb-4 text-white/40">
        Enter your credentials to access your account
      </p>
      <form className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="bg-gray-900 text-white border-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-white">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            className="bg-gray-900 text-white border-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-3 items-center">
          <Button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-5"
          >
            Login
          </Button>
          <p className="text-sm text-white/60">
            Don’t have an account?{" "}
            <span
              className="text-emerald-600 hover:underline cursor-pointer"
              onClick={onClick}
            >
              Sign up
            </span>{" "}
            for free
          </p>
        </div>
      </form>
    </motion.div>
  );
}
