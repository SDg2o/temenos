export default function Footer() {
  return (
    <footer className="bg-fnb-blue text-white py-6 page-x relative">
      <div className="flex justify-center mb-4">
        <div className="w-[25px] h-[25px] border-2 border-white rotate-45 flex items-center justify-center">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="-rotate-45">
            <path d="M1 7L6 2L11 7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      <div className="border-t border-white/30 mb-4" />

      <p className="text-center text-sm mb-8">
        First National Bank Financial Center &nbsp;|&nbsp; 626 Washington Place &nbsp;|&nbsp; Pittsburgh, PA 15212
      </p>

      <div className="grid grid-cols-4 gap-8 mb-10 text-base">
        <div>
          <h3 className="font-montserrat font-semibold mb-2">Get in Touch</h3>
          <ul className="font-montserrat space-y-1">
            <li>Find a Branch</li>
            <li>Get our Mobile Apps</li>
            <li>833-BANK-FNB</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-montserrat font-semibold mb-2">Important Links</h3>
          <ul className="font-montserrat space-y-1">
            <li>Corporate Information</li>
            <li>Investors</li>
            <li>Newsroom</li>
            <li>Careers</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Security Center</li>
            <li>Site Map</li>
          </ul>
        </div>
        <div>
          <h3 className="font-montserrat font-semibold mb-2">Digital Banking</h3>
          <ul className="font-montserrat space-y-1">
            <li>Mobile Banking</li>
            <li>Online Banking</li>
            <li>Digital Payments</li>
            <li>Debit &amp; Credit Cards</li>
            <li>ATM Banking</li>
            <li>Telephone Banking</li>
          </ul>
        </div>
        <div>
          <h3 className="font-montserrat font-semibold mb-2">Other Resources</h3>
          <ul className="font-montserrat space-y-1">
            <li>Home Equity Lending</li>
            <li>Mortgage</li>
            <li>Buying Your First Home</li>
            <li>FNB Title</li>
          </ul>
        </div>
      </div>

      <div className="text-xs font-montserrat space-y-2">
        <p>
          Bank deposit products and services provided by First National Bank of Pennsylvania. <strong>Member FDIC</strong>.
        </p>
        <p>Not all products and services are available in all geographic locations. Your eligibility for particular products and services is subject to final determination by F.N.B. Corporation or its affiliates and acceptance.</p>
        <p>Investment and insurance products are not insured by the FDIC or any other federal government agency, are not deposits or financial obligations of the financial institution, are not guaranteed by the financial institution and they do involve investment risk, including possible loss of principal.</p>
        <p>
          &copy; Copyright 2024 F.N.B. Corporation. All Rights Reserved.<br />
          View our address for service of all legal documents.<br />
          1-800-555-5455
        </p>
      </div>
    </footer>
  )
}
