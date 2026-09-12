export default function Disclaimer() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black text-slate-900 mb-8">Disclaimer</h1>
      <div className="prose prose-emerald max-w-none">
        <p className="text-slate-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. General Information</h2>
        <p className="text-slate-600 mb-4">
          The information provided by Anshu Computer and Tax Consultancy on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, or completeness of any information.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Professional Advice</h2>
        <p className="text-slate-600 mb-4">
          This website does not constitute financial or legal advice. While we offer tax consultancy and PF management services, the content on our website should not be treated as a substitute for professional advisory services tailored to your specific financial situation.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Third-Party Links</h2>
        <p className="text-slate-600 mb-4">
          The site may contain links to government portals (like EPFO, Income Tax Department) or other third-party websites. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.
        </p>
      </div>
    </div>
  );
}
