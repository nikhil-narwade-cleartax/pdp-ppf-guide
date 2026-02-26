import { ArrowRight } from 'lucide-react';

export default function InvoiceFlowDiagram() {
  const steps = [
    { actor: 'SELLER', action: 'Creates invoice', arrow: true },
    { actor: 'YOUR PDP', action: 'Send F2 "200-Submitted"', to: 'PPF', response: 'CFE "500"' },
    { actor: 'YOUR PDP', action: 'Send F1 (invoice data)', to: 'PPF', response: 'CFE "500" + F6 "250"' },
    { actor: 'BUYER', action: 'Pays invoice', arrow: true },
    { actor: 'YOUR PDP', action: 'Send F2 "212-Collected"', to: 'PPF', response: 'CFE "500"' },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
      <h4 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wide">
        Test 2.1: Invoice Lifecycle Flow
      </h4>

      <div className="space-y-3">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3">
            {/* Step number */}
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-blue-700">{i + 1}</span>
            </div>

            {/* Actor */}
            <div className={`px-2 py-1 rounded text-xs font-semibold ${
              step.actor === 'YOUR PDP'
                ? 'bg-green-100 text-green-700'
                : step.actor === 'SELLER' || step.actor === 'BUYER'
                ? 'bg-slate-100 text-slate-700'
                : 'bg-blue-100 text-blue-700'
            }`}>
              {step.actor}
            </div>

            {/* Action */}
            <div className="flex-1">
              <span className="text-sm text-slate-700">{step.action}</span>
            </div>

            {/* Arrow and response */}
            {step.to && (
              <>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                  {step.to}
                </div>
                {step.response && (
                  <>
                    <span className="text-slate-400 text-xs">→</span>
                    <span className="text-xs font-mono bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">
                      {step.response}
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-xs text-blue-700">
          <strong>Key insight:</strong> F1 is sent ONCE (invoice data), F2 is sent at EACH status change (lifecycle updates)
        </p>
      </div>
    </div>
  );
}
