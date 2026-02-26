import { Building2, MapPin, GitBranch, Tag } from 'lucide-react';

export default function DirectoryHierarchy() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
      <h4 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wide">
        Directory Hierarchy Structure
      </h4>

      <div className="space-y-2">
        {/* SIREN Level */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <Building2 className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="bg-blue-100 border border-blue-200 rounded-lg p-3">
              <p className="font-bold text-blue-800">SIREN: 123456789</p>
              <p className="text-sm text-blue-600">Acme Corporation - Company Level</p>
            </div>

            {/* SIRET Level */}
            <div className="ml-8 mt-3 space-y-3">
              {/* SIRET 1 */}
              <div className="flex items-start gap-3">
                <div className="w-0.5 h-full bg-slate-200 absolute"></div>
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="bg-green-100 border border-green-200 rounded-lg p-2">
                    <p className="font-semibold text-green-800 text-sm">SIRET: 12345678900001</p>
                    <p className="text-xs text-green-600">Paris Office</p>
                  </div>

                  {/* Routing Codes */}
                  <div className="ml-6 mt-2 space-y-1">
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-3 h-3 text-purple-500" />
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-mono">CR-1-1-1</span>
                      <span className="text-xs text-slate-500">Accounting Dept</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-3 h-3 text-purple-500" />
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-mono">CR-1-1-2</span>
                      <span className="text-xs text-slate-500">Procurement Dept</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SIRET 2 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="bg-green-100 border border-green-200 rounded-lg p-2">
                    <p className="font-semibold text-green-800 text-sm">SIRET: 12345678900002</p>
                    <p className="text-xs text-green-600">Lyon Office</p>
                  </div>
                  <div className="ml-6 mt-2">
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-3 h-3 text-purple-500" />
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-mono">CR-1-2-1</span>
                      <span className="text-xs text-slate-500">All Departments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative: Suffix approach */}
        <div className="mt-6 pt-4 border-t border-slate-200">
          <p className="text-xs font-semibold text-slate-600 mb-3">Alternative: Using Suffixes</p>
          <div className="flex items-start gap-3 ml-8">
            <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded flex items-center justify-center">
              <Tag className="w-3 h-3 text-amber-600" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-mono">suffix1</span>
                <span className="text-xs text-slate-500">Primary invoicing address</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-mono">suffix2</span>
                <span className="text-xs text-slate-500">Secondary/special invoicing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Approaches */}
      <div className="mt-6 p-4 bg-white rounded-lg border border-slate-200">
        <p className="text-xs font-semibold text-slate-600 mb-2">Two Routing Approaches:</p>
        <div className="space-y-1 text-xs text-slate-600">
          <p><span className="font-mono text-blue-600">SIREN → SIRET → CR</span> — More granular, for complex organizations</p>
          <p><span className="font-mono text-amber-600">SIREN → Suffix</span> — Simpler alternative</p>
        </div>
      </div>
    </div>
  );
}
