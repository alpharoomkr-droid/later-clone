import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ContentCreationToolsPage() {
  const [activeTab, setActiveTab] = useState(0)

  const valueProps = [
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/Twy4RBNMePPJKLsM9Vdvx/9c02bd4a69aa1d32cef3ca199b488859/icon-curate-feed-blue.svg',
      title: 'Create better content faster',
      desc: 'With all the tools you need in one place, spend less time switching between apps and more time creating standout content.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/1uT44PqVqmwMoRhV7xzgkN/0c77c42ca3e45d46b9d134f1c1b208d7/rocket-icon.png',
      title: 'Really easy to use',
      desc: 'No learning curve. Drag, drop, edit, and schedule your content in minutes — not hours.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/55nuMdGWWe3p5bihOfhs7Y/f2c67885e361ce6899bdd4a1ccf62f80/auto-publish-icon.png',
      title: 'Perfect tools for creators',
      desc: 'Whether you are a small business, creator, or social media manager, Later has the content tools you need to grow.',
    },
  ]

  const steps = [
    { num: '01', title: 'Streamline your apps', desc: 'Stop jumping between multiple tools. Later brings everything together so you can create, edit, and schedule from one dashboard.' },
    { num: '02', title: 'Save time & post more', desc: 'Batch your content creation and schedule posts across all your social profiles at once.' },
    { num: '03', title: 'Get unique hashtag suggestions', desc: 'Discover trending and niche hashtags tailored to your content to boost your reach and engagement.' },
    { num: '04', title: 'Find user-generated content', desc: 'Search for on-brand UGC by hashtag, profile, or mentions and add it directly to your content library.' },
    { num: '05', title: 'Edit & optimize your content', desc: 'Crop, filter, and fine-tune your photos and videos so every post looks polished before it goes live.' },
  ]

  const ugcTabs = [
    {
      label: 'Search by hashtag',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/7x09dytH3yylSEQjm8I5eM/77f3b189d0551d0ec1c18f48f17d91db/search-by-hashtag-with-later.png?w=1136&h=1160&q=70&fm=png',
      desc: 'Find the perfect user-generated content by searching hashtags relevant to your brand. Collect and organize on-brand photos to repost with just a few clicks.',
    },
    {
      label: 'Search by profile',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/GVjPB9bwUOMJbxCTpQfy7/48f1236e5acb7f57c591a528b048c2a8/search-by-profile-with-later.png?w=1136&h=1160&q=70&fm=png',
      desc: 'Browse content from specific profiles to find posts that align with your brand aesthetic. Perfect for curating content from brand ambassadors and partners.',
    },
    {
      label: 'Search by @mentions',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/3LF9wqx31rXvnb6IVtiPj4/215b357a5ff9e03c2ec93128230d1181/search-by-mentions-and-tags-with-later.png?w=1136&h=1160&q=70&fm=png',
      desc: 'Discover content where your brand has been tagged or mentioned by your community. Collect and share authentic customer stories that build trust.',
    },
  ]

  const createCards = [
    {
      title: 'Photo & video editing',
      desc: 'Crop, resize, add filters, and adjust your photos and videos right inside Later. No extra apps needed — polish your posts before they go live.',
    },
    {
      title: 'Schedule and publish',
      desc: 'Plan your content calendar and auto publish posts to Instagram, TikTok, Pinterest, Facebook, X, and LinkedIn from one platform.',
    },
    {
      title: 'Create in Canva',
      desc: 'Design stunning graphics without leaving Later using the built-in Canva integration. Create, edit, and schedule — all in one workflow.',
    },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter">
          <p
            className="text-charcoal/60 uppercase tracking-widest"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
          >
            Create & Share with Later Social
          </p>
          <h1
            className="ff-heading"
            style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}
          >
            Content creation tools that make social media easy
          </h1>
          <p
            className="hero-enter-d1"
            style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}
          >
            Create, edit, and optimize your social media content — all from one platform.
            Later gives you the tools to find UGC, edit photos, and get hashtag suggestions
            so every post is on-brand and on-point.
          </p>
          <Link to="/pricing" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 28 }}>
            Get 14 days for free
          </Link>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/5m9sFKZ7bulyuB8L4Iindh/99ec186548ed05ccd842ff1aa6ed9c92/content-creation-tools-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Later Content Creation Tools"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Value props */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <h2
            className="ff-heading text-center"
            style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}
          >
            Create the content your audience wants
          </h2>
          <p
            className="text-center"
            style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}
          >
            Everything you need to produce standout social content, all in one place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 28, textAlign: 'center' }}>
            {valueProps.map((v, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`}>
                <img
                  src={v.icon}
                  alt=""
                  style={{ width: 48, height: 48, margin: '0 auto 16px' }}
                />
                <h3 className="ff-heading" style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbered steps */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <p
            className="text-charcoal/60 uppercase tracking-widest text-center"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}
          >
            HOW LATER'S CONTENT CREATION TOOLS WORK
          </p>
          <h2
            className="ff-heading text-center"
            style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}
          >
            Search, find, &amp; edit unique brand content in seconds
          </h2>
          <p
            className="text-center"
            style={{
              fontSize: 18,
              color: '#555',
              marginBottom: 32,
              maxWidth: 640,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Later's content creation tools make it easy to produce on-brand content at every step.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 36, alignItems: 'center' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/7ASkAWfeyeEp67wh1EaUm7/2d01e287ce6cc367696982a6d1cc35b8/search-find-and-edit-unique-brand-content-in-seconds-with-Later.png?w=1168&h=1034&q=70&fm=png"
              alt="Search find and edit content with Later"
              style={{ width: '100%', borderRadius: 8 }}
            />
            <div>
              {steps.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 32 }}>
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

      {/* UGC section with tabs */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <p
            className="text-charcoal/60 uppercase tracking-widest text-center"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}
          >
            User-Generated Content
          </p>
          <h2
            className="ff-heading text-center"
            style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 28 }}
          >
            Share authentic user-generated content
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 28 }}>
            {ugcTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                style={{
                  padding: '12px 24px',
                  borderRadius: 40,
                  border: activeTab === i ? '2px solid #000' : '2px solid #ddd',
                  background: activeTab === i ? '#000' : '#fff',
                  color: activeTab === i ? '#fff' : '#333',
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 36, alignItems: 'center' }}>
            <div>
              <h3 className="ff-heading" style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>
                {ugcTabs[activeTab].label}
              </h3>
              <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>
                {ugcTabs[activeTab].desc}
              </p>
              <Link to="/pricing" className="btn-outline" style={{ fontSize: 15 }}>
                Start free trial
              </Link>
            </div>
            <img
              src={ugcTabs[activeTab].img}
              alt={ugcTabs[activeTab].label}
              style={{ width: '100%', borderRadius: 8 }}
            />
          </div>
        </div>
      </section>

      {/* Create & Edit cards */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <h2
            className="ff-heading text-center"
            style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}
          >
            Create and edit content your way
          </h2>
          <p
            className="text-center"
            style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}
          >
            Everything you need to produce scroll-stopping posts, all in one place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 32 }}>
            {createCards.map((c, i) => (
              <div
                key={i}
                className={`reveal reveal-d${i + 1}`}
                style={{ background: '#fff', borderRadius: 12, padding: 32 }}
              >
                <h3 className="ff-heading" style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="purple-wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[900px] mx-auto text-center reveal" style={{ color: '#fff', marginBottom: 32 }}>
          <p
            className="uppercase tracking-widest"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12, opacity: 0.7 }}
          >
            CUSTOMER TESTIMONIAL
          </p>
          <h2
            className="ff-heading"
            style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.15 }}
          >
            How Later's content creation tools help brands grow
          </h2>
        </div>
        <div
          className="max-w-[900px] mx-auto reveal grid grid-cols-1 lg:grid-cols-[200px_1fr]"
          style={{ gap: 32, alignItems: 'center' }}
        >
          <img
            src="https://images.ctfassets.net/nfpsrlop6sws/2GkucbncyJCQxYrMMcfIgl/ccff016ccc10fd06c97a006d42ca2a95/lush.png?w=640&h=640&q=50&fm=png"
            alt="LUSH Cosmetics"
            style={{ width: '100%', borderRadius: 12 }}
          />
          <div>
            <p style={{ fontSize: 20, lineHeight: 1.6, color: '#fff', marginBottom: 24 }}>
              "A large part of Lush's content strategy is to elevate other voices, including
              our customers. One simple way to do this is through UGC. Using Later has helped
              us to navigate our tagged photos and videos, collect and organize them, and
              leverage across our channels."
            </p>
            <p style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>Laura Cranfield</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>LUSH Cosmetics</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '60px 40px', background: '#000', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2
            className="ff-heading"
            style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24, color: '#fff' }}
          >
            Get the best content creation tools for social media
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>
            Test out any Later plan 100% free for 14 days.
          </p>
          <Link to="/pricing" className="btn-primary" style={{ fontSize: 16 }}>
            Get 14 days for free
          </Link>
        </div>
      </section>
    </div>
  )
}
