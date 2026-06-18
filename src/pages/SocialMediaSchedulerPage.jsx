function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FE3F00" stroke="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/>
    </svg>
  )
}

const LOGOS = [
  { src: 'https://images.ctfassets.net/nfpsrlop6sws/2x29rk0Ts3mpCN8A6Ih2eh/a8f8d86faa44e2a47ea9e09149ba5b54/fashion-nova-logo.png', alt: 'Fashion Nova' },
  { src: 'https://images.ctfassets.net/nfpsrlop6sws/4H9dtyZiRpqlcM3SrNJg7h/c7ac6892333695cc6b1b147dc096e2c6/youtube-logo.png', alt: 'YouTube' },
  { src: 'https://images.ctfassets.net/nfpsrlop6sws/3c7Rt6RUcY6rGfMGECeVWe/bd63c6c95a264625f9eb6e980c3f22bc/kylie-cosmetics-logo.png', alt: 'Kylie Cosmetics' },
  { src: 'https://images.ctfassets.net/nfpsrlop6sws/3LOgFjjILbbclDND6uJned/493722dcd2310dd10ed612135c81b817/espn-logo.png', alt: 'ESPN' },
]

const FEATURES = [
  {
    tag: 'Schedule & Publish',
    title: 'Set it & forget it',
    desc: 'Keep your content fresh & organized with Later. Create and edit, then schedule posts to publish when you want.',
    cta: 'Start scheduling',
    href: '/social-media-scheduler/',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/4fy7vVm2aAMCg4a2HUqMkU/a9e0a83917c0ff76dc18d78e40baabed/schedule-publish-en.png',
  },
  {
    tag: 'Link in Bio',
    title: 'Turn followers into customers',
    desc: 'Use your Instagram & TikTok bio to drive traffic to your website, online shop, or blog with a custom link in bio page.',
    cta: 'Get started',
    href: '/link-in-bio/',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/3HriMBwVMTbLsVJBOjNHgI/a97a3e08b9549c1e29e3b2fb3b3cb9cc/link-in-bio-en.png',
  },
  {
    tag: 'Analytics',
    title: 'Measure what really matters',
    desc: "Know what content works with Later Analytics. Get the insights you need, no number crunching required.",
    cta: 'Analyze your social',
    href: '/social-media-analytics/',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/7n6vSOiaRZwHMFaWd5h1s4/fe18ef19e53eefa66be2e42e8dbc2ba8/analytics-en.png',
  },
  {
    tag: 'Content Creation Tools',
    title: 'Create better content, faster',
    desc: 'Search & find unique brand content in seconds. Get creative tools to organize & edit your media, and get on-brand UGC.',
    cta: 'Create content',
    href: '/social-content-creation/',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/1UXPBF2mR6M6oOq0CK4k0p/a74d91c4e65e6dc6e2cf82a3a04acc9d/content-creation-en.png',
  },
]

const STEPS = [
  { num: '01', title: 'Compare Plans', desc: 'Pick a Later plan that works for you & make social media easy.', href: '/pricing/' },
  { num: '02', title: 'Start Free Trial', desc: "Test out all of Later's most-loved tools for free for 14 days!", href: '/pricing/' },
  { num: '03', title: 'Onboarding', desc: 'Get free training, courses, e-books, & downloads to help you grow faster.', href: '/resources/' },
]

const RESOURCES = [
  { title: 'Blog', desc: 'Expert tips, trends, and strategies for social media marketing.', href: '/blog/' },
  { title: 'Marketing Resources', desc: 'Free guides, templates, and tools to elevate your social game.', href: '/resources/' },
  { title: 'Help Center', desc: 'Get answers fast with step-by-step guides and tutorials.', href: '/help/' },
]

