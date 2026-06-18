const articles = [
  {
    tag: 'Expert Sessions',
    title: 'Catch up on our latest expert session Made You Look episode 2: Celebrity sells, community scales',
    href: '/resources/expert-sessions/made-you-look/may-2026/',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/2DT687Lmu2qKXGHvqmZKC9/644d77f61bc309a16ef44c9b29a13975/Ep2-MadeYouLook-Latest_2x.png?fm=webp',
  },
  {
    tag: 'Blog',
    title: 'Twenty 2026 Creator Economy Predictions',
    href: '/blog/twenty-2026-creator-economy-predictions/',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/csF10rKzwmQpOt34jHDuk/f55342a003c9cb7e298ec36e04adbd2d/featured-4.jpg?fm=webp',
  },
  {
    tag: 'Report',
    title: 'The Strategic Turning Point: 2025 State of Influencer Marketing',
    href: '/resources/report/state-of-influencer/',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/3YpPgpAo7omQsRCNp8DfWv/da8efc771126b48d675339a45fcf6fb4/featured-3.jpg?fm=webp',
    large: true,
  },
]

export default function LatestContent() {
  return (
    <section style={{ backgroundColor: '#F8F2EA', padding: '88px 0' }}>
      <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
        <h2
          className="text-charcoal text-center reveal"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 30, fontWeight: 900, lineHeight: '37.5px', letterSpacing: '0.15px', marginBottom: 50 }}
        >
          The latest from Later.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 reveal reveal-d1">
          <div className="lg:col-span-7 flex flex-col gap-6">
            {articles.filter(a => !a.large).map((article, i) => (
              <a key={i} href={article.href} className="purple-wood-bg group flex flex-col sm:flex-row overflow-hidden hover:opacity-90 transition-opacity" style={{ minHeight: 205, borderRadius: 8 }}>
                <div className="sm:w-1/2 overflow-hidden">
                  <img src={article.image} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="sm:w-1/2 flex flex-col justify-center p-5">
                  <span className="uppercase mb-2" style={{ fontSize: 14, fontWeight: 800, letterSpacing: '0.14px', color: '#F8F2EA', border: '1px solid #F8F2EA', display: 'inline-block', padding: '0.75rem', width: 'fit-content' }}>{article.tag}</span>
                  <h3
                    className="text-white group-hover:text-offline transition-colors"
                    style={{ fontFamily: 'var(--font-body)', fontSize: 18, fontWeight: 700, lineHeight: '24px' }}
                  >
                    {article.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
          <div className="lg:col-span-5">
            {articles.filter(a => a.large).map((article, i) => (
              <a key={i} href={article.href} className="purple-wood-bg group block hover:opacity-90 transition-opacity h-full overflow-hidden" style={{ borderRadius: 8 }}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={article.image} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="uppercase mb-2 block" style={{ fontSize: 14, fontWeight: 800, color: '#F8F2EA', border: '1px solid #F8F2EA', display: 'inline-block', padding: '0.75rem' }}>{article.tag}</span>
                  <h3
                    className="text-white group-hover:text-offline transition-colors mt-2"
                    style={{ fontFamily: 'var(--font-body)', fontSize: 18, fontWeight: 700, lineHeight: '24px' }}
                  >
                    {article.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
