function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function FinalCta() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="https://images.ctfassets.net/nfpsrlop6sws/14NPHzuMEJKlBRgRc70l6o/e63f9c80af6232a5c17e91e93c93d50a/bottom-cta-no-overlay.jpg?fm=webp"
        />
        <img
          src="https://images.ctfassets.net/nfpsrlop6sws/2VNdDdW9uAXJLZDj3eHHBf/84f3db1ce97f3e41f4049705d4fe2894/mobile-bottom-cta-no-overlay.jpg?fm=webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-charcoal/50" />
      <div className="relative z-10 max-w-[700px] mx-auto px-6 py-20 text-center">
        <h2
          className="mb-8"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 70, fontWeight: 900, lineHeight: '87.5px', letterSpacing: '0.35px', color: 'rgb(254, 252, 251)' }}
        >
          When you get it right, it's impossible to ignore.
        </h2>
        <a href="#" className="btn-primary" style={{ fontSize: 18 }}>
          Start your campaign <ArrowIcon />
        </a>
      </div>
    </section>
  )
}
