import { useState } from 'react'
import type { Application } from '../data/applications'
import { applications } from '../data/applications'
import ApplicationsTable from './ApplicationsTable'

const columns = [
  { label: 'First Name', pct: 9, pl: 'pl-5' },
  { label: 'Last Name', pct: 9 },
  { label: 'Phone Number', pct: 11 },
  { label: 'DOB', pct: 8 },
  { label: 'Zip Code', pct: 7 },
  { label: 'Branch Location', pct: 15 },
  { label: 'Started', pct: 7 },
  { label: 'Status', pct: 20 },
  { label: 'Action', pct: 14, px: 'px-5' },
]

export default function SearchTab() {
  const [searchType, setSearchType] = useState('App ID')
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<Application[] | null>(null)
  const [showDropdown, setShowDropdown] = useState(false)

  const searchTypes = ['App ID', 'Name', 'SSN', 'Phone', 'Email']

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setResults(null)
      return
    }
    const q = searchQuery.toLowerCase()
    const filtered = applications.filter(
      (a) =>
        a.firstName.toLowerCase().includes(q) ||
        a.lastName.toLowerCase().includes(q) ||
        a.phone.includes(q)
    )
    setResults(filtered)
  }

  return (
    <div className="flex flex-col">
      <div className="bg-[#f6f6f6] flex gap-5 items-center px-6 py-[30px] h-[110px]">
        <div className="relative w-[155px]">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="bg-white rounded-[10px] px-6 py-2.5 w-full flex items-center justify-between shadow-[inset_4px_6px_8px_0px_rgba(0,0,0,0.12)] hover:bg-gray-50 transition-colors"
          >
            <span className="font-figtree font-medium text-base text-[#686868] leading-[26px]">{searchType}</span>
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none">
              <path d="M4 6L9.5 12L15 6" stroke="#686868" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 w-full bg-white rounded-lg shadow-lg z-10 mt-1">
              {searchTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => { setSearchType(t); setShowDropdown(false) }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 font-figtree text-base text-[#686868]"
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="w-[300px]">
          <input
            type="text"
            placeholder="Enter search information"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="bg-white rounded-[10px] px-6 py-2.5 w-full font-figtree font-medium text-base text-[#686868] leading-[26px] shadow-[inset_4px_6px_8px_0px_rgba(0,0,0,0.12)] outline-none"
          />
        </div>

        <button
          onClick={handleSearch}
          className="btn-gradient text-white font-figtree font-bold text-base px-5 py-2.5 rounded border border-fnb-dark-blue w-[270px] h-[40px] flex items-center justify-center"
        >
          Search Applications
        </button>
      </div>

      {/* Table header row */}
      <div className="overflow-x-auto w-full border-b border-fnb-blue/30">
        <table className="w-full border-collapse" style={{ minWidth: '1100px' }}>
          <colgroup>
            {columns.map((col) => (
              <col key={col.label} style={{ width: `${col.pct}%` }} />
            ))}
          </colgroup>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.label} className={`text-left py-3 px-4 ${col.pl ?? ''} ${col.px ?? ''} font-roboto font-bold text-sm text-fnb-primary leading-[18px]`}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>

      {results === null ? (
        <div className="flex flex-col items-center justify-center py-24">
          <p className="font-figtree font-bold text-xl text-black text-center">
            Search for customer application by name, app ID, SSN, phone, or email
          </p>
        </div>
      ) : results.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24">
          <p className="font-figtree font-bold text-xl text-black text-center">
            No results found
          </p>
        </div>
      ) : (
        <ApplicationsTable data={results} />
      )}
    </div>
  )
}
