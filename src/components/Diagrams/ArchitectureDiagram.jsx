export default function ArchitectureDiagram() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
      <h4 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wide">
        French E-Invoicing Architecture
      </h4>

      <div className="flex flex-col items-center space-y-4">
        {/* DGFiP */}
        <div className="bg-red-100 border-2 border-red-300 rounded-lg px-6 py-3 text-center">
          <p className="font-bold text-red-800">DGFiP</p>
          <p className="text-xs text-red-600">Tax Authority</p>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-6 bg-slate-300"></div>
          <span className="text-xs text-slate-500 my-1">Tax Data</span>
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-slate-300"></div>
        </div>

        {/* PPF */}
        <div className="bg-blue-100 border-2 border-blue-300 rounded-lg px-8 py-4 text-center">
          <p className="font-bold text-blue-800">PPF</p>
          <p className="text-xs text-blue-600">Public Portal</p>
          <div className="mt-2 text-xs text-blue-700 space-y-0.5">
            <p>• Central Hub</p>
            <p>• Directory</p>
            <p>• Tax Reporting</p>
          </div>
        </div>

        {/* Arrow down to PDPs */}
        <div className="w-0.5 h-8 bg-slate-300"></div>

        {/* PDP Row */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {/* Your PDP */}
          <div className="bg-green-100 border-2 border-green-400 rounded-lg px-4 py-3 text-center shadow-md">
            <p className="font-bold text-green-800">Your PDP</p>
            <p className="text-xs text-green-600">ClearTax</p>
          </div>

          {/* Connector */}
          <div className="flex items-center">
            <div className="w-6 h-0.5 bg-slate-300"></div>
            <span className="text-slate-400 mx-1">↔</span>
            <div className="w-6 h-0.5 bg-slate-300"></div>
          </div>

          {/* Other PDPs */}
          <div className="bg-slate-100 border-2 border-slate-300 rounded-lg px-4 py-3 text-center">
            <p className="font-bold text-slate-700">Other PDPs</p>
            <p className="text-xs text-slate-500">Competitors</p>
          </div>

          {/* Connector */}
          <div className="flex items-center">
            <div className="w-6 h-0.5 bg-slate-300"></div>
            <span className="text-slate-400 mx-1">↔</span>
            <div className="w-6 h-0.5 bg-slate-300"></div>
          </div>

          {/* PPF Direct */}
          <div className="bg-slate-100 border-2 border-slate-300 rounded-lg px-4 py-3 text-center">
            <p className="font-bold text-slate-700">PPF Direct</p>
            <p className="text-xs text-slate-500">Users</p>
          </div>
        </div>

        {/* Arrow down to clients */}
        <div className="w-0.5 h-6 bg-green-300"></div>

        {/* Your Clients */}
        <div className="bg-green-50 border-2 border-green-200 rounded-lg px-6 py-3 text-center">
          <p className="font-bold text-green-700">Your Clients</p>
          <p className="text-xs text-green-600">Businesses</p>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-100 border border-red-300 rounded"></div>
          <span className="text-slate-600">Government</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-100 border border-blue-300 rounded"></div>
          <span className="text-slate-600">Central Platform</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-100 border border-green-400 rounded"></div>
          <span className="text-slate-600">Your Platform</span>
        </div>
      </div>
    </div>
  );
}
