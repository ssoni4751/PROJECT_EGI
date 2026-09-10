"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative mt-20 sm:mt-32 border-t border-slate-200/60 bg-white/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="md:col-span-5 lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-slate-200/50 overflow-hidden border border-slate-100">
                <img src="/logo.png" alt="Anshu Computer Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black text-slate-900 tracking-tight leading-none font-[family-name:var(--font-geist-mono)]">
                  {t("brand-title")}
                </span>
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mt-1 font-[family-name:var(--font-geist-mono)]">
                  {t("brand-sub")}
                </span>
              </div>
            </Link>
            <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-sm">
              {t("footer-desc")}
            </p>
          </div>

          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
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
            
            <div className="col-span-2 sm:col-span-1 space-y-5">
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
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
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
