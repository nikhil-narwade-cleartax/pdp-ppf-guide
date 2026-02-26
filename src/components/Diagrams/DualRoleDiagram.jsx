import { ArrowRight, ArrowLeftRight } from 'lucide-react';

export default function DualRoleDiagram() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
      <h4 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wide">
        Test 2.3/2.4: Dual Role Simulation
      </h4>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Your PDP as Issuer */}
        <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-4 text-center w-full md:w-48">
          <p className="font-bold text-blue-800">YOUR PDP</p>
          <p className="text-sm text-blue-600">(as ISSUER)</p>
          <div className="mt-3 text-xs text-blue-700 text-left space-y-1">
            <p>Acts on behalf of the SELLER</p>
            <p className="font-medium mt-2">Steps 3a, 3b:</p>
            <p>• Submit invoice</p>
            <p>• Send regulatory data</p>
          </div>
        </div>

        {/* PPF in middle */}
        <div className="flex flex-col items-center gap-2">
          <ArrowRight className="w-6 h-6 text-slate-400 hidden md:block" />
          <div className="bg-slate-200 rounded-lg px-4 py-2">
            <p className="text-sm font-bold text-slate-700">PPF</p>
          </div>
          <ArrowRight className="w-6 h-6 text-slate-400 hidden md:block" />
          <div className="md:hidden">
            <ArrowLeftRight className="w-6 h-6 text-slate-400" />
          </div>
        </div>

        {/* Your PDP as Receiver */}
        <div className="bg-green-100 border-2 border-green-300 rounded-xl p-4 text-center w-full md:w-48">
          <p className="font-bold text-green-800">YOUR PDP</p>
          <p className="text-sm text-green-600">(as RECEIVER)</p>
          <div className="mt-3 text-xs text-green-700 text-left space-y-1">
            <p>Acts on behalf of the BUYER</p>
            <p className="font-medium mt-2">Step 3c:</p>
            <p>• Reject invoice</p>
            <p>• Send rejection status</p>
          </div>
        </div>
      </div>

      {/* Rejection Details */}
      <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
        <p className="text-sm font-semibold text-red-800 mb-2">Required Rejection Details:</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-xs text-red-600 uppercase font-medium">Rejection Reason</p>
            <p className="text-red-800">"Duplicate invoice (already issued/received)"</p>
          </div>
          <div>
            <p className="text-xs text-red-600 uppercase font-medium">Rejection Code</p>
            <p className="font-mono text-red-800 font-bold">REJ_UNI</p>
          </div>
        </div>
      </div>

      {/* Why this matters */}
      <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
        <p className="text-xs text-amber-800">
          <strong>Why this matters:</strong> In production, invoice rejections happen frequently.
          You must prove your platform can handle rejections from BOTH the issuing side and the receiving side.
        </p>
      </div>
    </div>
  );
}
