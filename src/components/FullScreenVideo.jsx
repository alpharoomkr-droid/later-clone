function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function FullScreenVideo() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.ctfassets.net/nfpsrlop6sws/5csCK0NPh18RHfoRkrXFFQ/54d3b7c0330061447e012432c4b28405/home-partnership-fallback-image.jpg"
      >
        <source src="https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage+Full+Screen+Video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="absolute top-8 right-10 z-20">
        <a href="#" className="btn-primary" style={{ fontSize: 14, padding: '10px 20px' }}>
          Start your campaign <ArrowIcon />
        </a>
      </div>

      <div className="relative z-10 max-w-[700px] reveal" style={{ padding: '0 40px 96px' }}>
        <p className="text-offline/80 mb-4" style={{ fontSize: 24, lineHeight: '36px' }}>
          Our experts plan, run, and optimize influencer campaigns that stand out, scale faster, and win big.
        </p>
        <h2
          className="text-white"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 45, fontWeight: 900, lineHeight: '56.25px', letterSpacing: '0.225px' }}
        >
          The team behind your best campaigns.
        </h2>
      </div>
    </section>
  )
}
