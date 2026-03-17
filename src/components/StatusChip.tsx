import type { StatusType } from '../data/applications'

const statusColors: Record<StatusType, string> = {
  'with-customer': 'bg-fnb-sky',
  'signed': 'bg-fnb-blue',
  'saved': 'bg-fnb-green',
  'timeout': 'bg-fnb-red',
}

interface StatusChipProps {
  label: string
  type: StatusType
  reminder?: string
}

export default function StatusChip({ label, type, reminder }: StatusChipProps) {
  return (
    <div className="flex flex-col gap-1 items-start">
      <span className={`${statusColors[type]} text-white font-roboto font-bold text-sm leading-[18px] px-4 h-[25px] flex items-center justify-center rounded-full whitespace-nowrap`}>
        {label}
      </span>
      {reminder && (
        <p className="text-fnb-text text-xs whitespace-nowrap">
          <span className="font-bold">Reminder:</span> {reminder}
        </p>
      )}
    </div>
  )
}
