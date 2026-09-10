"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MessageSquare, MapPin, Clock, Mail } from "lucide-react";

export default function Contact() {
  const { t, language } = useLanguage();
  const [requestType, setRequestType] = useState("Callback");
  const [minDateTime, setMinDateTime] = useState("");
  
  // Ref for the form to handle submission
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Set the minimum datetime-local to current time to prevent past bookings
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    setMinDateTime(now.toISOString().slice(0, 16));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    const formData = new FormData(formRef.current);
    const name = formData.get("client_name")?.toString().trim() || "";
    const phone = formData.get("client_phone")?.toString().trim() || "";
    const service = formData.get("client_service")?.toString() || "";
    const reqType = formData.get("request_type")?.toString() || "";
    const rawDateTime = formData.get("client_datetime")?.toString() || "";

    let messageText = "";

    if (language === 'hi') {
      const reqTypeHi = reqType === 'Appointment' ? 'अपॉइंटमेंट (ऑफिस आकर मिलना)' : 'कॉलबैक (फ़ोन पर बात)';
      let serviceHi = service;
      if (service === 'PF Consultancy') serviceHi = 'PF का काम (विवाद, पैसे निकालना, सुधार)';
      if (service === 'ITR Filing') serviceHi = 'ITR भरना (Income Tax Return)';
      if (service === 'GST Services') serviceHi = 'जीएसटी (GST) नया रजिस्ट्रेशन/रिटर्न';

      messageText = `नमस्ते अंशु कंप्यूटर और टैक्स कंसल्टेंसी,\n\nमैं एक *${reqTypeHi}* का अनुरोध करना चाहता हूँ।\n\n*ग्राहक विवरण (Details):*\n`;
      messageText += `• *नाम:* ${name}\n`;
      messageText += `• *मोबाइल नंबर:* ${phone}\n`;
      messageText += `• *आवश्यक काम (Service):* ${serviceHi}\n`;

      if (reqType === 'Appointment' && rawDateTime) {
        const dateObj = new Date(rawDateTime);
        const formattedDate = dateObj.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        const formattedTime = dateObj.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
        messageText += `• *प्रस्तावित समय:* ${formattedDate} को ${formattedTime}\n`;
      }
    } else {
      messageText = `Hello Anshu Computer & Tax Consultancy,\n\nI would like to request a *${reqType}*.\n\n*Client Details:*\n`;
      messageText += `• *Name:* ${name}\n`;
      messageText += `• *Mobile No:* ${phone}\n`;
      messageText += `• *Service Option:* ${service}\n`;

      if (reqType === 'Appointment' && rawDateTime) {
        const dateObj = new Date(rawDateTime);
        const formattedDate = dateObj.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        const formattedTime = dateObj.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
        messageText += `• *Proposed Schedule:* ${formattedDate} at ${formattedTime}\n`;
      }
    }

    const encodedMsg = encodeURIComponent(messageText);
    const whatsappURL = `https://wa.me/917217646673?text=${encodedMsg}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Contact Info Side */}
        <div className="space-y-12">
          <div>
            <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-3 block">{t("standing-badge")}</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-[family-name:var(--font-geist-mono)]">{t("contact-title")}</h1>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">{t("standing-desc")}</p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="mt-1 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{t("contact-addr-label")}</h4>
                <p className="text-slate-600 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: t("contact-addr-val") }} />
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{t("contact-hours-label")}</h4>
                <p className="text-slate-600 font-medium">{t("contact-hours-val")}</p>
                <p className="text-slate-400 text-sm mt-1">{t("contact-hours-sub")}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="mt-1 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{t("contact-email-label")}</h4>
                <p className="text-slate-600 font-medium">Anshucomputerorai@gmail.com</p>
                <p className="text-slate-400 text-sm mt-1">{t("contact-whatsapp-sub")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-premium relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl"></div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-black text-slate-900 mb-2 font-[family-name:var(--font-geist-mono)]">{t("booking-title")}</h2>
            <p className="text-slate-500 font-medium">{t("booking-desc")}</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="client_name" className="block text-xs font-bold uppercase tracking-wider text-slate-600">{t("form-label-name")}</label>
                <input type="text" id="client_name" name="client_name" required placeholder={t("form-placeholder-name")}
                       className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm font-semibold" />
              </div>

              <div className="space-y-2">
                <label htmlFor="client_phone" className="block text-xs font-bold uppercase tracking-wider text-slate-600">{t("form-label-phone")}</label>
                <input type="tel" id="client_phone" name="client_phone" required pattern="[0-9]{10}" maxLength={10} placeholder={t("form-placeholder-phone")}
                       className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm font-semibold" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="client_service" className="block text-xs font-bold uppercase tracking-wider text-slate-600">{t("form-label-service")}</label>
              <select id="client_service" name="client_service" required
                      className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm font-semibold appearance-none">
                <option value="" disabled selected>{t("form-opt-service-default")}</option>
                <option value="PF Consultancy">{t("form-opt-service-pf")}</option>
                <option value="ITR Filing">{t("form-opt-service-itr")}</option>
                <option value="GST Services">{t("form-opt-service-gst")}</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="request_type" className="block text-xs font-bold uppercase tracking-wider text-slate-600">{t("form-label-request")}</label>
              <select id="request_type" name="request_type" required
                      value={requestType}
                      onChange={(e) => setRequestType(e.target.value)}
                      className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm font-semibold appearance-none">
                <option value="Callback">{t("form-opt-request-callback")}</option>
                <option value="Appointment">{t("form-opt-request-appt")}</option>
              </select>
            </div>

            {requestType === 'Appointment' && (
              <div className="space-y-2">
                <label htmlFor="client_datetime" className="block text-xs font-bold uppercase tracking-wider text-slate-600">{t("form-label-datetime")}</label>
                <input type="datetime-local" id="client_datetime" name="client_datetime" required min={minDateTime}
                       className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm font-semibold" />
              </div>
            )}

            <div className="pt-4">
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-md shadow-emerald-600/20 hover:-translate-y-0.5">
                <MessageSquare className="w-5 h-5" />
                <span>{t("form-btn-submit")}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
