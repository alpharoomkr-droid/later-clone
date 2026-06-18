import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const dropdowns = {
  'For enterprise brands': {
    sections: [
      {
        title: 'Services',
        links: [
          { label: 'Full-service influencer programs', to: '/influencer-marketing-services' },
          { label: 'Social content creation', to: '/influencer-marketing-services/social-media-content-creation' },
          { label: 'Social media management services', to: '/social-media-management-services' },
        ],
      },
      {
        title: 'Platform',
        links: [
          { label: 'Influencer marketing platform', to: '/influencer-marketing-platform' },
          { label: 'Influencer marketing tools', to: '/influencer-marketing-tools' },
          { label: 'Find influencers', to: '/influencer-marketing-tools/find-influencers' },
          { label: 'Influencer outreach', to: '/influencer-marketing-tools/influencer-outreach' },
          { label: 'Influencer management', to: '/influencer-marketing-tools/influencer-management-platform' },
          { label: 'Influencer payments', to: '/influencer-marketing-tools/influencer-payments' },
          { label: 'Influencer analytics', to: '/influencer-marketing-tools/influencer-analytics-platform' },
          { label: 'Campaign platform', to: '/influencer-marketing-tools/influencer-campaign-platform' },
          { label: 'Content syndication', to: '/influencer-marketing-tools/influencer-content-syndication-platform' },
          { label: 'Marketing ROI & EMV', to: '/influencer-marketing-tools/calculate-marketing-roi-emv' },
          { label: 'Shopify integration', to: '/influencer-marketing-tools/shopify-integration' },
        ],
      },
      {
        title: 'By industry',
        links: [
          { label: 'Retail', to: '/retail-influencers' },
          { label: 'Food & Beverage', to: '/food-beverage-influencers' },
          { label: 'Fashion & Beauty', to: '/fashion-beauty-influencers' },
          { label: 'Ecommerce', to: '/ecommerce-influencers' },
          { label: 'CPG', to: '/cpg-influencers' },
        ],
      },
      {
        title: 'Creator types',
        links: [
          { label: 'UGC creators', to: '/ugc-creators' },
          { label: 'Micro-influencers', to: '/micro-influencers' },
          { label: 'Brand ambassadors', to: '/brand-ambassadors' },
          { label: 'YouTubers', to: '/youtubers' },
          { label: 'Influencer network', to: '/influencer-network' },
        ],
      },
    ],
    cta: { label: 'Book a strategy call', to: '/influencer-marketing-services' },
  },
  'For social media managers': {
    sections: [
      {
        title: 'Core tools',
        links: [
          { label: 'Social media scheduler', to: '/social-media-scheduler' },
          { label: 'Social media analytics', to: '/social-media-analytics' },
          { label: 'Social media publishing', to: '/social-media-publishing' },
          { label: 'Social media listening', to: '/social-media-listening' },
          { label: 'Content calendar', to: '/social-media-content-calendar' },
          { label: 'Content creation tools', to: '/content-creation-tools' },
          { label: 'Caption writer', to: '/caption-writer' },
          { label: 'Link in Bio', to: '/link-in-bio' },
          { label: 'Marketing tools', to: '/social-media-marketing-tools' },
          { label: 'Reputation management', to: '/reputation-management-software' },
        ],
      },
      {
        title: 'By platform',
        links: [
          { label: 'Instagram scheduler', to: '/instagram-scheduler' },
          { label: 'TikTok scheduler', to: '/tiktok-scheduler' },
          { label: 'Facebook scheduler', to: '/facebook-scheduler' },
          { label: 'Pinterest scheduler', to: '/pinterest-scheduler' },
          { label: 'YouTube scheduler', to: '/youtube-scheduler' },
          { label: 'Threads scheduler', to: '/threads-scheduler' },
          { label: 'Snapchat scheduler', to: '/snapchat-scheduler' },
        ],
      },
      {
        title: 'For teams',
        links: [
          { label: 'Social media managers', to: '/social-media-managers' },
          { label: 'Small business owners', to: '/small-business-owners' },
          { label: 'Agencies', to: '/later-social-for-agencies' },
          { label: 'Agencies & freelancers', to: '/agencies-freelancers' },
        ],
      },
    ],
    cta: { label: 'Start free trial', to: '/pricing' },
  },
  'For creators': {
    sections: [
      {
        title: 'Earn & grow',
        links: [
          { label: 'Creator program', to: '/influencer-creator-program' },
          { label: 'Affiliate program', to: '/affiliate-program' },
          { label: 'Influencer network', to: '/influencer-network' },
        ],
      },
    ],
    cta: { label: 'Join our network', to: '/influencer-creator-program' },
  },
  'Resources': {
    sections: [
      {
        title: 'Learn',
        links: [
          { label: 'Blog', to: '/blog' },
          { label: 'Resources hub', to: '/resources' },
          { label: 'Case studies', to: '/case-studies' },
        ],
      },
      {
        title: 'Compare',
        links: [
          { label: 'vs Linktree', to: '/linktree-alternative' },
          { label: 'vs Buffer', to: '/buffer-alternative' },
          { label: 'vs Hootsuite', to: '/hootsuite-alternative' },
          { label: 'vs Sprout Social', to: '/sprout-social-alternative' },
          { label: 'vs Planoly', to: '/planoly-alternative' },
          { label: 'vs Canva scheduler', to: '/canva-alternative' },
          { label: 'vs Meta Business Suite', to: '/meta-alternative' },
          { label: 'vs Native posting', to: '/native-posting-alternative' },
        ],
      },
      {
        title: 'Influencer platform',
        links: [
          { label: 'vs Tagger', to: '/tagger-alternative' },
          { label: 'vs GRIN', to: '/grin-alternative' },
          { label: 'vs Captiv8', to: '/captiv8-alternative' },
          { label: 'vs CreatorIQ', to: '/creatoriq-alternative' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'Partners', to: '/partners' },
          { label: 'Pricing', to: '/pricing' },
          { label: 'Influencer pricing', to: '/influencer-marketing-platform/pricing' },
          { label: 'Agreements', to: '/agreements' },
        ],
      },
    ],
  },
}

