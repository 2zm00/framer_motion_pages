// components/Navbar.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-lg z-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Framer Motion Demo
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex space-x-4">
            <Link href="/basic-animation">Basic Animation</Link>
            <Link href="/gestures">Gestures</Link>
            <Link href="/scroll-animation">Scroll Animation</Link>
            <Link href="/variants">Variants</Link>
          </div>

          {/* 모바일 토글 버튼 */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>

        {/* 모바일 메뉴 */}
        <motion.div
          className="md:hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0
          }}
        >
          <div className="py-2">
            <Link href="/basic-animation" className="block py-2">Basic Animation</Link>
            <Link href="/gestures" className="block py-2">Gestures</Link>
            <Link href="/scroll-animation" className="block py-2">Scroll Animation</Link>
            <Link href="/variants" className="block py-2">Variants</Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}