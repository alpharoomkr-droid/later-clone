export default function InstagramSchedulerPage() {
  const features = [
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/Twy4RBNMePPJKLsM9Vdvx/9c02bd4a69aa1d32cef3ca199b488859/icon-curate-feed-blue.svg',
      title: 'Preview posts',
      desc: 'Visually plan the look of your feed and take a peek before publishing.',
      link: '/instagram-scheduler/visual-instagram-planner',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/1uT44PqVqmwMoRhV7xzgkN/0c77c42ca3e45d46b9d134f1c1b208d7/rocket-icon.png',
      title: 'Save time',
      desc: 'Schedule Stories and posts without a hitch, and check it off your to-do list.',
      link: '/instagram-scheduler/auto-post',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/55nuMdGWWe3p5bihOfhs7Y/f2c67885e361ce6899bdd4a1ccf62f80/auto-publish-icon.png',
      title: 'Share more',
      desc: 'Automatically publish Instagram Reels and carousels ahead of time.',
      link: '/instagram-scheduler/schedule-instagram-reels',
    },
  ]

  const steps = [
    { num: '01', title: 'Curate your grid in just a few clicks', desc: 'Have a stunning Instagram post or carousel in mind? Visually plan and schedule it to appear on your grid for now or later.' },
    { num: '02', title: "Sharing Reels is reel-y easy", desc: 'Simply schedule your Instagram Reels to post automatically.' },
    { num: '03', title: 'Schedule your Stories', desc: "Create Instagram Stories you're proud of and schedule them to auto publish." },
    { num: '04', title: 'Get personalized insights', desc: 'Discover your best time to post, generate caption ideas, and get unique hashtag suggestions to help you optimize your feed.' },
    { num: '05', title: 'Measure what matters', desc: 'Track your Instagram analytics to learn what content your followers love most, so you can create even more engaging posts.' },
  ]

  const showcases = [
    {
      tag: 'VISUAL PLANNER',
      title: 'Drag, drop, preview.',
      desc: 'Visually plan your photos, carousels, Stories, and Reels by dragging and dropping onto the calendar. Then, just schedule them to post whenever you want.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/40dYJMCKWsfHCAmmWlzLb9/4e4e770bbe05ed3cf202dc191d2fc938/instagram-visual-planner.png?w=1136&h=870&q=70&fm=png',
    },
    {
      tag: 'USER-GENERATED CONTENT',
      title: 'Content creation made easy.',
      desc: 'Weave UGC content into your marketing strategy with the help of @mentions, tags, hashtag suggestions, and even URLs. Using our content creation tools, you can even search on-brand stock photography and edit photos from the Later desktop app.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/7wSImJS1KoEyfvAz4V74K3/b14ee9915dd52000953ae7628b84d877/instagram-ugc.png?w=1136&h=900&q=70&fm=png',
    },
    {
      tag: 'AUTO PUBLISH',
      title: 'Set it & forget it.',
      desc: 'Spend less time on your phone by planning & scheduling your Instagram posts in advance. Use auto publish for single image posts, carousels, Stories, and Reels!',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/3kIEXccpCc5c3PID8e5YhF/f3c38cf5a30da68c02b825e214441011/instagram-auto-publish.png?w=1136&h=840&q=70&fm=png',
    },
    {
      tag: 'LINK IN BIO',
      title: 'Do more with a customizable link in bio tool.',
      desc: "Drive traffic and sales from your Instagram profile to anywhere you want — like your website, blog, online store, and more. Think of Later Link in Bio as a mini-website for your IG profile, turning each of your posts into clickable images.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/4QTL2NnhYtdwFpiinjVmD/89f32668561d46c2f34d4cdca4cbe32d/instagram-linkinbio-graphic.png?w=1136&h=900&q=70&fm=png',
    },
    {
      tag: 'PERSONALIZED INSIGHTS',
      title: 'Perfectly time your posts & replies.',
      desc: "Later Social learns when your followers are most engaged and tells you the Best Times to Post — no more guesswork! Plus, our Conversations feature makes it easy to search, sort, and respond to Instagram comments from your desktop.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/3t9LylCnwk3SwkZbnYdHl1/7f890a9bd8281347b2443d223cd900af/instagram-insights.png?w=1136&h=850&q=70&fm=png',
    },
    {
      tag: 'INSTAGRAM ANALYTICS',
      title: 'Get metrics that matter.',
      desc: "Get the nitty-gritty details on what's really working, like post metrics, audience insights, and Analytics from your Reels and Stories. You can also optimize and monitor traffic and sales, plus get insights into page views, and clicks per post from your Later Link in Bio.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/57b37mlCD8RGwgefde4rPp/6f3b94022df48493a494d48c95f63e8a/instagram-analytics.png?w=1136&h=900&q=70&fm=png',
    },
    {
      tag: 'Instagram Caption Writer',
      title: 'Write IG captions faster with AI.',
      desc: "Tired of endless writer's block? Let Later's caption writer do the heavy lifting! Generate new, on-brand Instagram captions with the AI-powered Caption Writer tool. No brainstorming — just perfect captions in seconds.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/1YjHIoPw3t3EzlvwS2Gu92/9bd3c5ccf779f15f7a7be97fdf7badfd/instagram-caption-writer.png?w=1136&h=860&q=70&fm=png',
    },
  ]

  const testimonials = [
    {
      img: 'https://images.ctfassets.net/nfpsrlop6sws/UDqUwQ8sEzzFnpjU2dpKQ/f932c63d18d957e4996676ca487e56bb/Chloe_Pedersen.png?w=615&h=615&q=50&fm=png',
      quote: "Later's hashtag tools are so simple. Adding a first comment barely adds a step to my process but it's so invaluable. It helps improve the look and feel of my post and drives reach at the same time.",
      name: 'Chloe Pedersen',
      role: 'Art Director, Ranch & Coast Magazine',
    },
    {
      img: 'https://images.ctfassets.net/nfpsrlop6sws/2GkucbncyJCQxYrMMcfIgl/ccff016ccc10fd06c97a006d42ca2a95/lush.png?w=640&h=640&q=50&fm=png',
      quote: "A large part of Lush's content strategy is to elevate other voices, including our customers. One simple way to do this is through UGC. Using Later has helped us to navigate our tagged photos and videos, collect and organize them, and leverage across our channels.",
      name: 'Laura Cranfield',
      role: 'LUSH',
    },
    {
      img: 'https://images.ctfassets.net/nfpsrlop6sws/12lLbzSnpoAwd6QRecmDkQ/cd58d2791b0fdc943eb4690996a94154/brock-cardiner.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg',
      quote: "Link in bio has been a game-changer for our Instagram strategy and social strategy as a whole, since we can now promote multiple articles a day. Our Instagram traffic has increased 179% YoY largely due to implementing link in bio!",
      name: 'Brock Cardiner',
      role: 'HighSnobiety',
    },
  ]

  const faqs = [
    { q: "What's the difference between auto publish and notification publishing?", a: "Auto publish means that the posts you've scheduled in Later will publish to Instagram without any more work on your side. For example, if you have a single photo post set to auto publish at 3:00 PM on Saturday, that post will go live at 3:00 PM on Saturday." },
    { q: 'Can I schedule Instagram carousel posts using auto publish?', a: 'Yes! Carousel posts (multi-photo posts, aka photo dumps) with multiple photos and/or videos can be auto published and scheduled using Later\'s Instagram scheduler.' },
    { q: 'Can I schedule Instagram videos with Later using auto publish?', a: 'Yes, Instagram videos can be Auto Published and scheduled with Later.' },
    { q: 'Can I schedule Instagram Stories using auto publish?', a: 'Yes, you can create, edit, and schedule your Instagram Stories the same way you would with regular posts.' },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>Your go-to Instagram scheduler</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}>
            Bulk schedule Instagram posts, carousels, Stories, and Reels.
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Plan your feed, schedule ahead of time, and auto post single images, carousels, Stories, and Reels with Later's Instagram scheduler. Plus, get the analytics to help you measure what matters, learn the best time to post, and get hashtag suggestions.
          </p>
          <a href="/pricing" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 28 }}>Get 14 days for free</a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/1rb0sshParJgHTmQu03HDZ/aed059959a194e7b82ba910a10d1ff5a/instagram-scheduler-hero.png?w=1136&h=1000&q=80&fm=png" alt="Later Instagram Scheduler" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Quick features */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>Post more, work less.</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Easily schedule whatever content you want, whenever you want.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {features.map((f, i) => (
              <a key={i} href={f.link} className={`reveal reveal-d${i + 1}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={f.icon} alt="" style={{ width: 48, height: 48, margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{f.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>Schedule Instagram Posts</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>On your mark, get set, schedule.</h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>From photo dumps to Reels, you can schedule anything and do more on Instagram with Later.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/cNB0c2tiLiCcNPS1eNk4w/9f0b52f5884c6c24d4513d67fc12be5a/schedule-instagram.png?w=1136&h=1020&q=70&fm=png" alt="Schedule Instagram" style={{ width: '100%', borderRadius: 8 }} />
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

      {/* Feature showcases */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          <p className="text-charcoal/60 uppercase tracking-widest text-center reveal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>Get sweet features with Later's Instagram scheduling tool</p>
          <h2 className="text-center reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Come for the scheduling. Stay for the auto posting.</h2>
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

      {/* Testimonials */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>Customer Testimonials</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 32 }}>What our customers say about our Instagram scheduler.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {testimonials.map((t, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`} style={{ background: '#fff', borderRadius: 12, padding: 32, display: 'flex', flexDirection: 'column' }}>
                <img src={t.img} alt={t.name} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginBottom: 20 }} />
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#333', marginBottom: 24, flex: 1 }}>"{t.quote}"</p>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 15 }}>{t.name}</p>
                  <p style={{ fontSize: 14, color: '#777' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 32 }}>
            <a href="/case-studies" className="btn-outline" style={{ fontSize: 15 }}>Read case studies</a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[800px] mx-auto reveal">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 28 }}>FAQs</h2>
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
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>The best Instagram scheduling & management tool.</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Test out any Later plan 100% free for 14 days.</p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Get 14 days for free</a>
        </div>
      </section>
    </div>
  )
}
