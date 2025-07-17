"use client";

import { motion } from "framer-motion";
import { CardDescription, CardTitle } from "../ui/card";
import { useRouter } from "next/navigation";

type ProblemCardProps = {
  id: string;
  title: string;
  description: string;
}

export default function ProblemCard({ id, title, description }: ProblemCardProps) {

  const router = useRouter();

  const handleClick = () => {
    router.push(`/dashboard/problems/${id}/`)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03, transition: {duration: 0.2 }  }}
      className="w-full rounded-2xl border border-white/20 h-44"
    >
      <div className="p-4 flex flex-col h-full justify-between">
        <div>
          <CardTitle className="mb-1">
            {title}
          </CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <button
            onClick={handleClick}
            className="px-3 py-2 w-full bg-emerald-700 hover:bg-emerald-500/40 transition duration-200 text-white rounded-md text-sm font-semibold"
          >
            Solve
          </button>
        </div>
      </div>
    </motion.div>
  );
}
