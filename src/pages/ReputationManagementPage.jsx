import { Link } from 'react-router-dom'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const valueCards = [
  { title: 'See more sales from loyal customers', desc: 'Turn happy customers into repeat buyers with loyalty programs, reviews, and referrals that drive real revenue.' },
  { title: 'Connect with your audience', desc: 'Engage your community with authentic interactions, user-generated content, and meaningful conversations.' },
  { title: 'Build lasting trust', desc: 'Earn credibility through social proof, verified reviews, and consistent brand experiences across every touchpoint.' },
]

const steps = [
  { num: '01', title: 'Collaborate with influencers', desc: 'Partner with trusted voices who authentically represent your brand and reach new audiences.' },
  { num: '02', title: 'Get actionable customer feedback', desc: 'Collect and analyze reviews and ratings to understand what your customers really think.' },
  { num: '03', title: 'Create lasting community', desc: 'Build an engaged community of brand advocates who spread the word organically.' },
  { num: '04', title: 'Collect user-generated content', desc: 'Curate authentic content from real customers to fuel your marketing across every channel.' },
  { num: '05', title: 'Reputation management services', desc: 'Get expert support to monitor, manage, and grow your brand reputation at scale.' },
]

const features = [
  {
    title: 'Generate Social Proof',
    desc: 'Showcase real customer experiences to build trust and influence purchasing decisions. From reviews to UGC, Later helps you collect and display the proof that moves people to buy.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/73Z4ukiq2DBeqg3FQJXQq/9583e651905d70f7e60a6e79efeea6fa/generate-social-proof.png?w=1136&h=960&q=70&fm=png',
    alt: 'Generate Social Proof',
  },
  {
    title: 'Collect Ratings & Reviews',
    desc: 'Automatically request, collect, and manage ratings and reviews from your customers. Display them where they matter most to drive conversions and build credibility.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/2exS65UDpw4V3aJuhwcqJi/75523ea6ecb90054b79aea9bb7ce4867/collect-ratings-and-reviews.png?w=1136&h=960&q=70&fm=png',
    alt: 'Collect Ratings and Reviews',
  },
  {
    title: 'Create Loyalty Programs',
    desc: 'Reward your most loyal customers and turn them into brand ambassadors. Later makes it easy to design, launch, and manage loyalty programs that keep customers coming back.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/72UN4ep6PW8KDF1SbNWByC/be1883e4f71d26a9b57c1d3729eeea73/create-loyalty-programs.png?w=1136&h=960&q=70&fm=png',
    alt: 'Create Loyalty Programs',
  },
]

