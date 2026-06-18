import { useParams, Link } from 'react-router-dom'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const caseStudies = {
  'maruchan': {
    name: 'Maruchan',
    headline: 'How Maruchan made Saucy Noods a Gen Z obsession and went viral doing it',
    heroImg: 'https://images.ctfassets.net/nfpsrlop6sws/2DSuh7RSYr3WnoDusAwswJ/ba5b325236923a2c797ecd3e31dd3d6b/Maruchan_Hero__1_.png?w=1080&h=606&q=80&fm=png',
    metrics: [
      { value: '8.4x', label: 'the TikTok click-through benchmark' },
      { value: '3.8x', label: 'the TikTok organic engagement benchmark' },
      { value: '3.2x', label: 'the campaign view goal' },
    ],
    product: 'Later Influence',
    industry: 'Food & Beverage',
    platforms: ['TikTok', 'Instagram'],
    campaignType: 'Top of funnel',
    objective: "The launch of Saucy Noods, a bold stir-fry style noodle, required a strategy built for the moments Gen Z actually lives in: late-night cravings, dorm life, and study breaks. Maruchan partnered with Later to generate buzz and social proof for Saucy Noods, positioning the new offering as a canvas for creativity.",
    quote: { text: "We needed Saucy Noods to feel like something people found on their own, not something we pushed at them. TikTok is where Gen Z decides what's worth caring about, and we knew the content had to feel like it belonged there.", author: 'Samantha Bell', role: 'Social Media Coordinator, Maruchan', avatar: 'https://images.ctfassets.net/nfpsrlop6sws/7D16oCK0ZivL6fghCXK3Hx/432b7b97cd25a7c8c2170e586dbc61b7/1748979799356.jpg?w=80&h=80&q=50&fm=jpg' },
    solution: "Later sourced and vetted macro and mega creators, selected not for follower counts but for how well they matched the content behavior Saucy Noods needed to land. The team focused on three creator verticals: foodies for taste credibility, dorm chefs for relatable low-effort meals, and comedians for entertainment and shareability.",
    results: "The Saucy Noods campaign didn't just meet the mark. It redefined it, delivering over triple the projected reach. By blending strategic creator partnerships with real-time cultural moments, the launch transformed a standard product debut into a massive cross-platform event.",
    quote2: { text: "Later didn't just match us with creators — they matched us with culture. The campaign became bigger than the product because the content felt like it was made for TikTok, not placed there.", author: 'Samantha Bell', role: 'Social Media Coordinator, Maruchan', avatar: 'https://images.ctfassets.net/nfpsrlop6sws/7D16oCK0ZivL6fghCXK3Hx/432b7b97cd25a7c8c2170e586dbc61b7/1748979799356.jpg?w=80&h=80&q=50&fm=jpg' },
    resultDetails: [
      'Deep engagement nearly 400% higher than the industry average',
      'Viewers stayed tuned in for triple the standard watch time',
      'Achieved over 2x the benchmark for both paid impressions and video views',
      'Cost per impression 2x lower than goal',
      'Link clicks at a rate 8x higher than benchmarks',
    ],
  },
  'american-girl': {
    name: 'American Girl',
    headline: "How American Girl used Later's influencer platform to promote its Cultural Celebrations Collection",
    heroImg: 'https://images.ctfassets.net/nfpsrlop6sws/78I6kvqTZ0Xfu6o0QzUIPS/80b52866b627a1a364b5b78688feef35/casestudy-thumbnail-americangirl.png?w=1080&h=606&q=80&fm=png',
    metrics: [
      { value: '2.5M+', label: 'total impressions generated' },
      { value: '4.2%', label: 'average engagement rate' },
      { value: '150+', label: 'pieces of creator content' },
    ],
    product: 'Later Influence',
    industry: 'Toys & Entertainment',
    platforms: ['Instagram', 'TikTok'],
    campaignType: 'Brand awareness',
    objective: "American Girl wanted to authentically promote its Cultural Celebrations Collection by partnering with diverse creators who could share personal stories connected to the brand's mission of celebrating every girl.",
    quote: { text: "Later helped us find creators who genuinely connected with our brand values. The content felt authentic because the creators truly believed in what American Girl represents.", author: 'Marketing Team', role: 'American Girl', avatar: '' },
    solution: "Later identified and activated a diverse group of family and lifestyle creators who could authentically showcase the Cultural Celebrations Collection through personal storytelling and genuine product integration.",
    results: "The campaign exceeded expectations across all KPIs, generating millions of impressions and high engagement rates that proved the power of authentic creator partnerships.",
    quote2: { text: "The creators Later connected us with didn't just promote our products — they shared stories that resonated deeply with their communities.", author: 'Marketing Team', role: 'American Girl', avatar: '' },
    resultDetails: [
      'Over 2.5 million total impressions across platforms',
      'Engagement rate 3x above industry benchmark',
      'Creator content repurposed across brand channels',
      'Significant lift in brand sentiment among target demographics',
    ],
  },
  'chobani': {
    name: 'Chobani',
    headline: "How Chobani partnered with Twitch streamers to drive benchmark-exceeding views",
    heroImg: 'https://images.ctfassets.net/nfpsrlop6sws/6a2w54iLNdS9XQrPejjpYz/39ca26757825c845b4e0f48e82e24312/casestudy-thumbnail-chobani.png?w=1080&h=606&q=80&fm=png',
    metrics: [
      { value: '5.2M', label: 'total video views' },
      { value: '12%', label: 'engagement rate on Twitch' },
      { value: '200%', label: 'above view benchmarks' },
    ],
    product: 'Later Influence',
    industry: 'Food & Beverage',
    platforms: ['Twitch', 'Instagram', 'TikTok'],
    campaignType: 'Brand awareness',
    objective: "Chobani wanted to reach younger audiences in unexpected places by partnering with gaming creators on Twitch, a platform not traditionally associated with food brands.",
    quote: { text: "Later helped us think outside the box and tap into gaming communities where our audience was already spending their time.", author: 'Brand Team', role: 'Chobani', avatar: '' },
    solution: "Later identified Twitch streamers and gaming creators who could naturally integrate Chobani into their content, from on-stream taste tests to gaming session snack breaks.",
    results: "The campaign shattered viewership benchmarks, proving that food brands can thrive on gaming platforms when the creator partnerships are authentic.",
    quote2: { text: "We never expected a food brand campaign to perform this well on a gaming platform. Later made it happen by finding creators who made the integration feel natural.", author: 'Brand Team', role: 'Chobani', avatar: '' },
    resultDetails: [
      'Over 5 million total video views',
      'Twitch engagement rate 4x above platform average',
      '200% above initial view benchmarks',
      'Positive brand sentiment across gaming communities',
    ],
  },
  'kraft': {
    name: 'Kraft',
    headline: "How Kraft drove a double-digit lift in favorability and intent with Later",
    heroImg: 'https://images.ctfassets.net/nfpsrlop6sws/6KbJgn6u8DvbD02G90QhFM/19514b5abe250ebcc6a008e721fa927b/casestudy-thumbnail-kraft.png?w=1080&h=606&q=80&fm=png',
    metrics: [
      { value: '14%', label: 'lift in brand favorability' },
      { value: '11%', label: 'lift in purchase intent' },
      { value: '8M+', label: 'total impressions' },
    ],
    product: 'Later Influence',
    industry: 'Food & Beverage',
    platforms: ['TikTok', 'Instagram'],
    campaignType: 'Full funnel',
    objective: "Kraft sought to modernize its brand perception among younger consumers while driving measurable lifts in both brand favorability and purchase intent through creator-led content.",
    quote: { text: "The creators Later matched us with understood our brand DNA while bringing fresh perspectives that resonated with audiences we hadn't reached before.", author: 'Marketing Lead', role: 'Kraft', avatar: '' },
    solution: "Later developed a full-funnel creator strategy combining recipe creators for awareness, lifestyle influencers for consideration, and micro-creators for authentic purchase-driving content.",
    results: "The campaign delivered double-digit lifts across key brand metrics, demonstrating that creator content can move the needle on both perception and purchase behavior.",
    quote2: { text: "Later's data-driven approach to creator selection was a game-changer. Every creator felt like a perfect fit for our brand story.", author: 'Marketing Lead', role: 'Kraft', avatar: '' },
    resultDetails: [
      '14% lift in brand favorability',
      '11% lift in purchase intent',
      'Over 8 million impressions across platforms',
      'Content engagement rates 2.5x above benchmarks',
    ],
  },
  'crumbl-cookies': {
    name: 'Crumbl Cookies',
    headline: "How Crumbl baked up a winning holiday strategy with Later Influence",
    heroImg: 'https://images.ctfassets.net/nfpsrlop6sws/5KIlMCfDGoVz26WuHh4mTl/1adc2656c7d0a060f2248e63f87f1d2e/casestudy-thumbnail-crumbl.png?w=1080&h=606&q=80&fm=png',
    metrics: [
      { value: '10M+', label: 'total reach' },
      { value: '6.8%', label: 'engagement rate' },
      { value: '45+', label: 'creator activations' },
    ],
    product: 'Later Influence',
    industry: 'Food & Beverage',
    platforms: ['TikTok', 'Instagram'],
    campaignType: 'Seasonal campaign',
    objective: "Crumbl Cookies wanted to create massive buzz around their holiday cookie lineup by leveraging food and lifestyle creators to drive both awareness and in-store traffic.",
    quote: { text: "Later's platform made it easy for us to manage a large-scale creator campaign during our busiest season while maintaining the quality and authenticity our brand is known for.", author: 'Social Team', role: 'Crumbl Cookies', avatar: '' },
    solution: "Later activated over 45 creators across food, lifestyle, and family niches, each tasked with creating unique holiday-themed content that showcased Crumbl's seasonal flavors in authentic, shareable moments.",
    results: "The holiday campaign became Crumbl's most successful creator initiative, generating over 10 million in reach and driving record engagement rates.",
    quote2: { text: "Managing 45+ creators could have been overwhelming, but Later's platform kept everything organized and on track throughout the holiday rush.", author: 'Social Team', role: 'Crumbl Cookies', avatar: '' },
    resultDetails: [
      'Over 10 million total reach across platforms',
      'Engagement rate 3x above industry benchmarks',
      '45+ unique creator activations',
      'Significant increase in holiday season store visits',
    ],
  },
  'dallas-mavericks': {
    name: 'Dallas Mavericks',
    headline: "How the Dallas Mavericks activated influencers and engaged local community all year long",
    heroImg: 'https://images.ctfassets.net/nfpsrlop6sws/3KLqYtSReJTjLjKH9CeeMo/2265d3bf14aaff0ee5f913132678f7c6/casestudy-thumbnail-dallasmavericks.png?w=1080&h=606&q=80&fm=png',
    metrics: [
      { value: '3.5M', label: 'total impressions' },
      { value: '250+', label: 'pieces of content created' },
      { value: '5.1%', label: 'average engagement rate' },
    ],
    product: 'Later Influence',
    industry: 'Sports & Entertainment',
    platforms: ['Instagram', 'TikTok', 'Twitter'],
    campaignType: 'Always-on',
    objective: "The Dallas Mavericks wanted to build deeper connections with the Dallas community through year-round creator partnerships that extended beyond game-day content.",
    quote: { text: "Later helped us build a creator program that keeps our brand visible and relevant in the Dallas community 365 days a year, not just during basketball season.", author: 'Digital Team', role: 'Dallas Mavericks', avatar: '' },
    solution: "Later designed an always-on influencer program featuring local Dallas creators across sports, lifestyle, food, and entertainment verticals, creating consistent touchpoints with the community.",
    results: "The year-round approach generated consistent engagement and helped the Mavericks become more than a sports team in the eyes of the Dallas community.",
    quote2: { text: "What sets Later apart is their understanding that sports marketing isn't just about game day. They helped us build a presence that lives in culture year-round.", author: 'Digital Team', role: 'Dallas Mavericks', avatar: '' },
    resultDetails: [
      '3.5 million total impressions throughout the year',
      '250+ pieces of creator content produced',
      'Engagement rates consistently above 5%',
      'Strong community sentiment improvements',
    ],
  },
}

