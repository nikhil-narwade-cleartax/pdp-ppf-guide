import { AlertTriangle, Info, Key, AlertCircle } from 'lucide-react';

const variants = {
  warning: {
    icon: AlertTriangle,
    className: 'callout callout-warning',
  },
  note: {
    icon: Info,
    className: 'callout callout-note',
  },
  key: {
    icon: Key,
    className: 'callout callout-key',
  },
  critical: {
    icon: AlertCircle,
    className: 'callout callout-critical',
  },
};

export default function Callout({ variant = 'note', title, children }) {
  const config = variants[variant] || variants.note;
  const Icon = config.icon;

  return (
    <div className={config.className}>
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
          {title && <p className="font-semibold mb-1">{title}</p>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
