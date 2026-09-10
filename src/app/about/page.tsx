"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
      
      {/* Our Creed Section */}
      <section>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-3 block">{t("creed-badge")}</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-[family-name:var(--font-geist-mono)]">{t("creed-title")}</h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-8">{t("creed-desc")}</p>
          <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 italic border-l-4 border-emerald-500 pl-6 py-2 text-left">
            {t("creed-quote")}
          </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-panel p-6 rounded-2xl border border-slate-200">
            <span className="text-4xl font-black text-emerald-100 mb-4 block font-[family-name:var(--font-geist-mono)]">{t("creed-col1-num")}</span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{t("creed-col1-title")}</h3>
            <p className="text-sm text-slate-600 font-medium">{t("creed-col1-desc")}</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-slate-200">
            <span className="text-4xl font-black text-emerald-100 mb-4 block font-[family-name:var(--font-geist-mono)]">{t("creed-col2-num")}</span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{t("creed-col2-title")}</h3>
            <p className="text-sm text-slate-600 font-medium">{t("creed-col2-desc")}</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-slate-200">
            <span className="text-4xl font-black text-emerald-100 mb-4 block font-[family-name:var(--font-geist-mono)]">{t("creed-col3-num")}</span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{t("creed-col3-title")}</h3>
            <p className="text-sm text-slate-600 font-medium">{t("creed-col3-desc")}</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-slate-200">
            <span className="text-4xl font-black text-emerald-100 mb-4 block font-[family-name:var(--font-geist-mono)]">{t("creed-col4-num")}</span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{t("creed-col4-title")}</h3>
            <p className="text-sm text-slate-600 font-medium">{t("creed-col4-desc")}</p>
          </div>
        </div>
      </section>

      {/* Filing Roadmap / Process Section */}
      <section id="process">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 block">{t("process-badge")}</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 font-[family-name:var(--font-geist-mono)]">{t("process-title")}</h2>
          <p className="text-slate-600 text-lg font-medium">{t("process-desc")}</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-100 via-emerald-300 to-emerald-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-white shadow-md">1</div>
              <h3 className="font-bold text-slate-900 mb-2">{t("process-step1-title")}</h3>
              <p className="text-sm text-slate-500">{t("process-step1-desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-white shadow-md">2</div>
              <h3 className="font-bold text-slate-900 mb-2">{t("process-step2-title")}</h3>
              <p className="text-sm text-slate-500">{t("process-step2-desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-white shadow-md">3</div>
              <h3 className="font-bold text-slate-900 mb-2">{t("process-step3-title")}</h3>
              <p className="text-sm text-slate-500">{t("process-step3-desc")}</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-white shadow-md">4</div>
              <h3 className="font-bold text-slate-900 mb-2">{t("process-step4-title")}</h3>
              <p className="text-sm text-slate-500">{t("process-step4-desc")}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
