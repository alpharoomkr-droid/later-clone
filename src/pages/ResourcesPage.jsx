import { useState } from 'react'

const featuredResources = [
  {
    title: 'Made You Look Ep. 2: Celebrity sells, community scales',
    tag: 'Expert Sessions',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/38WlB7udscu7oX2MhCfMu5/6a14e5d0d13f1c2f0c4bc77f78c2594f/Ep2-MadeYouLook-RHFeature-Pre_2x.png?w=1168&h=500&q=50&fm=png',
    link: '#',
  },
  {
    title: 'Made You Look: From Cold DM to Creator Partnership',
    tag: 'Expert Sessions',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/4T05CW4D70kXb5VWBCnzeq/88449ee636da4a13682698eff40b6d55/Later-MadeYouLook-Ep1-ResourceHub-Thumbnail.png?w=1920&h=1080&q=50&fm=png',
    link: '#',
  },
  {
    title: 'The Strategic Turning Point: 2025 State of Influencer Marketing',
    tag: 'Report',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/2tipSeZyuQeCK7TJUBwtJq/1757af3d23b4c53045fd2044c7846ec9/InfluencerMarketingReport2026-ResourceHub-Thumbnail.png?w=1920&h=1081&q=50&fm=png',
    link: '#',
  },
  {
    title: 'Amplify Your Sales with Social Commerce',
    tag: 'Guide',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/1S851RXhr916fT4yQurfj4/ee9da3ec8baed622ac7e669e35d61caf/resource-hub-thumbnail.png?w=630&h=354&q=50&fm=png',
    link: '#',
  },
]

const resourceCards = [
  {
    title: 'The Drop Q1 2026: Creator Campaigns Without the Surprises',
    desc: 'A quarterly deep-dive into what’s working in creator marketing right now.',
    tag: 'Report',
    platform: 'All',
    topic: 'Influencer Marketing',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/1OsQL7mYwmL2tIk0fsiRUB/f596bd15c4f11ed82963d58d667d089c/Later-TheDropQ1-LP-Thumbnail.png?w=912&h=650&q=50&fm=png',
    link: '#',
  },
  {
    title: 'The Later Playbook: Your step-by-step social media system',
    desc: 'Everything you need to build a social strategy that actually works.',
    tag: 'Guide',
    platform: 'All',
    topic: 'Social Media Strategy',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/5GmDFWJvyPojAJbp0xjrPf/6cacc6cf5e97783ef4785b2d5530eda0/Meta_image.png?w=1296&h=736&q=50&fm=png',
    link: '#',
  },
  {
    title: 'Later Influence for Later',
    desc: 'See how Later uses its own influencer marketing platform to drive results.',
    tag: 'Case Study',
    platform: 'All',
    topic: 'Influencer Marketing',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/3ZHS6aGKpnlbX2KiPezHkk/7f0bc1a1e1b522e5cf02958fc7670ce5/casestudy-thumbnail-Later-Influence-Customer-Zero.jpg?w=3840&h=2160&q=50&fm=jpg',
    link: '#',
  },
  {
    title: 'Shot list template for content creation',
    desc: 'Plan every shot before you hit record with this free downloadable template.',
    tag: 'Template',
    platform: 'All',
    topic: 'Video Strategy',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/2qq6OvGvOvWwnZxpJpOWON/35c81c37d5b927474425676211261659/Later-Shot_List_Guide-ResourceHub-Thumbnail.png?w=1217&h=685&q=50&fm=png',
    link: '#',
  },
  {
    title: 'Free checklist: launch your social presence in 7 steps',
    desc: 'From setting up your profiles to posting your first content — it’s all here.',
    tag: 'Checklist',
    platform: 'All',
    topic: 'Social Media Strategy',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/n0ItOHyEzsGwbwKhgdQx5/a1adbe3c2a762628e352a113e93ed277/Later-Posting_on_Social-Resource-Hub-Thumbnail.png?w=1217&h=685&q=50&fm=png',
    link: '#',
  },
  {
    title: 'Free scroll-stopping hook templates',
    desc: 'Grab attention in the first 3 seconds with proven hook formulas.',
    tag: 'Template',
    platform: 'All',
    topic: 'Video Strategy',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/4pizjlivKQJbGp1VLEh3fk/700f16bd79bbec467cc763165f361e16/Later-Scroll_Stopping_Hooks-ResourceHub-Thumbnail.png?w=1217&h=685&q=50&fm=png',
    link: '#',
  },
]

