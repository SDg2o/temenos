import type { Application } from '../data/applications'
import StatusChip from './StatusChip'

interface ApplicationsTableProps {
  data: Application[]
}

const columns = [
  { key: 'firstName' as const, label: 'First Name', pct: 9, pl: 'pl-5' },
  { key: 'lastName' as const, label: 'Last Name', pct: 9 },
  { key: 'phone' as const, label: 'Phone Number', pct: 11 },
  { key: 'dob' as const, label: 'DOB', pct: 8 },
  { key: 'zip' as const, label: 'Zip Code', pct: 7 },
  { key: 'branch' as const, label: 'Branch Location', pct: 15 },
  { key: 'started' as const, label: 'Started', pct: 7 },
]

const statusPct = 20
const actionPct = 14

export default function ApplicationsTable({ data }: ApplicationsTableProps) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full border-collapse" style={{ minWidth: '1100px' }}>
        <colgroup>
          {columns.map((col) => (
            <col key={col.key} style={{ width: `${col.pct}%` }} />
          ))}
          <col style={{ width: `${statusPct}%` }} />
          <col style={{ width: `${actionPct}%` }} />
        </colgroup>
        <thead>
          <tr className="border-b border-fnb-blue/30">
            {columns.map((col) => (
              <th key={col.key} className={`text-left px-4 ${col.pl ?? ''} py-3 font-roboto font-bold text-sm text-fnb-primary leading-[18px]`}>
                {col.label}
              </th>
            ))}
            <th className="text-left px-4 py-3 font-roboto font-bold text-sm text-fnb-primary leading-[18px]">Status</th>
            <th className="text-left px-5 py-3 font-roboto font-bold text-sm text-fnb-primary leading-[18px]">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="h-[60px] hover:bg-gray-50 cursor-pointer transition-colors">
              {columns.map((col) => (
                <td key={col.key} className={`px-4 ${col.pl ?? ''} py-3 font-roboto text-sm text-fnb-text leading-[18px]`}>
                  {row[col.key]}
                </td>
              ))}
              <td className="px-4 py-3">
                <StatusChip label={row.status} type={row.statusType} reminder={row.reminder} />
              </td>
              <td className="px-5 py-3">
                <button className="bg-white border border-fnb-dark-blue rounded px-5 py-2 font-figtree font-bold text-base text-fnb-dark-blue text-center w-full whitespace-nowrap transition-colors hover:bg-fnb-dark-blue hover:text-white">
                  {row.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
