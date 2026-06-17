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
          style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: '70px', letterSpacing: '0.28px', marginBottom: 50 }}
        >
          The latest from Later.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 reveal reveal-d1">
          <div className="lg:col-span-7 flex flex-col gap-6">
            {articles.filter(a => !a.large).map((article, i) => (
              <a key={i} href={article.href} className="group flex flex-col sm:flex-row gap-4 hover:opacity-80 transition-opacity">
                <div className="sm:w-1/2 aspect-video overflow-hidden bg-gray-100">
                  <img src={article.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="sm:w-1/2 flex flex-col justify-center">
                  <span className="text-gridglow uppercase mb-2" style={{ fontSize: 14, fontWeight: 800, letterSpacing: '0.14px' }}>{article.tag}</span>
                  <h3
                    className="text-charcoal group-hover:text-gridglow transition-colors"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: 30, fontWeight: 700, lineHeight: '37.5px', letterSpacing: '0.15px' }}
                  >
                    {article.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
          <div className="lg:col-span-5">
            {articles.filter(a => a.large).map((article, i) => (
              <a key={i} href={article.href} className="group block hover:opacity-80 transition-opacity h-full">
                <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
                  <img src={article.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <span className="font-bold text-gridglow uppercase tracking-wider mb-2 block" style={{ fontSize: 12 }}>{article.tag}</span>
                <h3
                  className="text-charcoal group-hover:text-gridglow transition-colors"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: 30, fontWeight: 700, lineHeight: '37.5px', letterSpacing: '0.15px' }}
                >
                  {article.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
