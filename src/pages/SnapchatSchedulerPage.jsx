export default function SnapchatSchedulerPage() {
  const features = [
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/38EXgWrFGqcSjqVmzZ9FVn/9e6fc40a34ef11940c35d99c7a6e3f13/icon-navy-calendar.png',
      title: 'Streamline your workflow',
      desc: 'Schedule Snapchat Stories to auto publish ahead of time.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/2wxwt9cN9yfmnKv6iXcsvK/91b4423fd869fdfeb8c62ddda09c87a2/icon-navy-grow.png',
      title: 'Make every Snap count',
      desc: 'Stay engaged with your followers while reaching new audiences.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/1qQlvsXnx1tqJCq7sXsTdo/17478b992b076ab92a61ee427f9fd4bd/icon-navy-rocket.png',
      title: 'Share more, stress less',
      desc: 'Manage content for Snapchat and other social platforms.',
    },
  ]

  const steps = [
    { num: '01', title: "Drag and drop your content into Later's content calendar", desc: 'Add your Snapchat content visuals to your Media Library and drag and drop stories onto the storyboard tool.' },
    { num: '02', title: 'Add details while you schedule', desc: "Easily crop and resize images and video to fit Snapchat's 9:16 ratio and add your text or filters with a few quick taps." },
    { num: '03', title: 'Schedule Snaps in advance', desc: 'Set it and forget it when you automatically post to Snapchat — no notifications required.' },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter" style={{ padding: '0 40px' }}>
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>PLAN NOW, POST LATER</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}>
            Plan, schedule, and grow on Snapchat.
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Stay active on Snapchat with Later's scheduler tool. Post Spotlight videos and Stories, reach more followers, and keep your audience engaged — all without missing a beat.
          </p>
          <a href="/pricing" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 28 }}>Get 14 days for free</a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/3pOY2On0fWWy38vV2sHy4F/c8d940eb8b29a40fe0c336daf268ac5c/later-snapchat-scheduler-hero.png?w=1136&h=960&q=80&fm=png" alt="Later Snapchat Scheduler" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Quick features */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>Snap, schedule, relax.</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Dial in your Snapchat strategy with easy scheduling tools.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {features.map((f, i) => (
              <div key={i} className={`reveal reveal-d${i + 1} text-center`}>
                <img src={f.icon} alt="" style={{ width: 48, height: 48, margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal" style={{ padding: '0 40px' }}>
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>HOW TO SCHEDULE SNAPS WITH LATER</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>Keep your Snap streak going with Later's scheduler.</h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>Try it on any Later plan for free.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'start' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/s6szg81PSdx9Tn2qkbwc0/2753dfb867e9c4efb92da8cf2f169207/scheduler-snap-with-later.png?w=1136&h=1020&q=70&fm=png" alt="Schedule Snaps with Later" style={{ width: '100%', borderRadius: 8 }} />
            <div>
              {steps.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 32 }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 900, color: '#FE3F00', minWidth: 40 }}>{s.num}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{s.title}</h3>
                    <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature showcase - Auto Publish */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <p className="text-charcoal/60 uppercase tracking-widest text-center reveal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>SNAPCHAT SCHEDULING APP</p>
          <h2 className="text-center reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Your Snaps, scheduled your way.</h2>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'start', marginBottom: 80 }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/61p6gL8qLEvyASNBN5itt4/b64e71490e53468c266269121867ab74/snapchat-scheduler-auto-publish.png?w=1136&h=960&q=70&fm=png" alt="Snapchat auto publish" style={{ width: '100%', borderRadius: 8 }} />
            <div>
              <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, color: '#FE3F00', letterSpacing: 2, marginBottom: 12 }}>AUTO PUBLISH</p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>Plan and schedule posts ahead of time.</h3>
              <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>Create, edit, and schedule your Snapchat Spotlight videos and Stories to automatically publish whenever you want.</p>
              <a href="/pricing" className="btn-outline" style={{ fontSize: 15 }}>Explore plans</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[800px] mx-auto text-center reveal">
          <img src="https://images.ctfassets.net/nfpsrlop6sws/6eETk1vbMTrO53hnOEWzQ5/17afc0ce43d317d3cd66bedc51233333/lucas-o-keefe-headshot.png" alt="Lucas O'Keefe" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
          <blockquote style={{ fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.6, color: '#333', fontStyle: 'italic', marginBottom: 24, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            "As a business owner and content creator who also works a busy 9-5, being able to stay consistent for my audience is a must. By planning and scheduling my content in advance with Later, I'm able to do it all and still get some much-needed ME time."
          </blockquote>
          <p style={{ fontWeight: 700, fontSize: 16 }}>Lucas O'Keefe</p>
          <p style={{ fontSize: 14, color: '#777' }}>Content Creator and Social Media Marketing Consultant</p>
          <div style={{ marginTop: 24 }}>
            <a href="/case-studies" className="btn-outline" style={{ fontSize: 15 }}>Read case studies</a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '60px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Get started in a snap with Later's Snapchat scheduler.</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Test out any Later plan 100% free for 14 days.</p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Get 14 days for free</a>
        </div>
      </section>
    </div>
  )
}
