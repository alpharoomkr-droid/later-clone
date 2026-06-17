import { useState } from 'react'

const navItems = [
  {
    label: 'Products',
    items: [
      { label: 'Influencer Marketing Platform', href: '/influencer-marketing-platform/' },
      { label: 'Social Media Management', href: '/social-media-scheduler/' },
      { label: 'Creator Program (Mavely)', href: '/influencer-creator-program/' },
    ]
  },
  {
    label: 'Solutions',
    items: [
      { label: 'Full-Service Programs', href: '/influencer-marketing-services/' },
      { label: 'Earn as a Creator', href: '/influencer-creator-program/' },
    ]
  },
  { label: 'Case Studies', href: '/case-studies/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'Blog', href: '/blog/' },
]

function ArrowIcon({ className = '' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={className}>
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-page-bg/90 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-extrabold tracking-tight text-charcoal" style={{ fontFamily: 'var(--font-heading)' }}>
            Later
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, i) => (
            <div key={i} className="relative"
              onMouseEnter={() => item.items && setOpenDropdown(i)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.items ? (
                <>
                  <button className="text-sm font-semibold text-charcoal hover:text-gridglow transition-colors flex items-center gap-1">
                    {item.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  {openDropdown === i && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-white shadow-lg border border-gray-100 py-2 min-w-[260px]">
                        {item.items.map((sub, j) => (
                          <a key={j} href={sub.href} className="block px-4 py-2.5 text-sm text-charcoal hover:bg-gridglow-10 transition-colors font-medium">
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <a href={item.href} className="text-sm font-semibold text-charcoal hover:text-gridglow transition-colors">
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="/login" className="text-sm font-semibold text-charcoal hover:text-gridglow transition-colors">
            Log in
          </a>
          <a href="#" className="btn-primary text-sm! py-2.5! px-5!">
            Start your campaign <ArrowIcon />
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
              {item.items ? (
                <>
                  <span className="font-semibold text-charcoal">{item.label}</span>
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {item.items.map((sub, j) => (
                      <a key={j} href={sub.href} className="text-sm text-gray-600">{sub.label}</a>
                    ))}
                  </div>
                </>
              ) : (
                <a href={item.href} className="font-semibold text-charcoal">{item.label}</a>
              )}
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a href="/login" className="text-center font-semibold text-charcoal">Log in</a>
            <a href="#" className="btn-primary justify-center">Start your campaign <ArrowIcon /></a>
          </div>
        </div>
      )}
    </nav>
  )
}
