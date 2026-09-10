"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Star, MapPin, ArrowRight, ShieldCheck, Zap, Activity } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center">
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 w-full overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-slate-100 to-transparent opacity-50 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center space-y-10">
            
            <div className="inline-flex items-center gap-2.5 bg-slate-900 border border-slate-800/80 px-4.5 py-2.5 rounded-full text-xs font-semibold text-white shadow-xl shadow-slate-950/20">
              <span className="flex items-center text-amber-400 gap-1 font-bold">
                <Star className="w-4 h-4 fill-current" />
                <span>{t("hero-badge-rating")}</span>
              </span>
              <span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
              <span className="text-slate-300">{t("hero-badge-reviews")}</span>
              <span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
              <span className="text-emerald-400 font-bold">{t("hero-badge-loc")}</span>
            </div>

            <div className="space-y-6 max-w-5xl">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-950 font-[family-name:var(--font-geist-mono)] leading-none">
                <span>{t("hero-title-main")}</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  {t("hero-title-accent")}
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                {t("hero-desc")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-2xl transition-all shadow-lg hover:-translate-y-0.5">
                <span>{t("hero-cta-booking")}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="https://wa.me/917217646673" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-2xl transition-all hover:-translate-y-0.5">
                <Activity className="w-5 h-5 text-emerald-600" />
                <span>{t("hero-cta-whatsapp")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section Snippet */}
      <section className="w-full py-20 bg-white/50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-3 block">{t("efficiency-badge")}</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 font-[family-name:var(--font-geist-mono)]">{t("efficiency-title")}</h2>
            <p className="text-slate-600 text-lg font-medium">{t("efficiency-desc")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-slate-200 shadow-premium flex flex-col gap-4 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-2">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-[family-name:var(--font-geist-mono)]">{t("table-r1-p")}</h3>
              <p className="text-slate-600 font-medium">{t("table-r1-a")}</p>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-slate-200 shadow-premium flex flex-col gap-4 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-2">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-[family-name:var(--font-geist-mono)]">{t("table-r2-p")}</h3>
              <p className="text-slate-600 font-medium">{t("table-r2-a")}</p>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-slate-200 shadow-premium flex flex-col gap-4 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-2">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-[family-name:var(--font-geist-mono)]">{t("table-r3-p")}</h3>
              <p className="text-slate-600 font-medium">{t("table-r3-a")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
