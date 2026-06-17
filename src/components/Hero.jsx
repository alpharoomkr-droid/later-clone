function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="wood-bg min-h-screen flex items-center pt-20 lg:pt-0">
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Unforgettable campaigns start with insight.
          </h1>
          <p className="text-xl lg:text-2xl text-charcoal/70 mb-8 max-w-[540px]">
            Influencer marketing built for creators, trusted by brands, and designed for results.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="btn-primary">
              <ArrowIcon /> Start your campaign <ArrowIcon />
            </a>
            <a href="/influencer-creator-program/" className="btn-outline">
              <ArrowIcon /> Earn as a creator <ArrowIcon />
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
