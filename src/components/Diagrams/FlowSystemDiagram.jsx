export default function FlowSystemDiagram() {
  const einvoicingFlows = [
    { id: 'F1', name: 'Regulatory Invoice Data', direction: 'PDP → PPF', desc: 'The actual invoice content sent to tax authority', color: 'blue' },
    { id: 'F2', name: 'Invoice Lifecycle Status', direction: 'PDP → PPF', desc: 'Status updates: Submitted, Paid, Rejected', color: 'blue' },
    { id: 'F6', name: 'Lifecycle Acknowledgment', direction: 'PPF → PDP', desc: 'PPF confirming receipt of your F1/F2', color: 'green' },
    { id: 'CFE', name: 'Conformity Response', direction: 'PPF → PDP', desc: '"500 - Acceptable" = success', color: 'green' },
  ];

  const ereportingFlows = [
    { id: 'F10.1', name: 'B2B International Sales', desc: 'French seller → Foreign buyer', color: 'purple' },
    { id: 'F10.2', name: 'B2B International Purchases', desc: 'Foreign seller → French buyer', color: 'purple' },
    { id: 'F10.3', name: 'B2C Sales Payment Data', desc: 'Retail store transactions', color: 'purple' },
    { id: 'F10.4', name: 'B2C Purchase Payment Data', desc: 'Buying from consumers (rare)', color: 'purple' },
  ];

  const colorMap = {
    blue: 'bg-blue-100 border-blue-300 text-blue-800',
    green: 'bg-green-100 border-green-300 text-green-800',
    purple: 'bg-purple-100 border-purple-300 text-purple-800',
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
      <h4 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wide">
        The Flow (Flux) System
      </h4>

      {/* E-Invoicing Section */}
      <div className="mb-6">
        <h5 className="text-sm font-semibold text-blue-700 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          E-Invoicing Flows (B2B Domestic)
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {einvoicingFlows.map((flow) => (
            <div
              key={flow.id}
              className={`rounded-lg border-2 p-3 ${colorMap[flow.color]}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold">{flow.id}</span>
                <span className="text-xs font-medium opacity-75">{flow.direction}</span>
              </div>
              <p className="text-sm font-medium">{flow.name}</p>
              <p className="text-xs opacity-75 mt-1">{flow.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* E-Reporting Section */}
      <div>
        <h5 className="text-sm font-semibold text-purple-700 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          E-Reporting Flows (B2C and International)
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {ereportingFlows.map((flow) => (
            <div
              key={flow.id}
              className={`rounded-lg border-2 p-3 ${colorMap[flow.color]}`}
            >
              <span className="font-bold">{flow.id}</span>
              <p className="text-sm font-medium mt-1">{flow.name}</p>
              <p className="text-xs opacity-75 mt-1">{flow.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-100 border border-blue-300 rounded"></div>
          <span className="text-slate-600">Outbound (You → PPF)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-100 border border-green-300 rounded"></div>
          <span className="text-slate-600">Inbound (PPF → You)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-100 border border-purple-300 rounded"></div>
          <span className="text-slate-600">E-Reporting</span>
        </div>
      </div>
    </div>
  );
}
