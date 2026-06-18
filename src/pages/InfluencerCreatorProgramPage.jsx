function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const features = [
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/2IClzc3f452JTB6lGVDAph/574f132843545552dcde63e89991a2a9/fire.png',
    title: 'Work with top brands',
    desc: 'Partner with brands and create content that you (and your followers) love.',
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/5FBkTU1DLiq8H0RrBakPG6/066c843786054b29f7a47e544d9e8b69/affiliate.png',
    title: 'Link & monetize posts',
    desc: "Increase your content's earning potential with affiliate links.",
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/2EKoX5LaF73Msz7i5MEm1l/d1d9f298f2e60c58b08a8881f4eda837/tools.png',
    title: 'Unlock creator tools',
    desc: 'Grow your following with social media marketing tools that save you time.',
  },
]

const brandLogos = [
  { name: 'Kraft', src: 'https://later.com/images/temp/logos/kraft.png' },
  { name: 'Reebok', src: 'https://later.com/images/temp/logos/reebok.png' },
  { name: 'Crumbl', src: 'https://later.com/images/temp/logos/crumbl.png' },
  { name: 'Zumiez', src: 'https://later.com/images/temp/logos/zumiez.png' },
  { name: 'American Girl', src: 'https://later.com/images/temp/logos/american-girl.png' },
  { name: 'Pollo Loco', src: 'https://later.com/images/temp/logos/pollo-loco.png' },
  { name: 'American Greetings', src: 'https://later.com/images/temp/logos/american-greetings.png' },
  { name: 'Chobani', src: 'https://later.com/images/temp/logos/chobani.png' },
  { name: 'Mackenzie Childs', src: 'https://later.com/images/temp/logos/mackenzie-childs.png' },
]

const steps = [
  {
    num: '01',
    title: 'Create a Later Social account',
    desc: 'Sign up for free and get all the best social tools included, like scheduling and Link in Bio.',
  },
  {
    num: '02',
    title: 'Join our creator marketplace',
    desc: "We'll auto-populate your creator profile, then customize it however you like.",
  },
  {
    num: '03',
    title: 'Start working with top brands',
    desc: 'Get discovered and collaborate with brands or search for and apply directly to campaigns.',
  },
]

const careerFeatures = [
  {
    title: 'Manage your campaigns',
    desc: 'Keep all your brand collaborations organized in one place. Track deliverables, deadlines, and payments effortlessly.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/1Tvn7BbgutoTepkXQ4tgUI/a78854b05f2b6307fb8c02a91b98468c/manage-multiple-campaigns-at-once.png?w=1136&h=960&q=70&fm=png',
  },
  {
    title: 'Join Mavely',
    desc: 'Earn commission on every sale you drive through personalized affiliate links from top brands.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/1NdOC1hoJXZ6MQbB0iw9Mw/a58e68b2eb0256064c040dd7452d9184/manage-your-brand-campaigns.png?w=1136&h=960&q=70&fm=png',
  },
  {
    title: 'Get more clicks',
    desc: 'Drive traffic from your social profiles with Link in Bio and turn followers into customers.',
    img: 'https://later.com/images/temp/get-more-clicks-with-later.jpg',
  },
]

const signUpFeatures = [
  'Creator marketplace listing',
  'Custom affiliate links',
  'Link in Bio page',
  'Personalized media kit',
  'Social Media Scheduling',
  'Hashtag suggestions',
]

const creators = [
  { handle: '@luda_', name: 'Ludovick Love', img: 'https://later.com/images/temp/profiles/luda.jpg', stats: '162.5K Instagram, 17.3K Pinterest' },
  { handle: '@shadelleg', name: 'Shadelle Goodson', img: 'https://later.com/images/temp/profiles/shadelleg.jpg', stats: '13.7K Instagram, 26.9K YouTube' },
  { handle: '@ayokwam', name: 'Kwame Appiah', img: 'https://later.com/images/temp/profiles/ayokwam.jpg', stats: '461K Instagram, 24.6K TikTok' },
  { handle: '@jenickalopez', name: 'Jenicka Lopez', img: 'https://later.com/images/temp/profiles/jenickalopez.jpg', stats: '1.3M Instagram, 1.7M TikTok' },
  { handle: '@martinebeerman', name: 'Martine Beerman', img: 'https://later.com/images/temp/profiles/martinebeerman.jpg', stats: '129K Instagram, 649 X' },
  { handle: '@ayelow', name: 'David Contreras', img: 'https://later.com/images/temp/profiles/ayelow.jpg', stats: '16.6K Instagram, 5.3K TikTok' },
]

export default function InfluencerCreatorProgramPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>LATER FOR CREATORS</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}>
            Turn your influence into income with Later
          </h1>
          <p className="hero-enter-d1" style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 700, margin: '0 auto 32px', color: '#333' }}>
            Connect with brands, manage campaigns, and earn more doing what you love. Monetize your content with Mavely or join our creator network and watch your creator career grow.
          </p>
          <div className="hero-enter-d2" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
            <a href="https://www.joinmavely.com/" className="btn-primary" target="_blank" rel="noopener noreferrer">Earn with Mavely <ArrowIcon /></a>
            <a href="#creator-network" className="btn-outline">Join creator network <ArrowIcon /></a>
          </div>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/63iVbE514TCTTKuBvbgpiB/55d1a3d5a4150a16ddb3cad12f6a0ef3/hero-graphic.png?w=1608&h=964&q=80&fm=png"
              alt="Later for Creators"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Find & land brand collaborations */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>
            Find &amp; land brand collaborations with Later
          </h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Later makes it easy to stand out and earn more.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {features.map((f, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`} style={{ textAlign: 'center' }}>
                <img src={f.icon} alt="" style={{ width: 48, height: 48, margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get discovered */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
          <img
            src="https://later.com/images/temp/get-discovered-by-your-favorite-brands-with-later.jpg"
            alt="Get discovered by your favorite brands"
            style={{ width: '100%', borderRadius: 8 }}
          />
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
              Get discovered by your favorite brands
            </h2>
            <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Join Later's community for free.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
              {brandLogos.map((logo) => (
                <img key={logo.name} src={logo.src} alt={logo.name} style={{ height: 28, objectFit: 'contain', opacity: 0.7 }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {steps.map((s, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 48, fontWeight: 900, color: '#FE3F00', display: 'block', marginBottom: 12 }}>{s.num}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Take your creator career to new heights */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center reveal" style={{ marginBottom: 24 }}>
            <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>CREATE, SHARE, EARN</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
              Take your creator career to new heights
            </h2>
            <p style={{ fontSize: 18, color: '#555', maxWidth: 700, margin: '0 auto' }}>
              Join Later for free to access the creator marketplace, brand collaborations, affiliate links, scheduling, and Link in Bio.
            </p>
          </div>
          {careerFeatures.map((f, i) => (
            <div key={i} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center', marginBottom: 80, direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
              <img src={f.img} alt={f.title} style={{ width: '100%', borderRadius: 8, direction: 'ltr' }} />
              <div style={{ direction: 'ltr' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>{f.title}</h3>
                <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sign up section */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 32 }}>
              Sign up for Later for free
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
              {signUpFeatures.map((feat) => (
                <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#FE3F00" opacity="0.12" />
                    <path d="M6 10l3 3 5-5" stroke="#FE3F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: 15, color: '#333' }}>{feat}</span>
                </div>
              ))}
            </div>
            <a href="/pricing" className="btn-primary">Join now <ArrowIcon /></a>
          </div>
          <div style={{ background: '#F8F2EA', borderRadius: 12, padding: 48, textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 900, marginBottom: 8 }}>Free forever</p>
            <p style={{ fontSize: 16, color: '#555' }}>No credit card required</p>
          </div>
        </div>
      </section>

      {/* Creator community */}
      <section id="creator-network" className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-center reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 32 }}>
            Join the creator community
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {creators.map((c, i) => (
              <div key={i} className={`reveal reveal-d${(i % 3) + 1}`} style={{ background: '#fff', borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ height: 220, overflow: 'hidden' }}>
                  <img src={c.img} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 20 }}>
                  <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{c.name}</p>
                  <p style={{ fontSize: 14, color: '#FE3F00', marginBottom: 6 }}>{c.handle}</p>
                  <p style={{ fontSize: 13, color: '#777' }}>{c.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[800px] mx-auto text-center reveal">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" style={{ margin: '0 auto 24px' }}>
            <path d="M0 32V18.3C0 6.1 7.4 0 18 0v8.6C12.2 9.6 9.4 13 9 18h9v14H0zm22 0V18.3C22 6.1 29.4 0 40 0v8.6c-5.8 1-8.6 4.4-9 8.4h9v14H22z" fill="#FE3F00" opacity="0.15" />
          </svg>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, lineHeight: 1.4, marginBottom: 32, maxWidth: 640, margin: '0 auto 32px' }}>
            "I got my first paid brand using Later! It was easy to see what opportunities were available and to apply to any campaign."
          </p>
          <img
            src="https://later.com/images/temp/profiles/thenoellanaomi.jpg"
            alt="Noella"
            style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px' }}
          />
          <p style={{ fontWeight: 700, fontSize: 15 }}>Noella</p>
          <p style={{ fontSize: 14, color: '#FE3F00', marginBottom: 2 }}>@thenoellanaomi</p>
          <p style={{ fontSize: 13, color: '#777' }}>13.4K Instagram</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="wood-bg" style={{ padding: '60px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
            Earn more with Later for creators
          </h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Get discovered by brands and earn more doing what you love.</p>
          <a href="/pricing" className="btn-primary">Join today <ArrowIcon /></a>
        </div>
      </section>
    </div>
  )
}
