"use client";

import { useEffect, useRef } from "react";
import TypeIt from "typeit";
import Image from "next/image";
import codeCarbon from "@/assets/codeCarbon.svg";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/features/featureCard";
import { featureData } from "@/constants/data/featureData";
import { motion } from "framer-motion";
import PricingCard from "@/components/features/pricingCard";
import { pricingData } from "@/constants/data/pricingData";

export default function Home() {
  const typeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!typeRef.current) return;

    const instance = new TypeIt(typeRef.current, {
      strings: ["CodeFast", "CodePro"],
      speed: 300,
      breakLines: false,
      loop: true,
      deleteSpeed: 50,
      nextStringDelay: 1500,
    });

    instance.go();

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-white  p-4">
      {/* Hero Section */}
      <motion.section
        className="py-24 text-center flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div
          className="max-w-4xl px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">
            Build with{" "}
            <span ref={typeRef} className="text-emerald-400">
              CodeZen
            </span>
          </h1>
          <p className="text-md">
            Start your journey to coding excellence with CodeZen — a modern
            platform built for learners to practice coding, track progress, and
            grow with real-world projects.
          </p>
          <div className="mt-6">
            <Button
              variant="primary"
              className="hover:bg-emerald-500/80 hover:text-white"
            >
              Get Started
            </Button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="mt-12 w-full flex justify-center px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Image
            src={codeCarbon}
            alt="Code Snippet"
            className="glow-shadow max-w-full md:max-w-3xl h-auto"
            width={0}
            height={0}
            sizes="100vw"
          />
        </motion.div>
      </motion.section>

      {/* Why CodeZen Section */}
      <motion.section
        className="mt-5 text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-semibold mb-4">Why CodeZen?</h2>
        <p className="max-w-2xl mx-auto text-md text-gray-300">
          CodeZen is designed to accelerate your growth as a developer — whether
          you're just starting out or looking to sharpen your skills with
          real-world challenges.
        </p>

        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Princing section */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-4xl font-semibold mb-4">
          Simple, Developer-Friendly Pricing
        </h2>
        <p className="max-w-2xl mx-auto text-md text-gray-300 mb-20">
          Start for free. Upgrade only when you're ready to unlock more power.
        </p>

        <div className="flex items-center justify-center mb-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3  lg:w-5xl place-items-center">
            {pricingData.map((plan, index) => (
              <PricingCard
                key={plan.title}
                {...plan}
                index={index}
                isHighlighted={plan.title === "Pro"}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
