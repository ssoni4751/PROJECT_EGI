"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Languages, MessageSquare, Menu, X } from "lucide-react";

export default function Navbar() {
  const { t, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <header className="max-w-7xl mx-auto glass-panel border border-white/40 shadow-premium rounded-2xl md:rounded-3xl transition-all duration-300">
        <div className="px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-12 h-12 bg-gradient-to-tr from-slate-950 to-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-950/20 group-hover:scale-105 transition-transform duration-300 border border-slate-800">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>
                <path d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2Z" stroke="url(#logoGradient)" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M12 6L7 15H17L12 6Z" fill="url(#logoGradient)" fillOpacity="0.15" stroke="url(#logoGradient)" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M10 12L12 14L15.5 10" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
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

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/services" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors py-1.5">{t("nav-services")}</Link>
            <Link href="/contact" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors py-1.5">{t("nav-book")}</Link>
            <Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors py-1.5">{t("nav-creed")}</Link>
            <Link href="/#process" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors py-1.5">{t("nav-process")}</Link>
            <Link href="/contact" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors py-1.5">{t("nav-contact")}</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={toggleLanguage} className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 text-slate-800 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all duration-300">
              <Languages className="w-4 h-4" />
              <span>{t("toggle-lang-label")}</span>
            </button>
            
            <a href="https://wa.me/917217646673" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-300 shadow-md shadow-glow-emerald">
              <MessageSquare className="w-4.5 h-4.5" />
              <span>{t("nav-cta")}</span>
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu" className="md:hidden p-2.5 rounded-xl text-slate-600 hover:text-slate-950 hover:bg-slate-100/50 transition-colors">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 w-full bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-2xl rounded-2xl px-5 py-6 space-y-4 flex flex-col">
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-600 hover:text-slate-950 px-2">{t("nav-services")}</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-600 hover:text-slate-950 px-2">{t("nav-book")}</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-600 hover:text-slate-950 px-2">{t("nav-creed")}</Link>
          <Link href="/#process" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-600 hover:text-slate-950 px-2">{t("nav-process")}</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-600 hover:text-slate-950 px-2">{t("nav-contact")}</Link>
          
          <button onClick={() => {toggleLanguage(); setIsMobileMenuOpen(false);}} className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-sm py-3.5 rounded-xl transition-all">
            <Languages className="w-5 h-5" />
            <span>{t("toggle-lang-label")}</span>
          </button>

          <hr className="border-slate-100" />
          <a href="https://wa.me/917217646673" target="_blank" rel="noopener noreferrer" 
             className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-4 rounded-xl transition-all shadow-md">
            <MessageSquare className="w-5 h-5" />
            <span>{t("nav-cta")}</span>
          </a>
        </div>
      )}
    </div>
  );
}
