export default function Table({ headers, rows, compact = false }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className={`text-left font-semibold text-slate-700 ${
                  compact ? 'px-3 py-2' : 'px-4 py-3'
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`text-slate-600 ${compact ? 'px-3 py-2' : 'px-4 py-3'}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
