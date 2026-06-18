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
    { tag: 'SET UP LINK IN BIO', title: 'Drive traffic and clicks', desc: 'Your link in bio page takes visitors beyond your profile to anywhere else on the web.' },
    { tag: 'MEASURE WHAT MATTERS', title: 'Track every sale', desc: "Using Instagram for ecommerce? Later's link in bio lets you add up to five links on each Instagram, TikTok, or Snap post." },
    { tag: 'CUSTOMIZE YOUR URL', title: 'One link in bio. Endless possibilities.', desc: 'Keep your social bios clean and fresh with a customizable link in bio URL.' },
  ]

  const faqs = [
    { q: 'How do I add a link to my TikTok bio?', a: "To add a link to your TikTok bio, go to your profile and tap \"Edit profile.\" In the Website field, paste your Later link in bio URL. This makes it easy for followers to access all your important links from one place." },
    { q: 'Can I use one link in bio link for both Instagram and TikTok?', a: "Yes! With Later's link in bio, you can use a single URL across Instagram, TikTok, and Snap. Your page will automatically display relevant content for each platform." },
    { q: "What's the difference between link in bio and Instagram shop tags?", a: "Instagram shop tags are limited to products in your Instagram shop catalog, while link in bio lets you direct followers to any URL — your blog, YouTube, newsletter signup, or online store." },
    { q: 'Can I add multiple links in one post?', a: "Yes, Later's link in bio allows you to attach up to five links per post. Followers can tap on the post image in your link in bio page to see all associated links." },
    { q: 'Do links need to be attached to a post?', a: "No, you can add standalone button links to your link in bio page that aren't attached to any specific post. These are great for evergreen content like your website, shop, or newsletter signup." },
    { q: 'Can I track link in bio analytics?', a: "Absolutely. Later provides detailed analytics for your link in bio page including page views, link clicks, click-through rates, and revenue tracking so you can measure the impact of your content." },
    { q: 'Is link in bio free?', a: "Yes, Later offers a free link in bio tool that includes essential features. For advanced customization, analytics, and integrations, check out Later's paid plans." },
    { q: 'Can I customize the look of my link in bio page?', a: "Yes! You can customize your page with branded colors, fonts, button styles, featured banners, and themes to match your brand aesthetic perfectly." },
  ]

  const resources = [
    { title: 'Blog', desc: 'Tips and trends to level up your social media marketing strategy.', link: '/blog' },
    { title: 'Marketing Resources', desc: 'Free resources, guides, and templates to grow your brand.', link: '/resources' },
    { title: 'Help Center', desc: 'Get answers to your questions and learn how to use Later.', link: '/help' },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section style={{ position: 'relative', background: '#000', padding: '120px 40px 100px', overflow: 'hidden' }}>
        <img
          src="https://images.ctfassets.net/nfpsrlop6sws/2Hk3atwezTOL4Mmh8ARsNG/13ac9d8c150ba46c807cff883234defc/link-in-bio-hero-noOverlay.jpg"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
        />
        <div className="max-w-[1440px] mx-auto text-center" style={{ position: 'relative', zIndex: 1 }}>
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
      <section style={{ padding: '48px 40px', borderBottom: '1px solid #eee' }}>
        <div className="max-w-[1440px] mx-auto reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 56, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: 1 }}>Trusted by</span>
          {trustedLogos.map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} style={{ height: 28, objectFit: 'contain', opacity: 0.6 }} />
          ))}
        </div>
      </section>

      {/* What's a link in bio? */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
            What's a link in bio?
          </h2>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.6, maxWidth: 680, margin: '0 auto 56px' }}>
            Link in bio is a mini web page built into your Instagram, TikTok, and Snap profiles — making your content clickable and easier to find.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {featureCards.map((card, i) => (
              <div key={i} className={`reveal reveal-d${Math.min(i + 1, 3)}`} style={{ textAlign: 'center', padding: 24 }}>
                <img src={card.icon} alt="" style={{ width: 48, height: 48, margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 15, color: '#555', lineHeight: 1.5 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Customize */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <div className="text-center" style={{ marginBottom: 28 }}>
            <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>
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
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div style={{ background: '#fff', borderRadius: 12, padding: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center' }}>
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

      {/* Feature Showcases */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          {showcases.map((s, i) => (
            <div key={i} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center', marginBottom: 80, direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
              <div style={{ background: '#F8F2EA', borderRadius: 12, aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', direction: 'ltr' }}>
                <span style={{ fontSize: 80, opacity: 0.15 }}>&#128279;</span>
              </div>
              <div style={{ direction: 'ltr' }}>
                <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, color: '#FE3F00', letterSpacing: 2, marginBottom: 12 }}>{s.tag}</p>
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
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/41qrU1Am1UvJRoTaygr3Dk/b2115561b63f322e0ebb114a2d8ecdc7/highsnobiety-lib-iphone.png"
              alt="HighSnobiety link in bio on iPhone"
              style={{ maxWidth: 300, width: '100%' }}
            />
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/aJQ3ZUTeCFt3yUP4Z2p4W/96f7ca40bd0e461f843ef8737d5ce12e/high-snobiety-logo.png"
              alt="HighSnobiety"
              style={{ height: 32, marginBottom: 32, opacity: 0.7 }}
            />
            <blockquote style={{ fontSize: 22, fontFamily: 'var(--font-heading)', fontWeight: 600, lineHeight: 1.4, marginBottom: 24 }}>
              "Later's link in bio landing page is a copy of the account's grid. This is a seamless experience for our users who are looking for more."
            </blockquote>
            <p style={{ fontWeight: 700, fontSize: 16 }}>Brock Cardiner</p>
            <p style={{ fontSize: 14, color: '#777' }}>Editorial Director, HighSnobiety</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[800px] mx-auto reveal">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 28 }}>
            FAQs
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid #e5e5e5', paddingBottom: 20, marginBottom: 20 }}>
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
                  padding: 0,
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
                maxHeight: openFaq === i ? 200 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
              }}>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.6, marginTop: 12 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 28 }}>
            Resources and expertise to keep you ahead
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {resources.map((r, i) => (
              <a key={i} href={r.link} className={`reveal reveal-d${i + 1}`} style={{ background: '#fff', borderRadius: 12, padding: 40, textDecoration: 'none', color: 'inherit', textAlign: 'center', transition: 'box-shadow 0.2s ease' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, marginBottom: 12 }}>{r.title}</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5, marginBottom: 16 }}>{r.desc}</p>
                <span style={{ color: '#FE3F00', fontWeight: 600, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Learn more <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '60px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
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
