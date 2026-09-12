"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, Twitter, Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative mt-20 sm:mt-32 border-t border-slate-200/60 bg-white/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 max-w-4xl mx-auto">
          <div className="space-y-5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">{t("footer-access-title")}</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm font-semibold text-slate-500 hover:text-emerald-600 transition-colors inline-flex items-center gap-1 group">Home <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/services" className="text-sm font-semibold text-slate-500 hover:text-emerald-600 transition-colors inline-flex items-center gap-1 group">{t("nav-services")} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/about" className="text-sm font-semibold text-slate-500 hover:text-emerald-600 transition-colors inline-flex items-center gap-1 group">{t("nav-creed")} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>
          
          <div className="space-y-5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">{t("booking-badge")}</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm font-semibold text-slate-500 hover:text-emerald-600 transition-colors inline-flex items-center gap-1 group">{t("nav-book")} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/contact" className="text-sm font-semibold text-slate-500 hover:text-emerald-600 transition-colors inline-flex items-center gap-1 group">{t("nav-contact")} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">{t("nav-legal")}</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm font-semibold text-slate-500 hover:text-emerald-600 transition-colors inline-flex items-center gap-1 group">{t("nav-privacy")} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/terms" className="text-sm font-semibold text-slate-500 hover:text-emerald-600 transition-colors inline-flex items-center gap-1 group">{t("nav-terms")} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/refund" className="text-sm font-semibold text-slate-500 hover:text-emerald-600 transition-colors inline-flex items-center gap-1 group">{t("nav-refund")} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/disclaimer" className="text-sm font-semibold text-slate-500 hover:text-emerald-600 transition-colors inline-flex items-center gap-1 group">{t("nav-disclaimer")} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>
          
          <div className="space-y-5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">{t("footer-loc-badge")}</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/917217646673" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors inline-flex items-center gap-2">
                  {t("nav-cta")}
                </a>
              </li>
              <li>
                <span className="text-xs font-semibold text-slate-500 block leading-relaxed max-w-[200px]">
                  Anshu Computer and Tax Consultancy<br/>
                  Kaushal Market, Rath Road<br/>
                  Orai, UP - 285001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 md:mt-16 flex justify-center gap-6">
          <a href="https://twitter.com/ssoni0007" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1DA1F2] hover:text-white hover:scale-110 shadow-sm hover:shadow-md transition-all duration-300">
             <Twitter className="w-4 h-4" fill="currentColor" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61585849024721" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1877F2] hover:text-white hover:scale-110 shadow-sm hover:shadow-md transition-all duration-300">
             <Facebook className="w-4 h-4" fill="currentColor" />
          </a>
          <a href="https://instagram.com/ssoni47512023" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:scale-110 shadow-sm hover:shadow-md transition-all duration-300">
             <Instagram className="w-4 h-4" />
          </a>
          <a href="mailto:anshucomputerorai@gmail.com" aria-label="Email" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white hover:scale-110 shadow-sm hover:shadow-md transition-all duration-300">
             <Mail className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-semibold text-slate-500 text-center sm:text-left">
            {t("footer-copyright")}
          </p>
          <p className="text-xs font-bold text-slate-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <span dangerouslySetInnerHTML={{ __html: t("footer-national-badge") }}></span>
            <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
            <span dangerouslySetInnerHTML={{ __html: t("footer-loc-badge") }}></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
