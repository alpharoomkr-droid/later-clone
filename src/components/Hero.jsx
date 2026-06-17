function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="wood-bg min-h-screen flex items-center" style={{ paddingTop: 70 }}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-center" style={{ padding: '0 40px' }}>
        <div>
          <h1
            className="text-charcoal hero-enter"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 86,
              fontWeight: 900,
              lineHeight: '86px',
              letterSpacing: '0.43px',
              marginBottom: 32,
            }}
          >
            Unforgettable campaigns start with insight.
          </h1>
          <p
            className="text-charcoal hero-enter-d1"
            style={{ fontSize: 24, fontWeight: 400, lineHeight: '36px', maxWidth: 590, marginBottom: 40 }}
          >
            Influencer marketing built for creators, trusted by brands, and designed for results.
          </p>
          <div className="flex flex-wrap gap-4 hero-enter-d2">
            <a href="#" className="btn-primary">
              Start your campaign <ArrowIcon />
            </a>
            <a href="/influencer-creator-program/" className="btn-outline">
              Earn as a creator <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="hero-enter-d3">
          <img
            src="https://images.ctfassets.net/nfpsrlop6sws/45Vk1pKDRiLbBlRiQEWC5X/ea32e64edd6d607565c1a7f6a4330f00/later-homepage-hero-image.png?fm=webp"
            alt="A reel of creator-produced content from Later influencer marketing campaigns"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