function ShareIcon({ type }) {
  if (type === 'facebook') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  )
  if (type === 'twitter') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  )
  if (type === 'linkedin') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )
  if (type === 'pinterest') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/></svg>
  )
  return null
}

export default function CaseStudyDetailPage() {
  const { slug } = useParams()
  const study = caseStudies[slug]

  if (!study) {
    return (
      <div className="min-h-screen" style={{ paddingTop: 70 }}>
        <div className="max-w-7xl mx-auto text-center" style={{ padding: '80px 40px' }}>
          <h1 className="ff-heading text-charcoal" style={{ fontSize: 48, fontWeight: 900, marginBottom: 24 }}>Case study not found</h1>
          <p className="text-charcoal/60" style={{ fontSize: 18, lineHeight: '28px', marginBottom: 32 }}>The case study you're looking for doesn't exist or may have been moved.</p>
          <Link to="/case-studies" className="btn-primary" style={{ fontSize: 16 }}>Back to Case Studies <ArrowIcon /></Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: 70 }}>

      {/* Breadcrumb + Hero */}
      <section className="reveal" style={{ padding: '60px 0 0' }}>
        <div className="max-w-7xl mx-auto" style={{ padding: '0 40px' }}>
          <Link
            to="/case-studies"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: '#FE3F00', textDecoration: 'none', marginBottom: 24 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Customer Case Studies
          </Link>
          <div style={{ maxWidth: 900, marginBottom: 28 }}>
            <h1 className="ff-heading text-charcoal" style={{ fontSize: 56, fontWeight: 900, lineHeight: '64px', letterSpacing: 0.28 }}>
              {study.headline}
            </h1>
          </div>
          <div className="reveal reveal-d1" style={{ borderRadius: 16, overflow: 'hidden' }}>
            <img
              src={study.heroImg}
              alt={study.name}
              className="w-full"
              style={{ display: 'block', maxHeight: 606, objectFit: 'cover' }}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* At a Glance + Sidebar Info */}
      <section className="reveal" style={{ padding: '64px 0 80px' }}>
        <div className="max-w-7xl mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16">

            {/* Main Content Column */}
            <div>
              {/* At a Glance */}
              <div className="reveal" style={{ marginBottom: 48 }}>
                <h2 className="ff-heading text-charcoal" style={{ fontSize: 14, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 32, color: '#FE3F00' }}>At a Glance</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8" style={{ textAlign: 'center' }}>
                  {study.metrics.map((m, i) => (
                    <div key={i}>
                      <p className="ff-heading text-charcoal" style={{ fontSize: 48, fontWeight: 900, lineHeight: '56px', marginBottom: 8 }}>{m.value}</p>
                      <p className="text-charcoal/70" style={{ fontSize: 16, lineHeight: '24px' }}>{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Objective */}
              <div className="reveal" style={{ marginBottom: 48 }}>
                <h2 className="ff-heading text-charcoal" style={{ fontSize: 36, fontWeight: 900, lineHeight: '44px', marginBottom: 24 }}>The Objective</h2>
                <p className="text-charcoal" style={{ fontSize: 18, lineHeight: '30px' }}>{study.objective}</p>
              </div>

              {/* Quote 1 */}
              <blockquote className="reveal" style={{ borderLeft: '4px solid #FE3F00', padding: '24px 0 24px 32px', margin: '0 0 64px 0' }}>
                <p style={{ fontSize: 20, lineHeight: '32px', fontStyle: 'italic', color: '#000', marginBottom: 24 }}>
                  &ldquo;{study.quote.text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  {study.quote.avatar && (
                    <img
                      src={study.quote.avatar}
                      alt={study.quote.author}
                      style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }}
                    />
                  )}
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 700, color: '#000' }}>{study.quote.author}</p>
                    <p style={{ fontSize: 14, color: '#000', opacity: 0.6 }}>{study.quote.role}</p>
                  </div>
                </div>
              </blockquote>

              {/* The Solution */}
              <div className="reveal" style={{ marginBottom: 48 }}>
                <h2 className="ff-heading text-charcoal" style={{ fontSize: 36, fontWeight: 900, lineHeight: '44px', marginBottom: 24 }}>The Solution</h2>
                <p className="text-charcoal" style={{ fontSize: 18, lineHeight: '30px' }}>{study.solution}</p>
              </div>

              {/* The Results */}
              <div className="reveal" style={{ marginBottom: 48 }}>
                <h2 className="ff-heading text-charcoal" style={{ fontSize: 36, fontWeight: 900, lineHeight: '44px', marginBottom: 24 }}>The Results</h2>
                <p className="text-charcoal" style={{ fontSize: 18, lineHeight: '30px', marginBottom: 32 }}>{study.results}</p>
              </div>

              {/* Quote 2 */}
              {study.quote2 && (
                <blockquote className="reveal" style={{ borderLeft: '4px solid #FE3F00', padding: '24px 0 24px 32px', margin: '0 0 64px 0' }}>
                  <p style={{ fontSize: 20, lineHeight: '32px', fontStyle: 'italic', color: '#000', marginBottom: 24 }}>
                    &ldquo;{study.quote2.text}&rdquo;
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    {study.quote2.avatar && (
                      <img
                        src={study.quote2.avatar}
                        alt={study.quote2.author}
                        style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }}
                      />
                    )}
                    <div>
                      <p style={{ fontSize: 16, fontWeight: 700, color: '#000' }}>{study.quote2.author}</p>
                      <p style={{ fontSize: 14, color: '#000', opacity: 0.6 }}>{study.quote2.role}</p>
                    </div>
                  </div>
                </blockquote>
              )}

              {/* Result Details */}
              <div className="reveal" style={{ marginBottom: 24 }}>
                <h3 className="ff-heading text-charcoal" style={{ fontSize: 24, fontWeight: 900, marginBottom: 20 }}>Key Results</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {study.resultDetails.map((detail, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 17, lineHeight: '28px', color: '#000', padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                      <span style={{ color: '#FE3F00', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="reveal reveal-d1">
              <div style={{ position: 'sticky', top: 100 }}>
                <div style={{ background: '#F8F2EA', borderRadius: 16, padding: 32 }}>
                  <div style={{ marginBottom: 28 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#000', opacity: 0.5, marginBottom: 8 }}>Products Used</p>
                    <p style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>{study.product}</p>
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#000', opacity: 0.5, marginBottom: 8 }}>Industry</p>
                    <p style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>{study.industry}</p>
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#000', opacity: 0.5, marginBottom: 8 }}>Platforms Used</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {study.platforms.map((p) => (
                        <span key={p} style={{ fontSize: 14, fontWeight: 600, color: '#000', background: 'rgba(0,0,0,0.06)', borderRadius: 20, padding: '4px 14px' }}>{p}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#000', opacity: 0.5, marginBottom: 8 }}>Campaign Type</p>
                    <p style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>{study.campaignType}</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Mid-page CTA Banner */}
      <section className="wood-bg reveal" style={{ padding: '64px 0 80px' }}>
        <div className="max-w-7xl mx-auto text-center" style={{ padding: '0 40px' }}>
          <h2 className="ff-heading text-charcoal" style={{ fontSize: 48, fontWeight: 900, lineHeight: '56px', marginBottom: 16 }}>Grow with Later</h2>
          <p className="text-charcoal/70" style={{ fontSize: 20, lineHeight: '30px', marginBottom: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Turn influencer marketing into your #1 revenue generator.
          </p>
          <Link to="/signup" className="btn-primary" style={{ fontSize: 18 }}>
            Get started free <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="reveal" style={{ padding: '64px 0 80px' }}>
        <div className="max-w-7xl mx-auto text-center" style={{ padding: '0 40px' }}>
          <h2 className="ff-heading text-charcoal" style={{ fontSize: 44, fontWeight: 900, lineHeight: '52px', marginBottom: 16 }}>
            Work with Later for fast campaign results.
          </h2>
          <p className="text-charcoal/60" style={{ fontSize: 18, lineHeight: '28px', marginBottom: 36, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Join the world's top brands using Later to power their influencer marketing.
          </p>
          <Link to="/contact" className="btn-dark" style={{ fontSize: 18 }}>
            Let's talk strategy <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* Share Links */}
      <section className="reveal" style={{ padding: '0 0 40px' }}>
        <div className="max-w-7xl mx-auto" style={{ padding: '0 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#000', opacity: 0.5, textTransform: 'uppercase', letterSpacing: 1 }}>Share</span>
            {['facebook', 'twitter', 'linkedin', 'pinterest'].map((platform) => (
              <a
                key={platform}
                href={
                  platform === 'facebook' ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}` :
                  platform === 'twitter' ? `https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(study.headline)}` :
                  platform === 'linkedin' ? `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}` :
                  `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', background: '#000', color: '#fff', transition: 'opacity 0.2s' }}
                aria-label={`Share on ${platform}`}
              >
                <ShareIcon type={platform} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="reveal" style={{ padding: '0 0 80px' }}>
        <div className="max-w-7xl mx-auto text-center" style={{ padding: '0 40px' }}>
          <Link
            to="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, fontWeight: 600, color: '#FE3F00', textDecoration: 'none' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Home
          </Link>
        </div>
      </section>

    </div>
  )
}