export default function ReputationManagementPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: 70 }}>

      {/* Hero */}
      <section className="wood-bg" style={{ padding: '80px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p
              className="text-gridglow"
              style={{ fontSize: 14, fontWeight: 700, letterSpacing: 2, marginBottom: 16, textTransform: 'uppercase' }}
            >
              Reputation Management Platform
            </p>
            <h1
              className="ff-heading text-charcoal"
              style={{ fontSize: 64, fontWeight: 900, lineHeight: '68px', letterSpacing: '0.32px', marginBottom: 24 }}
            >
              Later&rsquo;s best-in-class reputation management software
            </h1>
            <p
              className="text-charcoal"
              style={{ fontSize: 20, lineHeight: '32px', maxWidth: 520, marginBottom: 32, opacity: 0.7 }}
            >
              Show the world the best version of your brand. Later&rsquo;s reputation management platform helps you build trust, collect reviews, and turn customers into advocates.
            </p>
            <Link to="/demo" className="btn-primary" style={{ fontSize: 18 }}>
              Book a demo <ArrowIcon />
            </Link>
          </div>
          <div className="reveal reveal-d1">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/bnNRVSrGYVTuSE1dqCIaw/b9f5dceaeb037ff70c3a0eeac1aa87a9/reputation-management-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Later reputation management software"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section style={{ padding: '100px 40px', backgroundColor: '#FEFCFB' }}>
        <div className="max-w-[1440px] mx-auto">
          <h2
            className="ff-heading text-charcoal text-center reveal"
            style={{ fontSize: 48, fontWeight: 900, lineHeight: '54px', marginBottom: 64, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}
          >
            Stand out (in the ways you want to)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal reveal-d1">
            {valueCards.map((card, i) => (
              <div
                key={i}
                className="p-8"
                style={{ backgroundColor: '#F8F2EA', borderTop: '3px solid #FE3F00' }}
              >
                <h3
                  className="ff-heading text-charcoal"
                  style={{ fontSize: 22, fontWeight: 700, lineHeight: '28px', marginBottom: 12 }}
                >
                  {card.title}
                </h3>
                <p className="text-charcoal" style={{ fontSize: 16, lineHeight: '26px', opacity: 0.65 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbered Steps */}
      <section className="wood-bg" style={{ padding: '100px 40px' }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p
              className="text-gridglow"
              style={{ fontSize: 14, fontWeight: 700, letterSpacing: 2, marginBottom: 16, textTransform: 'uppercase' }}
            >
              How Later Influence Works
            </p>
            <h2
              className="ff-heading text-charcoal"
              style={{ fontSize: 48, fontWeight: 900, lineHeight: '54px', marginBottom: 48 }}
            >
              Go from liked to loved
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {steps.map((s) => (
                <div key={s.num} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <span
                    className="ff-heading text-gridglow"
                    style={{ fontSize: 28, fontWeight: 900, lineHeight: '34px', minWidth: 36 }}
                  >
                    {s.num}
                  </span>
                  <div>
                    <h3
                      className="ff-heading text-charcoal"
                      style={{ fontSize: 20, fontWeight: 700, lineHeight: '26px', marginBottom: 4 }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-charcoal" style={{ fontSize: 16, lineHeight: '26px', opacity: 0.65 }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal reveal-d1">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/4ATAZurnAOpqrKrskxgVIq/887db5e08dd8d2de4e0817b134e0340d/how-later-influence-works.png?w=1136&h=960&q=70&fm=png"
              alt="How Later Influence works"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Feature Sections (alternating) */}
      {features.map((feat, i) => (
        <section
          key={i}
          style={{ padding: '100px 40px', backgroundColor: i % 2 === 0 ? '#FEFCFB' : '#F8F2EA' }}
        >
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`reveal ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <h2
                className="ff-heading text-charcoal"
                style={{ fontSize: 48, fontWeight: 900, lineHeight: '54px', marginBottom: 20 }}
              >
                {feat.title}
              </h2>
              <p className="text-charcoal" style={{ fontSize: 18, lineHeight: '30px', opacity: 0.7, maxWidth: 500 }}>
                {feat.desc}
              </p>
            </div>
            <div className={`reveal reveal-d1 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <img
                src={feat.img}
                alt={feat.alt}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      ))}

      {/* Testimonial */}
      <section className="purple-wood-bg" style={{ padding: '100px 40px' }}>
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 reveal">
          <div style={{ flex: 1 }}>
            <p
              className="text-white"
              style={{ fontSize: 32, lineHeight: '44px', fontWeight: 400, marginBottom: 32 }}
            >
              &ldquo;Later&rsquo;s reputation management tools have transformed how we connect with our community and build lasting brand loyalty. The platform makes it easy to collect authentic feedback and turn it into action.&rdquo;
            </p>
            <p className="text-white" style={{ fontSize: 16, fontWeight: 700 }}>
              Drew McGowan
            </p>
            <p className="text-white" style={{ fontSize: 14, opacity: 0.7 }}>
              Clif Bar &amp; Company
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/7DfjliJUsF4VCh2qrwjgn3/764daf6de35ceab9f198dfa14f05e560/clif-logo.png?w=616&h=616&q=50&fm=png"
              alt="Clif Bar & Company"
              style={{ width: 200, height: 200, borderRadius: 12, objectFit: 'contain', backgroundColor: 'rgba(255,255,255,0.1)', padding: 24 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '120px 40px', backgroundColor: '#000' }}>
        <div className="max-w-[800px] mx-auto text-center reveal">
          <h2
            className="ff-heading"
            style={{ fontSize: 56, fontWeight: 900, lineHeight: '62px', color: '#FEFCFB', marginBottom: 32 }}
          >
            Grow your brand with Later&rsquo;s reputation management software
          </h2>
          <Link to="/demo" className="btn-primary" style={{ fontSize: 18 }}>
            Book a demo <ArrowIcon />
          </Link>
        </div>
      </section>

    </div>
  )
}
