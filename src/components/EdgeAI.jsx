function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function EdgeAI() {
  return (
    <>
      <section className="wood-bg min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-20">
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-4xl lg:text-[56px] font-extrabold leading-[1.1] mb-6 text-charcoal" style={{ fontFamily: 'var(--font-heading)' }}>
              Other brands are guessing. You don't have to.
            </h2>
            <p className="text-lg lg:text-xl text-charcoal/60 mb-6 max-w-[480px]">
              Later EdgeAI looks at creator behavior, what's trending, and what people actually buy, so campaigns are built with confidence.
            </p>
            <a href="/influencer-marketing-platform/" className="inline-flex items-center gap-2 text-gridglow font-bold border-b border-gridglow/50 pb-1 hover:border-gridglow transition-colors">
              Learn more <ArrowIcon />
            </a>
          </div>
          <div className="lg:col-span-6">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              <source src="https://later-com.s3.us-east-1.amazonaws.com/web-videos/New+Later+Brand/Homepage-3-OtherBrandsGuessing.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="bg-page-bg min-h-screen flex flex-col items-center justify-center py-20 px-6">
        <div className="max-w-[1000px] mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[56px] xl:text-[64px] font-extrabold leading-[1.1] mb-8 text-charcoal" style={{ fontFamily: 'var(--font-heading)' }}>
            You don't need more creators. You need{' '}
            <span className="text-gridglow">the right ones.</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-10 max-w-[900px]">
          {['Aubrey Ross', 'CJ Khusas', 'Taurlor Moore', 'Tyler Hall', 'Maya Chen'].map((name, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="w-36 h-44 lg:w-44 lg:h-56 overflow-hidden"
                style={{ border: `3px solid ${['#7A63E8', '#FE3F00', '#E8707A', '#7A63E8', '#FE3F00'][i]}` }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-3xl text-gray-400">{name[0]}</span>
                </div>
              </div>
              <span className="text-sm font-medium text-charcoal mt-2">{name}</span>
            </div>
          ))}
        </div>
        <p className="text-lg lg:text-2xl text-charcoal/60 max-w-[700px] mx-auto text-center">
          We handpick creators proven to drive sales and brand lift, with brand fit, safety, and past performance checked upfront.
        </p>
      </section>
    </>
  )
}
