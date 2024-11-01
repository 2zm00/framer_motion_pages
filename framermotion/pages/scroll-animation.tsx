// pages/scroll-animation/page.tsx
"use client";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";

export default function ScrollAnimation() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen pt-20 px-4 h-[1000px] ">
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "blue",
          transformOrigin: "0%"
        }}
      />

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">스크롤 애니메이션</h1>
        
        {/* 스크롤 트리거 애니메이션 */}
        {[1, 2, 3, 4, 5].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-96 mb-8 p-4 bg-gray-100 rounded"
          >
            <h2 className="font-bold mb-2">스크롤 섹션 {item}</h2>
            <p>스크롤하면서 이 섹션이 나타나는 것을 확인하세요.</p>
          </motion.div>
		  
        ))}
		
      </div>
	  <div>
			<Link href="/"> HOME </Link>
		  </div>
    </div>
	
  );
}