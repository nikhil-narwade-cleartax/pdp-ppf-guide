import { Book, Database, FileText, BarChart3, Settings, CheckSquare, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const sections = [
  {
    id: 'part1',
    title: 'Foundational Concepts',
    icon: Book,
    color: 'text-slate-600',
    subsections: [
      { id: 'ecosystem', title: 'E-Invoicing Ecosystem' },
      { id: 'flows', title: 'Understanding Flows (Flux)' },
      { id: 'directory', title: 'Directory (Annuaire)' },
      { id: 'lifecycle', title: 'Invoice Lifecycle States' },
    ]
  },
  {
    id: 'part2',
    title: 'Directory Tests',
    icon: Database,
    color: 'text-blue-600',
    badge: '6 tests',
    subsections: [
      { id: 'test-1.1a', title: 'Test 1.1a - SIREN/SIRET/CR (API)' },
      { id: 'test-1.2a', title: 'Test 1.2a - SIREN/Suffix (API)' },
      { id: 'test-1.3a', title: 'Test 1.3a - Mask Line (API)' },
      { id: 'test-1.1b', title: 'Test 1.1b - SIREN/SIRET/CR (EDI)' },
      { id: 'test-1.2b', title: 'Test 1.2b - SIREN/Suffix (EDI)' },
      { id: 'test-1.3b', title: 'Test 1.3b - Mask Line (EDI)' },
    ]
  },
  {
    id: 'part3',
    title: 'E-Invoicing Tests',
    icon: FileText,
    color: 'text-green-600',
    badge: '4 tests',
    subsections: [
      { id: 'test-2.1', title: 'Test 2.1 - Invoice Submit & Collect' },
      { id: 'test-2.2', title: 'Test 2.2 - Credit Note' },
      { id: 'test-2.3', title: 'Test 2.3 - Rejection (213)' },
      { id: 'test-2.4', title: 'Test 2.4 - Rejection (210)' },
    ]
  },
  {
    id: 'part4',
    title: 'E-Reporting Tests',
    icon: BarChart3,
    color: 'text-purple-600',
    badge: '3 tests',
    subsections: [
      { id: 'test-3.1', title: 'Test 3.1 - B2Bi/B2C Sales' },
      { id: 'test-3.2', title: 'Test 3.2 - B2Bi/B2C Receipts' },
      { id: 'test-3.3', title: 'Test 3.3 - Corrective Submission' },
    ]
  },
  {
    id: 'part5',
    title: 'Technical Specs',
    icon: Settings,
    color: 'text-slate-600',
    subsections: [
      { id: 'formats', title: 'Payload Formats' },
      { id: 'status-codes', title: 'Status Codes' },
      { id: 'data-mapping', title: 'Test Data Mapping' },
      { id: 'evidence', title: 'Evidence Requirements' },
    ]
  },
  {
    id: 'part6',
    title: 'Action Items',
    icon: CheckSquare,
    color: 'text-slate-600',
    subsections: [
      { id: 'systems', title: 'Systems to Build' },
      { id: 'data-prep', title: 'Data Preparation' },
      { id: 'timeline', title: 'Execution Timeline' },
      { id: 'questions', title: 'Questions for AIFE' },
    ]
  },
];

export default function Sidebar({ activeSection, onSectionChange }) {
  const [expanded, setExpanded] = useState({ part1: true, part2: true, part3: true, part4: true });

  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className="w-72 bg-white border-r border-slate-200 h-screen sticky top-0 overflow-y-auto">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-slate-900">PDP-PPF Guide</h1>
            <p className="text-xs text-slate-500">Interoperability Testing</p>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-1">
        {sections.map((section) => {
          const Icon = section.icon;
          const isExpanded = expanded[section.id];
          const isActive = activeSection === section.id || section.subsections?.some(s => s.id === activeSection);

          return (
            <div key={section.id}>
              <button
                onClick={() => {
                  toggleExpand(section.id);
                  onSectionChange(section.id);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${section.color}`} />
                  <span>{section.title}</span>
                </span>
                <span className="flex items-center gap-2">
                  {section.badge && (
                    <span className="text-xs text-slate-400">{section.badge}</span>
                  )}
                  {section.subsections && (
                    isExpanded ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </span>
              </button>

              {section.subsections && isExpanded && (
                <div className="ml-6 mt-1 space-y-1">
                  {section.subsections.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => onSectionChange(sub.id)}
                      className={`w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${
                        activeSection === sub.id
                          ? 'text-blue-700 font-medium bg-blue-50'
                          : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {sub.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200 mt-auto">
        <div className="bg-slate-50 rounded-lg p-3">
          <p className="text-xs text-slate-500 mb-1">Document Version</p>
          <p className="text-sm font-medium text-slate-700">v1.0 - February 2026</p>
        </div>
      </div>
    </aside>
  );
}
