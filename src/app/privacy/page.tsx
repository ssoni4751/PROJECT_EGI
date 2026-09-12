export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black text-slate-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-emerald max-w-none">
        <p className="text-slate-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="text-slate-600 mb-4">
          At Anshu Computer and Tax Consultancy, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-slate-600 mb-4">
          We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, or when you contact us. This includes names, phone numbers, email addresses, and tax-related documents necessary for filing.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="text-slate-600 mb-4">
          We use the information we collect or receive to facilitate account creation, process your tax filings (ITR, GST), manage your PF claims, and communicate with you regarding your service requests.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Data Security</h2>
        <p className="text-slate-600 mb-4">
          We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards, no internet transmission is completely secure.
        </p>
      </div>
    </div>
  );
}
