"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Login from "./Login";
import Signup from "./Signup";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <AnimatePresence mode="wait" initial={false}>
        {mode === "login" ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
          >
            <Login switchToSignup={() => setMode("signup")} />
          </motion.div>
        ) : (
          <motion.div
            key="signup"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <Signup switchToLogin={() => setMode("login")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

