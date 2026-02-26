import { ChevronDown, ChevronRight, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

const channelColors = {
  API: 'badge-api',
  EDI: 'badge-edi',
  'AS2': 'badge-edi',
};

const categoryColors = {
  Directory: 'badge-directory',
  'E-Invoicing': 'badge-einvoicing',
  'E-Reporting': 'badge-ereporting',
};

const complexityIcons = {
  Low: { icon: CheckCircle2, color: 'text-green-500' },
  Medium: { icon: Clock, color: 'text-amber-500' },
  High: { icon: AlertTriangle, color: 'text-red-500' },
};

export default function TestCard({
  id,
  title,
  channel,
  category,
  complexity,
  objective,
  children,
  defaultOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const ComplexityIcon = complexityIcons[complexity]?.icon || Clock;
  const complexityColor = complexityIcons[complexity]?.color || 'text-slate-500';

  return (
    <div id={id} className="test-card mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`badge ${channelColors[channel] || 'bg-slate-100 text-slate-600'}`}>
                {channel}
              </span>
              <span className={`badge ${categoryColors[category] || 'bg-slate-100 text-slate-600'}`}>
                {category}
              </span>
              {complexity && (
                <span className="flex items-center gap-1 text-xs text-slate-500">
                  <ComplexityIcon className={`w-3 h-3 ${complexityColor}`} />
                  {complexity}
                </span>
              )}
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
            <p className="text-sm text-slate-600">{objective}</p>
          </div>
          <div className="ml-4">
            {isOpen ? (
              <ChevronDown className="w-5 h-5 text-slate-400" />
            ) : (
              <ChevronRight className="w-5 h-5 text-slate-400" />
            )}
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 pt-2 border-t border-slate-100">
          {children}
        </div>
      )}
    </div>
  );
}
