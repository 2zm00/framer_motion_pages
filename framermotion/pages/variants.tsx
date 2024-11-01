// pages/variants/page.tsx
"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Variants() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Variants 예제</h1>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-4"
        >
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              variants={itemVariants}
              className="p-4 bg-indigo-100 rounded"
            >
              <h2 className="font-bold mb-2">아이템 {item}</h2>
              <p>순차적으로 나타나는 애니메이션 아이템</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}