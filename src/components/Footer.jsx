import { Link } from 'react-router-dom'

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const socialIcons = [
  { name: 'Instagram', path: 'M7.8 2H16.2C17.7 2 19.1 2.6 20 3.5 20.9 4.4 21.5 5.8 21.5 7.3V16.7C21.5 18.2 20.9 19.6 20 20.5 19.1 21.4 17.7 22 16.2 22H7.8C6.3 22 4.9 21.4 4 20.5 3.1 19.6 2.5 18.2 2.5 16.7V7.3C2.5 5.8 3.1 4.4 4 3.5 4.9 2.6 6.3 2 7.8 2ZM12 8.5C13 8.5 13.9 8.9 14.5 9.5 15.1 10.1 15.5 11 15.5 12 15.5 13 15.1 13.9 14.5 14.5 13.9 15.1 13 15.5 12 15.5 11 15.5 10.1 15.1 9.5 14.5 8.9 13.9 8.5 13 8.5 12ZM12 7C10.6 7 9.3 7.6 8.3 8.5 7.4 9.5 7 10.6 7 12 7 13.4 7.4 14.5 8.3 15.5 9.3 16.4 10.6 17 12 17 13.4 17 14.7 16.4 15.7 15.5 16.6 14.5 17 13.4 17 12 17 10.6 16.6 9.5 15.7 8.5 14.7 7.6 13.4 7 12 7ZM17.5 6.5C17.5 6.1 17.3 5.7 17 5.5 16.8 5.2 16.4 5 16 5 15.6 5 15.2 5.2 15 5.5 14.7 5.7 14.5 6.1 14.5 6.5 14.5 6.9 14.7 7.3 15 7.5 15.2 7.8 15.6 8 16 8 16.4 8 16.8 7.8 17 7.5 17.3 7.3 17.5 6.9 17.5 6.5Z' },
  { name: 'TikTok', path: 'M16.6 5.8C15.9 5 15.5 4 15.5 2.9H12.7V15.4C12.7 16.8 11.5 18 10.1 18 8.7 18 7.5 16.8 7.5 15.4 7.5 14 8.7 12.8 10.1 12.8 10.4 12.8 10.7 12.8 11 12.9V10C10.7 10 10.4 9.9 10.1 9.9 7.1 9.9 4.7 12.3 4.7 15.3 4.7 18.3 7.1 20.7 10.1 20.7 13.1 20.7 15.5 18.3 15.5 15.3V9C16.7 9.9 18.2 10.4 19.8 10.4V7.6C18.5 7.6 17.4 6.9 16.6 5.8Z' },
  { name: 'LinkedIn', path: 'M4.5 3.5C4.5 4.3 3.8 5 3 5 2.2 5 1.5 4.3 1.5 3.5 1.5 2.7 2.2 2 3 2 3.8 2 4.5 2.7 4.5 3.5ZM1.5 7H4.5V21H1.5V7ZM8.5 7H11.3V8.4C11.8 7.5 13 6.8 14.5 6.8 18 6.8 18.5 9.1 18.5 12V21H15.5V12.6C15.5 11.1 15.5 9.2 13.5 9.2 11.5 9.2 11.5 10.8 11.5 12.4V21H8.5V7Z' },
  { name: 'YouTube', path: 'M21.6 7.2C21.4 6.4 20.8 5.8 20 5.6 18.5 5.2 12 5.2 12 5.2 12 5.2 5.5 5.2 4 5.6 3.2 5.8 2.6 6.4 2.4 7.2 2 8.7 2 12 2 12 2 12 2 15.3 2.4 16.8 2.6 17.6 3.2 18.2 4 18.4 5.5 18.8 12 18.8 12 18.8 12 18.8 18.5 18.8 20 18.4 20.8 18.2 21.4 17.6 21.6 16.8 22 15.3 22 12 22 12 22 12 22 8.7 21.6 7.2ZM10 15V9L15.2 12 10 15Z' },
  { name: 'Threads', path: 'M12.186 24h-.007C5.461 24 .305 18.627.305 12S5.461 0 12.186 0c6.726 0 11.881 5.373 11.881 12s-5.155 12-11.881 12zm5.441-12.876c-.184-3.548-2.255-5.592-5.6-5.607h-.036c-1.986 0-3.624.86-4.612 2.42l1.697 1.139c.728-1.107 1.87-1.354 2.915-1.354h.025c1.122.007 1.97.334 2.519.97.398.461.665 1.1.8 1.9-1.02-.17-2.13-.213-3.31-.13-3.323.233-5.46 2.135-5.326 4.738.068 1.318.638 2.45 1.604 3.19.816.624 1.864.94 3.024.912 1.528-.038 2.725-.593 3.558-1.65.633-.804 1.032-1.842 1.209-3.165.725.437 1.263 1.011 1.562 1.707.505 1.172.534 3.098-.984 4.69-1.333 1.396-2.935 2.002-5.375 2.02-2.706-.02-4.756-.912-6.098-2.652-1.247-1.615-1.89-3.933-1.912-6.892.022-2.96.665-5.278 1.912-6.892C7.245 3.116 9.295 2.224 12 2.204c2.726.02 4.806.916 6.181 2.664.677.86 1.18 1.928 1.508 3.19l1.914-.494c-.39-1.5-1.002-2.793-1.842-3.864C18.166.867 15.55-.2 12.014-.204h-.028C8.436-.2 5.842.867 4.219 3.7 2.873 5.605 2.163 8.326 2.14 11.987v.026c.023 3.66.733 6.382 2.079 8.087 1.623 2.833 4.217 3.9 7.767 3.9h.028c2.884-.02 5.062-.844 6.826-2.692 2.328-2.44 2.282-5.417 1.493-7.247-.566-1.314-1.66-2.375-3.163-3.063a12.28 12.28 0 00-.543.126zm-5.34 5.452c-1.282.082-2.6-.494-2.663-1.704-.047-.913.655-1.93 3.168-2.107.277-.02.549-.028.815-.028.817 0 1.58.08 2.273.233-.259 2.855-1.814 3.525-3.593 3.606z' },
  { name: 'Pinterest', path: 'M12 2C6.5 2 2 6.5 2 12 2 16.1 4.5 19.6 8 21.1 7.9 20.3 7.9 19 8.1 18.1L9.4 12.8C9.4 12.8 9 12 9 10.8 9 8.9 10.1 7.5 11.4 7.5 12.5 7.5 13 8.3 13 9.3 13 10.4 12.3 12 11.9 13.4 11.6 14.6 12.5 15.5 13.7 15.5 15.9 15.5 17.7 13.1 17.7 10 17.7 7.2 15.6 5.2 12.1 5.2 8 5.2 5.5 8.3 5.5 11.5 5.5 12.6 5.9 13.6 6.4 14.3 6.6 14.5 6.6 14.7 6.5 15L6.9 13.8C7 13.6 6.9 13.4 6.7 13.3 6.1 12.6 5.7 11.5 5.7 10.1 5.7 7.6 7.6 4.4 12.4 4.4 16.3 4.4 18.8 7.2 18.8 10.4 18.8 14.3 16.5 17.4 13.2 17.4 12.1 17.4 11 16.8 10.7 16.1L10 18.8C9.7 19.8 9 21.1 8.5 21.8 9.6 22.1 10.8 22.3 12 22.3 17.5 22.3 22 17.8 22 12.3 22 6.5 17.5 2 12 2Z' },
  { name: 'Facebook', path: 'M22 12C22 6.5 17.5 2 12 2S2 6.5 2 12C2 16.9 5.7 21 10.5 21.8V14.9H7.9V12H10.5V9.8C10.5 7.3 12 5.9 14.3 5.9 15.4 5.9 16.5 6.1 16.5 6.1V8.6H15.3C14 8.6 13.5 9.4 13.5 10.2V12H16.3L15.9 14.9H13.5V21.8C18.3 21 22 16.9 22 12Z' },
]

