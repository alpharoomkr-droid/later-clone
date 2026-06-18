import { Link } from 'react-router-dom'

const LOGOS = [
  {
    src: 'https://images.ctfassets.net/nfpsrlop6sws/2x29rk0Ts3mpCN8A6Ih2eh/a8f8d86faa44e2a47ea9e09149ba5b54/fashion-nova-logo.png',
    alt: 'Fashion Nova',
  },
  {
    src: 'https://images.ctfassets.net/nfpsrlop6sws/4H9dtyZiRpqlcM3SrNJg7h/c7ac6892333695cc6b1b147dc096e2c6/youtube-logo.png',
    alt: 'YouTube',
  },
  {
    src: 'https://images.ctfassets.net/nfpsrlop6sws/3c7Rt6RUcY6rGfMGECeVWe/bd63c6c95a264625f9eb6e980c3f22bc/kylie-cosmetics-logo.png',
    alt: 'Kylie Cosmetics',
  },
  {
    src: 'https://images.ctfassets.net/nfpsrlop6sws/3LOgFjjILbbclDND6uJned/493722dcd2310dd10ed612135c81b817/espn-logo.png',
    alt: 'ESPN',
  },
]

const FEATURES = [
  {
    tag: 'Publish & Schedule',
    title: 'Plan your posts in seconds',
    desc: 'From Instagram to TikTok, Pinterest, LinkedIn, and more — schedule and auto publish your content across all major social media platforms from one calendar.',
    cta: 'Learn more',
    href: '/social-media-scheduler/',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/2OtUG4Yph2oODRIREXxhjk/8aafd2e9534ebc2fa2e474213780e5b8/publish-and-schedule-with_later.png?w=1132&h=892&q=70&fm=png',
  },
  {
    tag: 'Link in Bio Tool',
    title: 'Turn followers into customers with Link in Bio',
    desc: 'Turn your Instagram and TikTok bio into a mini website. Drive traffic, sales, and engagement with a customizable Linkin.bio page that connects followers to your content.',
    cta: 'Learn more',
    href: '/link-in-bio/',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/2rUKFJ7E4uysexvO8FQOAb/89b7cfcb194913d277e8d23900f7dd32/later-link-in-bio-tool-for-tiktok-and-instagram.png?w=1134&h=990&q=70&fm=png',
  },
  {
    tag: 'Content Creation Tools',
    title: 'Create better content, faster',
    desc: 'Search and find unique brand content in seconds. Get creative tools to organize and edit your media, discover UGC, and get hashtag suggestions to boost your reach.',
    cta: 'Learn more',
    href: '/social-content-creation/',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/6Qdh86x214eQCeYF8lvJKs/a9bb430d422cbc5b7c2eb59ca914b605/later-content-creation-tools.png?w=1136&h=890&q=70&fm=png',
  },
  {
    tag: 'Caption Writer Tool',
    title: 'Write Instagram captions faster with AI',
    desc: "Struggling with what to say? Later's AI-powered caption writer generates engaging, on-brand captions so you can spend less time writing and more time growing.",
    cta: 'Learn more',
    href: '/caption-writer/',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/3DDeN1GtHXPcnT6lDCaN1E/1da88fb847b9d306c34df2500743becc/later-caption-writer-tool.png?w=1136&h=1062&q=70&fm=png',
  },
]

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M1 7h12M8 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function SocialMediaMarketingToolsPage() {
  return (
    <div style={{ paddingTop: 70 }}>

      {/* ── Hero ── */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1200px] mx-auto text-center hero-enter" style={{ padding: '0 20px' }}>
          <p
            className="text-charcoal/60 uppercase tracking-widest"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
          >
            LATER SOLUTIONS MADE FOR YOU
          </p>

          <h1
            className="ff-heading hero-enter-d1"
            style={{
              fontSize: 56,
              fontWeight: 900,
              lineHeight: 1.1,
              maxWidth: 780,
              margin: '0 auto 24px',
            }}
          >
            Smarter social media marketing tools
          </h1>

          <p
            className="hero-enter-d2"
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              maxWidth: 640,
              margin: '0 auto 36px',
              color: '#333',
            }}
          >
            All the social media marketing tools you need to plan, schedule,
            analyze, and grow — together in one powerful platform.
          </p>

          <Link
            to="/pricing"
            className="btn-primary hero-enter-d3"
            style={{ fontSize: 16, marginBottom: 28 }}
          >
            Start free trial <ArrowIcon />
          </Link>

          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/Y6c41yvrCSGWRan5PO59L/3e86fc33321bb7d7e0d084fa453ac112/later-social-media-marketing-tools-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Later Social Media Marketing Tools"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── Trusted By ── */}
      <section style={{ padding: '48px 40px' }}>
        <div className="max-w-[1200px] mx-auto reveal" style={{ padding: '0 20px' }}>
          <p
            className="text-center"
            style={{
              fontSize: 13,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              color: '#000',
              opacity: 0.45,
              marginBottom: 32,
            }}
          >
            Trusted by the world's top brands
          </p>
          <div className="flex items-center justify-center flex-wrap gap-12">
            {LOGOS.map(l => (
              <img
                key={l.alt}
                src={l.src}
                alt={l.alt}
                style={{ height: 28, objectFit: 'contain', opacity: 0.7 }}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Section Header ── */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1200px] mx-auto text-center reveal" style={{ padding: '0 20px' }}>
          <p
            className="text-gridglow"
            style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12 }}
          >
            LATER SOCIAL MARKETING TOOLS
          </p>
          <h2
            className="ff-heading"
            style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.15, maxWidth: 600, margin: '0 auto' }}
          >
            Do every social media task faster &amp; easier
          </h2>
        </div>
      </section>

      {/* ── Feature Sections (alternating layout) ── */}
      {FEATURES.map((f, i) => {
        const reversed = i % 2 === 1
        return (
          <section
            key={f.tag}
            className={i % 2 === 0 ? 'wood-bg' : ''}
            style={{ padding: '60px 40px' }}
          >
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-9 items-center reveal" style={{ padding: '0 20px' }}>
              {/* Text column */}
              <div className={reversed ? 'lg:order-2' : ''}>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: 1.5,
                    color: '#FE3F00',
                    marginBottom: 12,
                  }}
                >
                  {f.tag}
                </p>

                <h2
                  className="ff-heading"
                  style={{
                    fontSize: 42,
                    fontWeight: 900,
                    lineHeight: 1.15,
                    marginBottom: 20,
                  }}
                >
                  {f.title}
                </h2>

                <p
                  style={{
                    fontSize: 18,
                    lineHeight: '28px',
                    color: '#000',
                    opacity: 0.7,
                    maxWidth: 480,
                    marginBottom: 32,
                  }}
                >
                  {f.desc}
                </p>

                <Link to={f.href} className="btn-outline" style={{ fontSize: 15 }}>
                  {f.cta} <ArrowIcon />
                </Link>
              </div>

              {/* Image column */}
              <div className={reversed ? 'lg:order-1' : ''}>
                <img
                  src={f.img}
                  alt={f.tag}
                  style={{ width: '100%', borderRadius: 8 }}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        )
      })}

      {/* ── Testimonial ── */}
      <section className="purple-wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[900px] mx-auto reveal">
          <p
            className="text-white/60"
            style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12, textAlign: 'center' }}
          >
            CUSTOMER TESTIMONIAL
          </p>
          <h2
            className="ff-heading text-white text-center"
            style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 48 }}
          >
            Why social media marketers love Later Social
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 items-center">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/5czdqmdPQtpordskGFSKmI/ac71c797e83900c76839758100ea049d/hippeas.png?w=640&h=640&q=50&fm=png"
              alt="HIPPEAS Snacks"
              style={{ width: '100%', borderRadius: 12 }}
              loading="lazy"
            />
            <div>
              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.6,
                  color: '#fff',
                  marginBottom: 24,
                }}
              >
                "Later has been a game-changer for our social media strategy. The
                scheduling, analytics, and content tools help us stay consistent and
                connected with our community every day."
              </p>
              <p style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>
                Bella Ly @hippeas_snacks
              </p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                HIPPEAS Snacks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ padding: '60px 40px', background: '#000', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2
            className="ff-heading"
            style={{
              fontSize: 42,
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: 24,
              color: '#fff',
            }}
          >
            Get the best social media marketing tools in one app
          </h2>
          <p
            style={{
              fontSize: 18,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: 36,
            }}
          >
            Create, edit, and share social media content faster with Later Social.
          </p>
          <Link to="/pricing" className="btn-primary" style={{ fontSize: 16 }}>
            Start free trial <ArrowIcon />
          </Link>
        </div>
      </section>

    </div>
  )
}
