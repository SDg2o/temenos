import NavHeader from './components/NavHeader'
import UserBar from './components/UserBar'
import ApplicationsCard from './components/ApplicationsCard'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-fnb-bg min-h-screen flex flex-col">
      <NavHeader />
      <UserBar
        banker="Jane Smith"
        responsibility="1234567890"
        department="Mortgage Centralized Sales"
        branches={['Downtown Pittsburgh', 'North Hills Branch', 'South Side Branch']}
        selectedBranch="Downtown Pittsburgh"
      />
      <main className="flex flex-col gap-10 flex-1 page-x py-8">
        <div className="flex justify-end">
          <button className="btn-gradient text-white font-figtree font-bold text-base px-5 py-2.5 rounded border border-fnb-dark-blue">
            Start New Application
          </button>
        </div>
        <ApplicationsCard />
      </main>
      <Footer />
    </div>
  )
}

export default App
