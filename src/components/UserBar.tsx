interface UserBarProps {
  banker: string
  responsibility: string
  department: string
  branches: string[]
  selectedBranch?: string
}

export default function UserBar({
  banker = 'Jane Smith',
  responsibility = '1234567890',
  department = 'Mortgage Centralized Sales',
  branches = ['Downtown Pittsburgh'],
  selectedBranch = 'Downtown Pittsburgh',
}: UserBarProps) {
  const fields = [
    { label: 'Banker', value: banker },
    { label: 'Responsibility', value: responsibility },
    { label: 'Your Department', value: department },
  ]

  return (
    <div className="bg-fnb-dove page-x py-3 text-white font-roboto">
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          {fields.map((f) => (
            <div key={f.label} className="text-sm leading-5">
              <span className="font-bold">{f.label}:</span>{' '}
              <span>{f.value}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="font-bold text-sm">Branch</span>
          <select
            defaultValue={selectedBranch}
            className="bg-white rounded-lg px-4 py-2 text-[#444] font-figtree text-sm shadow-[inset_2px_3px_6px_0px_rgba(0,0,0,0.1)] outline-none appearance-none pr-8 cursor-pointer hover:bg-gray-100 transition-colors"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23686868' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
            }}
          >
            {branches.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
