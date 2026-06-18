import { useState } from 'react'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const brandLogos = [
  { name: 'Wayfair', src: 'https://images.ctfassets.net/nfpsrlop6sws/lkj2EiC2pvwHScHK2BfF4/8e5e3e3d60040e5f5d0c6e38270a50d0/wayfair.png' },
  { name: 'Nike', src: 'https://images.ctfassets.net/nfpsrlop6sws/MXKiOLuaEav9y6F6bJcpj/db64c015bb1c4a08a20b75c20711afc3/NIKE.png' },
  { name: 'Southwest', src: 'https://images.ctfassets.net/nfpsrlop6sws/3ybiGkjeLiOEvbCJB6nvzy/0a6723acd2857e96beaf5899a9b1878f/southwest.png' },
  { name: 'Crumbl', src: 'https://images.ctfassets.net/nfpsrlop6sws/3jVzVUs9ulS1w7q35h2gd1/fc1931c1388ec6e51402ac28a618db4a/crumbl.png' },
  { name: 'Make-A-Wish', src: 'https://images.ctfassets.net/nfpsrlop6sws/sb7kFYalpstJrwOA66tSz/9b32d74542a471462db46a1bfc50ec89/makeawish.png' },
  { name: 'Habit Burger', src: 'https://images.ctfassets.net/nfpsrlop6sws/2omBMFrIIeXsopn70IK57o/5a601985b8e3fca976e59647ccc817fa/habitburger.png' },
  { name: 'Unilever', src: 'https://images.ctfassets.net/nfpsrlop6sws/5WDKO4sSgJ6Gp15OJrXGRT/cec9ce8f243ce00728d204474103628d/unilever.png' },
  { name: 'KiwiCo', src: 'https://images.ctfassets.net/nfpsrlop6sws/2xWopTRo9ufK1djYBlYX8Y/c01788f5e0ce3f553f04b271522ea226/kiwico.png' },
  { name: 'El Pollo Loco', src: 'https://images.ctfassets.net/nfpsrlop6sws/5lYloAvfVqtOzoaJ3rbdK6/a94c925b6a6932015a501c6157ecf42c/elpolloloco.png' },
  { name: 'Chewy', src: 'https://images.ctfassets.net/nfpsrlop6sws/BZLOpCxgdUClIH44SaqeH/a784627465f4af57011258e27ad4c435/chewy.png' },
  { name: 'Tapatio', src: 'https://images.ctfassets.net/nfpsrlop6sws/5XjMHpQ7CDX9PFVJM08Rh7/12da9a58136afcd2eb255495a8589ccf/tapatio.png' },
  { name: 'MacKenzie-Childs', src: 'https://images.ctfassets.net/nfpsrlop6sws/5qjtjCop1NK66ZQ0DscN5W/d66df4095db9f8ff7d78dd81c997183d/mackenzie.png' },
  { name: 'At Home', src: 'https://images.ctfassets.net/nfpsrlop6sws/05SAoLk8h7nz9UvhbtDVA/fbe772cacad4f2b0006ed402ea0bad56/athome.png' },
]

const features = [
  {
    title: 'Creator discovery',
    desc: 'We use your brand signals to surface best-fit creators and flag potential risks early.',
  },
  {
    title: 'Incentive advisor',
    desc: 'See what creators are actually paid across channels, so you can set fair rates, spend smarter, and scale without second-guessing.',
  },
  {
    title: 'Reporting',
    desc: 'See paid, organic, and sales performance in one place so it’s easier to spot what’s working and put more behind it.',
  },
]

