import { Link } from 'react-router-dom'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const howItWorksSteps = [
  { title: 'Start with an innovative strategy', desc: 'Maximize the impact of each campaign with a tailor-made strategy.' },
  { title: 'Collaborate with the right influencers', desc: 'We find the best-fit influencers across every industry & platform.' },
  { title: 'Increase content output', desc: 'Sit back, relax, and watch content roll in.' },
  { title: 'Outsource campaign management', desc: "Later's team handles everything from concept to execution." },
  { title: 'Track your performance', desc: 'We optimize campaigns with reliable analytics and maximize your ROI.' },
]

const featureShowcases = [
  {
    tag: 'Power Up Your Brand',
    title: 'Harness the power of influencer storytelling',
    desc: 'Develop a custom strategy that leverages influencer content to amplify your brand voice and drive meaningful engagement across every channel.',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/7zB8p5ejzZyA5wNvK0TrcU/a68adeda7eeb9655406b37f0bd1acb26/power-up-your-brand-with-later.png?w=1136&h=960&q=70&fm=png',
    direction: 'ltr',
  },
  {
    tag: 'Strategic Alignment',
    title: 'Find the right influencer for the best content',
    desc: 'We find the best-fit influencer for your unique brand, ensuring authentic partnerships that resonate with your target audience and deliver results.',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/3IIfA8DSZiyiGcbZ1kFafi/3cc326eb077cac1e4816afc30234a0fc/find-the-right-influencer-with-later.png?w=1136&h=960&q=70&fm=png',
    direction: 'rtl',
  },
  {
    tag: 'Campaign Insights',
    title: 'Social media content backed by data',
    desc: "Later's Services team provides reliable metrics that make every dollar count, giving you clear visibility into what's working and where to scale.",
    image: 'https://images.ctfassets.net/nfpsrlop6sws/1SL2vZ6J7y055OPVqNm9P9/84beeff370622cb00f14cd3cdac1b03d/get-campaign-insights-with-later.png?w=1134&h=960&q=70&fm=png',
    direction: 'ltr',
  },
]

export default function SocialContentCreationPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: 70 }}>

      {/* Hero */}
      <section className="wood-bg reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ padding: '0 20px' }}>
          <div>
            <span
              className="hero-enter inline-block text-gridglow"
              style={{
                fontSize: 14,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: 20,
              }}
            >
              Influencer Services
            </span>
            <h1
              className="text-charcoal hero-enter-d1"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 72,
                fontWeight: 900,
                lineHeight: '78px',
                letterSpacing: '0.36px',
                marginBottom: 24,
              }}
            >
              Content creation services that drive brand growth
            </h1>
            <p
              className="text-charcoal/70 hero-enter-d2"
              style={{ fontSize: 20, lineHeight: '30px', maxWidth: 520, marginBottom: 36 }}
            >
              Work with reliable influencers to create brand content that connects and converts.
            </p>
            <div className="hero-enter-d3">
              <Link to="/influencer-marketing-services" className="btn-primary" style={{ fontSize: 18 }}>
                Book a demo <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="hero-enter-d3">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/4f3MSfnXAm7u2dC2rnOboh/53202345a6ad900c076e3c901a9b5beb/later-content-creation-services-hero.png?w=1136&h=960&q=80&fm=png"
                alt="Later content creation services"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="reveal" style={{ backgroundColor: '#FEFCFB', padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ padding: '0 20px' }}>
          <div className="reveal">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/3J3Fl89cMX8DVYKUp7L3so/75af675062542af1d331099023573945/later-content-creation-services-how-it-works.png?w=1136&h=960&q=70&fm=png"
              alt="How content creation services work"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="reveal reveal-d1">
            <h2
              className="text-charcoal"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 52,
                fontWeight: 900,
                lineHeight: '58px',
                letterSpacing: '0.26px',
                marginBottom: 24,
              }}
            >
              High-impact content, easy collaboration
            </h2>
            <div className="flex flex-col gap-6">
              {howItWorksSteps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 18,
                      fontWeight: 900,
                      color: '#FE3F00',
                      minWidth: 32,
                      marginTop: 2,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  <div>
                    <h3
                      className="text-charcoal"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 20,
                        fontWeight: 900,
                        lineHeight: '26px',
                        marginBottom: 6,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-charcoal/60" style={{ fontSize: 16, lineHeight: '24px' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcases */}
      {featureShowcases.map((feature, i) => (
        <section
          key={i}
          className={`reveal ${i % 2 === 1 ? 'wood-bg' : ''}`}
          style={{ backgroundColor: i % 2 === 0 ? '#FEFCFB' : undefined }}
        >
          <div
            className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
           style={{ padding: '0 20px' }}>
            <div className={`reveal ${feature.direction === 'rtl' ? 'lg:order-2' : ''}`}>
              <span
                className="text-gridglow"
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  display: 'block',
                  marginBottom: 16,
                }}
              >
                {feature.tag}
              </span>
              <h2
                className="text-charcoal"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 48,
                  fontWeight: 900,
                  lineHeight: '54px',
                  letterSpacing: '0.24px',
                  marginBottom: 20,
                }}
              >
                {feature.title}
              </h2>
              <p className="text-charcoal/70" style={{ fontSize: 18, lineHeight: '28px', maxWidth: 480, marginBottom: 32 }}>
                {feature.desc}
              </p>
              <Link to="/influencer-marketing-services" className="btn-outline" style={{ fontSize: 16 }}>
                Learn more <ArrowIcon />
              </Link>
            </div>
            <div className={`reveal reveal-d1 ${feature.direction === 'rtl' ? 'lg:order-1' : ''}`}>
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      ))}

      {/* Testimonial */}
      <section className="wood-bg reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[900px] mx-auto">
          <div style={{ backgroundColor: '#fff', borderRadius: 16, padding: '56px 48px' }}>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/7Dr1RyEvdd4HgcVTvnfa8B/ce5f69c111c76763d8cbef8947e53d07/brooklyn-benjestorf.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg"
                alt="Brooklyn Benjestorf"
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                loading="lazy"
              />
              <div>
                <p
                  className="text-charcoal"
                  style={{ fontSize: 20, lineHeight: '32px', fontStyle: 'italic', marginBottom: 24 }}
                >
                  "I have become a strong influencer marketing manager through working with the Later strategy team on building our overall brand strategy as it relates to the space, as well as how we approach each campaign and navigate how best to communicate with influencers to get the content that we want."
                </p>
                <p className="text-charcoal" style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
                  Brooklyn Benjestorf
                </p>
                <p className="text-charcoal/60" style={{ fontSize: 14 }}>
                  Social Media & Influencer Marketing Manager, TomboyX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="purple-wood-bg reveal" style={{ padding: '70px 0' }}>
        <div className="max-w-[760px] mx-auto text-center">
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 64,
              fontWeight: 900,
              lineHeight: '72px',
              letterSpacing: '0.32px',
              color: '#FEFCFB',
              marginBottom: 20,
            }}
          >
            Content creation services that take your brand to the next level
          </h2>
          <p
            style={{
              fontSize: 20,
              lineHeight: '30px',
              color: 'rgba(254,252,251,0.75)',
              marginBottom: 36,
            }}
          >
            Create the next best influencer campaign with Later's Services team.
          </p>
          <Link to="/influencer-marketing-services" className="btn-primary" style={{ fontSize: 18 }}>
            Book a demo <ArrowIcon />
          </Link>
        </div>
      </section>

    </div>
  )
}
