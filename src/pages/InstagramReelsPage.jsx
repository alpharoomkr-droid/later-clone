export default function InstagramReelsPage() {
  const steps = [
    { num: '01', title: 'Connect your Instagram profile', desc: 'Sign up (or login) to Later on your desktop and tap \'Add Social Profile.\' Select \'Instagram\' and connect your account.' },
    { num: '02', title: 'Upload your Reels to your Media Library', desc: 'Upload your edited Reels video to the Media Library. The Media Library is where all of the photos & videos you\'ve uploaded to Later are stored.' },
    { num: '03', title: 'Drag your video into the Post Builder', desc: 'Tap Post Type, select Reels from the dropdown menu and write your caption and hashtags to maximize reach.' },
    { num: '04', title: 'Crop your Reel', desc: "To crop your video size, tap 'Edit' and select the crop. To adjust the length of your video, select the 'Trim' tool. Tap Edit Cover to select a frame from the video for the cover." },
    { num: '05', title: 'Choose the date and time to schedule your Reel', desc: "Scroll down to Settings, under 'Share to Feed', and tap 'Save.' When it's time to post, your video will be automatically published." },
  ]

  const showcases = [
    {
      tag: 'Auto Post Reels',
      title: 'Visually plan & schedule Reels with Auto Publish',
      desc: "Use Later Social to bulk-schedule, automatically publish, and preview your Reels (and your IG grid!) before they go live. Plus, link your Reels to your personal Link in Bio page and drive traffic wherever you want, like your blog or store.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/6lgy9yuKdwcpNJifKSshb9/b81afd41e3e54a4b6ca58af7074038d9/schedule-instagram-reels.png?w=1136&h=801&q=70&fm=png',
    },
    {
      tag: 'Best Time to Post & Hashtag Suggestions',
      title: 'Post Reels at the right time, every time',
      desc: 'Schedule your Reels at the perfect time for engagement, and optimize your posts with Hashtag Suggestions customized to your brand.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/L4z54ZZJEH1fw3wE6MjLs/ab488a2ed515b73ebcadceb980d81f10/instagram-reels-hashtags-_-best-time-to-post.png?w=1172&h=800&q=70&fm=png',
    },
    {
      tag: 'Multi-Profile Scheduling',
      title: 'Easily repurpose video content',
      desc: 'Save time and share videos across your Instagram, TikTok, YouTube, and Facebook profiles with Multi-Profile Scheduling.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/4jdcy2t39u38sGWKM4gWlK/a2ee4dfd928863125ff096ccabd70663/instagram-multi-profile-scheduling.png?w=1061&h=800&q=70&fm=png',
    },
    {
      tag: 'Conversations',
      title: 'Moderate comments in seconds',
      desc: 'Publish posts & engage with followers, all in one spot. Conversations lets you easily read, reply to, and delete comments made on Reels.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/6IHNUogCckRvfFGD0TpCpA/f7f5ffafa046b7ac693536b95c4f5803/instagram-conversations-scheduling.png?w=1172&h=800&q=70&fm=png',
    },
    {
      tag: 'Instagram Reels Analytics',
      title: 'Get detailed Analytics reports',
      desc: "Use Later's Instagram Analytics tool to measure, track, and optimize your Reels performance.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/1N42hjLYITH6pNGqDO2Bh5/7875c5e7769475a404bde22200772cb8/instagram-reels-analytics.png?w=1140&h=800&q=70&fm=png',
    },
  ]

  const faqs = [
    { q: 'Can I post an Instagram Reel from my computer?', a: 'Yes! Instagram Reels can be scheduled in advance and automatically published with Later Social right from your computer browser.' },
    { q: 'Can Instagram Reels automatically post to my feed?', a: "Yes! Save time by bulk-scheduling Reels in advance with Later's Reels scheduler. You can choose to automatically publish your video content, or use notification publishing." },
    { q: 'Can I add a link to an Instagram Reel with Link in Bio?', a: 'Yes! You can add a link to your Reels post on your personal Link in Bio page and drive traffic wherever you want, like your blog or online store.' },
    { q: 'Can I add hashtags to Instagram Reels?', a: "Definitely! Later's Hashtag Suggestions tool suggests up to 30 related hashtags to help you extend your reach. Pair it with our Instagram Analytics tool and you'll see which hashtags work best to optimize your Instagram Reels." },
    { q: 'When is the best time to post Instagram Reels?', a: "Not sure when to post? Try Later's Best Time to Post tool. The tool combines data from your audience & post engagement to give you recommendations on the best days and times to post that are completely unique to you. The more you post, the better recommendations you'll get." },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1100px] mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>Reel in your Instagram Story</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}>
            Schedule Instagram Reels. Boost engagement.
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Use Later Social to schedule Reels in advance — so you can save time, build your brand, & reach more followers.
          </p>
          <a href="/pricing" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 28 }}>Get 14 days for free</a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/5aVL5fXx02aMa5oiLcqSV/409cfc08f1fcd6a225cfefac63c4cc75/instagram-reels-hero.png?w=1146&h=856&q=80&fm=png" alt="Instagram Reels Scheduler" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1100px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>How to Schedule Instagram Reels</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>The easy way to share Reels</h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>Later Social lets you schedule Instagram Reels in a few simple steps, no late-night logins required.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'start' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/1ldf4SAhK2QeuFHHrTL48n/0999babc3a58a4385b06b03ddb6785c4/later-insta-reels-how-it-works.png?w=1162&h=1060&q=70&fm=png" alt="How to schedule Reels" style={{ width: '100%', borderRadius: 8 }} />
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
      <section style={{ padding: '0 40px 80px' }}>
        <div className="max-w-[1100px] mx-auto">
          <p className="text-charcoal/60 uppercase tracking-widest text-center reveal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>Why Choose Later?</p>
          <h2 className="text-center reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Posting Reels has never been easier</h2>
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
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1100px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>User Testimonial</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 32 }}>See why people love scheduling Reels with Later Social</h2>
          <div style={{ maxWidth: 720, margin: '0 auto', background: '#fff', borderRadius: 12, padding: 40, textAlign: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/7nMlwBPmQiAEXbrCVFUK91/842ff1f7d440fe30a27e7acf66f3578a/jessica-hong-apotheke.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg" alt="Jessica Hong" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }} />
            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#333', marginBottom: 24, fontStyle: 'italic' }}>"Later's Instagram Reels analytics tools have helped us tremendously with being more data-driven in our content strategy. The Reels auto publish is also a must — now we can spend less time manually posting, and more time creating great content!"</p>
            <p style={{ fontWeight: 700, fontSize: 16 }}>Jessica Hong</p>
            <p style={{ fontSize: 14, color: '#777' }}>Social Media Manager, APOTHEKE</p>
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
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Reels scheduling, ready when you are</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Try any Later plan for free.</p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Get 14 days for free</a>
        </div>
      </section>
    </div>
  )
}