const edgeAiTabs = [
  {
    title: 'Built on real campaign data',
    bullets: [
      '16M+ creators analyzed to predict performance',
      '136B annual impressions showing how content lands at scale',
      '$2B+ in verified influencer-driven purchases tied to outcomes',
    ],
  },
  {
    title: 'Customizes to your brand',
    bullets: [
      'Learns what works for your category, audience, and goals',
      'Accounts for brand safety, creator fit, and overlap',
      'Gets smarter as your strategy and priorities evolve',
    ],
  },
  {
    title: 'Predicts outcomes before launch',
    bullets: [
      'Recommends smarter creator mixes',
      'Sets realistic budgets and benchmarks',
      'Helps avoid surprises once campaigns are live',
    ],
  },
]

const testimonials = [
  {
    name: 'Gabe Alonso',
    role: 'VP Integrated Marketing & Experience',
    logo: 'https://later.com/images/logos/rebrand/elpolloloco.png',
    quote: 'At El Pollo Loco, we aspire to be at the forefront of culture. Later enables us to do just that, ensuring every dollar works hard to drive results for our brand and business.',
    stat1: { value: '46.7M', label: 'Total campaign impressions' },
    stat2: { value: '2.2%', label: 'Average engagement rate' },
  },
  {
    name: 'Kelly Linthicum',
    role: 'Manager of Influencer & PR',
    logo: 'https://later.com/images/logos/rebrand/athome.png',
    quote: 'Our creators are so talented. We trust they know what resonates with their spooky fans. By giving them the creative freedom, they create gold for both the brand and TikTok.',
    stat1: { value: '1.4M', label: 'Total campaign impressions' },
    stat2: { value: '7.5%', label: 'Average engagement rate' },
  },
  {
    name: 'Arturo Escalera',
    role: 'Creative Art & Marketing Manager',
    logo: 'https://later.com/images/logos/rebrand/tapatio.png',
    quote: 'For the first time ever, our Shopify sales surpassed Amazon. That’s a major milestone—and a direct result of this campaign.',
    stat1: { value: '1.2M', label: 'Total campaign impressions' },
    stat2: { value: '19%', label: 'Average engagement rate' },
  },
]

const speedStats = [
  { value: '72%', label: 'Faster research and ideation', desc: 'Spend less time briefing and more time building.' },
  { value: '65%', label: 'Faster campaign setup', desc: 'Turn decisions into live campaigns faster.' },
  { value: '58%', label: 'Faster execution', desc: 'Keep campaigns moving as volume increases.' },
]

const resources = [
  {
    type: 'Webinar',
    title: 'From Influence to Impact with Predictive AI',
    href: 'https://later.com/resources/webinar/the-drop/2025-q4/',
    image: 'https://later.com/static/webinar-graphic-a9598db2560dc4010f640619b2186177.png',
  },
  {
    type: 'Report',
    title: 'The Strategic Turning Point: 2025 State of Influencer Marketing',
    href: 'https://later.com/resources/report/state-of-influencer/',
    image: 'https://later.com/static/report-graphic-a6670cf2f255b491b7ca5f48dd379bb0.png',
  },
  {
    type: 'Video',
    title: 'Later EdgeAI: Influence Powered by Intelligence',
    href: 'https://www.youtube.com/watch?v=bsqVngYobH8',
    image: 'https://later.com/static/video-graphic-0f1e8f5b309426a0c7122b8efc9325b4.png',
  },
]

const tickerItems = [
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/3LQWEaltVOsIF1UopihBI6/dc565201add57143f63621ecb525f545/icon-heart.png?fm=webp', text: 'Internet-Approved' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/66i7AxJ0QfJgY8M9Myk61x/89488c1bbad1184403ad7a82bbe797a2/icon-fire.png?fm=webp', text: 'Main Feed Energy' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/7j1v2yvOs0ur6c2TObCuWJ/72684773d4797d449e0877e161fc473e/icon-link-in-bio.png?fm=webp', text: 'Link In Bio' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/58qKPgNhwv6zDpjevLcfCs/0e98cd7a5b6b5d67bc141a0e50ba9ec1/icon-lightning.png?fm=webp', text: 'IYKYK' },
  { icon: 'https://images.ctfassets.net/nfpsrlop6sws/3Gg6oAuJ8M7Tm566oQmBxN/5337083ad624232918412c56f5e6da72/icon-campaign-rocket.png?fm=webp', text: 'Campaign Loading' },
]

