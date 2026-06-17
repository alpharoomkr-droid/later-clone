function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function FullScreenVideo() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          The team behind your best campaigns.
        </h2>
        <p className="text-lg lg:text-2xl text-offline/90 mb-8">
          Our experts plan, run, and optimize influencer campaigns that stand out, scale faster, and win big.
        </p>
        <a href="#" className="btn-dark">
          <ArrowIcon /> Start your campaign <ArrowIcon />
        </a>
      </div>
    </section>
  )
}
