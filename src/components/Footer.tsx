"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, Mail } from "lucide-react";

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
        <div className="mt-12 md:mt-16 flex justify-center gap-6 sm:gap-8">
          <a href="https://twitter.com/ssoni0007" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-12 h-12 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg transition-all duration-300">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61585849024721" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg transition-all duration-300">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://instagram.com/ssoni47512023" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg transition-all duration-300">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="mailto:anshucomputerorai@gmail.com" aria-label="Email" className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg transition-all duration-300">
             <Mail className="w-5 h-5" />
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
