const steps = [
  {
    num: '01',
    title: 'Scale content output',
    desc: 'Take high-caliber influencer-generated content, with proven ROI, and share it across all platforms.',
  },
  {
    num: '02',
    title: 'Generate ratings & reviews',
    desc: 'Collect influencer and advocate ratings & reviews to inspire brand trust.',
  },
  {
    num: '03',
    title: 'Track & refer conversions',
    desc: 'Refer higher-converting traffic & new consumers with trackable affiliate links.',
  },
  {
    num: '04',
    title: 'Leverage influencer insights',
    desc: 'Survey influencers for valuable campaign feedback & insights.',
  },
]

const features = [
  {
    eyebrow: 'Content Creation Platform',
    title: 'Elevate your influencer content strategy',
    desc: 'Activate and amplify impactful influencer-generated content across all platforms, including Instagram, Facebook, Youtube, Pinterest, Twitter, TikTok, Snapchat, and blogs.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/4sSUR7yDV2R770a5L1aWG/ae2203d679051438ca25bde11a140818/influencer-campaign-content-creation.png?w=1136&h=960&q=70&fm=png',
    imgAlt: 'Content creation platform',
  },
  {
    eyebrow: 'Social Proof Software',
    title: 'Implement social proof at scale',
    desc: 'Generate reviews from influential advocates, loyalty members, and micro-influencers to syndicate to your eCommerce platform and boost brand loyalty.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/1IotkuAwfiSWEziy9jEo7R/b9a364e322fdcfb0854477db4c967a43/influencer-campaign-generate-social-proof.png?w=1136&h=960&q=70&fm=png',
    imgAlt: 'Social proof software',
  },
  {
    eyebrow: 'Influencer Insights',
    title: 'Make smarter decisions with market research',
    desc: 'Integrate influencers into your market research process by leveraging their insights and feedback to deliver successful campaigns every time.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/1SeZhnSPMogzP7YZINaBhv/50b06822e63d8a87952b6f918571aee0/influencer-campaign-insights.png?w=1134&h=950&q=70&fm=png',
    imgAlt: 'Influencer insights',
  },
  {
    eyebrow: 'AFFILIATE MARKETING',
    title: 'Integrate with your preferred affiliate network',
    desc: 'Later enables brands across many different affiliate networks including: Rakuten, Impact, Commission Junction (CJ), Partnerize, Ascend, AWIN, ShareASale, Avant a Link, Pepperjam, and BrandVerity.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/3PlTfwu65NKOaoyk0qBCFN/3a2f0a16389d590988e0093a47073d68/find-influencers-search-index-and-manage.png?w=1136&h=960&q=70&fm=png',
    imgAlt: 'Affiliate marketing integrations',
  },
]

export default function CampaignPlatformPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto reveal" style={{ padding: '0 20px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hero-enter">
              <p
                className="text-charcoal/60 uppercase tracking-widest"
                style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
              >
                Influencer Campaign Platform
              </p>
              <h1
                className="ff-heading hero-enter-d1"
                style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}
              >
                The only way to manage influencer campaigns
              </h1>
              <p
                className="hero-enter-d2"
                style={{ fontSize: 18, lineHeight: 1.6, marginBottom: 32, color: '#333' }}
              >
                Handle every step of your influencer marketing with ease using Later Influence.
              </p>
              <a href="/influencer-marketing-services" className="btn-primary hero-enter-d2" style={{ fontSize: 16 }}>
                Book a demo
              </a>
            </div>
            <div className="hero-enter-d3">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/qzvunGuVEq79YwmaINw0C/ac609818ec8a47b4b13705882282c834/influencer-campaign-hero.png?w=1136&h=960&q=80&fm=png"
                alt="Later Influencer Campaign Platform"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works - numbered steps */}
      <section style={{ padding: '70px 0' }}>
        <div className="max-w-[1200px] mx-auto reveal" style={{ padding: '0 20px' }}>
          <h2
            className="ff-heading text-center"
            style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}
          >
            Deliver successful influencer campaigns from one platform
          </h2>
          <p
            className="text-center"
            style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}
          >
            Later Influence helps you create effective campaigns by finding the right influencers to create content, rate &amp; review your product, and provide brand insights.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/RbPQToU4fyfSoD4Yghi0u/72ebe680006f77fb23bf0d25a758faa4/influencer-campaign-deliver-in-one-place.png?w=1136&h=960&q=70&fm=png"
              alt="Deliver campaigns from one platform"
              style={{ width: '100%', borderRadius: 8 }}
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

      {/* Feature Sections - alternating layout */}
      {features.map((f, i) => {
        const reversed = i % 2 === 1
        return (
          <section
            key={i}
            style={{ backgroundColor: i % 2 === 0 ? '#F8F2EA' : '#FEFCFB', padding: '70px 0' }}
          >
            <div className="max-w-[1200px] mx-auto reveal" style={{ padding: '0 20px' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={reversed ? 'lg:order-2' : ''}>
                  <p
                    className="text-charcoal/60 uppercase tracking-widest reveal"
                    style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}
                  >
                    {f.eyebrow}
                  </p>
                  <h2
                    className="ff-heading reveal reveal-d1"
                    style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}
                  >
                    {f.title}
                  </h2>
                  <p
                    className="reveal reveal-d2"
                    style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 32 }}
                  >
                    {f.desc}
                  </p>
                  <a href="/influencer-marketing-tools/influencer-campaign-platform" className="btn-outline reveal reveal-d3" style={{ fontSize: 15 }}>
                    Book a demo
                  </a>
                </div>
                <img
                  src={f.img}
                  alt={f.imgAlt}
                  className={`reveal reveal-d2${reversed ? ' lg:order-1' : ''}`}
                  style={{ width: '100%', borderRadius: 8 }}
                />
              </div>
            </div>
          </section>
        )
      })}

      {/* Testimonial */}
      <section className="purple-wood-bg" style={{ padding: '70px 0' }}>
        <div className="max-w-[900px] mx-auto reveal text-center">
          <svg className="mx-auto mb-6" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
          <p style={{ fontSize: 20, lineHeight: 1.6, color: '#fff', marginBottom: 24 }}>
            &ldquo;We&rsquo;re solving for our content scale issues with (Later) since they offer a level
            of moderation and a large enough number of Influencers that target our particular
            audience. Content is king and we&rsquo;re being asked monthly by our Retail partners to
            increase the amount and quality of content. Reviews are an important part so we&rsquo;ve
            learned to repurpose our Influencer content in many, many ways and across many
            channels.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/1WJ3MfWOmvyTZsL2qbypLS/186a4e020709e4fdf7cc8c6cde6c1741/bob-land.png?w=640&h=641&q=50&fm=png"
              alt="Bob Land"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-left">
              <p style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>Bob Land</p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                Dorel Juvenile, Vice President of Consumer Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: '#000', textAlign: 'center', padding: '70px 0' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2
            className="ff-heading"
            style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24, color: '#fff' }}
          >
            One platform for all your influencer marketing campaigns
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 32, lineHeight: 1.6 }}>
            Find everything your team needs for end-to-end influencer marketing at Later.
          </p>
          <a href="/influencer-marketing-services" className="btn-primary" style={{ fontSize: 16 }}>
            Book a demo
          </a>
        </div>
      </section>
    </div>
  )
}
