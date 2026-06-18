import { Link } from 'react-router-dom'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const valueProps = [
  { title: 'Spend less time analyzing', desc: 'Get curated, actionable insights without hours of manual research.' },
  { title: 'Take action quickly', desc: 'Respond to trends, mentions, and conversations in real time.' },
  { title: 'Outshine your competitors', desc: 'Benchmark your brand against competitors and stay one step ahead.' },
  { title: 'Identify relevant creators', desc: 'Discover creators and advocates already talking about your brand.' },
]

const steps = [
  { num: '01', title: 'Monitor your brand health', desc: 'Track mentions, sentiment, and share of voice across social platforms.' },
  { num: '02', title: 'Find your biggest fans', desc: 'Identify advocates and loyal community members driving conversation.' },
  { num: '03', title: 'Tune into trends', desc: 'Spot emerging topics and hashtags relevant to your audience.' },
  { num: '04', title: 'Stay ahead of the competition', desc: 'Compare your performance and positioning against key competitors.' },
  { num: '05', title: 'Track your progress', desc: 'Measure how your brand perception evolves over time.' },
]

export default function SocialMediaListeningPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: 70 }}>

      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p
              className="text-gridglow"
              style={{ fontSize: 14, fontWeight: 700, letterSpacing: 2, marginBottom: 16, textTransform: 'uppercase' }}
            >
              LISTEN UP
            </p>
            <h1
              className="ff-heading text-charcoal"
              style={{ fontSize: 64, fontWeight: 900, lineHeight: '68px', letterSpacing: '0.32px', marginBottom: 24 }}
            >
              Social listening doesn't have to be complicated
            </h1>
            <p
              className="text-charcoal"
              style={{ fontSize: 20, lineHeight: '32px', maxWidth: 520, marginBottom: 32, opacity: 0.7 }}
            >
              Get curated, actionable insights about your brand, competitors, and industry — without the noise.
            </p>
            <Link to="/signup" className="btn-primary" style={{ fontSize: 18 }}>
              Start free trial <ArrowIcon />
            </Link>
          </div>
          <div className="reveal reveal-d1">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/3QuhE6Za3EwTi1tHx7a47e/acbaa85827fed6fc9cd73b009bef91e4/later-social-listening.png?w=1529&h=984&q=80&fm=png"
              alt="Later social listening dashboard"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section style={{ padding: '60px 40px', backgroundColor: '#FEFCFB' }}>
        <div className="max-w-[1440px] mx-auto">
          <h2
            className="ff-heading text-charcoal text-center reveal"
            style={{ fontSize: 48, fontWeight: 900, lineHeight: '54px', marginBottom: 12, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}
          >
            All the info you need, ready in seconds (not hours)
          </h2>
          <p
            className="text-charcoal text-center reveal"
            style={{ fontSize: 18, lineHeight: '28px', opacity: 0.7, marginBottom: 48, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}
          >
            Hear what your customers are saying. Take action before it's too late.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 reveal reveal-d1">
            {valueProps.map((vp, i) => (
              <div key={i}>
                <h3
                  className="ff-heading text-charcoal"
                  style={{ fontSize: 22, fontWeight: 700, lineHeight: '28px', marginBottom: 12 }}
                >
                  {vp.title}
                </h3>
                <p className="text-charcoal" style={{ fontSize: 16, lineHeight: '26px', opacity: 0.65 }}>
                  {vp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbered Features */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p
              className="text-gridglow"
              style={{ fontSize: 14, fontWeight: 700, letterSpacing: 2, marginBottom: 16, textTransform: 'uppercase' }}
            >
              YOUR CUSTOMERS ARE TALKING...
            </p>
            <h2
              className="ff-heading text-charcoal"
              style={{ fontSize: 48, fontWeight: 900, lineHeight: '54px', marginBottom: 28 }}
            >
              We help you listen & take action
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
              src="https://images.ctfassets.net/nfpsrlop6sws/1t9rbQRv7EMzMeB1auGDCm/eb341772b0f488494217af70707db5e0/how-later-social-listening-works.png?w=1136&h=1000&q=70&fm=png"
              alt="How Later social listening works"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Social Media Monitoring */}
      <section style={{ padding: '60px 40px', backgroundColor: '#FEFCFB' }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2
              className="ff-heading text-charcoal"
              style={{ fontSize: 48, fontWeight: 900, lineHeight: '54px', marginBottom: 20 }}
            >
              Social Media Monitoring
            </h2>
            <p className="text-charcoal" style={{ fontSize: 18, lineHeight: '30px', opacity: 0.7, maxWidth: 500, marginBottom: 28 }}>
              Track every mention, hashtag, and keyword across platforms so nothing slips through the cracks.
              Later aggregates it all into one clean dashboard.
            </p>
            <Link to="/pricing" className="btn-outline">Explore plans <ArrowIcon /></Link>
          </div>
          <div className="reveal reveal-d1">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/1WBWByMUGPyUN35DOTpOg0/7ddb56ce6cc73bb65836c84afb60229f/later-social-media-monitoring.png?w=1136&h=960&q=70&fm=png"
              alt="Social Media Monitoring"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Sentiment Analysis */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal lg:order-2">
            <h2
              className="ff-heading text-charcoal"
              style={{ fontSize: 48, fontWeight: 900, lineHeight: '54px', marginBottom: 20 }}
            >
              Sentiment Analysis
            </h2>
            <p className="text-charcoal" style={{ fontSize: 18, lineHeight: '30px', opacity: 0.7, maxWidth: 500, marginBottom: 28 }}>
              Understand how people really feel about your brand. Later's sentiment analysis breaks down
              positive, negative, and neutral mentions so you can act fast.
            </p>
            <Link to="/pricing" className="btn-outline">Explore plans <ArrowIcon /></Link>
          </div>
          <div className="reveal reveal-d1 lg:order-1">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/3UF1IDN9TrzslSH78Gzj1y/b9a5817cbd4606a732bbfe478462876b/later-senitment-analysis.png?w=1136&h=960&q=70&fm=png"
              alt="Sentiment Analysis"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Engage with your community */}
      <section style={{ padding: '60px 40px', backgroundColor: '#FEFCFB' }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2
              className="ff-heading text-charcoal"
              style={{ fontSize: 48, fontWeight: 900, lineHeight: '54px', marginBottom: 20 }}
            >
              Engage with your community
            </h2>
            <p className="text-charcoal" style={{ fontSize: 18, lineHeight: '30px', opacity: 0.7, maxWidth: 500, marginBottom: 28 }}>
              Reply to conversations, amplify positive sentiment, and manage your brand reputation
              all from one place.
            </p>
            <Link to="/pricing" className="btn-outline">Explore plans <ArrowIcon /></Link>
          </div>
          <div className="reveal reveal-d1">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/ulMsPRuG11DE2Z2uFulns/540c8e60af956b851a1ac0b0ef0a3c24/engage-with-your-community-with-later.png?w=1136&h=960&q=70&fm=png"
              alt="Engage with your community"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="purple-wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 reveal">
          <div style={{ flex: 1 }}>
            <p
              className="text-white"
              style={{ fontSize: 32, lineHeight: '44px', fontWeight: 400, marginBottom: 32 }}
            >
              "Later's social listening tools have completely changed how we track brand health
              for our clients. The insights are clear, actionable, and save us hours every week."
            </p>
            <p className="text-white" style={{ fontSize: 16, fontWeight: 700 }}>
              Neal Malone
            </p>
            <p className="text-white" style={{ fontSize: 14, opacity: 0.7 }}>
              PR & Social Media Management Supervisor, Connelly Partners
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/6BiwVCWoX3hxAv4fHrwZ63/19244ac9682aef18b1ce3e2eaa80ce61/neal_malone.png?w=704&h=704&q=50&fm=png"
              alt="Neal Malone"
              style={{ width: 200, height: 200, borderRadius: '50%', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '60px 40px', backgroundColor: '#000' }}>
        <div className="max-w-[800px] mx-auto text-center reveal">
          <h2
            className="ff-heading"
            style={{ fontSize: 56, fontWeight: 900, lineHeight: '62px', color: '#FEFCFB', marginBottom: 16 }}
          >
            See Later's Social Listening tool in action
          </h2>
          <p style={{ fontSize: 18, lineHeight: '28px', color: '#FEFCFB', opacity: 0.7, marginBottom: 32 }}>
            Understand your audience, track brand sentiment, and stay ahead of the conversation.
          </p>
          <Link to="/signup" className="btn-primary" style={{ fontSize: 18 }}>
            Start free trial <ArrowIcon />
          </Link>
        </div>
      </section>

    </div>
  )
}