const moreResources = [
  {
    title: 'Social Media Glossary',
    desc: 'All the social media terms and definitions you need to know.',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/77gZlskPahu0CR2pI3kmUU/7641c4d88629207503582c76e3cc7cbf/Thumbnail-MoreResources-SocialMediaGlossary.png?w=1920&h=1080&q=80&fm=png',
    link: '#',
  },
  {
    title: 'Videos',
    desc: 'Watch tips, tutorials, and expert sessions on social media marketing.',
    image: null,
    link: '#',
  },
  {
    title: 'Instagram Caption Library',
    desc: 'Browse hundreds of ready-to-use captions sorted by category.',
    image: null,
    link: '#',
  },
  {
    title: 'Learn How to Use Later',
    desc: 'Step-by-step walkthroughs to master every Later feature.',
    image: null,
    link: '#',
  },
  {
    title: 'Beyond Influence Podcast',
    desc: 'Conversations with marketers, creators, and industry leaders.',
    image: 'https://images.ctfassets.net/nfpsrlop6sws/5m3j4XC1fy3Mcp7WoxMRTs/62305298167397ece22abfaf01cf0028/BeyondInfluence-ResourceHub-Thumbnail.png?w=1920&h=1080&q=80&fm=png',
    link: '#',
  },
]

const platformOptions = ['All', 'Facebook', 'Instagram', 'LinkedIn', 'Pinterest', 'TikTok', 'Twitter', 'YouTube']
const typeOptions = ['All', 'Challenge', 'Course', 'Guide', 'Report', 'Case Study', 'Template', 'Checklist', 'Webinar']
const topicOptions = ['All', 'Video Strategy', 'Influencer Marketing', 'Social Media Strategy', 'Content Creation', 'Analytics', 'Link in Bio']

