import { Search, Menu, X } from 'lucide-react';

export default function Header({ onSearchClick, onMenuClick, isMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              French PDP-to-PPF Interoperability Testing
            </h2>
            <p className="text-sm text-slate-500">Complete Technical Guide for Engineering Teams</p>
          </div>
        </div>

        <button
          onClick={onSearchClick}
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-500 hover:bg-slate-200 transition-colors"
        >
          <Search className="w-4 h-4" />
          <span className="hidden sm:inline">Search...</span>
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-white rounded border border-slate-200 text-xs">
            <span>⌘</span>K
          </kbd>
        </button>
      </div>
    </header>
  );
}
