// pages/gestures/page.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Gestures() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">제스처 애니메이션</h1>
        
        <div className="grid gap-8">
          {/* 호버 효과 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 bg-yellow-100 rounded cursor-pointer"
          >
            <h2 className="font-bold mb-2">호버 & 탭</h2>
            <p>마우스를 올리거나 클릭할 때 반응하는 애니메이션</p>
          </motion.div>

          {/* 드래그 */}
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            className="p-4 bg-red-100 rounded cursor-grab w-48"
          >
            <h2 className="font-bold mb-2">드래그</h2>
            <p>이 요소를 드래그해보세요!</p>
          </motion.div>
		  <div>
			<Link href="/"> HOME </Link>
		  </div>
        </div>
      </div>
    </div>
  );
}