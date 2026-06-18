function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="wood-bg min-h-[100dvh] flex items-center" style={{ paddingTop: 70 }}>
      <div
        className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 items-center"
        style={{ maxWidth: 1280, padding: '0 40px' }}
      >
        {/* Left content: 7 of 12 columns */}
        <div className="lg:col-span-7">
          <h1
            className="text-charcoal hero-enter text-center lg:text-left"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3.125rem, 2rem + 3.5vw, 5.375rem)',
              fontWeight: 900,
              lineHeight: 1.25,
              letterSpacing: '0.005em',
              marginBottom: 32,
            }}
          >
            Unforgettable campaigns start with insight.
          </h1>
          <p
            className="text-charcoal hero-enter-d1 text-center lg:text-left"
            style={{
              fontSize: 'clamp(1.25rem, 1rem + 0.5vw, 1.5rem)',
              fontWeight: 400,
              lineHeight: '36px',
              maxWidth: 590,
              marginBottom: 40,
            }}
          >
            Influencer marketing built for creators, trusted by brands, and designed for results.
          </p>
          <div className="flex flex-wrap gap-4 hero-enter-d2 justify-center lg:justify-start">
            <a
              href="#"
              className="btn-primary"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)',
              }}
            >
              Start your campaign <ArrowIcon />
            </a>
            <a
              href="/influencer-creator-program/"
              className="btn-outline"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)',
              }}
            >
              Earn as a creator <ArrowIcon />
            </a>
          </div>
        </div>
        {/* Right image: 5 of 12 columns */}
        <div className="lg:col-span-5 hero-enter-d3">
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
