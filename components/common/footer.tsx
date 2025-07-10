"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-background border-t border-white/10 text-white py-10 px-6 md:px-12 mt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-emerald-400">CodeZen</h2>
          <p className="text-sm text-white/60 mt-2">
            CodeZen is your platform for coding excellence — learn, build, and grow with real-world challenges.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/solutions" className="hover:text-white">Solutions</a></li>
            <li><a href="/resources" className="hover:text-white">Resources</a></li>
            <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              Email:{" "}
              <a href="mailto:support@codezen.dev" className="hover:text-white">
                support@codezen.dev
              </a>
            </li>
            <li>
              Twitter: <a href="#" className="hover:text-white">@CodeZen</a>
            </li>
            <li>Location: Remote-first 🌍</li>
          </ul>
        </motion.div>
      </div>
    </motion.footer>
  );
}
