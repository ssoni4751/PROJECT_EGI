export default function RefundPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black text-slate-900 mb-8">Refund & Cancellation Policy</h1>
      <div className="prose prose-emerald max-w-none">
        <p className="text-slate-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Service Cancellation</h2>
        <p className="text-slate-600 mb-4">
          Cancellations for consulting services must be made before the actual filing or submission process begins. Once a tax return (ITR/GST) or PF claim has been officially filed on the government portal, the service is considered fully rendered.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Refund Eligibility</h2>
        <p className="text-slate-600 mb-4">
          Refunds are applicable only if we are unable to provide the agreed-upon service due to technical issues on our end, or if you cancel the service before our agents initiate the official filing process.
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Government Fees</h2>
        <p className="text-slate-600 mb-4">
          Any official fees, challans, or penalties paid directly to government authorities (e.g., Income Tax Department, EPFO) on your behalf are strictly non-refundable under any circumstances.
        </p>
      </div>
    </div>
  );
}
