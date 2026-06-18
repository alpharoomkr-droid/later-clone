function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const benefits = [
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/01sRpm4ArtDplCq9UgFNib/3ee7e72263a0dea7d9d455b27d49f467/icon-find-blue.png',
    title: 'Find better influencers',
    desc: 'Search a vetted network of creators to find ideal partners for every client campaign.',
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/1uT44PqVqmwMoRhV7xzgkN/0c77c42ca3e45d46b9d134f1c1b208d7/rocket-icon.png',
    title: 'Create client-ready reports',
    desc: 'Generate polished, shareable reports that prove the value of your influencer campaigns.',
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/5np5b4ZkssIgUWwMHIkiM2/a906bdbd3b91aa2bc61ce406ef6a6beb/icon-collab-content-blue.svg',
    title: 'Preview & approve content',
    desc: 'Review and approve creator content before it goes live to keep clients confident.',
  },
  {
    icon: 'https://images.ctfassets.net/nfpsrlop6sws/2EcpFWenkEg4QhFVmqd1Ze/04172ecf947fa3e18cbb188d58f3c5b3/roi.svg',
    title: 'Show real ROI',
    desc: 'Track conversions, engagement, and revenue so every campaign proves its worth.',
  },
]

const steps = [
  { num: '01', title: 'Find & vet influencers', desc: 'Search our database of 10M+ creators filtered by audience, engagement, and brand safety.' },
  { num: '02', title: 'Manage campaigns', desc: 'Organize briefs, contracts, and deliverables across multiple clients in one workspace.' },
  { num: '03', title: 'Review & approve content', desc: 'Preview posts and stories before they go live with built-in approval workflows.' },
  { num: '04', title: 'Track performance', desc: 'Monitor real-time metrics across every campaign and creator.' },
  { num: '05', title: 'Report to clients', desc: 'Generate beautiful, branded reports that showcase results and prove value.' },
]

const features = [
  {
    tag: 'AI-Powered',
    title: 'Caption Writer AI',
    desc: 'Generate scroll-stopping captions in seconds. Later\'s AI caption writer creates on-brand copy for every platform, saving your team hours of writing time.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/4wu7abbcKEEJbEWOhRgcHD/b7725e2f876a7f5808d60791043b44cc/all-the-tools-you-need.png?w=1136&h=960&q=70&fm=png',
    imgAlt: 'Caption Writer AI tool',
  },
  {
    tag: 'Multi-Profile Scheduling',
    title: 'Multi-Profile Scheduling',
    desc: 'Plan and schedule content across every client\'s social channels from a single calendar. Manage Instagram, TikTok, Facebook, Pinterest, LinkedIn, and more.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/5cW14V21uKimadHfQ2E6wk/8625b417b0db1f003c9a0dbdda7a8eca/build-it-once.png?w=1136&h=960&q=70&fm=png',
    imgAlt: 'Multi-profile scheduling dashboard',
  },
  {
    tag: 'Influencer Intelligence',
    title: 'Win new business with influencer intelligence',
    desc: 'Pitch prospective clients with data-backed influencer recommendations and competitive insights that set your agency apart.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/s9HkPxojbbUilpa2eoEF8/1d2cd38e8fc0cb0fb779cbcfba6f8a1c/win-new-business.png?w=1136&h=960&q=70&fm=png',
    imgAlt: 'Win new business with influencer intelligence',
  },
  {
    tag: 'Managed Services',
    title: 'Increase your bandwidth',
    desc: 'Let Later\'s expert managed services team handle the heavy lifting. From strategy to execution, we help agencies scale without growing headcount.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/36DSFWKSvjei74Zl6Eibf6/85a7055f890ffaa3923916aaf4a85698/increase-your-bandwidth.png?w=1136&h=960&q=70&fm=png',
    imgAlt: 'Managed services to increase bandwidth',
  },
]

const testimonials = [
  {
    quote: 'Later has been an invaluable tool for us. It streamlines our influencer campaigns and gives us the data we need to prove ROI to our clients.',
    name: 'Samantha Markiewicz',
    company: 'bread & butter',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/6BBRKLdRpiNKoI3F6YsBm/b145d6978eb7043904a2809d032969a8/bread-and-butter.png?w=640&h=640&q=50&fm=png',
  },
  {
    quote: 'The platform helps us manage everything in one place, from discovery to reporting. Our clients love the insights we can share.',
    name: 'Avery Wagner',
    company: 'Wagner Perspective',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/5WIpVRiDRe0lS95zPcIHgi/c1a2bbab62f5b7f630e5b762f7a75c98/avery-wagner.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg',
  },
]