const footerColumns = [
  {
    header: 'Products + services',
    links: [
      { label: 'Full-service programs', href: '/influencer-marketing-services' },
      { label: 'Influencer marketing platform', href: '/influencer-marketing-platform' },
      { label: 'Social media management', href: '/social-media-scheduler' },
      { label: 'Mavely for Creators', href: '/influencer-creator-program' },
      { label: 'AI creator matching', href: '/influencer-marketing-tools/find-influencers' },
    ],
  },
  {
    header: 'For enterprise brands',
    links: [
      { label: 'Campaign services', href: '/influencer-marketing-services' },
      { label: 'Platform access', href: '/influencer-marketing-platform' },
      { label: 'Our creator network', href: '/influencer-network' },
      { label: 'Our work', href: '/case-studies' },
    ],
    cta: { label: 'Book a strategy call', href: '/influencer-marketing-services' },
  },
  {
    header: 'For social media managers',
    links: [
      { label: 'Social media scheduler', href: '/social-media-scheduler' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Integrations', href: '/social-media-marketing-tools' },
    ],
    cta: { label: 'Start free trial', href: '/pricing' },
  },
  {
    header: 'For creators',
    links: [
      { label: 'Join our campaign network', href: '/influencer-creator-program' },
      { label: 'Mavely affiliate program', href: '/affiliate-program' },
    ],
  },
  {
    header: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Insights and Trends', href: '/resources' },
      { label: 'Guides + templates', href: '/resources' },
      { label: 'Expert Sessions', href: '/resources' },
      { label: 'Help Center', href: '/resources' },
    ],
  },
  {
    header: 'Company',
    links: [
      { label: 'About Later', href: '/partners' },
      { label: 'Careers', href: '/partners' },
      { label: 'Case studies', href: '/case-studies' },
      { label: 'Press + media', href: '/resources' },
      { label: 'Partners', href: '/partners' },
    ],
  },
]

