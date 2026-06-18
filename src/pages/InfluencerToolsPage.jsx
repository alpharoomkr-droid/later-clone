import { Link } from 'react-router-dom'

const superchargeCards = [
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/XkijZI8n9oUK1qXY9vCAb/96e0a5872c9b289a8424c6c42ed989a7/Search.png',
    title: 'Find the right influencers',
    desc: 'Discover our database of over 10M+ trusted influencers.',
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/1uT44PqVqmwMoRhV7xzgkN/0c77c42ca3e45d46b9d134f1c1b208d7/rocket-icon.png',
    title: 'Scale your influencer program',
    desc: 'Create successful campaigns & amplify your results.',
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/6C3UHYMARpRxRm6Uzw1qu1/1de9b3553e4d56d97a15f6f9f610a14d/icon-optimize-blue.png',
    title: 'Optimize influencer campaigns',
    desc: 'Maximize your influencer spend at every turn.',
  },
]

const howItWorksSteps = [
  { title: 'Influencer search', desc: 'Find influencers using our influencer search tool to create authentic brand content across all social platforms.' },
  { title: 'Ambassador programs', desc: 'Create your own scalable brand ambassador or employee advocacy program.' },
  { title: 'Multi-platform content creation', desc: 'Syndicate creator content to leverage successful campaigns across your social platforms, website, and beyond.' },
  { title: 'Ratings & reviews', desc: "Use your influencer programs to drive ratings & reviews that boost consumer loyalty and increase customers' trust." },
  { title: 'Referral programs', desc: 'Grow your sales and reach new customers in your industry with trackable referral codes and programs.' },
]

