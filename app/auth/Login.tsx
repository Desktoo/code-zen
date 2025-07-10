"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function LoginPage({ switchToSignup }: {switchToSignup: () => void} ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-background px-4">
      <div className="flex flex-col md:flex-row items-center bg-background rounded-2xl glow-shadow w-full max-w-4xl h-[75vh]">
        {/* Login Form Section */}
        <div className="w-1/2 p-6">
          <h1 className="text-xl font-semibold pb-2">Login</h1>
          <p className="text-sm mb-6 border-b pb-4 text-white/40">
            {" "}
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
                <span className="text-emerald-600 hover:underline cursor-pointer" onClick={switchToSignup}>Sign up</span> for free
              </p>
            </div>
          </form>
        </div>

        {/* Welcome Text Section */}
        <div className="flex flex-col text-center items-center justify-center w-1/2 h-full bg-emerald-100/5 md:text-left gap-4">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center">
            Welcome back to <span className="text-emerald-500">CodeZen</span>
          </h3>
          <p className="text-gray-400 text-center text-sm w-xs">
            Continue your journey and pick up right where you left off.
          </p>
        </div>
      </div>
    </div>
  );
}
