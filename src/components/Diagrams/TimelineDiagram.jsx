import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function TimelineDiagram() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
      <h4 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wide">
        Directory Tests - 2-Day Timing Requirement
      </h4>

      <div className="flex flex-col md:flex-row items-stretch gap-4">
        {/* Day 1 */}
        <div className="flex-1 bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h5 className="font-bold text-blue-800">DAY 1 (J0)</h5>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-blue-700">Execute Tests:</p>
            <ul className="text-sm text-blue-600 space-y-1 ml-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                1.1a (API)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                1.2a (API)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                1.1b (EDI)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                1.2b (EDI)
              </li>
            </ul>
            <p className="text-xs text-blue-500 mt-3 italic">
              Creates entries with D+1 and D+2 start dates
            </p>
          </div>
        </div>

        {/* Wait Arrow */}
        <div className="flex items-center justify-center py-4 md:py-0">
          <div className="flex flex-col items-center gap-1">
            <Clock className="w-5 h-5 text-amber-500" />
            <span className="text-xs font-medium text-amber-600">WAIT</span>
            <span className="text-xs text-amber-600">1 DAY</span>
            <ArrowRight className="w-5 h-5 text-amber-500 hidden md:block" />
            <div className="w-0.5 h-6 bg-amber-300 md:hidden"></div>
          </div>
        </div>

        {/* Day 2 */}
        <div className="flex-1 bg-green-50 border-2 border-green-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-green-600" />
            <h5 className="font-bold text-green-800">DAY 2 (D)</h5>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-green-700">Execute Tests:</p>
            <ul className="text-sm text-green-600 space-y-1 ml-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                1.3a (API)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                1.3b (EDI)
              </li>
            </ul>
            <p className="text-xs text-green-500 mt-3 italic">
              Mask the entries that are now active
            </p>
          </div>
        </div>
      </div>

      {/* Warning */}
      <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
        <span className="text-amber-500 text-lg">⚠️</span>
        <p className="text-sm text-amber-800">
          <strong>Minimum Duration:</strong> 2 calendar days for all directory tests.
          You <strong>CANNOT</strong> complete all directory tests in a single day!
        </p>
      </div>
    </div>
  );
}