function FooterLink({ label, href }) {
  const isInternal = href.startsWith('/')
  const className = 'text-offline/60 hover:text-white transition-colors block'
  const style = { fontSize: 14, fontFamily: 'var(--font-body)', marginTop: 12 }

  if (isInternal) {
    return (
      <Link to={href} className={className} style={style}>
        {label}
      </Link>
    )
  }
  return (
    <a href={href} className={className} style={style}>
      {label}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="bg-inverse text-offline">
      {/* Main content area */}
      <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
        <div style={{ padding: '70px 0' }}>
          {/* 6-column link grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
            {footerColumns.map((col, i) => (
              <div key={i}>
                <p
                  className="text-offline"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 16,
                    marginBottom: 20,
                  }}
                >
                  {col.header}
                </p>
                {col.links.map((link, j) => (
                  <FooterLink key={j} label={link.label} href={link.href} />
                ))}
                {col.cta && (
                  <a
                    href={col.cta.href}
                    className="text-offline hover:text-white transition-colors flex items-center gap-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: 18,
                      marginTop: 24,
                    }}
                  >
                    {col.cta.label} <ArrowIcon />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social icons + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" style={{ paddingBottom: 48 }}>
          {/* Follow us */}
          <div>
            <p
              className="text-offline"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 16,
                marginBottom: 16,
              }}
            >
              Follow us
            </p>
            <div className="flex items-center gap-4">
              {socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-offline hover:text-white transition-colors"
                  aria-label={icon.name}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <p
              className="text-offline"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 16,
                marginBottom: 8,
              }}
            >
              Join Our Newsletter
            </p>
            <p className="text-offline/60" style={{ fontSize: 14, marginBottom: 16 }}>
              Email Address <span className="text-gridglow">*</span>
            </p>
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/40"
                style={{ padding: '12px 16px', fontSize: 14, fontFamily: 'var(--font-body)' }}
              />
              <button
                className="bg-white text-charcoal hover:bg-gray-100 transition-colors flex items-center gap-2 flex-shrink-0"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 14,
                  padding: '12px 24px',
                }}
              >
                Subscribe <ArrowIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Legal footer bar */}
        <div
          className="border-t border-white/10 flex flex-wrap items-center justify-between gap-4"
          style={{ padding: '24px 0' }}
        >
          <p className="text-offline/40" style={{ fontSize: 12, fontFamily: 'var(--font-body)' }}>
            &copy; 2026 Later. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-1" style={{ fontSize: 12 }}>
            <a href="/agreements" className="text-offline/40 hover:text-offline/60 transition-colors">Sitemap</a>
            <span className="text-offline/40">|</span>
            <a href="/agreements" className="text-offline/40 hover:text-offline/60 transition-colors">Terms</a>
            <span className="text-offline/40">|</span>
            <a href="/agreements" className="text-offline/40 hover:text-offline/60 transition-colors">Privacy Policy</a>
            <span className="text-offline/40">|</span>
            <a href="/agreements" className="text-offline/40 hover:text-offline/60 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>

      {/* Giant "Later" text */}
      <div className="overflow-hidden" style={{ padding: '0 20px' }}>
        <div className="max-w-[1200px] mx-auto" style={{ paddingBottom: 16 }}>
          <div
            className="text-[20vw] lg:text-[300px] leading-none tracking-tighter select-none"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              color: 'rgba(248,242,234,0.15)',
            }}
          >
            Later
          </div>
        </div>
      </div>
    </footer>
  )
}