const featureSections = [
  {
    eyebrow: 'FIND & RECRUIT INFLUENCERS',
    title: 'Streamline influencer discovery',
    desc: 'Search, vet, and recruit the right influencers for your brand with powerful discovery tools and detailed creator profiles.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/OgkIOHbBCDi3NNDuNBRsm/f0e49c80de1de72b60c3d7d6f1efe069/influencer-discovery.png?w=1136&h=960&q=70&fm=png',
    cta: 'Learn more',
  },
  {
    eyebrow: 'INFLUENCER CAMPAIGN PLATFORM',
    title: 'Flexible campaigns tailored for your brand',
    desc: 'Launch and manage campaigns with customizable workflows, automated briefs, and seamless creator collaboration.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/1UBp2txZPXZqe2mIVbQn0e/bf43b1b183485afd9373e1dcb0781cc5/flexible-campaigns-tailored-to-your-brand.png?w=1136&h=960&q=70&fm=png',
    cta: 'Learn more',
  },
  {
    eyebrow: 'INFLUENCER MANAGEMENT PLATFORM',
    title: 'Manage communication & build relationships with ease',
    desc: 'Centralize creator conversations, track deliverables, and nurture long-term partnerships all in one place.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/1jpO2TbDAZnp5zetjRsxHn/80b75c5b94d947cc0c00c4377220356d/manage-communication-and-build-relationships-with-ease.png?w=1166&h=960&q=70&fm=png',
    cta: 'Learn more',
  },
  {
    eyebrow: 'CONTENT SYNDICATION PLATFORM',
    title: 'Extend your reach & easily syndicate content',
    desc: 'Repurpose top-performing influencer content across your owned channels, ads, and website to maximize ROI.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/ADkeKxfFp6xIRTecsK7lA/cd94193f6d0d5408d95a04770828942a/extend-your-reach-and-easily-syndicate-content.png?w=1170&h=960&q=70&fm=png',
    cta: 'Learn more',
  },
  {
    eyebrow: 'STREAMLINE INFLUENCER PAYMENTS',
    title: 'Manage campaigns & payments',
    desc: 'Simplify creator compensation with automated payments, budget tracking, and transparent financial reporting.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/3nwNRdZgJLIyEs1LLq8woq/d5a556b99cd088aac96ae52c7734281c/manage-campaigns-and-payments.png?w=1136&h=960&q=70&fm=png',
    cta: 'Learn more',
  },
  {
    eyebrow: 'INFLUENCER ANALYTICS',
    title: 'Track, measure, and optimize',
    desc: 'Get real-time campaign analytics, audience insights, and performance benchmarks to continuously improve your results.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/2NXItmiPGIkgXwpEGqsVbq/e94137d353cb11b77f51311516fad43b/track-measuer-and-optimize.png?w=1162&h=960&q=70&fm=png',
    cta: 'Learn more',
  },
  {
    eyebrow: 'MEASURE ROI & EMV',
    title: "Show your campaigns' impact",
    desc: 'Prove the value of influencer marketing with earned media value calculations, ROI tracking, and executive-ready reports.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/2IOOfvB5wKr2vpX51ToxwV/df2014c76308a0ed0364eb5a807a539e/influencer-tools-roi-earned-media-value.png?w=1136&h=960&q=70&fm=png',
    cta: 'Learn more',
  },
]

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function InfluencerToolsPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: 70 }}>

      {/* Hero */}
      <section className="wood-bg" style={{ padding: '100px 0 80px' }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ padding: '0 40px' }}>
          <div>
            <p
              className="text-gridglow hero-enter"
              style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 20 }}
            >
              Growth starts here
            </p>
            <h1
              className="text-charcoal hero-enter-d1"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 72,
                fontWeight: 900,
                lineHeight: '76px',
                letterSpacing: '0.36px',
                marginBottom: 24,
              }}
            >
              Influencer marketing tools that drive revenue
            </h1>
            <p
              className="text-charcoal/70 hero-enter-d2"
              style={{ fontSize: 20, lineHeight: '30px', maxWidth: 520, marginBottom: 36 }}
            >
              Power your influencer marketing strategy with Later Influence's tools designed to help you grow, scale, and drive the results you need.
            </p>
            <div className="hero-enter-d3">
              <a href="#" className="btn-primary" style={{ fontSize: 18 }}>
                Book a demo <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="hero-enter-d3">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/3aDhSixTDPCkFOjyPszgDQ/de86eefe67c9e740c39642a4d68f8d53/influencer-marketing-tools-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Later influencer marketing tools dashboard"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Supercharge */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="max-w-[700px] mx-auto text-center mb-16 reveal">
            <h2
              className="text-charcoal mb-4"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 52, fontWeight: 900, lineHeight: '58px', letterSpacing: '0.26px' }}
            >
              Supercharge your influencer marketing
            </h2>
            <p className="text-charcoal/60" style={{ fontSize: 20, lineHeight: '30px' }}>
              Tools to navigate the influencer campaign lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {superchargeCards.map((card, i) => (
              <div
                key={i}
                className={`reveal reveal-d${i + 1} text-center`}
                style={{ padding: '48px 32px', backgroundColor: '#F8F2EA', borderRadius: 12 }}
              >
                <img src={card.icon} alt="" className="mx-auto mb-6" style={{ width: 56, height: 56 }} loading="lazy" />
                <h3
                  className="text-charcoal mb-3"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: 26, fontWeight: 900, lineHeight: '32px' }}
                >
                  {card.title}
                </h3>
                <p className="text-charcoal/60" style={{ fontSize: 18, lineHeight: '28px' }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="wood-bg" style={{ padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p
                className="text-gridglow"
                style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 16 }}
              >
                How Later Influence works
              </p>
              <h2
                className="text-charcoal mb-4"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 48, fontWeight: 900, lineHeight: '54px', letterSpacing: '0.24px' }}
              >
                Influencer tools that do the work for you
              </h2>
              <p className="text-charcoal/60" style={{ fontSize: 18, lineHeight: '28px', marginBottom: 24 }}>
                Get the most out of your influencer marketing software that drives the results you need.
              </p>
              <div className="flex flex-col gap-0">
                {howItWorksSteps.map((step, i) => (
                  <div
                    key={i}
                    style={{ padding: '20px 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="text-gridglow flex-shrink-0"
                        style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 900, marginTop: 2 }}
                      >
                        {i + 1}.
                      </span>
                      <div>
                        <h4
                          className="text-charcoal"
                          style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 900, lineHeight: '26px', marginBottom: 6 }}
                        >
                          {step.title}
                        </h4>
                        <p className="text-charcoal/60" style={{ fontSize: 16, lineHeight: '24px' }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-d2">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/3Jxt0kpd7dYvglDQYEfd9a/460dc5593c6c31f810ca81602d0fe204/later-influencer-tools-that-do-the-work-for-you.png?w=1136&h=960&q=70&fm=png"
                alt="Later Influence workflow showing influencer tools in action"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Feature Sections */}
      {featureSections.map((section, i) => (
        <section
          key={i}
          style={{ backgroundColor: i % 2 === 0 ? '#FEFCFB' : '#F8F2EA', padding: '60px 0' }}
        >
          <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'direction-rtl' : ''}`}>
              <div className={`reveal ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <p
                  className="text-gridglow"
                  style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 16 }}
                >
                  {section.eyebrow}
                </p>
                <h2
                  className="text-charcoal mb-4"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: 44, fontWeight: 900, lineHeight: '50px', letterSpacing: '0.22px' }}
                >
                  {section.title}
                </h2>
                <p className="text-charcoal/60" style={{ fontSize: 18, lineHeight: '28px', marginBottom: 28 }}>
                  {section.desc}
                </p>
                <Link
                  to="#"
                  className="text-gridglow inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                  style={{ fontSize: 18, fontWeight: 700 }}
                >
                  {section.cta} <ArrowIcon />
                </Link>
              </div>
              <div className={`reveal reveal-d1 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={section.img}
                  alt={section.title}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Testimonial */}
      <section style={{ backgroundColor: '#000', padding: '60px 0' }}>
        <div className="max-w-[800px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <div className="flex justify-center mb-8">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/1eCCedygHqYqwD09vpxPYH/2fb86b51d93ee8c7981fbc18f70b3892/kym-recco.png?w=640&h=640&q=50&fm=png"
              alt="Kym Recco"
              className="rounded-full"
              style={{ width: 80, height: 80, objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
          <p
            className="text-offline/90"
            style={{ fontSize: 24, lineHeight: '36px', fontStyle: 'italic', marginBottom: 32 }}
          >
            &ldquo;There is so much depth and diversity in Later&rsquo;s influencer network. No matter how many campaigns we run, there are always new, on-brand influencers to engage with&mdash;and the creative performs long after the campaign is over.&rdquo;
          </p>
          <p className="text-offline font-bold" style={{ fontSize: 18 }}>Kym Recco</p>
          <p className="text-offline/50" style={{ fontSize: 15 }}>Tom&rsquo;s of Maine, Digital Marketing Manager</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="purple-wood-bg" style={{ padding: '60px 0' }}>
        <div className="max-w-[750px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
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
            Grow with Later&rsquo;s influencer marketing software
          </h2>
          <p
            style={{ fontSize: 20, lineHeight: '30px', color: 'rgba(254,252,251,0.85)', marginBottom: 36, maxWidth: 580, margin: '0 auto 36px' }}
          >
            Start working with the right influencers and turn influencer marketing into your #1 revenue generator.
          </p>
          <a href="#" className="btn-primary" style={{ fontSize: 18 }}>
            Book a demo <ArrowIcon />
          </a>
        </div>
      </section>
    </div>
  )
}
