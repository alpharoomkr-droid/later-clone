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

      <div className="absolute top-8 right-8 z-20">
        <a href="#" className="btn-primary text-sm! py-2.5! px-5!">
          Start your campaign <ArrowIcon />
        </a>
      </div>

      <div className="relative z-10 max-w-[700px] px-6 lg:px-10 pb-16 lg:pb-24">
        <p className="text-lg text-offline/80 mb-4">
          Our experts plan, run, and optimize influencer campaigns that stand out, scale faster, and win big.
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-[56px] font-extrabold text-white leading-[1.1]" style={{ fontFamily: 'var(--font-heading)' }}>
          The team behind your best campaigns.
        </h2>
      </div>
    </section>
  )
}
