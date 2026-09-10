"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Languages, MessageSquare, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { t, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const pathname = usePathname();

  const navLinks = [
    { path: "/services", label: "nav-services" },
    { path: "/contact", label: "nav-book" },
    { path: "/about", label: "nav-creed" },
    { path: "/#process", label: "nav-process" },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <header className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-premium rounded-2xl md:rounded-3xl transition-all duration-300 relative z-50">
        <div className="px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-12 h-12 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M12 6L7 15H17L12 6Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M10 12L12 14L15.5 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none font-[family-name:var(--font-geist-mono)]">
                {t("brand-title")}
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 uppercase tracking-wider mt-1 font-[family-name:var(--font-geist-mono)]">
                {t("brand-sub")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Animated Slider */}
          <nav 
            className="hidden md:flex items-center space-x-2"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {navLinks.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onMouseEnter={() => setHoveredPath(item.path)}
                  className={`relative px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                    isActive ? "text-emerald-700" : "text-slate-600 hover:text-emerald-700"
                  }`}
                >
                  <span className="relative z-10">{t(item.label)}</span>
                  {item.path === hoveredPath && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-emerald-50 rounded-full z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {isActive && !hoveredPath && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-emerald-500 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={toggleLanguage} className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider px-3 py-2.5 rounded-xl transition-all duration-300">
              <Languages className="w-4 h-4" />
              <span>{t("toggle-lang-label")}</span>
            </button>
            
            <a href="https://wa.me/917217646673" target="_blank" rel="noopener noreferrer" 
               className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all duration-300 shadow-md shadow-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/40 hover:-translate-y-0.5">
              <MessageSquare className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
              <span>{t("nav-cta")}</span>
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu" className="md:hidden p-2.5 rounded-xl text-slate-600 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 transition-colors">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 w-full bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-2xl rounded-2xl px-5 py-6 space-y-4 flex flex-col relative z-40"
          >
            {navLinks.map((item) => (
              <Link 
                key={item.path}
                href={item.path} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-base font-bold text-slate-700 hover:text-emerald-600 px-2 py-2 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                {t(item.label)}
              </Link>
            ))}
            
            <button onClick={() => {toggleLanguage(); setIsMobileMenuOpen(false);}} className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm py-3.5 rounded-xl transition-all">
              <Languages className="w-5 h-5" />
              <span>{t("toggle-lang-label")}</span>
            </button>

            <hr className="border-slate-100" />
            <a href="https://wa.me/917217646673" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm py-4 rounded-xl transition-all shadow-md shadow-emerald-500/30">
              <MessageSquare className="w-5 h-5" />
              <span>{t("nav-cta")}</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
