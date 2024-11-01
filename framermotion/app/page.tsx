// app/page.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 col-span-5 align-middle items-center m-auto">
          Framer Motion 데모
          <div>
          <Link href="/basic-animation" className="col-auto">basic-animation</Link>
          </div>
          <div>
          <Link href="/gestures" className="">gestures</Link>
          </div>
          <div>
          <Link href="/scroll-animation" className="">scroll-animation</Link>
          </div>
          <div>
          <Link href="/variants" className="">ariants</Link>
          </div>
        </h1>
        <p className="text-xl mb-4">
          각 페이지에서 다양한 애니메이션 예제를 확인해보세요!
        </p>
      </motion.div>
    </div>
  );
}