function LogoSet() {
  return (
    <>
      {brandLogos.map((logo, i) => (
        <div key={i} className="flex-shrink-0 mx-6">
          <img src={logo.src} alt={logo.name} className="h-[28px] w-auto object-contain opacity-70" loading="lazy" />
        </div>
      ))}
    </>
  )
}

function TickerSet() {
  return (
    <>
      {tickerItems.map((item, i) => (
        <div key={i} className="flex items-center gap-3 flex-shrink-0 mx-5">
          <img src={item.icon} alt="" className="w-7 h-7" />
          <span className="text-gridglow text-2xl lg:text-3xl font-extrabold uppercase whitespace-nowrap leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            {item.text}
          </span>
        </div>
      ))}
    </>
  )
}

export default function InfluencerMarketingPlatformPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <>
      {/* Hero */}
      <section className="reveal wood-bg min-h-screen flex items-center" style={{ paddingTop: 70 }}>
        <div className="max-w-[1440px] mx-auto w-full" style={{ padding: '0 40px' }}>
          <div className="max-w-[900px] mx-auto text-center">
            <div className="hero-enter flex items-center justify-center gap-2 mb-6">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 1l2.47 6.1L19 8.64l-5 4.36 1.53 6.5L10 16l-5.53 3.5L6 13 1 8.64l6.53-1.54z" fill="#FE3F00"/>
              </svg>
              <span className="text-charcoal/70" style={{ fontSize: 16, fontWeight: 500 }}>Rated 4.5 out of 5 on G2</span>
            </div>
            <h1
              className="text-charcoal hero-enter-d1"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(48px, 6vw, 86px)',
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '0.43px',
                marginBottom: 32,
              }}
            >
              The influencer marketing platform behind better campaigns.
            </h1>
            <p
              className="text-charcoal hero-enter-d2 mx-auto"
              style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 400, lineHeight: 1.5, maxWidth: 650, marginBottom: 24 }}
            >
              Know which creators, ideas, and spend will pay off before you hit launch.
            </p>
            <div className="hero-enter-d3 flex justify-center">
              <a href="#" className="btn-primary" style={{ fontSize: 18 }}>
                Start your campaign <ArrowIcon />
              </a>
            </div>
            <div className="mt-10 hero-enter-d3">
              <div className="relative w-full overflow-hidden bg-charcoal/5" style={{ aspectRatio: '16/9', maxWidth: 800, margin: '0 auto', borderRadius: 12 }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mx-auto mb-3">
                      <circle cx="32" cy="32" r="30" stroke="#FE3F00" strokeWidth="3" fill="none"/>
                      <polygon points="26,20 48,32 26,44" fill="#FE3F00"/>
                    </svg>
                    <span className="text-charcoal/40" style={{ fontSize: 14 }}>Product Demo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Ticker */}
      <section className="reveal overflow-hidden" style={{ backgroundColor: '#FEFCFB', padding: '32px 0' }}>
        <div className="flex items-center whitespace-nowrap ticker-animate">
          <LogoSet />
          <LogoSet />
          <LogoSet />
          <LogoSet />
        </div>
      </section>

      {/* Confidence Section */}
      <section className="reveal" style={{ backgroundColor: '#FEFCFB', padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="max-w-[800px] mx-auto text-center mb-14">
            <h2
              className="text-charcoal mb-5"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 900, lineHeight: 1.25, letterSpacing: '0.28px' }}
            >
              Confidence at every campaign decision point.
            </h2>
            <p className="text-charcoal/60" style={{ fontSize: 20, lineHeight: '30px' }}>
              You run the campaign. We make the decisions easier along the way.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`reveal reveal-d${i + 1} p-8 rounded-sm`}
                style={{ backgroundColor: '#F8F2EA', borderTop: '3px solid #FE3F00' }}
              >
                <h3
                  className="text-charcoal mb-3"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 900, lineHeight: '32px' }}
                >
                  {f.title}
                </h3>
                <p className="text-charcoal/60" style={{ fontSize: 17, lineHeight: '27px' }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EdgeAI Section */}
      <section className="reveal wood-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="max-w-[800px] mx-auto text-center mb-14">
            <h2
              className="text-charcoal mb-5"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 900, lineHeight: 1.25, letterSpacing: '0.28px' }}
            >
              Smarter campaigns start before the brief.
            </h2>
            <p className="text-charcoal/60" style={{ fontSize: 20, lineHeight: '30px' }}>
              Later EdgeAI turns real campaign history into intelligence you can use&mdash;so your next move is a smarter one.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 flex flex-col gap-2">
              {edgeAiTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`text-left p-5 rounded-sm transition-all ${
                    activeTab === i
                      ? 'bg-white shadow-md'
                      : 'bg-transparent hover:bg-white/50'
                  }`}
                >
                  <span
                    className="text-charcoal block"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 900, lineHeight: '26px' }}
                  >
                    {tab.title}
                  </span>
                </button>
              ))}
            </div>
            <div className="lg:col-span-8 bg-white p-8 lg:p-10 shadow-md rounded-sm">
              <h3
                className="text-charcoal mb-6"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 900, lineHeight: '36px' }}
              >
                {edgeAiTabs[activeTab].title}
              </h3>
              <div className="flex flex-col gap-4">
                {edgeAiTabs[activeTab].bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-1">
                      <circle cx="10" cy="10" r="10" fill="#FE3F00" fillOpacity="0.15"/>
                      <path d="M6 10l3 3 5-5" stroke="#FE3F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-charcoal" style={{ fontSize: 18, lineHeight: '28px' }}>
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="#" className="btn-outline" style={{ fontSize: 16 }}>
              Learn more <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="reveal text-white" style={{ backgroundColor: '#000', padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2
            className="text-offline text-center mb-14"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 900, lineHeight: 1.25, letterSpacing: '0.28px' }}
          >
            Straight from the feed.
          </h2>
          <div className="max-w-[960px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="mb-6">
                  <path d="M0 32V19.2C0 6.4 8.8 0 17.6 0l-1.6 6.4C10.4 8 8 12.8 8 19.2h8V32H0zm22.4 0V19.2C22.4 6.4 31.2 0 40 0l-1.6 6.4C32.8 8 30.4 12.8 30.4 19.2h8V32H22.4z" fill="#FE3F00" fillOpacity="0.3"/>
                </svg>
                <p className="text-offline/90 mb-8" style={{ fontSize: 22, lineHeight: '34px' }}>
                  {testimonials[activeTestimonial].quote}
                </p>
                <p className="font-bold text-offline" style={{ fontSize: 16 }}>{testimonials[activeTestimonial].name}</p>
                <p className="text-offline/60 mb-4" style={{ fontSize: 14 }}>{testimonials[activeTestimonial].role}</p>
                <img
                  src={testimonials[activeTestimonial].logo}
                  alt=""
                  className="h-6 w-auto object-contain opacity-60"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-offline/10 p-6 text-center">
                  <div
                    className="text-gridglow"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: 44, fontWeight: 900, lineHeight: 1.1 }}
                  >
                    {testimonials[activeTestimonial].stat1.value}
                  </div>
                  <p className="text-offline/60 mt-2" style={{ fontSize: 14 }}>
                    {testimonials[activeTestimonial].stat1.label}
                  </p>
                </div>
                <div className="border border-offline/10 p-6 text-center">
                  <div
                    className="text-gridglow"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: 44, fontWeight: 900, lineHeight: 1.1 }}
                  >
                    {testimonials[activeTestimonial].stat2.value}
                  </div>
                  <p className="text-offline/60 mt-2" style={{ fontSize: 14 }}>
                    {testimonials[activeTestimonial].stat2.label}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="transition-all"
                  style={{
                    width: activeTestimonial === i ? 32 : 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: activeTestimonial === i ? '#FE3F00' : 'rgba(248,242,234,0.3)',
                  }}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speed Stats */}
      <section className="reveal" style={{ backgroundColor: '#FEFCFB', padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="max-w-[800px] mx-auto text-center mb-14">
            <h2
              className="text-charcoal mb-5"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 900, lineHeight: 1.25, letterSpacing: '0.28px' }}
            >
              Move faster without cutting corners.
            </h2>
            <p className="text-charcoal/60" style={{ fontSize: 20, lineHeight: '30px' }}>
              Later EdgeAI reduces the time spent across every stage of a campaign, so teams can run more campaigns, test more ideas, and scale faster.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {speedStats.map((stat, i) => (
              <div
                key={i}
                className={`reveal reveal-d${i + 1} text-center p-8 rounded-sm`}
                style={{ backgroundColor: '#F8F2EA' }}
              >
                <div
                  className="text-gridglow mb-3"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(56px, 5vw, 72px)', fontWeight: 900, lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <h3
                  className="text-charcoal mb-2"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 900, lineHeight: '26px' }}
                >
                  {stat.label}
                </h3>
                <p className="text-charcoal/60" style={{ fontSize: 16, lineHeight: '24px' }}>
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-charcoal/40 text-center mt-8" style={{ fontSize: 13 }}>
            Source: Internal performance data from Later EdgeAI (2025). These are averages and will vary by campaign.
          </p>
        </div>
      </section>

      {/* In-house CTA */}
      <section className="reveal purple-wood-bg text-white" style={{ padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center" style={{ padding: '0 40px' }}>
          <h2
            className="mb-5"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 900, lineHeight: 1.25, letterSpacing: '0.28px' }}
          >
            Not ready to run campaigns in-house?
          </h2>
          <p className="mx-auto mb-10" style={{ fontSize: 20, lineHeight: '30px', maxWidth: 600, opacity: 0.85 }}>
            Work with a team of experts that knows how to plan, produce, and manage impossible-to-ignore campaigns.
          </p>
          <a href="/influencer-marketing-services/" className="btn-primary" style={{ fontSize: 18 }}>
            Learn more <ArrowIcon />
          </a>
        </div>
      </section>

      {/* Resources */}
      <section className="reveal" style={{ backgroundColor: '#FEFCFB', padding: '70px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="text-center mb-14">
            <h2
              className="text-charcoal"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 900, lineHeight: 1.25, letterSpacing: '0.28px' }}
            >
              Platform insights and resources.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((r, i) => (
              <a
                key={i}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal reveal-d${i + 1} block group overflow-hidden rounded-sm`}
                style={{ backgroundColor: '#F8F2EA' }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-gridglow mb-2 block" style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {r.type}
                  </span>
                  <h3
                    className="text-charcoal group-hover:text-gridglow transition-colors"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 900, lineHeight: '26px' }}
                  >
                    {r.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Ticker */}
      <section className="reveal bg-inverse py-5 overflow-hidden" style={{ padding: '70px 0' }}>
        <div className="flex items-center whitespace-nowrap ticker-animate">
          <TickerSet />
          <TickerSet />
          <TickerSet />
          <TickerSet />
        </div>
      </section>

      {/* Final CTA */}
      <section className="reveal wood-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h2
            className="text-charcoal mb-10"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(44px, 5vw, 70px)', fontWeight: 900, lineHeight: 1.25, letterSpacing: '0.35px' }}
          >
            Because guessing isn&rsquo;t a strategy.
          </h2>
          <a href="#" className="btn-primary" style={{ fontSize: 18 }}>
            Start your campaign <ArrowIcon />
          </a>
        </div>
      </section>
    </>
  )
}
