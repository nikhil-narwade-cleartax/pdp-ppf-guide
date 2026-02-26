import { ArrowRight, ArrowDown } from 'lucide-react';

export default function LifecycleDiagram() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
      <h4 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wide">
        Invoice Lifecycle State Machine
      </h4>

      <div className="flex flex-col items-center">
        {/* Created */}
        <div className="bg-slate-100 border-2 border-slate-300 rounded-lg px-6 py-3 text-center">
          <p className="font-bold text-slate-700">CREATED</p>
          <p className="text-xs text-slate-500">(Internal)</p>
        </div>

        {/* Arrow with F2 200 */}
        <div className="flex flex-col items-center my-2">
          <ArrowDown className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-mono bg-blue-100 text-blue-700 px-2 py-0.5 rounded">F2 "200"</span>
        </div>

        {/* Submitted */}
        <div className="bg-blue-100 border-2 border-blue-400 rounded-lg px-6 py-3 text-center">
          <p className="font-bold text-blue-800">SUBMITTED</p>
          <p className="text-xs text-blue-600">(200)</p>
        </div>

        {/* Branching */}
        <div className="flex items-start justify-center gap-8 mt-4">
          {/* Left branch - Collected */}
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="text-xs font-mono bg-green-100 text-green-700 px-2 py-0.5 rounded">F2 "212"</span>
            </div>
            <ArrowDown className="w-4 h-4 text-green-400 my-2" />
            <div className="bg-green-100 border-2 border-green-400 rounded-lg px-6 py-3 text-center">
              <p className="font-bold text-green-800">COLLECTED</p>
              <p className="text-xs text-green-600">(212)</p>
            </div>
          </div>

          {/* Center - other states placeholder */}
          <div className="flex flex-col items-center text-slate-400 pt-8">
            <p className="text-xs italic">(Other states possible)</p>
          </div>

          {/* Right branch - Rejected */}
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="text-xs font-mono bg-red-100 text-red-700 px-2 py-0.5 rounded">F2 "210/213"</span>
            </div>
            <ArrowDown className="w-4 h-4 text-red-400 my-2" />
            <div className="bg-red-100 border-2 border-red-400 rounded-lg px-6 py-3 text-center">
              <p className="font-bold text-red-800">REJECTED</p>
              <p className="text-xs text-red-600">(210/213)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Status Code Reference */}
      <div className="mt-6 pt-4 border-t border-slate-200">
        <h5 className="text-xs font-semibold text-slate-600 mb-2">Status Codes Reference:</h5>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-mono bg-blue-100 text-blue-700 px-1.5 rounded">200</span>
            <span className="text-slate-600">Submitted</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono bg-red-100 text-red-700 px-1.5 rounded">210</span>
            <span className="text-slate-600">Rejected</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono bg-green-100 text-green-700 px-1.5 rounded">212</span>
            <span className="text-slate-600">Collected</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono bg-red-100 text-red-700 px-1.5 rounded">213</span>
            <span className="text-slate-600">Rejected</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono bg-amber-100 text-amber-700 px-1.5 rounded">250</span>
            <span className="text-slate-600">Confirmed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono bg-emerald-100 text-emerald-700 px-1.5 rounded">500</span>
            <span className="text-slate-600">Acceptable</span>
          </div>
        </div>
      </div>
    </div>
  );
}
