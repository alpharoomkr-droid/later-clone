import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const featured = {
  slug: 'maruchan',
  name: 'Maruchan',
  desc: "How Maruchan turned a product launch into a Gen Z TikTok obsession, tripling reach goals, hitting 6x engagement benchmarks, and proving that authenticity beats a polished ad every time.",
  img: 'https://images.ctfassets.net/nfpsrlop6sws/2yBEvxxafRzUE8ViKxwce9/476ac11378d67e8006dcd71fa4746dcc/Template_Full_Image.png?w=1920&h=1090&q=50&fm=png',
}

const influenceCaseStudies = [
  { slug: 'american-girl', name: 'American Girl', desc: "How American Girl used Later's influencer platform to promote its Cultural Celebrations Collection.", img: 'https://images.ctfassets.net/nfpsrlop6sws/78I6kvqTZ0Xfu6o0QzUIPS/80b52866b627a1a364b5b78688feef35/casestudy-thumbnail-americangirl.png?w=800&h=450&q=50&fm=png' },
  { slug: 'american-greetings', name: 'American Greetings', desc: "How American Greetings & Later Influence built a powerful influencer marketing program.", img: 'https://images.ctfassets.net/nfpsrlop6sws/2OLFzKI2r15wujKfsa9MEB/162618755effc6e8d8f5ecb77dd3e80e/casestudy-thumbnail-americangreetings.png?w=800&h=450&q=50&fm=png' },
  { slug: 'chobani', name: 'Chobani', desc: "How Chobani leveraged Later's influencer marketing platform to partner with Twitch streamers and drive benchmark-exceeding views.", img: 'https://images.ctfassets.net/nfpsrlop6sws/6a2w54iLNdS9XQrPejjpYz/39ca26757825c845b4e0f48e82e24312/casestudy-thumbnail-chobani.png?w=800&h=450&q=50&fm=png' },
  { slug: 'crumbl-cookies', name: 'Crumbl Cookies', desc: "How Crumbl baked up a winning holiday strategy with Later Influence.", img: 'https://images.ctfassets.net/nfpsrlop6sws/5KIlMCfDGoVz26WuHh4mTl/1adc2656c7d0a060f2248e63f87f1d2e/casestudy-thumbnail-crumbl.png?w=800&h=450&q=50&fm=png' },
  { slug: 'kraft', name: 'Kraft', desc: "How Kraft partnered with Later to drive a double-digit lift in favorability and intent.", img: 'https://images.ctfassets.net/nfpsrlop6sws/6KbJgn6u8DvbD02G90QhFM/19514b5abe250ebcc6a008e721fa927b/casestudy-thumbnail-kraft.png?w=800&h=450&q=50&fm=png' },
  { slug: 'kroger-precision-marketing', name: 'Kroger Precision Marketing', desc: "How Kroger Precision Marketing scaled its influencer program to over 300 campaigns in 1 year.", img: 'https://images.ctfassets.net/nfpsrlop6sws/3rC1Ij6DCSsz6F3HKdUsn4/9ee01df7c5eaa56b8ad14c217a8895bb/casestudy-thumbnail-kroger.png?w=800&h=450&q=50&fm=png' },
  { slug: 'jansport', name: 'JanSport', desc: "How JanSport activated TikTok Creators using Later's influencer marketing platform to amplify Gen-Z brand engagement.", img: 'https://images.ctfassets.net/nfpsrlop6sws/6xDP5N8K2JiJfAUzMDNDqG/95ad91cce6d12d6e47e6dbee3d8abf49/casestudy-thumbnail-jansport.png?w=800&h=450&q=50&fm=png' },
  { slug: 'rosefield', name: 'Rosefield', desc: "How Rosefield's influencer marketing strategy, powered by Later, drove 167% ROAS across 7 global markets.", img: 'https://images.ctfassets.net/nfpsrlop6sws/espfDyE2vhijyqbEmx4sO/f2ac8adad3475733c5b23fe539630510/casestudy-thumbnail-rosefield.png?w=800&h=450&q=50&fm=png' },
  { slug: 'dallas-mavericks', name: 'Dallas Mavericks', desc: "How the Dallas Mavericks used Later to activate influencers & engaged local community all year long.", img: 'https://images.ctfassets.net/nfpsrlop6sws/3KLqYtSReJTjLjKH9CeeMo/2265d3bf14aaff0ee5f913132678f7c6/casestudy-thumbnail-dallasmavericks.png?w=800&h=450&q=50&fm=png' },
]

