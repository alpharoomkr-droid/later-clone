import { useState } from 'react'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function LinkInBioPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [activeTab, setActiveTab] = useState(0)

  const trustedLogos = [
    { src: 'https://images.ctfassets.net/nfpsrlop6sws/3I9Ary1PgBwO1d9l4TjVQt/4f5e13c842f0d3f50a34b5d961e8593c/baggu-logo.png', alt: 'Baggu' },
    { src: 'https://images.ctfassets.net/nfpsrlop6sws/4H9dtyZiRpqlcM3SrNJg7h/c7ac6892333695cc6b1b147dc096e2c6/youtube-logo.png', alt: 'YouTube' },
    { src: 'https://images.ctfassets.net/nfpsrlop6sws/tNU8zycyzZK56inc9hC5Y/a71af9d5f4d2ec82b85a2628da7fefa8/loreal-logo.png', alt: 'Loreal' },
    { src: 'https://images.ctfassets.net/nfpsrlop6sws/2XDTs16t2AvjplQgyl2AqW/25539ef082dde7c8983edc57f56ff2b8/HGTV-logo.png', alt: 'HGTV' },
  ]

  const featureCards = [
    { icon: 'https://images.ctfassets.net/nfpsrlop6sws/1uT44PqVqmwMoRhV7xzgkN/0c77c42ca3e45d46b9d134f1c1b208d7/rocket-icon.png', title: 'Turn followers into customers', desc: 'Track sales with custom affiliate links for Instagram, TikTok, and Snap.' },
    { icon: 'https://images.ctfassets.net/nfpsrlop6sws/01sRpm4ArtDplCq9UgFNib/3ee7e72263a0dea7d9d455b27d49f467/icon-find-blue.png', title: 'Grow your following on every platform', desc: 'Help followers discover your website, social profiles, and mailing list.' },
    { icon: 'https://images.ctfassets.net/nfpsrlop6sws/2z0AhCoYBvkd46vlrvL5QJ/c7b2482d63579c9e8153eaad9c4cdf61/icon-blue-manage-links.png', title: 'Manage all your links in one place', desc: "With just one link, your followers can find exactly what they're looking for." },
    { icon: 'https://images.ctfassets.net/nfpsrlop6sws/6AmI2K8I3BNEUYF8FeC2jZ/fcd55dffba11e0c7cc871ea3d0f7cd08/icon-blue-customize.png', title: 'Customize for SEO & appearance', desc: 'Customize your link in bio page to match your brand and optimize search visibility.' },
  ]

  const customizeTabs = [
    { title: 'Custom design', desc: 'Bring your brand to life with custom buttons, backgrounds, text colors, and themes.', img: 'https://images.ctfassets.net/nfpsrlop6sws/41kvaxYDK7fR08wQJvs1SK/689b7e5a22bf1a730a1c18fa97160177/custom-design.png?w=1144&h=584&q=80&fm=png' },
    { title: 'Featured banner', desc: 'Drive traffic to your most important links with a featured banner that shows off your top content.', img: 'https://images.ctfassets.net/nfpsrlop6sws/6lDjsV2UA2qPGyevCKD3HI/2b50953df9632fb9b5142a8040b4d85a/featured-banner.png?w=952&h=562&q=80&fm=png' },
    { title: 'Mailchimp integration', desc: 'Collect and grow your list of email subscribers and keep your audience in the know.', img: 'https://images.ctfassets.net/nfpsrlop6sws/5HjtAoQOhf6H2JMb5xs4R9/bfed3aca62344a30db921650be3caedc/mailchimp-integration.png?w=1022&h=536&q=80&fm=png' },
    { title: 'Custom SEO', desc: 'Personalize the title tag and meta description of your link in bio page for search engines.', img: 'https://images.ctfassets.net/nfpsrlop6sws/2w5ajqJTo8OQptsOifVRCa/98074f189152e23ea6aa2c2e3b0e1fd5/custom-seo.png?w=1144&h=562&q=80&fm=png' },
  ]

  const showcases = [
    { tag: 'SET UP LINK IN BIO', title: 'Drive traffic and clicks', desc: 'Your link in bio page takes visitors beyond your profile to anywhere else on the web. Whether it\'s a blog post or product page with your latest offer — you decide where your followers go next.' },
    { tag: 'MEASURE WHAT MATTERS', title: 'Track every sale', desc: "Using Instagram for ecommerce? Later's link in bio lets you add up to five links on each Instagram, TikTok, or Snap post so you can direct your followers to your website or online shop." },
    { tag: 'CUSTOMIZE YOUR URL', title: 'One link in bio. Endless possibilities.', desc: 'Keep your social bios clean and fresh with a customizable link in bio URL. No more copy and paste — manage all your links from one easy platform.' },
  ]

  const faqs = [
    { q: 'How do I add a link to my TikTok bio?', a: "As long as you have over 1,000 followers on TikTok, you'll be able to add a customizable link in bio page to your TikTok bio. With link in bio you can link TikTok posts from your feed to specific URLs to drive traffic and increase engagement from TikTok." },
    { q: 'Can I use one link in bio link for both Instagram and TikTok?', a: "Yup! You can use the same link in bio link for both your Instagram and TikTok profiles. Your followers will see the posts from the platform that they're on when they click your bio link." },
    { q: "What's the difference between link in bio and Instagram shop tags?", a: "With link in bio, you can drive traffic to your website, product pages, blog posts, and more — all through the link in your Instagram bio! Unlike Instagram shop tags, link in bio doesn't tag posts directly on your Instagram feed." },
    { q: 'Can I add multiple links in one post?', a: "Linking is available on all Later plans. Single links can be added to all TikTok, Instagram, and Snap posts. Growth and Advanced plans can add up to 5 links per Instagram post." },
    { q: 'Do links need to be attached to a post?', a: "Yes. For links to display as a post on your link in bio page, they need to be attached to an Instagram or TikTok post. If you have previously published posts, you can always add them to your link in bio page through Later." },
    { q: 'Will the link in bio page look exactly like my feed?', a: "Your link in bio page will contain any posts tagged with a link — meaning it may not mirror your exact feed if you don't tag every single post with a link." },
    { q: 'What if I don\'t use Google Analytics?', a: "No problem. Analytics inside Later will help you measure ROI from Instagram, too. You can track page views, link clicks, click-through rates, and revenue." },
    { q: 'What kind of profile do I need to use link in bio?', a: "You can use link in bio on any Instagram profile! Personal, creator, or business profiles are all eligible. Adding a bio link to TikTok requires a TikTok Business account with over 1,000 followers." },
  ]

  const resources = [
    { title: 'Blog', desc: 'All the latest resources to boost your social strategy.', link: '/blog', img: 'https://later.com/static/35d40bbeb972c3ff06d1c3999d56cafd/34f1c/blog-thumbnail.png' },
    { title: 'Marketing Resources', desc: 'Free tools to help you find success on social media.', link: '/resources', img: 'https://later.com/static/098a1dcd9bcfc169b0ebd251dce41d1d/34f1c/marketing-resources-thumbnail.png' },
    { title: 'Help Center', desc: 'Search & find answers to your Later questions.', link: '/help', img: 'https://later.com/static/1194e534ab191bf7941e331cf826ee57/34f1c/help-center-thumbnail.png' },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="reveal" style={{ position: 'relative', background: '#000', overflow: 'hidden' }}>
        <img
          src="https://images.ctfassets.net/nfpsrlop6sws/2Hk3atwezTOL4Mmh8ARsNG/13ac9d8c150ba46c807cff883234defc/link-in-bio-hero-noOverlay.jpg"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ position: 'relative', zIndex: 1, paddingTop: 96, paddingBottom: 80 }}>
          <p className="hero-enter" style={{ fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>
            One link in bio, Endless Possibilities
          </p>
          <h1 className="hero-enter-d1" style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px', color: '#fff' }}>
            Turn followers into customers with Later's link in bio tool.
          </h1>
          <p className="hero-enter-d2" style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 36px', color: 'rgba(255,255,255,0.85)' }}>
            Use link in bio from Later to create a fully customizable link in bio page for your Instagram, TikTok, and Snap profiles.
          </p>
          <a href="/pricing" className="btn-primary hero-enter-d3" style={{ fontSize: 16 }}>
            Get your free link in bio <ArrowIcon />
          </a>
        </div>
      </section>

      {/* Trusted By */}
      <section className="reveal" style={{ borderBottom: '1px solid #eee' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 56, flexWrap: 'wrap', paddingTop: 40, paddingBottom: 40 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: 1 }}>Trusted by</span>
          {trustedLogos.map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} style={{ height: 28, objectFit: 'contain', opacity: 0.6 }} />
          ))}
        </div>
      </section>

      {/* What's a link in bio? */}
      <section className="reveal" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
            What's a link in bio?
          </h2>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.6, maxWidth: 680, margin: '0 auto 48px' }}>
            Link in bio is a mini web page built into your Instagram, TikTok, and Snap profiles — making your content clickable and easier to find.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureCards.map((card, i) => (
              <div key={i} className={`reveal reveal-d${Math.min(i + 1, 3)} h-full`} style={{ textAlign: 'center', padding: 24 }}>
                <img src={card.icon} alt="" className="mx-auto" style={{ width: 48, height: 48, marginBottom: 16 }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 15, color: '#555', lineHeight: 1.5 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Customize */}
      <section className="wood-bg reveal" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" style={{ marginBottom: 28 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginBottom: 12 }}>
              HOW TO CUSTOMIZE LINK IN BIO
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
              Make your page as unique as you.
            </h2>
            <p style={{ fontSize: 18, color: '#555', lineHeight: 1.6, maxWidth: 700, margin: '0 auto' }}>
              Customize with buttons, featured media, scrollable banners, linked posts, and design your page to match your brand aesthetic.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
            {customizeTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                style={{
                  padding: '10px 24px',
                  fontSize: 15,
                  fontWeight: activeTab === i ? 700 : 400,
                  fontFamily: 'var(--font-body)',
                  background: activeTab === i ? '#000' : 'transparent',
                  color: activeTab === i ? '#F8F2EA' : '#000',
                  border: '2px solid #000',
                  borderRadius: 0,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" style={{ background: '#fff', borderRadius: 12, padding: 40 }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
                {customizeTabs[activeTab].title}
              </h3>
              <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>
                {customizeTabs[activeTab].desc}
              </p>
              <a href="/pricing" className="btn-primary" style={{ fontSize: 15 }}>
                Get started free <ArrowIcon />
              </a>
            </div>
            <img
              src={customizeTabs[activeTab].img}
              alt={customizeTabs[activeTab].title}
              style={{ width: '100%', borderRadius: 8 }}
            />
          </div>
        </div>
      </section>

      {/* Link in Bio Features heading */}
      <section className="reveal" style={{ paddingTop: 64, paddingBottom: 0 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginBottom: 12 }}>
            LINK IN BIO FEATURES
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
            Here's what you can do with link in bio.
          </h2>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.6, maxWidth: 680, margin: '0 auto' }}>
            Manage all your links from one easy-to-use platform. Curate, sell, grow, and engage your audience all from one link.
          </p>
        </div>
      </section>

      {/* Feature Showcases */}
      <section className="reveal" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showcases.map((s, i) => (
            <div key={i} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" style={{ marginBottom: i < showcases.length - 1 ? 64 : 0 }}>
              {/* Image placeholder -- order flips on even items */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''} style={{ background: '#F8F2EA', borderRadius: 12, aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 80, opacity: 0.15 }}>&#128279;</span>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: '#FE3F00', marginBottom: 12 }}>{s.tag}</p>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>{s.title}</h3>
                <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>{s.desc}</p>
                <a href="/pricing" className="btn-outline" style={{ fontSize: 15 }}>
                  Explore plans <ArrowIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="wood-bg reveal" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/41qrU1Am1UvJRoTaygr3Dk/b2115561b63f322e0ebb114a2d8ecdc7/highsnobiety-lib-iphone.png"
                alt="HighSnobiety link in bio on iPhone"
                style={{ maxWidth: 280, width: '100%' }}
              />
            </div>
            <div>
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/aJQ3ZUTeCFt3yUP4Z2p4W/96f7ca40bd0e461f843ef8737d5ce12e/high-snobiety-logo.png"
                alt="HighSnobiety"
                style={{ height: 32, marginBottom: 32, opacity: 0.7 }}
              />
              <blockquote style={{ fontSize: 22, fontFamily: 'var(--font-heading)', fontWeight: 600, lineHeight: 1.4, marginBottom: 24 }}>
                "Later's link in bio landing page is a copy of the account's grid. This is a seamless experience for our users who are looking for more. We use the Link in Bio analytics to send reports back to section editors about what people are clicking through to."
              </blockquote>
              <p style={{ fontWeight: 700, fontSize: 16 }}>Brock Cardiner</p>
              <p style={{ fontSize: 14, color: '#777', marginBottom: 24 }}>Editorial Director, HighSnobiety</p>
              <a href="/case-studies" className="btn-outline" style={{ fontSize: 15 }}>
                Read case studies <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="reveal" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 36 }}>
            FAQ
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid #e5e5e5' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                  padding: '20px 0',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {faq.q}
                <span style={{
                  fontSize: 24,
                  fontWeight: 300,
                  marginLeft: 16,
                  transition: 'transform 0.3s ease',
                  transform: openFaq === i ? 'rotate(45deg)' : 'none',
                  flexShrink: 0,
                }}>+</span>
              </button>
              <div style={{
                maxHeight: openFaq === i ? 300 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
              }}>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.6, paddingBottom: 20 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="wood-bg reveal" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 36 }}>
            Resources and expertise to keep you ahead.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((r, i) => (
              <a key={i} href={r.link} className={`reveal reveal-d${i + 1} h-full`} style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s ease' }}>
                <div style={{ aspectRatio: '550/292', overflow: 'hidden' }}>
                  <img src={r.img} alt={r.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '24px 24px 32px', textAlign: 'left', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{r.title}</h3>
                  <p style={{ fontSize: 15, color: '#555', lineHeight: 1.5, marginBottom: 16, flex: 1 }}>{r.desc}</p>
                  <span style={{ color: '#FE3F00', fontWeight: 600, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    Learn more <ArrowIcon />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="reveal" style={{ paddingTop: 64, paddingBottom: 64, textAlign: 'center' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
            Add a link in bio to your Instagram, TikTok, and Snap.
          </h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32, lineHeight: 1.6 }}>
            Get Later's link in bio tool for free.
          </p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>
            Claim free link in bio <ArrowIcon />
          </a>
        </div>
      </section>
    </div>
  )
}