export default function ResourcesPage() {
  const [platform, setPlatform] = useState('All')
  const [type, setType] = useState('All')
  const [topic, setTopic] = useState('All')
  const [email, setEmail] = useState('')

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg reveal" style={{ padding: '80px 40px 64px' }}>
        <div className="max-w-3xl mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>
            Resources
          </p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
            Later Marketing Resources
          </h1>
          <p className="hero-enter-d1" style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 700, margin: '0 auto', color: '#333' }}>
            Explore hundreds of influencer marketing and social media resources, webinars, guides, and expert advice to help you stay ahead of the competition.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="reveal" style={{ padding: '64px 40px' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2 className="ff-heading" style={{ fontSize: 32, fontWeight: 900, marginBottom: 32 }}>Featured</h2>
          <div className="featured-resources-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {/* Hero card */}
            <a
              href={featuredResources[0].link}
              style={{ textDecoration: 'none', color: 'inherit', gridRow: '1 / 3', display: 'flex', flexDirection: 'column', borderRadius: 16, overflow: 'hidden', background: '#fff', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ overflow: 'hidden', flex: 1 }}>
                <img
                  src={featuredResources[0].image}
                  alt={featuredResources[0].title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none' }}
                />
              </div>
              <div style={{ padding: '24px 24px 28px' }}>
                <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, color: '#FE3F00', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8 }}>
                  {featuredResources[0].tag}
                </span>
                <h3 className="ff-heading" style={{ fontSize: 24, fontWeight: 900, lineHeight: 1.2 }}>
                  {featuredResources[0].title}
                </h3>
              </div>
            </a>

            {/* Smaller featured cards */}
            {featuredResources.slice(1).map((r, i) => (
              <a
                key={i}
                href={r.link}
                className={`reveal reveal-d${i + 1}`}
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', borderRadius: 16, overflow: 'hidden', background: '#fff', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ width: '45%', minHeight: 160, overflow: 'hidden', flexShrink: 0 }}>
                  <img
                    src={r.image}
                    alt={r.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#FE3F00', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6 }}>
                    {r.tag}
                  </span>
                  <h3 className="ff-heading" style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.3 }}>
                    {r.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="reveal" style={{ padding: '0 40px 48px' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', borderBottom: '1px solid #e0dcd6', paddingBottom: 24 }}>
            {/* Platform */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#777' }}>Platform</label>
              <select
                value={platform}
                onChange={e => setPlatform(e.target.value)}
                style={{ padding: '10px 36px 10px 14px', fontSize: 15, border: '1px solid #ccc', borderRadius: 6, background: '#fff', cursor: 'pointer', appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'10\' height=\'6\' viewBox=\'0 0 10 6\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1L5 5L9 1\' stroke=\'%23333\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', minWidth: 160 }}
              >
                {platformOptions.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            {/* Type */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#777' }}>Type</label>
              <select
                value={type}
                onChange={e => setType(e.target.value)}
                style={{ padding: '10px 36px 10px 14px', fontSize: 15, border: '1px solid #ccc', borderRadius: 6, background: '#fff', cursor: 'pointer', appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'10\' height=\'6\' viewBox=\'0 0 10 6\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1L5 5L9 1\' stroke=\'%23333\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', minWidth: 160 }}
              >
                {typeOptions.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            {/* Topic */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#777' }}>Topic</label>
              <select
                value={topic}
                onChange={e => setTopic(e.target.value)}
                style={{ padding: '10px 36px 10px 14px', fontSize: 15, border: '1px solid #ccc', borderRadius: 6, background: '#fff', cursor: 'pointer', appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'10\' height=\'6\' viewBox=\'0 0 10 6\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1L5 5L9 1\' stroke=\'%23333\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', minWidth: 180 }}
              >
                {topicOptions.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="reveal" style={{ padding: '0 40px 80px' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="resource-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, alignItems: 'stretch' }}>
            {resourceCards.map((r, i) => (
              <a
                key={i}
                href={r.link}
                className={`reveal reveal-d${(i % 3) + 1}`}
                style={{ textDecoration: 'none', color: 'inherit', borderRadius: 16, overflow: 'hidden', background: '#fff', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ overflow: 'hidden', aspectRatio: '16/9' }}>
                  <img
                    src={r.image}
                    alt={r.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none' }}
                  />
                </div>
                <div style={{ padding: '20px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 600, color: '#FE3F00', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8 }}>
                    {r.tag}
                  </span>
                  <h3 className="ff-heading" style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.3, marginBottom: 8 }}>
                    {r.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.5, color: '#555', flex: 1 }}>
                    {r.desc}
                  </p>
                  <span style={{ marginTop: 16, fontSize: 14, fontWeight: 600, color: '#FE3F00', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Read more
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="purple-wood-bg reveal" style={{ padding: '64px 40px 80px' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="ff-heading" style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.15, color: '#fff', marginBottom: 16 }}>
            Subscribe to Later's newsletter
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', marginBottom: 32 }}>
            Get the latest social media news, tips, and resources delivered straight to your inbox every week.
          </p>
          <form
            onSubmit={e => e.preventDefault()}
            style={{ display: 'flex', gap: 12, maxWidth: 480, margin: '0 auto' }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ flex: 1, padding: '14px 18px', fontSize: 15, border: 'none', borderRadius: 6, outline: 'none' }}
            />
            <button
              type="submit"
              style={{ padding: '14px 28px', fontSize: 15, fontWeight: 700, background: '#fff', color: '#7A63E8', border: 'none', borderRadius: 6, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'opacity 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* More Resources */}
      <section className="reveal" style={{ padding: '64px 40px 80px' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2 className="ff-heading" style={{ fontSize: 32, fontWeight: 900, marginBottom: 32 }}>More Resources</h2>
          <div className="more-resources-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24, alignItems: 'stretch' }}>
            {moreResources.map((r, i) => (
              <a
                key={i}
                href={r.link}
                className={`reveal reveal-d${Math.min(i + 1, 3)}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  borderRadius: 16,
                  overflow: 'hidden',
                  background: r.image ? 'transparent' : '#F8F2EA',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  minHeight: 260,
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {r.image ? (
                  <div style={{ overflow: 'hidden', aspectRatio: '16/9' }}>
                    <img
                      src={r.image}
                      alt={r.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'none' }}
                    />
                  </div>
                ) : (
                  <div style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg, #FE3F00 0%, #FF7A4D 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 32, fontWeight: 900, color: '#fff', fontFamily: 'var(--font-heading)', textAlign: 'center', padding: '0 16px' }}>{r.title}</span>
                  </div>
                )}
                <div style={{ padding: '16px 16px 20px' }}>
                  <h3 className="ff-heading" style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3, marginBottom: 6 }}>
                    {r.title}
                  </h3>
                  <p style={{ fontSize: 13, lineHeight: 1.5, color: '#777' }}>
                    {r.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="wood-bg reveal" style={{ padding: '64px 40px 80px', textAlign: 'center' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="ff-heading" style={{ fontSize: 46, fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
            Get the best social media marketing tools in one app
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#555', marginBottom: 36, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Plan, schedule, publish, and analyze all your social content from a single dashboard.
          </p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>
            Start Free Trial
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 4 }}><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .resource-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .more-resources-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .featured-resources-grid { grid-template-columns: 1fr !important; }
          .featured-resources-grid > a:first-child { grid-row: auto !important; }
        }
        @media (max-width: 640px) {
          .resource-grid { grid-template-columns: 1fr !important; }
          .more-resources-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