const socialCaseStudies = [
  { slug: 'artifact-uprising', name: 'Artifact Uprising', desc: "How Artifact Uprising uses Later to save time, build a cohesive feed, and engage with their community.", img: 'https://images.ctfassets.net/nfpsrlop6sws/uxn1YTUsrP9dp4rhKYLCO/18e5d57d4c9fd0e2926ff13843912ae4/casestudy-thumbnail-artifactuprising.png?w=800&h=450&q=50&fm=png' },
  { slug: 'brew-dr-kombucha', name: 'Brew Dr. Kombucha', desc: "Later helps Brew Dr. Kombucha use social media to find the balance between product and purpose.", img: 'https://images.ctfassets.net/nfpsrlop6sws/3EDVX8fJF54CzM8to5CD4q/453820d70b0d9986aeeb46f25a2b1794/casestudy-thumbnail-brewdrkombucha.png?w=800&h=450&q=50&fm=png' },
  { slug: 'meundies', name: 'MeUndies', desc: "Curation & Community: How Later helped MeUndies grow their Instagram following by 40% in just one year.", img: 'https://images.ctfassets.net/nfpsrlop6sws/6jBUYL8AhWszfALZqMF0D8/7c74c11f2973ca0c746263b6d0d20aa2/casestudy-thumbnail-meundies.png?w=800&h=450&q=50&fm=png' },
  { slug: 'swell', name: "S'well", desc: "See how Later helps S'well balance content pillars, manage UGC, and stay organized on social media.", img: 'https://images.ctfassets.net/nfpsrlop6sws/1Csa1PmwqScGIty2NYcUzy/f82f934757ac130372ec491809549de5/casestudy-thumbnail-swell.png?w=800&h=450&q=50&fm=png' },
  { slug: 'goldilocks', name: 'The Goldilocks Goods Story', desc: "How Later helps Goldilocks Goods bring together the power of social media & eco-friendly living.", img: 'https://images.ctfassets.net/nfpsrlop6sws/YI1N5pDeQlnwjUyRUBPQg/3fa282a7e4e76625f3ae46fb5e5c9b3f/casestudy-thumbnail-goldilocks.png?w=800&h=450&q=50&fm=png' },
  { slug: 'stil', name: 'STIL', desc: "How Later helps STIL build their brand, leverage their community, and drive sales from Instagram.", img: 'https://images.ctfassets.net/nfpsrlop6sws/tnC18f7WBuxaoicw1puze/e09c87fce0904ef9798300ff9bbd94b3/casestudy-thumbnail-stil.png?w=800&h=450&q=50&fm=png' },
]

function CaseStudyCard({ study, index }) {
  return (
    <Link
      to={`/case-studies/${study.slug}`}
      className={`reveal reveal-d${(index % 3) + 1}`}
      style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ borderRadius: 16, overflow: 'hidden', background: '#fff', transition: 'transform 0.3s ease, box-shadow 0.3s ease', display: 'flex', flexDirection: 'column', height: '100%' }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
      >
        <div style={{ overflow: 'hidden' }}>
          <img
            src={study.img}
            alt={study.name}
            style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
          />
        </div>
        <div style={{ padding: '24px 24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, lineHeight: 1.3, marginBottom: 8 }}>
            {study.name}
          </h3>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.6, marginBottom: 16, flex: 1 }}>
            {study.desc}
          </p>
          <span
            className="inline-flex items-center gap-2 text-gridglow"
            style={{ fontSize: 15, fontWeight: 600 }}
          >
            Read story <ArrowIcon />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function CaseStudiesPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg reveal" style={{ padding: '80px 40px 64px' }}>
        <div className="max-w-3xl mx-auto text-center hero-enter">
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 64, fontWeight: 900, lineHeight: 1.1 }}>
            Case Studies
          </h1>
        </div>
      </section>

      {/* Featured */}
      <section className="reveal" style={{ padding: '64px 40px' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          <Link
            to={`/case-studies/${featured.slug}`}
            className="featured-grid"
            style={{ textDecoration: 'none', color: 'inherit', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center' }}
          >
            <div style={{ borderRadius: 16, overflow: 'hidden' }}>
              <img
                src={featured.img}
                alt={featured.name}
                style={{ width: '100%', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
              />
            </div>
            <div>
              <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, color: '#FE3F00', letterSpacing: 2, marginBottom: 12 }}>
                Featured
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
                {featured.name}
              </h2>
              <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>
                {featured.desc}
              </p>
              <span
                className="inline-flex items-center gap-2 text-gridglow"
                style={{ fontSize: 16, fontWeight: 600 }}
              >
                Read story <ArrowIcon />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Influence Case Studies */}
      <section className="wood-bg reveal" style={{ padding: '64px 40px 80px' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          <div className="text-center" style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>
              Later Influence Case Studies
            </h2>
            <p style={{ fontSize: 18, color: '#555', maxWidth: 680, margin: '0 auto', lineHeight: 1.6 }}>
              See how top brands use Later's influencer marketing platform to launch campaigns, partner with creators, and drive real results.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, alignItems: 'stretch' }}
            className="case-grid"
          >
            {influenceCaseStudies.map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Social & Link in Bio Case Studies */}
      <section className="reveal" style={{ padding: '64px 40px 80px' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          <div className="text-center" style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>
              Later Social &amp; Link in Bio Case Studies
            </h2>
            <p style={{ fontSize: 18, color: '#555', maxWidth: 680, margin: '0 auto', lineHeight: 1.6 }}>
              Discover how brands and creators use Later to grow their social media presence, drive engagement, and turn followers into customers.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, alignItems: 'stretch' }}
            className="case-grid"
          >
            {socialCaseStudies.map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="purple-wood-bg reveal" style={{ padding: '64px 40px 80px', textAlign: 'center' }}>
        <div className="max-w-2xl mx-auto">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24, color: '#fff' }}>
            Unforgettable campaigns start with insight.
          </h2>
          <Link to="/demo" className="btn-primary" style={{ fontSize: 16 }}>
            Get started <ArrowIcon />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .case-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .featured-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .case-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
