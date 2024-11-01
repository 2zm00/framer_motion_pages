// pages/basic-animation/page.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BasicAnimation() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">기본 애니메이션</h1>
        
        <div className="grid gap-8">
          {/* 페이드 인 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-4 bg-blue-100 rounded"
          >
            <h2 className="font-bold mb-2">페이드 인</h2>
            <p>opacity를 0에서 1로 변경하는 기본적인 페이드 인 애니메이션</p>
          </motion.div>

          {/* 슬라이드 */}
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring" }}
            className="p-4 bg-green-100 rounded"
          >
            <h2 className="font-bold mb-2">슬라이드</h2>
            <p>왼쪽에서 오른쪽으로 슬라이드되는 애니메이션</p>
          </motion.div>

          {/* 스케일 */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="p-4 bg-purple-100 rounded"
          >
            <h2 className="font-bold mb-2">스케일</h2>
            <p>크기가 0에서 1로 커지는 애니메이션</p>
          </motion.div>
		
		<div>
			<Link href="/">HOME</Link>
		</div>
        </div>
      </div>
    </div>
  );
}