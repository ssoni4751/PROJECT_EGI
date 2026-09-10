"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Star, ArrowRight, ShieldCheck, Zap, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <div className="flex flex-col items-center">
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 w-full overflow-hidden">
        {/* Vibrant Background Graphics */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-20 -right-20 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-1/4 w-[800px] h-[300px] bg-teal-300/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center space-y-10"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 bg-slate-900 border border-slate-800/80 px-4.5 py-2.5 rounded-full text-xs font-semibold text-white shadow-xl shadow-slate-950/20">
              <span className="flex items-center text-amber-400 gap-1 font-bold">
                <Star className="w-4 h-4 fill-current" />
                <span>{t("hero-badge-rating")}</span>
              </span>
              <span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
              <span className="text-slate-300">{t("hero-badge-reviews")}</span>
              <span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
              <span className="text-emerald-400 font-bold">{t("hero-badge-loc")}</span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 max-w-5xl relative">
              {/* Floating decorative elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 -top-8 w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 shadow-sm hidden md:block"
              />
              <motion.div 
                animate={{ y: [10, -10, 10] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 bottom-0 w-12 h-12 rounded-lg bg-teal-100 border border-teal-200 shadow-sm rotate-12 hidden md:block"
              />

              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-slate-900 font-[family-name:var(--font-geist-mono)] leading-[1.1]">
                <span>{t("hero-title-main")}</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500">
                  {t("hero-title-accent")}
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                {t("hero-desc")}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full sm:w-auto">
              <Link href="/contact" className="group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider px-8 py-4.5 rounded-2xl transition-all shadow-xl hover:shadow-slate-900/20 hover:-translate-y-1">
                <span>{t("hero-cta-booking")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://wa.me/917217646673" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold text-sm uppercase tracking-wider px-8 py-4.5 rounded-2xl transition-all hover:-translate-y-1">
                <Activity className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                <span>{t("hero-cta-whatsapp")}</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Section Snippet */}
      <section className="w-full py-24 bg-white/60 border-y border-slate-200/50 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-3 block">{t("efficiency-badge")}</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 font-[family-name:var(--font-geist-mono)]">{t("efficiency-title")}</h2>
            <p className="text-slate-600 text-lg font-medium">{t("efficiency-desc")}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(16,185,129,0.12)] flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-2 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-[family-name:var(--font-geist-mono)]">{t("table-r1-p")}</h3>
              <p className="text-slate-600 font-medium">{t("table-r1-a")}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel p-8 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(59,130,246,0.12)] flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-[family-name:var(--font-geist-mono)]">{t("table-r2-p")}</h3>
              <p className="text-slate-600 font-medium">{t("table-r2-a")}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-panel p-8 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(245,158,11,0.12)] flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-2 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-[family-name:var(--font-geist-mono)]">{t("table-r3-p")}</h3>
              <p className="text-slate-600 font-medium">{t("table-r3-a")}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