const navKeys = Object.keys(dropdowns)

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleEnter(key) {
    clearTimeout(timeoutRef.current)
    setOpenDropdown(key)
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-page-bg/95 backdrop-blur-md" style={{ zIndex: 999, height: 70 }}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-full" style={{ padding: '0 20px' }}>
        <Link to="/" className="flex items-center flex-shrink-0">
          <img src="/later-logo.svg" alt="Later Logo" width="112" height="34" />
        </Link>

        <div className="hidden lg:flex items-center" ref={dropdownRef}>
          <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1.5 border border-gray-200/60">
            {navKeys.map((key) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleEnter(key)}
                onMouseLeave={handleLeave}
              >
                <button
                  onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
                  className={`text-charcoal hover:text-gridglow transition-colors flex items-center gap-1 px-2 py-2 rounded-full hover:bg-gray-50 ${openDropdown === key ? 'text-gridglow bg-gray-50' : ''}`}
                  style={{ fontSize: 14, fontWeight: 400 }}
                >
                  {key}
                  <svg
                    width="10" height="6" viewBox="0 0 10 6" fill="none"
                    style={{ transition: 'transform 0.2s', transform: openDropdown === key ? 'rotate(180deg)' : 'none' }}
                  >
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {openDropdown === key && (
                  <div
                    className="absolute top-full left-1/2 bg-white rounded-2xl shadow-xl border border-gray-100"
                    style={{
                      transform: 'translateX(-50%)',
                      marginTop: 8,
                      padding: '24px 28px',
                      minWidth: key === 'For creators' ? 280 : key === 'Resources' ? 520 : 600,
                      maxWidth: 700,
                    }}
                    onMouseEnter={() => handleEnter(key)}
                    onMouseLeave={handleLeave}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${dropdowns[key].sections.length > 3 ? 4 : dropdowns[key].sections.length}, 1fr)`, gap: 24 }}>
                      {dropdowns[key].sections.map((section) => (
                        <div key={section.title}>
                          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#999', marginBottom: 10 }}>
                            {section.title}
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {section.links.map((link) => (
                              <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setOpenDropdown(null)}
                                className="text-charcoal hover:text-gridglow transition-colors"
                                style={{ fontSize: 13, fontWeight: 400, lineHeight: '20px', whiteSpace: 'nowrap' }}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    {dropdowns[key].cta && (
                      <div style={{ borderTop: '1px solid #eee', marginTop: 16, paddingTop: 14 }}>
                        <Link
                          to={dropdowns[key].cta.to}
                          onClick={() => setOpenDropdown(null)}
                          className="inline-flex items-center gap-2 text-gridglow hover:opacity-80 transition-opacity"
                          style={{ fontSize: 14, fontWeight: 700 }}
                        >
                          {dropdowns[key].cta.label} <ArrowIcon />
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/pricing" className="text-charcoal hover:text-gridglow transition-colors" style={{ fontSize: 14, fontWeight: 600 }}>
            Sign in
          </Link>
          <Link to="/pricing" className="inline-flex items-center gap-2 bg-charcoal text-white font-bold px-5 py-2.5 rounded-full hover:bg-black transition-colors" style={{ fontSize: 14 }}>
            Get Later <ArrowIcon />
          </Link>
        </div>

        <button className="lg:hidden flex flex-col gap-1.5" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className={`w-6 h-0.5 bg-charcoal transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}/>
          <span className={`w-6 h-0.5 bg-charcoal transition-opacity ${mobileOpen ? 'opacity-0' : ''}`}/>
          <span className={`w-6 h-0.5 bg-charcoal transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-page-bg border-t border-gray-100 px-6 py-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 70px)' }}>
          {navKeys.map((key) => (
            <div key={key} className="py-3 border-b border-gray-100">
              <button
                className="font-semibold text-charcoal w-full text-left flex justify-between items-center"
                onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
              >
                {key}
                <svg
                  width="10" height="6" viewBox="0 0 10 6" fill="none"
                  style={{ transition: 'transform 0.2s', transform: openDropdown === key ? 'rotate(180deg)' : 'none' }}
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {openDropdown === key && (
                <div className="mt-3 pl-3" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {dropdowns[key].sections.map((section) => (
                    <div key={section.title}>
                      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#999', marginBottom: 6 }}>
                        {section.title}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {section.links.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => { setOpenDropdown(null); setMobileOpen(false) }}
                            className="text-charcoal hover:text-gridglow"
                            style={{ fontSize: 14 }}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Link to="/pricing" className="text-center font-semibold text-charcoal" onClick={() => setMobileOpen(false)}>Sign in</Link>
            <Link to="/pricing" className="inline-flex items-center justify-center gap-2 bg-charcoal text-white font-bold px-5 py-3 rounded-full" onClick={() => setMobileOpen(false)}>
              Get Later <ArrowIcon />
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