export default function AgenciesFreelancersPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-gridglow uppercase tracking-widest hero-enter"
                style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}
              >
                Later Influence for Agencies &amp; Freelancers
              </p>
              <h1
                className="text-charcoal hero-enter-d1"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: '70px', letterSpacing: '0.28px', marginBottom: 24 }}
              >
                Seamless social &amp; influencer marketing
              </h1>
              <p
                className="hero-enter-d2"
                style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32, maxWidth: 520 }}
              >
                Partner with trusted influencers to deliver impactful campaigns for your clients. Plan, execute, and report on everything from one platform.
              </p>
              <a href="/influencer-marketing-services" className="btn-primary hero-enter-d3" style={{ fontSize: 16 }}>
                Book a demo <ArrowIcon />
              </a>
            </div>
            <div className="hero-enter-d3">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/518ZWNTLUQETXa9lscU4Qf/3ec6716b5b2744b37419f002ab906b18/seamless-social-influencer-marketing.png?w=1136&h=960&q=80&fm=png"
                alt="Seamless social and influencer marketing"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((b, i) => (
              <div key={i} className={`reveal reveal-d${Math.min(i + 1, 3)} text-center`} style={{ padding: '40px 20px' }}>
                <img src={b.icon} alt="" style={{ width: 56, height: 56, margin: '0 auto 24px', objectFit: 'contain' }} />
                <h3 className="text-charcoal" style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 900, lineHeight: 1.2, marginBottom: 12 }}>
                  {b.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: '#555' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="wood-bg" style={{ padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>
                How it works
              </p>
              <h2 className="text-charcoal" style={{ fontFamily: 'var(--font-heading)', fontSize: 44, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>
                How Later for Agencies &amp; Freelancers works
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {steps.map((s) => (
                  <div key={s.num} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span className="text-gridglow" style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 900, flexShrink: 0, marginTop: 2 }}>
                      {s.num}
                    </span>
                    <div>
                      <h4 className="text-charcoal" style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 900, lineHeight: 1.3, marginBottom: 4 }}>
                        {s.title}
                      </h4>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: '#555' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-d1">
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/2ul4BKb6Pya7bKj1hAcyZ7/ad329ef52d3774da4f18d6fa654729b6/streamline-your-tools.png?w=1136&h=960&q=70&fm=png"
                alt="How Later for Agencies works"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((f, i) => {
        const reversed = i % 2 === 1
        return (
          <section key={i} style={{ backgroundColor: i % 2 === 0 ? '#FEFCFB' : '#F8F2EA', padding: '60px 0' }}>
            <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reversed ? 'lg:[direction:rtl]' : ''}`}>
                <div className={`reveal ${reversed ? 'lg:[direction:ltr]' : ''}`}>
                  <p className="text-gridglow uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>
                    {f.tag}
                  </p>
                  <h2 className="text-charcoal" style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
                    {f.title}
                  </h2>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: '#444', marginBottom: 32 }}>
                    {f.desc}
                  </p>
                  <a href="/influencer-marketing-services" className="btn-outline" style={{ fontSize: 15 }}>
                    Learn more <ArrowIcon />
                  </a>
                </div>
                <div className={`reveal reveal-d1 ${reversed ? 'lg:[direction:ltr]' : ''}`}>
                  <img src={f.img} alt={f.imgAlt} style={{ width: '100%', display: 'block' }} />
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Testimonials */}
      <section style={{ backgroundColor: '#000', padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2 className="text-offline text-center mb-16 reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 44, fontWeight: 900, lineHeight: 1.15 }}>
            Trusted by agencies worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 20 }}>
                  <img src={t.img} alt={t.name} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <p className="text-offline font-bold" style={{ fontSize: 16 }}>{t.name}</p>
                    <p className="text-offline/60" style={{ fontSize: 14 }}>{t.company}</p>
                  </div>
                </div>
                <svg width="32" height="24" viewBox="0 0 40 32" fill="none" className="mb-4">
                  <path d="M0 32V19.2C0 6.4 8.8 0 17.6 0l-1.6 6.4C10.4 8 8 12.8 8 19.2h8V32H0zm22.4 0V19.2C22.4 6.4 31.2 0 40 0l-1.6 6.4C32.8 8 30.4 12.8 30.4 19.2h8V32H22.4z" fill="#FE3F00" fillOpacity="0.3"/>
                </svg>
                <p className="text-offline/90" style={{ fontSize: 18, lineHeight: '28px' }}>{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="purple-wood-bg" style={{ padding: '60px 0' }}>
        <div className="max-w-[800px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <h2 className="text-white" style={{ fontFamily: 'var(--font-heading)', fontSize: 50, fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
            Make your team &amp; your clients happy
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', maxWidth: 640, margin: '0 auto 36px' }}>
            Streamline every part of your social and influencer workflow so you can deliver better results, faster.
          </p>
          <a href="/influencer-marketing-services" className="btn-primary" style={{ fontSize: 16 }}>
            Book a demo <ArrowIcon />
          </a>
        </div>
      </section>
    </div>
  )
}
