export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black text-slate-900 mb-8">Terms and Conditions</h1>
      <div className="prose prose-emerald max-w-none">
        <p className="text-slate-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Agreement to Terms</h2>
        <p className="text-slate-600 mb-4">
          By accessing our website and using our services at Anshu Computer and Tax Consultancy, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Professional Services</h2>
        <p className="text-slate-600 mb-4">
          We provide tax consultancy, PF management, GST filing, and related digital services. While we strive for absolute accuracy, the final responsibility for the data provided for filing rests with the client.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. User Responsibilities</h2>
        <p className="text-slate-600 mb-4">
          You agree to provide true, accurate, current, and complete information about yourself and your financial records as prompted by our service processes. We are not liable for penalties incurred due to inaccurate information provided by you.
        </p>
      </div>
    </div>
  );
}
