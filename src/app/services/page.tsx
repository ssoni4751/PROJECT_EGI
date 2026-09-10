"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FileText, Briefcase, ScanLine } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-3 block">{t("services-badge")}</span>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-[family-name:var(--font-geist-mono)]">{t("services-title")}</h1>
        <p className="text-slate-600 text-lg font-medium">{t("services-desc")}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-200 shadow-premium flex flex-col h-full">
          <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
            <Briefcase className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">{t("card1-badge")}</span>
          <h2 className="text-2xl font-black text-slate-900 mb-4 font-[family-name:var(--font-geist-mono)]">{t("card1-title")}</h2>
          <p className="text-slate-600 font-medium mb-8 leading-relaxed">{t("card1-desc")}</p>
          <div className="space-y-6 flex-grow">
            <div>
              <h4 className="font-bold text-slate-900 mb-1">{t("card1-sub1-title")}</h4>
              <p className="text-sm text-slate-500">{t("card1-sub1-desc")}</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">{t("card1-sub2-title")}</h4>
              <p className="text-sm text-slate-500">{t("card1-sub2-desc")}</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">{t("card1-sub3-title")}</h4>
              <p className="text-sm text-slate-500">{t("card1-sub3-desc")}</p>
            </div>
          </div>
          <Link href="/contact" className="mt-8 w-full block text-center bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm uppercase tracking-wider px-6 py-4 rounded-xl transition-all shadow-md">
            {t("card1-btn")}
          </Link>
        </div>

        {/* Service 2 */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-200 shadow-premium flex flex-col h-full">
          <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
            <FileText className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{t("card2-badge")}</span>
          <h2 className="text-2xl font-black text-slate-900 mb-4 font-[family-name:var(--font-geist-mono)]">{t("card2-title")}</h2>
          <p className="text-slate-600 font-medium mb-8 leading-relaxed">{t("card2-desc")}</p>
          <div className="space-y-6 flex-grow">
            <div dangerouslySetInnerHTML={{ __html: `<p class="text-sm text-slate-500 leading-relaxed">${t("card2-sub1")}</p>` }} />
            <div dangerouslySetInnerHTML={{ __html: `<p class="text-sm text-slate-500 leading-relaxed">${t("card2-sub2")}</p>` }} />
            <div dangerouslySetInnerHTML={{ __html: `<p class="text-sm text-slate-500 leading-relaxed">${t("card2-sub3")}</p>` }} />
          </div>
          <Link href="/contact" className="mt-8 w-full block text-center bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm uppercase tracking-wider px-6 py-4 rounded-xl transition-all shadow-md">
            {t("card2-footer-btn")}
          </Link>
        </div>

        {/* Service 3 */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-200 shadow-premium flex flex-col h-full">
          <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6 shadow-sm">
            <ScanLine className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">{t("card3-badge")}</span>
          <h2 className="text-2xl font-black text-slate-900 mb-4 font-[family-name:var(--font-geist-mono)]">{t("card3-title")}</h2>
          <p className="text-slate-600 font-medium mb-8 leading-relaxed">{t("card3-desc")}</p>
          <div className="space-y-6 flex-grow">
            <div dangerouslySetInnerHTML={{ __html: `<p class="text-sm text-slate-500 leading-relaxed">${t("card3-sub1")}</p>` }} />
            <div dangerouslySetInnerHTML={{ __html: `<p class="text-sm text-slate-500 leading-relaxed">${t("card3-sub2")}</p>` }} />
            <div dangerouslySetInnerHTML={{ __html: `<p class="text-sm text-slate-500 leading-relaxed">${t("card3-sub3")}</p>` }} />
          </div>
          <Link href="/contact" className="mt-8 w-full block text-center bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm uppercase tracking-wider px-6 py-4 rounded-xl transition-all shadow-md">
            {t("card3-footer-btn")}
          </Link>
        </div>
      </div>
    </div>
  );
}
