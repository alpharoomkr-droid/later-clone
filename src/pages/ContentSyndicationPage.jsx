import { Link } from 'react-router-dom'

export default function ContentSyndicationPage() {
  const steps = [
    {
      num: '01',
      title: 'Centralized content management',
      desc: 'Manage and syndicate high-quality content across retailer sites in one platform.',
    },
    {
      num: '02',
      title: 'Increase content output',
      desc: 'Easily find & repurpose content to share with a wider audience across channels.',
    },
    {
      num: '03',
      title: 'Tap into customer reviews',
      desc: 'Drive ratings & product reviews to outperform the competition in search results.',
    },
    {
      num: '04',
      title: 'Drive retail awareness',
      desc: 'Put products in front of more customers to boost awareness & sales.',
    },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg reveal" style={{ paddingTop: 60, paddingBottom: 0 }}>
        <div className="max-w-[1200px] mx-auto md:px-10 text-center hero-enter" style={{ padding: '0 20px' }}>
          <p
            className="text-charcoal/60 uppercase tracking-widest"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
          >
            Create, Syndicate, Amplify
          </p>
          <h1
            className="ff-heading"
            style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 820, margin: '0 auto 24px' }}
          >
            Stand out with Later's content syndication platform
          </h1>
          <p
            className="hero-enter-d1"
            style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}
          >
            Repurpose impactful influencer content across brand touchpoints and social
            platforms to grow your sales with Later Influence.
          </p>
          <a href="/influencer-marketing-services" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 28 }}>
            Book a demo
          </a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/7ss8lRG5LTXzaNS959ZSJ6/68d3cf6f456dfdb8d7bc07e5de9df530/content-syndication-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Later Content Syndication Platform"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* How it works - numbered steps */}
      <section className="reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto md:px-10" style={{ padding: '0 20px' }}>
          <h2
            className="ff-heading text-center"
            style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}
          >
            Content management tools you need
          </h2>
          <p
            className="text-center"
            style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}
          >
            Everything you need to locate, track, and amplify the best-performing influencer content.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/198PBmY1EzrFqcvd50cCz1/cd088c3fb5dbcc3c5b2164fafe776d2a/content-syndication-management-tools.png?w=1136&h=960&q=70&fm=png"
              alt="Content management tools"
              className="w-full rounded-lg"
            />
            <div>
              {steps.map((s, i) => (
                <div key={i} className={`reveal reveal-d${Math.min(i + 1, 3)}`} style={{ display: 'flex', gap: 20, marginBottom: 32 }}>
                  <span
                    className="ff-heading"
                    style={{ fontSize: 28, fontWeight: 900, color: '#FE3F00', minWidth: 40 }}
                  >
                    {s.num}
                  </span>
                  <div>
                    <h3 className="ff-heading" style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>
                      {s.title}
                    </h3>
                    <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature - Grow online brand awareness */}
      <section className="wood-bg reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto md:px-10" style={{ padding: '0 20px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p
                className="text-charcoal/60 uppercase tracking-widest reveal"
                style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}
              >
                Amplify High Impact Content
              </p>
              <h2
                className="ff-heading reveal reveal-d1"
                style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}
              >
                Grow online brand awareness
              </h2>
              <p
                className="reveal reveal-d2"
                style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 32 }}
              >
                Syndicate authentic content that resonates with your market to build consumer
                trust, drive purchase intent and drive ratings & reviews.
              </p>
              <a href="/influencer-marketing-tools/influencer-content-syndication-platform" className="btn-outline reveal reveal-d3" style={{ fontSize: 15 }}>
                Book a demo
              </a>
            </div>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/7cuZ53yMfBzFGFZJfTzM9C/7f4e350ec2b467208cdcd1f31125b048/content-syndication-brand-awareness.png?w=1136&h=960&q=70&fm=png"
              alt="Grow online brand awareness"
              className="reveal reveal-d2 w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="purple-wood-bg reveal" style={{ padding: '70px 0' }}>
        <div
          className="max-w-[900px] mx-auto md:px-10 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-center"
        >
          <img
            src="https://images.ctfassets.net/nfpsrlop6sws/1WJ3MfWOmvyTZsL2qbypLS/186a4e020709e4fdf7cc8c6cde6c1741/bob-land.png?w=640&h=641&q=50&fm=png"
            alt="Bob Land"
            className="w-full rounded-xl mx-auto max-w-[200px] md:max-w-none"
          />
          <div className="text-center md:text-left">
            <p style={{ fontSize: 20, lineHeight: 1.6, color: '#fff', marginBottom: 24 }}>
              "We're solving for our content scale issues with (Later) since they offer a level
              of moderation and a large enough number of Influencers that target our particular
              audience. Content is king and we're being asked monthly by our Retail partners to
              increase the amount and quality of content. Reviews are an important part so we've
              learned to repurpose our Influencer content in many, many ways and across many
              channels."
            </p>
            <p style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>Bob Land</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
              Dorel Juvenile, Vice President of Consumer Experience
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="reveal text-center" style={{ background: '#000', padding: '70px 0' }}>
        <div className="max-w-[700px] mx-auto md:px-10">
          <h2
            className="ff-heading"
            style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24, color: '#fff' }}
          >
            Harness the power of authentic influencer content
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 32, lineHeight: 1.6 }}>
            Make your influencer content work harder for you with Later's content syndication tools.
          </p>
          <a href="/influencer-marketing-services" className="btn-primary" style={{ fontSize: 16 }}>
            Book a demo
          </a>
        </div>
      </section>
    </div>
  )
}
