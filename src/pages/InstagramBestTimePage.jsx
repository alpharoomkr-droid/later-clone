export default function InstagramBestTimePage() {
  const steps = [
    { num: '01', title: 'Enable Best Time to Post', desc: 'Connect your Instagram business or creator profile to Later, then enable Best Time To Post at the top of the calendar.' },
    { num: '02', title: 'Review your suggested times', desc: "Open 'Calendar Settings' to see your 7 recurring weekly time slots when your followers are most engaged. They'll appear on your Calendar for easy scheduling." },
    { num: '03', title: 'Apply best posting times', desc: "Click 'Generate Best Times to Post'. When your best posting times have been found, apply them to your Calendar then refresh." },
    { num: '04', title: 'Start scheduling', desc: 'Schedule content by dragging and dropping media into the optimal time slots. The more you post, the smarter Later gets!' },
  ]

  const showcases = [
    {
      tag: 'Ditch the One-Size-Fits-All Schedule',
      title: 'Post at the right time & watch your engagement soar',
      desc: 'Backed by data, Later Social calculates your unique best posting time to help you reach your audience when they\'re the most engaged.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/3R0AavwSLi3yatN3XKXl1j/311c460eed055bf5aa34d7a596e497b6/bttp-schedule.png?w=1160&h=865&q=70&fm=png',
    },
    {
      tag: 'Auto Publishing with Later',
      title: 'Schedule your posts at the perfect time',
      desc: "Create a posting schedule that does the work for you. Just schedule during your best time slots and let Later's Auto Publish tool do the rest, no notifications required.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/3R0AavwSLi3yatN3XKXl1j/311c460eed055bf5aa34d7a596e497b6/bttp-schedule.png?w=1160&h=865&q=70&fm=png',
    },
    {
      tag: 'Let the Data Do the Work',
      title: 'Go beyond your best time with Analytics',
      desc: "Get detailed Analytics insights like engagement rate, best-performing posts, and demographic data to make content your followers love.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/1MO5MOgGi9jHsPoUbKs1zO/1e72622aa97a3a74d425937fcc4ee039/bttp-analytics.png?w=1136&h=900&q=70&fm=png',
    },
    {
      tag: 'Best Time to Post on TikTok',
      title: 'Beat the TikTok algorithm with personalized data',
      desc: 'Get ahead of the clock with Later for TikTok! Later Social calculates your Best Time to Post based on when your community is online so you\'ll reach more people right away.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/4FdG3Kqi7MSBfMzNKVahWl/bcc180301c90eb42337201e7d3f2988c/bttp-tiktok.png?w=1136&h=884&q=70&fm=png',
    },
  ]

  const faqs = [
    { q: 'How does Later calculate my best times to post?', a: "Later's Best Time to Post tool combines data from audience engagement across Instagram and TikTok as well as your followers to give you recommendations on the best days and times to post that are completely unique to you. The more you post, the better recommendations you'll get." },
    { q: 'Does Best Time To Post work on mobile?', a: "Enabling Best Time To Post must be done on desktop first. We recommend setting your best times to post as Quick Schedule times — that way you can schedule your best times to post in the mobile Later app." },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1100px] mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>Ready, Set, Scheduled.</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}>
            Find your best time to post on Instagram
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Later Social learns when your Instagram followers are most engaged and gives you scheduling suggestions that are unique to your audience. See your best posting times and schedule your content on Instagram — all in one place.
          </p>
          <a href="/pricing" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 28 }}>Get 14 days for free</a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/2ASC0jmaRXU5lcFLlMtyxh/4805c5caef80a4aecfd33d263c66b2cc/bttp-hero.png?w=1136&h=960&q=80&fm=png" alt="Best Time to Post" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1100px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>The Best Times to Post on Instagram</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>More reach, less guesswork</h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>No number crunching here! Later Social analyzes 6 months' worth of Instagram profile data, then highlights your unique best time to post on the calendar.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'start' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/2H8BW0f0HfusiI7joD2UQA/42f1cf598d957538c6b92f45deb819da/bttp-how-it-works.png?w=1136&h=1012&q=70&fm=png" alt="Best Time to Post how it works" style={{ width: '100%', borderRadius: 8 }} />
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

      {/* Feature Showcases */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1100px] mx-auto">
          {showcases.map((s, i) => (
            <div key={i} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center', marginBottom: 80, direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
              <img src={s.img} alt={s.title} style={{ width: '100%', borderRadius: 8, direction: 'ltr' }} />
              <div style={{ direction: 'ltr' }}>
                <p className="uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, color: '#FE3F00', letterSpacing: 2, marginBottom: 12 }}>{s.tag}</p>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>{s.title}</h3>
                <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>{s.desc}</p>
                <a href="/pricing" className="btn-outline" style={{ fontSize: 15 }}>Explore plans</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1100px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>Testimonial</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 32 }}>How Best Time to Post helps Later Social users</h2>
          <div style={{ maxWidth: 720, margin: '0 auto', background: '#F8F2EA', borderRadius: 12, padding: 40, textAlign: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/6gdO8tgJsusrGqyW7Lv819/03dec4e02a6c50d38e4bd071ca1b8afb/artifact-uprising.png?w=640&h=640&q=50&fm=png" alt="Artifact Uprising" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#333', marginBottom: 24, fontStyle: 'italic' }}>"We love using Later because not only does it allow us to visually see our images laid out on a calendar week by week, but it shows us the best time to post. We wouldn't go anywhere else to schedule and curate our social media — biggest fans of the Later team and the technology they've created!"</p>
            <p style={{ fontWeight: 700, fontSize: 16 }}>Megan White</p>
            <p style={{ fontSize: 14, color: '#777' }}>Brand Marketing Associate, Artifact Uprising</p>
          </div>
          <div className="text-center" style={{ marginTop: 32 }}>
            <a href="/case-studies" className="btn-outline" style={{ fontSize: 15 }}>Read case studies</a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[800px] mx-auto reveal">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 28 }}>FAQ</h2>
          {faqs.map((f, i) => (
            <details key={i} style={{ borderBottom: '1px solid #e5e5e5', paddingBottom: 20, marginBottom: 20 }}>
              <summary style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {f.q}
                <span style={{ fontSize: 24, fontWeight: 300, marginLeft: 16 }}>+</span>
              </summary>
              <p style={{ fontSize: 16, color: '#555', lineHeight: 1.6, marginTop: 12 }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="wood-bg" style={{ padding: '60px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Post at the right time, every time</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Try Later Social's Best Time to Post tool today.</p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Get 14 days for free</a>
        </div>
      </section>
    </div>
  )
}
