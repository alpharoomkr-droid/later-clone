function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function DecorativePattern() {
  return (
    <svg
      style={{
        position: 'absolute',
        top: '50%',
        right: '-5%',
        transform: 'translateY(-50%)',
        width: '70%',
        height: '120%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      viewBox="0 0 800 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Concentric radiating spiral/wave lines */}
      {[80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600].map((r) => (
        <circle
          key={r}
          cx="400"
          cy="400"
          r={r}
          stroke="rgba(0,0,0,0.04)"
          strokeWidth="1.2"
          fill="none"
        />
      ))}
      {/* Radial spokes for the wave/spiral texture */}
      {Array.from({ length: 24 }, (_, i) => {
        const angle = (i * 15 * Math.PI) / 180
        const x2 = 400 + 620 * Math.cos(angle)
        const y2 = 400 + 620 * Math.sin(angle)
        return (
          <line
            key={`spoke-${i}`}
            x1="400"
            y1="400"
            x2={x2}
            y2={y2}
            stroke="rgba(0,0,0,0.025)"
            strokeWidth="1"
          />
        )
      })}
      {/* Organic curved arcs for a spiral feel */}
      {[100, 180, 260, 340, 420, 500, 580].map((r, i) => {
        const startAngle = (i * 20 * Math.PI) / 180
        const endAngle = startAngle + Math.PI * 1.2
        const x1 = 400 + r * Math.cos(startAngle)
        const y1 = 400 + r * Math.sin(startAngle)
        const x2 = 400 + r * Math.cos(endAngle)
        const y2 = 400 + r * Math.sin(endAngle)
        return (
          <path
            key={`arc-${i}`}
            d={`M ${x1} ${y1} A ${r} ${r} 0 1 1 ${x2} ${y2}`}
            stroke="rgba(0,0,0,0.035)"
            strokeWidth="1"
            fill="none"
          />
        )
      })}
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      className="wood-bg min-h-[100dvh] flex items-center"
      style={{ paddingTop: 70, position: 'relative', overflow: 'hidden' }}
    >
      <DecorativePattern />
      <div
        className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 items-center"
        style={{ maxWidth: 1200, padding: '0 20px', position: 'relative', zIndex: 1 }}
      >
        {/* Left content: 7 of 12 columns */}
        <div className="lg:col-span-7">
          <h1
            className="text-charcoal hero-enter text-center lg:text-left"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3.125rem, 2rem + 3.5vw, 5.375rem)',
              fontWeight: 900,
              lineHeight: 1.0,
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
              href="/influencer-marketing-services"
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
