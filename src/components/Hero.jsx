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
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" style={{ padding: '0 40px' }}>
        <div className="lg:col-span-7">
          <h1
            className="text-charcoal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '80.414px',
              fontWeight: 900,
              lineHeight: '80.414px',
              letterSpacing: '0.40207px',
              marginBottom: 16,
            }}
          >
            Unforgettable campaigns start with insight.
          </h1>
          <p
            className="text-charcoal/60 mb-8 max-w-[480px]"
            style={{ fontSize: 24, fontWeight: 400, lineHeight: '36px' }}
          >
            Influencer marketing built for creators, trusted by brands, and designed for results.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="btn-primary">
              Start your campaign <ArrowIcon />
            </a>
            <a href="/influencer-creator-program/" className="btn-outline">
              Earn as a creator <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
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
