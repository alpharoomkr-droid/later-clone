import { useState } from 'react'

const navItems = [
  { label: 'For enterprise brands', hasDropdown: true },
  { label: 'For social media managers', hasDropdown: true },
  { label: 'For creators', hasDropdown: true },
  { label: 'Resources', hasDropdown: true },
]

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-page-bg/95 backdrop-blur-md" style={{ zIndex: 999, height: 70 }}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-full" style={{ padding: '0 40px' }}>
        <a href="/" className="flex items-center flex-shrink-0">
          <span className="font-black tracking-tight text-charcoal italic" style={{ fontFamily: 'var(--font-heading)', fontSize: 28 }}>
            Later
          </span>
        </a>

        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1.5 border border-gray-200/60">
            {navItems.map((item, i) => (
              <button
                key={i}
                className="font-medium text-charcoal hover:text-gridglow transition-colors flex items-center gap-1 px-4 py-2 rounded-full hover:bg-gray-50"
                style={{ fontSize: 14 }}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="/login" className="font-medium text-charcoal hover:text-gridglow transition-colors" style={{ fontSize: 14 }}>
            Sign in
          </a>
          <a href="#" className="inline-flex items-center gap-2 bg-charcoal text-white font-bold px-5 py-2.5 rounded-full hover:bg-black transition-colors" style={{ fontSize: 14 }}>
            Get Later <ArrowIcon />
          </a>
        </div>

        <button className="lg:hidden flex flex-col gap-1.5" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className={`w-6 h-0.5 bg-charcoal transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}/>
          <span className={`w-6 h-0.5 bg-charcoal transition-opacity ${mobileOpen ? 'opacity-0' : ''}`}/>
          <span className={`w-6 h-0.5 bg-charcoal transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-page-bg border-t border-gray-100 px-6 py-6">
          {navItems.map((item, i) => (
            <div key={i} className="py-3 border-b border-gray-100">
              <span className="font-semibold text-charcoal">{item.label}</span>
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a href="/login" className="text-center font-semibold text-charcoal">Sign in</a>
            <a href="#" className="inline-flex items-center justify-center gap-2 bg-charcoal text-white font-bold px-5 py-3 rounded-full">
              Get Later <ArrowIcon />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
