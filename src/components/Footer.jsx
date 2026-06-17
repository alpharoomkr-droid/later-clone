function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const footerLinks = [
  { label: 'AI creator matching', href: '#' },
  { label: 'Book a strategy call', href: '#', hasArrow: true },
  { label: 'Expert Sessions', href: '#' },
  { label: 'Help Center', href: '#' },
]

const socialIcons = [
  { name: 'Instagram', path: 'M7.8 2H16.2C17.7 2 19.1 2.6 20 3.5 20.9 4.4 21.5 5.8 21.5 7.3V16.7C21.5 18.2 20.9 19.6 20 20.5 19.1 21.4 17.7 22 16.2 22H7.8C6.3 22 4.9 21.4 4 20.5 3.1 19.6 2.5 18.2 2.5 16.7V7.3C2.5 5.8 3.1 4.4 4 3.5 4.9 2.6 6.3 2 7.8 2ZM12 8.5C13 8.5 13.9 8.9 14.5 9.5 15.1 10.1 15.5 11 15.5 12 15.5 13 15.1 13.9 14.5 14.5 13.9 15.1 13 15.5 12 15.5 11 15.5 10.1 15.1 9.5 14.5 8.9 13.9 8.5 13 8.5 12ZM12 7C10.6 7 9.3 7.6 8.3 8.5 7.4 9.5 7 10.6 7 12 7 13.4 7.4 14.5 8.3 15.5 9.3 16.4 10.6 17 12 17 13.4 17 14.7 16.4 15.7 15.5 16.6 14.5 17 13.4 17 12 17 10.6 16.6 9.5 15.7 8.5 14.7 7.6 13.4 7 12 7ZM17.5 6.5C17.5 6.1 17.3 5.7 17 5.5 16.8 5.2 16.4 5 16 5 15.6 5 15.2 5.2 15 5.5 14.7 5.7 14.5 6.1 14.5 6.5 14.5 6.9 14.7 7.3 15 7.5 15.2 7.8 15.6 8 16 8 16.4 8 16.8 7.8 17 7.5 17.3 7.3 17.5 6.9 17.5 6.5Z' },
  { name: 'TikTok', path: 'M16.6 5.8C15.9 5 15.5 4 15.5 2.9H12.7V15.4C12.7 16.8 11.5 18 10.1 18 8.7 18 7.5 16.8 7.5 15.4 7.5 14 8.7 12.8 10.1 12.8 10.4 12.8 10.7 12.8 11 12.9V10C10.7 10 10.4 9.9 10.1 9.9 7.1 9.9 4.7 12.3 4.7 15.3 4.7 18.3 7.1 20.7 10.1 20.7 13.1 20.7 15.5 18.3 15.5 15.3V9C16.7 9.9 18.2 10.4 19.8 10.4V7.6C18.5 7.6 17.4 6.9 16.6 5.8Z' },
  { name: 'LinkedIn', path: 'M4.5 3.5C4.5 4.3 3.8 5 3 5 2.2 5 1.5 4.3 1.5 3.5 1.5 2.7 2.2 2 3 2 3.8 2 4.5 2.7 4.5 3.5ZM1.5 7H4.5V21H1.5V7ZM8.5 7H11.3V8.4C11.8 7.5 13 6.8 14.5 6.8 18 6.8 18.5 9.1 18.5 12V21H15.5V12.6C15.5 11.1 15.5 9.2 13.5 9.2 11.5 9.2 11.5 10.8 11.5 12.4V21H8.5V7Z' },
  { name: 'YouTube', path: 'M21.6 7.2C21.4 6.4 20.8 5.8 20 5.6 18.5 5.2 12 5.2 12 5.2 12 5.2 5.5 5.2 4 5.6 3.2 5.8 2.6 6.4 2.4 7.2 2 8.7 2 12 2 12 2 12 2 15.3 2.4 16.8 2.6 17.6 3.2 18.2 4 18.4 5.5 18.8 12 18.8 12 18.8 12 18.8 18.5 18.8 20 18.4 20.8 18.2 21.4 17.6 21.6 16.8 22 15.3 22 12 22 12 22 12 22 8.7 21.6 7.2ZM10 15V9L15.2 12 10 15Z' },
  { name: 'Pinterest', path: 'M12 2C6.5 2 2 6.5 2 12 2 16.1 4.5 19.6 8 21.1 7.9 20.3 7.9 19 8.1 18.1L9.4 12.8C9.4 12.8 9 12 9 10.8 9 8.9 10.1 7.5 11.4 7.5 12.5 7.5 13 8.3 13 9.3 13 10.4 12.3 12 11.9 13.4 11.6 14.6 12.5 15.5 13.7 15.5 15.9 15.5 17.7 13.1 17.7 10 17.7 7.2 15.6 5.2 12.1 5.2 8 5.2 5.5 8.3 5.5 11.5 5.5 12.6 5.9 13.6 6.4 14.3 6.6 14.5 6.6 14.7 6.5 15L6.9 13.8C7 13.6 6.9 13.4 6.7 13.3 6.1 12.6 5.7 11.5 5.7 10.1 5.7 7.6 7.6 4.4 12.4 4.4 16.3 4.4 18.8 7.2 18.8 10.4 18.8 14.3 16.5 17.4 13.2 17.4 12.1 17.4 11 16.8 10.7 16.1L10 18.8C9.7 19.8 9 21.1 8.5 21.8 9.6 22.1 10.8 22.3 12 22.3 17.5 22.3 22 17.8 22 12.3 22 6.5 17.5 2 12 2Z' },
  { name: 'Facebook', path: 'M22 12C22 6.5 17.5 2 12 2S2 6.5 2 12C2 16.9 5.7 21 10.5 21.8V14.9H7.9V12H10.5V9.8C10.5 7.3 12 5.9 14.3 5.9 15.4 5.9 16.5 6.1 16.5 6.1V8.6H15.3C14 8.6 13.5 9.4 13.5 10.2V12H16.3L15.9 14.9H13.5V21.8C18.3 21 22 16.9 22 12Z' },
]

export default function Footer() {
  return (
    <footer className="bg-inverse text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
              {footerLinks.map((link, i) => (
                <a key={i} href={link.href} className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-1">
                  {link.label}
                  {link.hasArrow && <ArrowIcon />}
                </a>
              ))}
            </div>
            <p className="text-sm font-semibold text-white mb-4">Follow us</p>
            <div className="flex items-center gap-4">
              {socialIcons.map((icon, i) => (
                <a key={i} href="#" className="text-white hover:text-gridglow transition-colors" aria-label={icon.name}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold text-white mb-2">Join Our Newsletter</p>
            <p className="text-sm text-white/60 mb-4">Email Address <span className="text-gridglow">*</span></p>
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border border-white/20 text-white px-4 py-3 text-sm placeholder-white/40 focus:outline-none focus:border-white/40"
              />
              <button className="bg-white text-charcoal font-bold px-6 py-3 text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors flex-shrink-0">
                Subscribe <ArrowIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Later. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            {['Sitemap', 'Terms', 'Privacy Policy', 'Cookie Settings'].map((link, i) => (
              <a key={i} href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-10 pb-8 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div
            className="text-[18vw] lg:text-[280px] font-black text-white/10 leading-none tracking-tighter select-none"
            style={{ fontFamily: 'var(--font-heading)', WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}
          >
            Later
          </div>
        </div>
      </div>
    </footer>
  )
}
