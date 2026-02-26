import { useState, useEffect } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Section from './components/Content/Section';
import TestCard from './components/Content/TestCard';
import Callout from './components/Content/Callout';
import Table from './components/Content/Table';
import SearchModal from './components/Search/SearchModal';
import ArchitectureDiagram from './components/Diagrams/ArchitectureDiagram';
import FlowSystemDiagram from './components/Diagrams/FlowSystemDiagram';
import LifecycleDiagram from './components/Diagrams/LifecycleDiagram';
import DirectoryHierarchy from './components/Diagrams/DirectoryHierarchy';
import TimelineDiagram from './components/Diagrams/TimelineDiagram';
import InvoiceFlowDiagram from './components/Diagrams/InvoiceFlowDiagram';
import DualRoleDiagram from './components/Diagrams/DualRoleDiagram';
import { Book, Database, FileText, BarChart3, Settings, CheckSquare } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('part1');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar - hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar activeSection={activeSection} onSectionChange={handleNavigate} />
      </div>

      {/* Mobile sidebar overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-slate-900/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative w-72 h-full">
            <Sidebar activeSection={activeSection} onSectionChange={(id) => {
              handleNavigate(id);
              setIsMobileMenuOpen(false);
            }} />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <Header
          onSearchClick={() => setIsSearchOpen(true)}
          onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
        />

        <main className="p-6 lg:p-8 max-w-5xl mx-auto">
          {/* Document Info */}
          <div className="mb-8 bg-white rounded-xl border border-slate-200 p-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
              <div>
                <p className="text-slate-500 text-xs uppercase font-medium">Version</p>
                <p className="font-semibold text-slate-900">1.0</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-medium">Date</p>
                <p className="font-semibold text-slate-900">February 2026</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-medium">Classification</p>
                <p className="font-semibold text-slate-900">Internal</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-medium">Prepared For</p>
                <p className="font-semibold text-slate-900">Engineering Team</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-medium">Total Tests</p>
                <p className="font-semibold text-slate-900">13 Tests</p>
              </div>
            </div>
          </div>

          {/* PART 1: Foundational Concepts */}
          <Section id="part1" title="PART 1: Foundational Concepts" icon={Book} defaultOpen={true}>
            <div className="space-y-8">
              {/* Ecosystem */}
              <div id="ecosystem" className="scroll-mt-24">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">1.1 The French E-Invoicing Ecosystem</h3>
                <ArchitectureDiagram />

                <div className="mt-6">
                  <h4 className="font-medium text-slate-800 mb-3">Key Actors Explained</h4>
                  <Table
                    headers={['Actor', 'French Name', 'Role', 'Analogy']}
                    rows={[
                      ['DGFiP', 'Direction Générale des Finances Publiques', 'French Tax Authority', 'Like IRS (US) or HMRC (UK)'],
                      ['AIFE', "Agence pour l'Informatique Financière de l'État", 'Government IT Agency that manages PPF', 'The technical regulator you deal with'],
                      ['PPF', 'Portail Public de Facturation', 'Central government e-invoicing portal', 'The "hub" all invoices flow through'],
                      ['PDP', 'Plateforme de Dématérialisation Partenaire', 'Private certified e-invoicing platforms', 'ClearTax is becoming a PDP'],
                      ['OD', 'Opérateur de Dématérialisation', 'Non-certified service providers', 'Lower tier than PDP'],
                    ]}
                  />
                </div>

                <Callout variant="note" title="Why Does the PPF Exist?">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Combat VAT Fraud</strong> — Real-time visibility into all B2B transactions</li>
                    <li><strong>Automate Tax Reporting</strong> — Businesses won't need to manually file VAT returns</li>
                    <li><strong>Standardize Invoicing</strong> — One format, one process, nationwide compliance</li>
                  </ul>
                </Callout>
              </div>

              {/* Flows */}
              <div id="flows" className="scroll-mt-24">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">1.2 Understanding the "Flows" (Flux)</h3>

                <Callout variant="critical" title="Critical Concept">
                  The French system uses numbered "flows" (Flux) to categorize different types of data exchange.
                  Your engineering team MUST understand these thoroughly.
                </Callout>

                <div className="mt-4">
                  <FlowSystemDiagram />
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-slate-800 mb-3">F1 vs F2: The Critical Distinction</h4>
                  <Callout variant="warning" title="Common Confusion Point">
                    Many teams confuse F1 and F2. Understanding this distinction is ESSENTIAL for correct implementation.
                  </Callout>
                  <Table
                    headers={['Aspect', 'F1 (Regulatory Data)', 'F2 (Lifecycle Status)']}
                    rows={[
                      ['What it contains', 'Full invoice content: seller, buyer, line items, amounts, VAT breakdown', 'Status code only: "Submitted", "Paid", "Rejected"'],
                      ['When you send it', 'ONCE - after invoice is created/filed', 'MULTIPLE TIMES - at each status change'],
                      ['Purpose', 'Tax authority needs the actual invoice details', 'Track invoice state through its lifecycle'],
                      ['Size', 'Large (full invoice XML)', 'Small (just status + reference)'],
                    ]}
                  />
                </div>
              </div>

              {/* Directory */}
              <div id="directory" className="scroll-mt-24">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">1.3 Understanding the Directory (Annuaire)</h3>
                <p className="text-slate-600 mb-4">
                  The Directory is the <strong>central routing table</strong> for the entire French e-invoicing system.
                  Think of it like DNS for invoices - it tells the system which PDP handles which company.
                </p>
                <DirectoryHierarchy />

                <div className="mt-6">
                  <h4 className="font-medium text-slate-800 mb-3">Directory Terminology</h4>
                  <Table
                    headers={['Term', 'French', 'Meaning', 'Example']}
                    rows={[
                      ['SIREN', 'SIREN', '9-digit company identifier', '123456789'],
                      ['SIRET', 'SIRET', '14-digit establishment ID (SIREN + 5 digits)', '12345678900001'],
                      ['Routing Code (CR)', 'Code de Routage', 'Sub-routing within a company', 'CR-3-1-1'],
                      ['Suffix', 'Suffixe', 'Alternative sub-routing identifier', 'suffix1, suffix2'],
                      ['Mesh (Maille)', 'Maille', 'A routing entry in the directory', 'SIREN-3 is a mesh'],
                      ['Appropriation', 'Appropriation', 'Taking ownership of a mesh/line', '"Your PDP now handles this"'],
                    ]}
                  />
                </div>

                <Callout variant="key" title='What is "Line 9998"?'>
                  In test scenarios, you'll see "line 9998". This is the <strong>DEFAULT PPF-managed line</strong> for every company.
                  Before a PDP takes over: Line 9998 exists and is managed by PPF (default state).
                  When you "appropriate" a company, you CLOSE line 9998 and CREATE your own line.
                  This proves you can take over management of a company from PPF.
                </Callout>
              </div>

              {/* Lifecycle States */}
              <div id="lifecycle" className="scroll-mt-24">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">1.4 Invoice Lifecycle States</h3>
                <LifecycleDiagram />
              </div>
            </div>
          </Section>

          {/* PART 2: Directory Tests */}
          <Section id="part2" title="PART 2: Directory Test Cases" icon={Database} badge="6 tests" badgeColor="bg-blue-100 text-blue-700">
            <div className="space-y-6">
              <Callout variant="critical" title="Critical Timing Requirement">
                <p>Directory tests have a <strong>TWO-DAY dependency</strong>:</p>
                <ul className="list-disc list-inside mt-2">
                  <li><strong>DAY 1 (J0):</strong> Execute tests 1.1a, 1.2a, 1.1b, 1.2b (creates entries with D+1/D+2 dates)</li>
                  <li><strong>DAY 2 (D):</strong> Execute tests 1.3a, 1.3b (masks entries that are now active)</li>
                </ul>
                <p className="mt-2">Your team <strong>CANNOT</strong> complete all directory tests in a single day!</p>
              </Callout>

              <TimelineDiagram />

              <div className="mt-4">
                <Table
                  headers={['Test', 'Channel', 'What You\'re Proving', 'Test Data']}
                  rows={[
                    ['1.1a', 'API', 'Create SIREN → SIRET → Routing Code hierarchy', 'SIREN-4, CR-4-2-2'],
                    ['1.2a', 'API', 'Create SIREN → Suffix hierarchy', 'SIREN-2, suffix1/2'],
                    ['1.3a', 'API', 'Mask/hide a directory entry', 'SIREN-2-suffix2'],
                    ['1.1b', 'EDI (AS2)', 'Same as 1.1a via EDI', 'SIREN-3, CR-3-1-1'],
                    ['1.2b', 'EDI (AS2)', 'Same as 1.2a via EDI', 'SIREN-1, suffix1/2'],
                    ['1.3b', 'EDI (AS2)', 'Same as 1.3a via EDI', 'SIREN-1-suffix2'],
                  ]}
                />
              </div>

              <TestCard
                id="test-1.1a"
                title="Test 1.1a: Create SIREN/SIRET/Routing Code (API)"
                channel="API"
                category="Directory"
                complexity="Medium"
                objective="Prove your platform can set up complex company routing via API"
              >
                <div className="space-y-4">
                  <h4 className="font-medium text-slate-800">Step-by-Step Execution</h4>
                  <Table
                    headers={['Step', 'Action', 'Input', 'Output']}
                    compact
                    rows={[
                      ['1', 'Create Routing Code CR-4-2-2', 'Routing code identifier from data pool', 'Routing code created'],
                      ['2', 'Close Line 9998 on SIREN-4 mesh', 'SIREN-4, closing date = D+1', 'Line scheduled for closure'],
                      ['3', 'Appropriate SIREN-4 mesh', 'SIREN-4, start D+1, no end date', 'SIREN-4 managed by your PDP'],
                      ['4', 'Appropriate SIRET-4-2 line', 'SIRET-4-2, start D+1', 'SIRET routed through your PDP'],
                      ['5', 'Appropriate CR-4-2-2 line', 'CR-4-2-2, start D+1', 'Invoices to CR-4-2-2 route through you'],
                    ]}
                  />
                  <Callout variant="note" title="Engineering Requirements">
                    <ul className="text-sm space-y-1">
                      <li><strong>API Endpoint:</strong> PPF Directory API (URL provided after raccordement approval)</li>
                      <li><strong>Authentication:</strong> Certificate-based (your RGS*/eIDAS cert)</li>
                      <li><strong>Date Handling:</strong> D+1 means "tomorrow" - implement dynamic date calculation</li>
                    </ul>
                  </Callout>
                </div>
              </TestCard>

              <TestCard
                id="test-1.2a"
                title="Test 1.2a: Create SIREN/Suffix Addressing (API)"
                channel="API"
                category="Directory"
                complexity="Medium"
                objective="Handle simpler routing structure with suffixes instead of routing codes"
              >
                <Table
                  headers={['Step', 'Action', 'Input', 'Day']}
                  compact
                  rows={[
                    ['1', 'Close Line 9998 on SIREN-2', 'SIREN-2, line 9998, close date D+1', 'J0'],
                    ['2', 'Appropriate SIREN-2 mesh', 'SIREN-2, start D+1, no end date', 'J0'],
                    ['3', 'Create SIREN-2-suffix1 line', 'SIREN-2-suffix1, start D+1', 'J0'],
                    ['4', 'Create SIREN-2-suffix2 line', 'SIREN-2-suffix2, start D+2', 'J0'],
                  ]}
                />
                <Callout variant="note" title="Important">
                  Step 4 uses D+2 (day after tomorrow) intentionally. This sets up the masking test (1.3a) which must wait for the entry to become active.
                </Callout>
              </TestCard>

              <TestCard
                id="test-1.3a"
                title="Test 1.3a: Mask Directory Line (API)"
                channel="API"
                category="Directory"
                complexity="Low"
                objective="Prove you can temporarily hide a routing entry"
              >
                <Callout variant="warning" title="Prerequisite">
                  Test 1.2a MUST be completed first. Test 1.3a must execute the day AFTER 1.2a.
                </Callout>
                <Table
                  headers={['Step', 'Action', 'Input', 'Output', 'Day']}
                  compact
                  rows={[
                    ['1', 'Hide SIREN-2-suffix2 line', 'SIREN-2-suffix2 identifier', 'Suffix2 is now hidden/masked', 'D (day after J0)'],
                  ]}
                />
              </TestCard>

              <TestCard
                id="test-1.1b"
                title="Test 1.1b: SIREN/SIRET/Routing Code (EDI)"
                channel="EDI"
                category="Directory"
                complexity="Medium"
                objective="Same as 1.1a but via AS2 file transfer"
              >
                <p className="text-sm text-slate-600">Identical to Test 1.1a except using EDI (AS2) instead of API. Uses SIREN-3 and CR-3-1-1.</p>
              </TestCard>

              <TestCard
                id="test-1.2b"
                title="Test 1.2b: SIREN/Suffix Addressing (EDI)"
                channel="EDI"
                category="Directory"
                complexity="Medium"
                objective="Same as 1.2a but via AS2 file transfer"
              >
                <p className="text-sm text-slate-600">Identical to Test 1.2a except using EDI (AS2) instead of API. Uses SIREN-1, suffix1/suffix2.</p>
              </TestCard>

              <TestCard
                id="test-1.3b"
                title="Test 1.3b: Mask Line (EDI)"
                channel="EDI"
                category="Directory"
                complexity="Low"
                objective="Same as 1.3a but via AS2 file transfer"
              >
                <p className="text-sm text-slate-600">Identical to Test 1.3a except using EDI (AS2) instead of API. Uses SIREN-1-suffix2.</p>
              </TestCard>
            </div>
          </Section>

          {/* PART 3: E-Invoicing Tests */}
          <Section id="part3" title="PART 3: E-Invoicing Test Cases" icon={FileText} badge="4 tests" badgeColor="bg-green-100 text-green-700">
            <div className="space-y-6">
              <Callout variant="note" title="Important">
                ALL 4 e-invoicing tests are <strong>EDI only</strong> (no API option). You must use AS2 for all these tests.
              </Callout>

              <Table
                headers={['Test', 'Scenario', 'What You\'re Proving', 'Complexity']}
                rows={[
                  ['2.1', 'Simple invoice: Submit → Collect', 'Full lifecycle of a standard invoice', 'Medium'],
                  ['2.2', 'Credit note: Submit', 'Handle credit notes (refunds)', 'Low'],
                  ['2.3', 'Invoice rejection (dual role)', 'Act as BOTH issuer AND receiver', 'High'],
                  ['2.4', 'Invoice rejection variant', 'Same as 2.3, different code', 'High'],
                ]}
              />

              <TestCard
                id="test-2.1"
                title="Test 2.1: Simple Invoice - Submit and Collect Payment"
                channel="EDI"
                category="E-Invoicing"
                complexity="Medium"
                objective="Handle the entire lifecycle of a standard invoice from submission to payment"
                defaultOpen={true}
              >
                <InvoiceFlowDiagram />
                <div className="mt-4 space-y-4">
                  <h4 className="font-medium text-slate-800">Step Details</h4>
                  <div className="space-y-3">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="font-medium text-slate-800">Step 1a: Send F2 "Submitted" Lifecycle</p>
                      <ul className="text-sm text-slate-600 mt-1 space-y-1">
                        <li>• Send F2 lifecycle message with status code "200 - Submitted"</li>
                        <li>• Invoice name: <code className="bg-slate-200 px-1 rounded">C1_FACT2025_xxx</code></li>
                        <li>• PPF responds with CFE "500 - Acceptable"</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="font-medium text-slate-800">Step 1b: Send F1 Regulatory Data</p>
                      <ul className="text-sm text-slate-600 mt-1 space-y-1">
                        <li>• F1 message containing full invoice details</li>
                        <li>• Format: CII or UBL (choose one and be consistent)</li>
                        <li>• PPF responds with CFE "500" + F6 "250 - Submitted"</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="font-medium text-slate-800">Step 1c: Send F2 "Collected" Lifecycle</p>
                      <ul className="text-sm text-slate-600 mt-1 space-y-1">
                        <li>• F2 lifecycle message with status code "212 - Collected"</li>
                        <li>• After the buyer has paid the invoice</li>
                        <li>• PPF responds with CFE "500 - Acceptable"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TestCard>

              <TestCard
                id="test-2.2"
                title="Test 2.2: Credit Note Lifecycle"
                channel="EDI"
                category="E-Invoicing"
                complexity="Low"
                objective="Handle credit notes for returns, corrections, or price adjustments"
              >
                <Callout variant="note" title="Important">
                  This credit note is <strong>INDEPENDENT</strong> of the invoice in Test 2.1. The two scenarios are strictly separate - do NOT link them.
                </Callout>
                <Table
                  headers={['Step', 'Action', 'Details', 'PPF Response']}
                  compact
                  rows={[
                    ['2a', 'Send F2 "200-Submitted" for credit note', 'Same as 2.1 Step 1a, but for credit note (negative amounts)', 'CFE "500"'],
                    ['2b', 'Send F1 regulatory data for credit note', 'Full credit note details in CII or UBL format', 'CFE "500" + F6 "250"'],
                  ]}
                />
                <p className="text-sm text-slate-500 mt-2">Note: No "Collected" step for credit notes - they typically don't have a payment lifecycle.</p>
              </TestCard>

              <TestCard
                id="test-2.3"
                title="Test 2.3: Invoice Rejection (Dual Role)"
                channel="EDI"
                category="E-Invoicing"
                complexity="High"
                objective="Act as BOTH the issuing PDP AND the receiving PDP, and simulate a buyer rejecting an invoice"
                defaultOpen={true}
              >
                <Callout variant="warning" title="Most Complex Test">
                  This is the most complex e-invoicing test. You must act as <strong>BOTH</strong> the issuing PDP <strong>AND</strong> the receiving PDP.
                </Callout>
                <DualRoleDiagram />
                <div className="mt-4">
                  <Table
                    headers={['Step', 'Your Role', 'Action', 'Details']}
                    compact
                    rows={[
                      ['3a', 'ISSUER', 'Send F2 "200-Submitted"', 'Same as Test 2.1 Step 1a'],
                      ['3b', 'ISSUER', 'Send F1 regulatory data', 'Same as Test 2.1 Step 1b'],
                      ['3c', 'RECEIVER', 'Send F2 "213-Rejected"', 'Reject with reason code REJ_UNI'],
                    ]}
                  />
                </div>
              </TestCard>

              <TestCard
                id="test-2.4"
                title="Test 2.4: Invoice Rejection Variant"
                channel="EDI"
                category="E-Invoicing"
                complexity="High"
                objective="Same as Test 2.3 but with status code 210 instead of 213"
              >
                <Table
                  headers={['Aspect', 'Test 2.3', 'Test 2.4']}
                  compact
                  rows={[
                    ['Rejection status code', '213 - Rejected', '210 - Rejected'],
                    ['Steps', 'Identical', 'Identical'],
                    ['REJ_UNI code', 'Required', 'Required'],
                  ]}
                />
                <p className="text-sm text-slate-600 mt-2">Both tests prove rejection handling, but with different status codes. Execute both to demonstrate full compliance.</p>
              </TestCard>
            </div>
          </Section>

          {/* PART 4: E-Reporting Tests */}
          <Section id="part4" title="PART 4: E-Reporting Test Cases" icon={BarChart3} badge="3 tests" badgeColor="bg-purple-100 text-purple-700">
            <div className="space-y-6">
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-800 mb-2">What is E-Reporting?</h4>
                <p className="text-sm text-purple-700">
                  E-Reporting is for transactions that <strong>DON'T</strong> go through the standard B2B e-invoicing flow:
                </p>
                <ul className="text-sm text-purple-600 mt-2 space-y-1">
                  <li>• <strong>B2B International (B2Bi):</strong> Foreign buyer/seller not in French system</li>
                  <li>• <strong>B2C:</strong> Consumer transactions - consumers don't have PDPs</li>
                </ul>
              </div>

              <TestCard
                id="test-3.1"
                title="Test 3.1: Initial B2Bi and B2C Sales (F10.1 + F10.3)"
                channel="EDI"
                category="E-Reporting"
                complexity="Medium"
                objective="Report sales to foreign companies (B2Bi) and consumers (B2C)"
              >
                <div className="space-y-4">
                  <Table
                    headers={['Sub-flow', 'Data Source', 'Files to Use']}
                    compact
                    rows={[
                      ['F10.1 (B2Bi sales)', 'Resana XML files', 'FACT_REPORT2025_S1F1.xml, FACT_REPORT2025_S1F2.xml'],
                      ['F10.3 (B2C sales)', 'Specific parameters', 'See table below'],
                    ]}
                  />
                  <Callout variant="key" title="F10.3 Required Parameters (EXACT VALUES)">
                    <Table
                      headers={['Date', 'Transaction Type', 'VAT Rate', 'Count', 'Amount (excl. VAT)']}
                      compact
                      rows={[
                        ['09/22/2025', 'Goods', 'Standard rate', '100 transactions', '€10,000'],
                        ['09/16/2025', 'Services', 'Standard rate', '100 transactions', '€10,000'],
                      ]}
                    />
                  </Callout>
                </div>
              </TestCard>

              <TestCard
                id="test-3.2"
                title="Test 3.2: Initial B2Bi and B2C Receipts (F10.2 + F10.4)"
                channel="EDI"
                category="E-Reporting"
                complexity="Medium"
                objective="Report purchases from foreign companies and payments to consumers"
              >
                <div className="space-y-4">
                  <Table
                    headers={['Sub-flow', 'Data Source', 'Files to Use']}
                    compact
                    rows={[
                      ['F10.2 (B2Bi receipts)', 'Resana XML files', 'FACT_REPORT2025_S2F3.xml, FACT_REPORT2025_S2F4.xml'],
                      ['F10.4 (B2C receipts)', 'Specific parameters', 'See table below'],
                    ]}
                  />
                  <Callout variant="key" title="F10.4 Required Parameters (EXACT VALUES)">
                    <Table
                      headers={['Date', 'Transaction Type', 'VAT Rate', 'Count', 'Amount (incl. VAT)']}
                      compact
                      rows={[
                        ['09/22/2025', 'Service payments', 'Standard rate', '100 transactions', '€20,000'],
                        ['09/16/2025', 'Service payments', 'Standard rate', '100 transactions', '€20,000'],
                      ]}
                    />
                  </Callout>
                  <Callout variant="note" title="Note">
                    Test 3.2 uses €20,000 <strong>INCLUDING VAT</strong> (not excluding like Test 3.1)
                  </Callout>
                </div>
              </TestCard>

              <TestCard
                id="test-3.3"
                title="Test 3.3: Corrective B2Bi and B2C Receipts"
                channel="EDI"
                category="E-Reporting"
                complexity="Medium"
                objective="Submit CORRECTIONS to previously reported data"
              >
                <div className="space-y-4">
                  <Table
                    headers={['Aspect', 'Test 3.2 (Initial)', 'Test 3.3 (Corrective)']}
                    compact
                    rows={[
                      ['Submission Type', 'Initial submission', 'CORRECTIVE submission'],
                      ['F10.4 Amount', '€20,000 incl. VAT', '€30,000 incl. VAT'],
                      ['XML Files', 'S2F3, S2F4', 'Same files'],
                      ['F10 Indicator', 'Initial', 'Amendment/Corrective'],
                    ]}
                  />
                  <Callout variant="warning" title="Engineering Implication">
                    Your F10 payload must indicate this is a <strong>CORRECTIVE submission</strong>, not an initial one.
                    The F10 schema has a field for submission type (initial vs. corrective/amendment).
                  </Callout>
                </div>
              </TestCard>
            </div>
          </Section>

          {/* PART 5: Technical Specs */}
          <Section id="part5" title="PART 5: Technical Specifications" icon={Settings}>
            <div className="space-y-6">
              <div id="formats">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">5.1 Payload Formats Reference</h3>
                <Table
                  headers={['Flow', 'Format', 'Standard', 'Your Action']}
                  rows={[
                    ['F1', 'XML', 'CII or UBL (EN 16931)', 'BUILD invoice XML'],
                    ['F2', 'XML', 'PPF Lifecycle Schema', 'BUILD status XML'],
                    ['F6', 'XML', 'PPF Lifecycle Schema', 'PARSE response'],
                    ['CFE', 'XML', 'PPF Conformity Schema', 'PARSE response'],
                    ['F10', 'XML', 'PPF E-Reporting Schema', 'BUILD aggregated report'],
                    ['Directory', 'XML/JSON', 'PPF Directory Schema', 'BUILD routing updates'],
                  ]}
                />
              </div>

              <div id="status-codes">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">5.2 Complete Status Codes Reference</h3>
                <Table
                  headers={['Code', 'Meaning', 'Direction', 'Used In']}
                  rows={[
                    ['200', 'Submitted/Filed', 'Outbound', 'F2 (you send to PPF)'],
                    ['210', 'Rejected', 'Outbound', 'F2 (receiver rejects)'],
                    ['212', 'Collected/Paid', 'Outbound', 'F2 (you send to PPF)'],
                    ['213', 'Rejected', 'Outbound', 'F2 (receiver rejects)'],
                    ['250', 'Submitted (confirmed)', 'Inbound', 'F6 (PPF sends to you)'],
                    ['500', 'Acceptable', 'Inbound', 'CFE (PPF sends to you)'],
                  ]}
                />
              </div>

              <div id="data-mapping">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">5.3 Complete Test Data Mapping</h3>
                <Table
                  headers={['Test', 'Category', 'SIREN/Data', 'Key Parameters']}
                  rows={[
                    ['1.1a', 'Directory (API)', 'SIREN-4, SIRET-4-2', 'CR-4-2-2'],
                    ['1.1b', 'Directory (EDI)', 'SIREN-3, SIRET-3-1', 'CR-3-1-1'],
                    ['1.2a', 'Directory (API)', 'SIREN-2', 'suffix1, suffix2'],
                    ['1.2b', 'Directory (EDI)', 'SIREN-1', 'suffix1, suffix2'],
                    ['1.3a', 'Directory (API)', 'SIREN-2-suffix2', 'Mask operation'],
                    ['1.3b', 'Directory (EDI)', 'SIREN-1-suffix2', 'Mask operation'],
                    ['2.1', 'E-Invoicing', 'From data pool', 'C1_FACT2025_xxx'],
                    ['2.2', 'E-Invoicing', 'From data pool', 'Credit note'],
                    ['2.3', 'E-Invoicing', 'From data pool', 'REJ_UNI, code 213'],
                    ['2.4', 'E-Invoicing', 'From data pool', 'REJ_UNI, code 210'],
                    ['3.1', 'E-Reporting', 'From Excel', '€10K goods/services'],
                    ['3.2', 'E-Reporting', 'From Excel', '€20K payments'],
                    ['3.3', 'E-Reporting', 'From Excel', '€30K (corrective)'],
                  ]}
                />
              </div>

              <div id="evidence">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">5.4 Evidence Capture Requirements</h3>
                <Callout variant="key" title="For EVERY test, capture:">
                  <Table
                    headers={['Evidence Type', 'Format', 'Naming Convention']}
                    compact
                    rows={[
                      ['Request XML', '.xml', '[TEST-ID]_request_YYYYMMDD_HHMMSS.xml'],
                      ['Response XML', '.xml', '[TEST-ID]_response_YYYYMMDD_HHMMSS.xml'],
                      ['AS2 MDN', '.txt', '[TEST-ID]_mdn_YYYYMMDD_HHMMSS.txt'],
                      ['Timestamp log', '.log', '[TEST-ID]_transmission.log'],
                    ]}
                  />
                </Callout>
              </div>
            </div>
          </Section>

          {/* PART 6: Action Items */}
          <Section id="part6" title="PART 6: Engineering Action Items" icon={CheckSquare}>
            <div className="space-y-6">
              <div id="systems">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">6.1 Systems to Build/Configure</h3>
                <Table
                  headers={['System', 'Priority', 'Description']}
                  rows={[
                    ['AS2 Client', 'P0 (Blocker)', 'Configured for PPF qualification endpoint with cert auth'],
                    ['F1 Generator', 'P0', 'CII or UBL invoice XML builder (EN 16931 compliant)'],
                    ['F2 Generator', 'P0', 'Lifecycle status XML builder (codes: 200, 210, 212, 213)'],
                    ['F10 Generator', 'P0', 'E-reporting aggregation XML builder'],
                    ['Directory Client', 'P0', 'API + EDI client for directory operations'],
                    ['CFE/F6 Parser', 'P0', 'Response XML parsing for acknowledgments'],
                    ['Evidence Logger', 'P1', 'Automated capture of all request/response exchanges'],
                    ['Correlation Tracker', 'P1', 'Match PPF responses to original requests'],
                  ]}
                />
              </div>

              <div id="data-prep">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">6.2 Data Preparation Checklist</h3>
                <Table
                  headers={['Data Item', 'Source', 'When Needed']}
                  rows={[
                    ['Data pool', 'Generate from PPF qualification portal', 'Before all testing'],
                    ['Expected values Excel', 'Download from Resana', 'Before all testing'],
                    ['4 Flux 2 XML files', 'Download from Resana', 'Before e-invoicing tests'],
                    ['4 e-reporting XML files', 'Download from Resana', 'Before e-reporting tests'],
                    ['Partner application code', 'From Expected values Excel', 'For all EDI tests'],
                    ['Issuer ID', 'From Expected values Excel', 'For e-reporting tests'],
                  ]}
                />
              </div>

              <div id="timeline">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">6.3 Recommended Test Execution Timeline</h3>
                <Table
                  headers={['Day', 'Tests', 'Category', 'Notes']}
                  rows={[
                    ['Day 1', '1.1a, 1.1b, 1.2a, 1.2b', 'Directory', 'Creation tests (J0) - sets up D+1/D+2 entries'],
                    ['Day 2', '1.3a, 1.3b', 'Directory', 'Masking tests (D) - MUST wait 1 day'],
                    ['Day 3', '2.1, 2.2', 'E-Invoicing', 'Simple invoice + credit note'],
                    ['Day 4', '2.3, 2.4', 'E-Invoicing', 'Rejection scenarios (dual role)'],
                    ['Day 5', '3.1', 'E-Reporting', 'Initial B2Bi/B2C sales'],
                    ['Day 6', '3.2, 3.3', 'E-Reporting', 'Receipts (initial + corrective)'],
                    ['Day 7-8', 'Buffer', 'Remediation', 'Fix failures and re-test'],
                    ['Day 9-10', 'Compile', 'Documentation', 'Evidence packaging + compte rendu'],
                  ]}
                />
              </div>

              <div id="questions">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">6.4 Questions to Clarify with AIFE</h3>
                <Callout variant="note" title="If anything remains unclear, contact AIFE via Resana:">
                  <ol className="list-decimal list-inside text-sm space-y-1">
                    <li>Exact API endpoint URLs for directory operations</li>
                    <li>Exact AS2 endpoint details for qualification environment</li>
                    <li>XML schema files (XSD) for F1, F2, F6, F10, CFE</li>
                    <li>Clarification on "employee number 1" values in data pool</li>
                    <li>Whether CII or UBL format is preferred (or if truly either is acceptable)</li>
                    <li>Expected response times for PPF processing</li>
                  </ol>
                </Callout>
              </div>
            </div>
          </Section>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
            <p>PDP-to-PPF Interoperability Testing Guide v1.0</p>
            <p className="mt-1">February 2026 | ClearTax Engineering</p>
          </footer>
        </main>
      </div>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default App;
