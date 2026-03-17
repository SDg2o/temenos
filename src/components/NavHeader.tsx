const fnbLogo = 'https://www.figma.com/api/mcp/asset/25a0447d-26fb-4fd7-a6d0-5b70dc9253b5'

export default function NavHeader() {
  return (
    <nav className="flex items-center justify-between page-x py-5 bg-white/20">
      <img src={fnbLogo} alt="First National Bank" className="h-[31px] w-[316px] object-contain" />
      <button
        className="text-white font-figtree font-bold text-base px-5 py-2.5 rounded border border-fnb-dark-blue"
        style={{ backgroundImage: 'linear-gradient(90deg, #00387A 6%, #00B8E0 143%)' }}
      >
        Logout
      </button>
    </nav>
  )
}
