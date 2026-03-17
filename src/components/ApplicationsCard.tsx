import { useState } from 'react'
import { applications } from '../data/applications'
import ApplicationsTable from './ApplicationsTable'
import SearchTab from './SearchTab'

type Tab = 'current' | 'search' | 'branch'

export default function ApplicationsCard() {
  const [activeTab, setActiveTab] = useState<Tab>('current')

  const tabs: { id: Tab; label: string; sublabel?: string }[] = [
    { id: 'current', label: "Jane's Current Applications" },
    { id: 'search', label: 'Search Customer Application' },
    { id: 'branch', label: 'Branch', sublabel: 'Downtown Pittsburgh' },
  ]

  return (
    <div className="w-full bg-white rounded-[10px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.14),0px_1px_10px_0px_rgba(0,0,0,0.12),0px_2px_4px_-1px_rgba(0,0,0,0.2)] overflow-hidden">
      {/* Header */}
      <div
        className="flex gap-[18px] items-center px-6 py-5"
        style={{ backgroundImage: 'linear-gradient(90deg, #00387A 6%, #00B8E0 143%)' }}
      >
        <h1 className="font-figtree font-bold text-[30px] leading-8 text-white">
          In-Process Applications
        </h1>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-fnb-blue/30 flex h-[60px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex flex-col items-center justify-center px-5 h-[60px] cursor-pointer transition-colors ${
              activeTab === tab.id
                ? 'border-b-[5px] border-fnb-blue bg-white'
                : 'hover:bg-gray-100'
            }`}
          >
            <span className={`font-roboto text-base leading-5 text-fnb-dark-gray ${activeTab === tab.id ? 'font-bold' : ''}`}>
              {tab.label}
            </span>
            {tab.sublabel && (
              <span className="font-roboto text-xs leading-4 text-fnb-dark-gray">{tab.sublabel}</span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'current' && <ApplicationsTable data={applications} />}
        {activeTab === 'search' && <SearchTab />}
        {activeTab === 'branch' && <ApplicationsTable data={applications} />}
      </div>
    </div>
  )
}
