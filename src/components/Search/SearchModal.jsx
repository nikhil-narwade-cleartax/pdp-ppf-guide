import { Search, X, FileText, Database, BarChart3 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const searchableContent = [
  { id: 'ecosystem', title: 'French E-Invoicing Ecosystem', category: 'Foundations', keywords: ['dgfip', 'aife', 'ppf', 'pdp', 'architecture'] },
  { id: 'flows', title: 'Understanding Flows (Flux)', category: 'Foundations', keywords: ['f1', 'f2', 'f6', 'f10', 'cfe', 'regulatory'] },
  { id: 'directory', title: 'Directory (Annuaire)', category: 'Foundations', keywords: ['siren', 'siret', 'routing', 'suffix', 'mesh'] },
  { id: 'lifecycle', title: 'Invoice Lifecycle States', category: 'Foundations', keywords: ['200', '210', '212', '213', '250', '500', 'submitted', 'rejected', 'collected'] },
  { id: 'test-1.1a', title: 'Test 1.1a - SIREN/SIRET/CR (API)', category: 'Directory', keywords: ['api', 'routing code', 'siren-4', 'cr-4-2-2'] },
  { id: 'test-1.2a', title: 'Test 1.2a - SIREN/Suffix (API)', category: 'Directory', keywords: ['api', 'suffix', 'siren-2'] },
  { id: 'test-1.3a', title: 'Test 1.3a - Mask Line (API)', category: 'Directory', keywords: ['api', 'mask', 'hide'] },
  { id: 'test-1.1b', title: 'Test 1.1b - SIREN/SIRET/CR (EDI)', category: 'Directory', keywords: ['edi', 'as2', 'routing code', 'siren-3'] },
  { id: 'test-1.2b', title: 'Test 1.2b - SIREN/Suffix (EDI)', category: 'Directory', keywords: ['edi', 'as2', 'suffix', 'siren-1'] },
  { id: 'test-1.3b', title: 'Test 1.3b - Mask Line (EDI)', category: 'Directory', keywords: ['edi', 'as2', 'mask'] },
  { id: 'test-2.1', title: 'Test 2.1 - Invoice Submit & Collect', category: 'E-Invoicing', keywords: ['invoice', 'submit', 'collect', 'payment', 'f1', 'f2'] },
  { id: 'test-2.2', title: 'Test 2.2 - Credit Note', category: 'E-Invoicing', keywords: ['credit', 'note', 'refund', 'avoir'] },
  { id: 'test-2.3', title: 'Test 2.3 - Rejection (213)', category: 'E-Invoicing', keywords: ['reject', 'rej_uni', 'dual role', '213'] },
  { id: 'test-2.4', title: 'Test 2.4 - Rejection (210)', category: 'E-Invoicing', keywords: ['reject', 'rej_uni', 'dual role', '210'] },
  { id: 'test-3.1', title: 'Test 3.1 - B2Bi/B2C Sales', category: 'E-Reporting', keywords: ['f10.1', 'f10.3', 'international', 'consumer', 'sales'] },
  { id: 'test-3.2', title: 'Test 3.2 - B2Bi/B2C Receipts', category: 'E-Reporting', keywords: ['f10.2', 'f10.4', 'receipts', 'purchases'] },
  { id: 'test-3.3', title: 'Test 3.3 - Corrective Submission', category: 'E-Reporting', keywords: ['corrective', 'amendment', 'correction'] },
  { id: 'formats', title: 'Payload Formats', category: 'Tech Specs', keywords: ['xml', 'cii', 'ubl', 'schema'] },
  { id: 'status-codes', title: 'Status Codes Reference', category: 'Tech Specs', keywords: ['200', '210', '212', '213', '250', '500'] },
  { id: 'evidence', title: 'Evidence Requirements', category: 'Tech Specs', keywords: ['capture', 'mdn', 'log', 'timestamp'] },
  { id: 'timeline', title: 'Execution Timeline', category: 'Action Items', keywords: ['schedule', 'days', 'order'] },
];

const categoryIcons = {
  'Foundations': FileText,
  'Directory': Database,
  'E-Invoicing': FileText,
  'E-Reporting': BarChart3,
  'Tech Specs': FileText,
  'Action Items': FileText,
};

export default function SearchModal({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const filtered = searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.keywords.some((kw) => kw.includes(q))
    );
    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-lg outline-none placeholder:text-slate-400"
          />
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query && results.length === 0 && (
            <div className="px-4 py-8 text-center text-slate-500">
              No results found for "{query}"
            </div>
          )}

          {results.length > 0 && (
            <ul className="py-2">
              {results.map((result) => {
                const Icon = categoryIcons[result.category] || FileText;
                return (
                  <li key={result.id}>
                    <button
                      onClick={() => {
                        onNavigate(result.id);
                        onClose();
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left"
                    >
                      <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-slate-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-900 truncate">
                          {result.title}
                        </p>
                        <p className="text-sm text-slate-500">{result.category}</p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {!query && (
            <div className="px-4 py-6 text-center text-slate-500 text-sm">
              <p>Type to search tests, concepts, or status codes</p>
              <p className="mt-2 text-xs text-slate-400">
                Try: "F1", "rejection", "SIREN", "210"
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Navigate with ↑↓ keys</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
