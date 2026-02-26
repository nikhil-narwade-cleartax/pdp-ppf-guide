import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Section({
  id,
  title,
  children,
  defaultOpen = true,
  icon: Icon,
  badge,
  badgeColor = 'bg-slate-100 text-slate-600'
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section id={id} className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow transition-shadow"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-5 h-5 text-slate-500" />}
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          {badge && (
            <span className={`px-2 py-0.5 rounded text-xs font-medium ${badgeColor}`}>
              {badge}
            </span>
          )}
        </div>
        {isOpen ? (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        ) : (
          <ChevronRight className="w-5 h-5 text-slate-400" />
        )}
      </button>

      {isOpen && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </section>
  );
}