export default function SocialMediaSchedulerPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="relative overflow-hidden flex items-center justify-center text-center" style={{ background: '#000', minHeight: '90vh' }}>
        <img
          src="https://images.ctfassets.net/nfpsrlop6sws/7b4Cst4eUbELbpHx1nVy1s/736d30102a739c3927f766e0b13d962a/Later-Social-VideoThumb-3.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.45 }}
        />
        <div className="relative z-10" style={{ maxWidth: 780, padding: '60px 40px' }}>
          <div className="hero-enter flex items-center justify-center gap-2" style={{ marginBottom: 24 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#fff', opacity: 0.8 }}>G2 Leader</span>
            <span className="flex gap-0.5">
              {[1,2,3,4].map(i => <StarIcon key={i} />)}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FE3F00" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/>
                <defs><clipPath id="hc"><rect x="0" y="0" width="12" height="24"/></clipPath></defs>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z" fill="#FE3F00" clipPath="url(#hc)"/>
              </svg>
            </span>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#fff', opacity: 0.8 }}>4.5 stars</span>
          </div>
          <h1
            className="hero-enter-d1"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 76,
              fontWeight: 900,
              lineHeight: '80px',
              letterSpacing: '0.4px',
              color: '#fff',
              marginBottom: 24,
            }}
          >
            Social media management made easy
          </h1>
          <p className="hero-enter-d2" style={{ fontSize: 20, lineHeight: '30px', color: 'rgba(255,255,255,0.85)', maxWidth: 620, margin: '0 auto 36px' }}>
            Crush your social goals faster with Later. Automate daily social tasks and turn followers into customers with Linkin.bio — all in one app.
          </p>
          <a href="/pricing/" className="btn-primary hero-enter-d3" style={{ fontSize: 18 }}>
            Get 14 days for free <ArrowIcon />
          </a>
        </div>
      </section>

      {/* Trusted By */}
      <section className="wood-bg" style={{ padding: '48px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          <p className="text-center" style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: '#000', opacity: 0.45, marginBottom: 32 }}>
            Trusted by the world's top brands
          </p>
          <div className="flex items-center justify-center flex-wrap gap-12">
            {LOGOS.map(l => (
              <img key={l.alt} src={l.src} alt={l.alt} style={{ height: 28, objectFit: 'contain', opacity: 0.7 }} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* Use Later / Unplug */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal">
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 52,
              fontWeight: 900,
              lineHeight: '58px',
              maxWidth: 700,
              margin: '0 auto 20px',
            }}
          >
            Use Later when you're online. Unplug when you're not.
          </h2>
          <p style={{ fontSize: 20, lineHeight: '30px', color: '#000', opacity: 0.6, maxWidth: 500, margin: '0 auto' }}>
            Make your job and your life easier (we won't tell).
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      {FEATURES.map((f, i) => {
        const reversed = i % 2 === 1
        return (
          <section key={f.tag} className={i % 2 === 0 ? '' : 'wood-bg'} style={{ padding: '60px 40px' }}>
            <div
              className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal"
            >
              <div className={reversed ? 'lg:order-2' : ''}>
                <p style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#FE3F00', marginBottom: 12 }}>
                  {f.tag}
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 48,
                    fontWeight: 900,
                    lineHeight: '54px',
                    marginBottom: 20,
                  }}
                >
                  {f.title}
                </h2>
                <p style={{ fontSize: 18, lineHeight: '28px', color: '#000', opacity: 0.7, maxWidth: 480, marginBottom: 32 }}>
                  {f.desc}
                </p>
                <a href={f.href} className="btn-primary">
                  {f.cta} <ArrowIcon />
                </a>
              </div>
              <div className={reversed ? 'lg:order-1' : ''}>
                <img src={f.img} alt={f.tag} className="w-full h-auto rounded-lg" loading="lazy" />
              </div>
            </div>
          </section>
        )
      })}

      {/* Testimonial */}
      <section style={{ background: '#000', padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
          <div>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/5jn0R7lkLHNPYjxclMVB4g/b551ed138659b0f10bbceebe60e33cca/LIFe-logo_white_1600x_1.png"
              alt="Lucky Iron Fish"
              style={{ height: 40, objectFit: 'contain', marginBottom: 32 }}
              loading="lazy"
            />
            <blockquote style={{ fontSize: 22, lineHeight: '34px', color: '#fff', fontWeight: 400, marginBottom: 24 }}>
              "The key to a strong organic social strategy is batch working. Later helps me repurpose content for various channels easily when scheduling and optimizing content across accounts."
            </blockquote>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>
              <strong style={{ color: '#fff' }}>Shraddha Sekhon</strong>, Digital Marketing & Brand Director, Lucky Iron Fish
            </p>
            <a href="/case-studies/lucky-iron-fish/" className="btn-primary">
              Read the case study <ArrowIcon />
            </a>
          </div>
          <div className="flex gap-8 justify-center">
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: '36px 32px', textAlign: 'center', flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 48, fontWeight: 900, color: '#FE3F00', marginBottom: 8 }}>4.7M</p>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)' }}>TikTok likes</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: '36px 32px', textAlign: 'center', flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 48, fontWeight: 900, color: '#FE3F00', marginBottom: 8 }}>2 hrs</p>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)' }}>saved every week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for the pros */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          <h2
            className="text-center reveal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 48,
              fontWeight: 900,
              lineHeight: '54px',
              marginBottom: 32,
            }}
          >
            Social media management designed for the pros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            <div className="rounded-xl overflow-hidden" style={{ background: '#FE3F00' }}>
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/5tfjluVhyHIiUqQ5CaXAvi/a2960bb77de6dbfb409823600bfbf2b9/social-media-managers-orange-bg.png"
                alt="Social media managers"
                className="w-full h-auto"
                loading="lazy"
              />
              <div style={{ padding: '32px 36px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 900, color: '#fff', marginBottom: 8 }}>
                  Social media managers
                </h3>
                <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)' }}>
                  Grow followers & boost engagement, minus the stress.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ background: '#FE3F00' }}>
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/qq3AlM92QhRMBVfi0lZME/69ffdad48132dd11bd7874f000826e1e/agencies-freelancers-orange-bg.png"
                alt="Agencies & freelancers"
                className="w-full h-auto"
                loading="lazy"
              />
              <div style={{ padding: '32px 36px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 900, color: '#fff', marginBottom: 8 }}>
                  Agencies & freelancers
                </h3>
                <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)' }}>
                  Easily manage social posts for multiple brands in less time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          <h2
            className="text-center reveal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 48,
              fontWeight: 900,
              lineHeight: '54px',
              marginBottom: 32,
            }}
          >
            Get started in 3 easy steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            {STEPS.map(s => (
              <a
                key={s.num}
                href={s.href}
                className="block rounded-xl bg-white hover:shadow-lg transition-shadow"
                style={{ padding: '40px 32px', textDecoration: 'none', color: 'inherit' }}
              >
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 48, fontWeight: 900, color: '#FE3F00', marginBottom: 12 }}>
                  {s.num}
                </p>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 900, marginBottom: 12 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: '24px', color: '#000', opacity: 0.6 }}>
                  {s.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          <h2
            className="text-center reveal"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 48,
              fontWeight: 900,
              lineHeight: '54px',
              marginBottom: 16,
            }}
          >
            Resources and expertise to keep you ahead
          </h2>
          <p className="text-center reveal" style={{ fontSize: 18, color: '#000', opacity: 0.6, marginBottom: 32 }}>
            Everything you need to grow your social presence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            {RESOURCES.map(r => (
              <a
                key={r.title}
                href={r.href}
                className="block rounded-xl border-2 border-charcoal/10 hover:border-charcoal/30 transition-colors"
                style={{ padding: '40px 32px', textDecoration: 'none', color: 'inherit' }}
              >
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 900, marginBottom: 12 }}>
                  {r.title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: '24px', color: '#000', opacity: 0.6, marginBottom: 20 }}>
                  {r.desc}
                </p>
                <span style={{ fontSize: 16, fontWeight: 600, color: '#FE3F00', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Learn more <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: '#000', padding: '60px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 56,
              fontWeight: 900,
              lineHeight: '62px',
              color: '#fff',
              marginBottom: 20,
            }}
          >
            Plan, schedule, and stay ahead
          </h2>
          <p style={{ fontSize: 20, lineHeight: '30px', color: 'rgba(255,255,255,0.7)', marginBottom: 36 }}>
            Manage all things social in one app — sign up for free.
          </p>
          <a href="/pricing/" className="btn-primary" style={{ fontSize: 18 }}>
            Get started <ArrowIcon />
          </a>
        </div>
      </section>
    </div>
  )
}
