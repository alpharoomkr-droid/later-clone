export default function FacebookSchedulerPage() {
  const features = [
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/55nuMdGWWe3p5bihOfhs7Y/f2c67885e361ce6899bdd4a1ccf62f80/auto-publish-icon.png',
      title: 'Save time',
      desc: 'Plan your posts in seconds and check them off your to-do list.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/1uT44PqVqmwMoRhV7xzgkN/0c77c42ca3e45d46b9d134f1c1b208d7/rocket-icon.png',
      title: 'Share more',
      desc: 'Create a consistent posting schedule to keep your followers engaged.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/5xbhzMflCl34duHgF1RSVO/e8bb2b5ff547047d9d7661bd2b7dfa5b/schedule-all-platforms-icon.png',
      title: 'Bulk schedule',
      desc: 'Streamline your planning by scheduling posts across all of your social accounts at once.',
    },
  ]

  const steps = [
    { num: '01', title: 'Drag and drop into the content calendar', desc: 'Speed up your planning by loading your assets to your media library ahead of time.' },
    { num: '02', title: 'Choose your publishing time', desc: 'Scheduling ahead of time helps you maintain a consistent presence on Facebook, growing your community and keeping your current customers engaged.' },
    { num: '03', title: 'Customize your post', desc: 'Add your caption, choose your hashtags, and crop your media to the perfect size for Facebook — all in a few quick taps.' },
    { num: '04', title: 'Let Later do the rest', desc: "With Later's auto publish tool, your posts are published exactly how (and when) you want." },
    { num: '05', title: 'Keep using Later to manage your Facebook feed', desc: 'Stay on top of your Facebook strategy by using Later to plan your text, photo, and video posts.' },
  ]

  const showcases = [
    {
      tag: 'FACEBOOK PUBLISHING',
      title: 'Publish exactly when you want.',
      desc: 'Keep your community engaged by easily scheduling content to publish, whether it\'s text-only, single image, video, or carousel posts.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/6QddFB8GPALpcgGH3ARM6T/d1e64c089cc615230f2527bb311f232d/Facebook-meta.png',
    },
    {
      tag: 'MULTI-PROFILE SCHEDULING',
      title: 'Schedule one post to multiple platforms.',
      desc: 'Schedule Facebook posts to publish across other social media platforms like Pinterest, LinkedIn, TikTok, YouTube, Snapchat, and Instagram.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/5xbhzMflCl34duHgF1RSVO/e8bb2b5ff547047d9d7661bd2b7dfa5b/schedule-all-platforms-icon.png',
    },
    {
      tag: 'LATER MOBILE APP',
      title: 'Publish on the go.',
      desc: "Busy making moves out in the world? Schedule posts across all of your social platforms no matter where you are with Later's mobile app. No more being stuck at your desk!",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/55nuMdGWWe3p5bihOfhs7Y/f2c67885e361ce6899bdd4a1ccf62f80/auto-publish-icon.png',
    },
  ]

  const faqs = [
    { q: 'How do I schedule Facebook posts with Later?', a: 'Simply upload your media to Later\'s media library, drag and drop it into the content calendar, customize your post with a caption and hashtags, choose your publishing time, and let Later auto publish it for you.' },
    { q: 'Can I schedule posts to multiple Facebook pages?', a: 'Yes! With Later you can schedule and manage posts across multiple Facebook pages and groups, all from one easy-to-use dashboard.' },
    { q: 'Does Later support Facebook carousel posts?', a: 'Yes, Later supports scheduling single image, video, text-only, and carousel posts to Facebook. You can plan all your content types in advance.' },
    { q: 'Can I schedule the same post to Facebook and other platforms?', a: 'Absolutely! Later\'s multi-profile scheduling lets you publish the same post to Facebook, Instagram, TikTok, Pinterest, LinkedIn, and more — all at once.' },
  ]

  const blogs = [
    { title: 'The Best Time to Post on Facebook', img: 'https://images.ctfassets.net/nfpsrlop6sws/6QddFB8GPALpcgGH3ARM6T/d1e64c089cc615230f2527bb311f232d/Facebook-meta.png', link: 'https://later.com/blog/best-time-to-post-on-facebook/' },
    { title: 'The Ultimate Guide to Facebook Analytics', img: 'https://images.ctfassets.net/nfpsrlop6sws/6QddFB8GPALpcgGH3ARM6T/d1e64c089cc615230f2527bb311f232d/Facebook-meta.png', link: 'https://later.com/blog/facebook-analytics/' },
    { title: 'Facebook Size & Ratio Guide', img: 'https://images.ctfassets.net/nfpsrlop6sws/6QddFB8GPALpcgGH3ARM6T/d1e64c089cc615230f2527bb311f232d/Facebook-meta.png', link: 'https://later.com/blog/facebook-image-size/' },
  ]

  const resources = [
    { title: 'Influencer Marketing Guide by Social Platforms', desc: 'Download our guide to learn how to market on different social media platforms.', link: 'https://later.com/resources/guide/influencer-marketing-social/' },
    { title: 'Free Social Media Reporting Template', desc: 'Download our free template to create your next monthly social media report and start showcasing your results.', link: 'https://get.later.com/social-media-report-template/' },
    { title: 'Launch Your Business on Social Media', desc: 'Supercharge your growth with this email series, including expert advice to market your business on social.', link: 'https://later.com/resources/challenge/launch-your-business-on-social-media/' },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '80px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>SCHEDULE FACEBOOK POSTS WITH CONFIDENCE</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}>
            Simplify Your Workflow With a Facebook Scheduler
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Kick your social strategy up a notch with Later's Facebook scheduling tool. Plan your posts in advance, manage everything in one easy-to-use calendar, and automatically publish to Facebook without a hitch.
          </p>
          <a href="/pricing" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 48 }}>Get 14 days for free</a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/6QddFB8GPALpcgGH3ARM6T/d1e64c089cc615230f2527bb311f232d/Facebook-meta.png" alt="Later Facebook Scheduler" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Quick features */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>How to Schedule Facebook Posts with Later</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 56 }}>Use Later to create, edit, and publish Facebook posts at home or on the go.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {features.map((f, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`}>
                <img src={f.icon} alt="" style={{ width: 48, height: 48, margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="wood-bg" style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>HOW TO SCHEDULE FACEBOOK POSTS WITH LATER</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>Schedule now. Thank your future self later.</h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 56, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>Easily plan and publish your content ahead of time so you can get on with the rest of your day.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/55nuMdGWWe3p5bihOfhs7Y/f2c67885e361ce6899bdd4a1ccf62f80/auto-publish-icon.png" alt="Facebook scheduling" style={{ width: '100%', borderRadius: 8 }} />
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
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto">
          <p className="text-charcoal/60 uppercase tracking-widest text-center reveal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>LATER'S FACEBOOK SCHEDULING FEATURES</p>
          <h2 className="text-center reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 64 }}>Get the features you want, need, and love.</h2>
          {showcases.map((s, i) => (
            <div key={i} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: 80, direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
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
      <section className="wood-bg" style={{ padding: '80px 40px' }}>
        <div className="max-w-[800px] mx-auto text-center reveal">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 24 }}>CUSTOMER TESTIMONIAL</p>
          <blockquote style={{ fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.6, color: '#333', fontStyle: 'italic', marginBottom: 24, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            "The key to a strong organic social strategy is batch working. Later helps me repurpose content for various channels easily when scheduling and optimizing content across accounts."
          </blockquote>
          <p style={{ fontWeight: 700, fontSize: 16 }}>Goldilocks</p>
          <div style={{ marginTop: 24 }}>
            <a href="/case-studies" className="btn-outline" style={{ fontSize: 15 }}>Read case studies</a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '80px 40px' }}>
        <div className="max-w-[800px] mx-auto reveal">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 48 }}>FAQ</h2>
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

      {/* Blogs & Resources */}
      <section className="wood-bg" style={{ padding: '80px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.2, marginBottom: 48, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>Learn how to get better ROI from your social media content & campaigns.</h2>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, marginBottom: 32 }}>Blogs</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 56 }}>
            {blogs.map((b, i) => (
              <a key={i} href={b.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={b.img} alt={b.title} style={{ width: '100%', borderRadius: 8, marginBottom: 16, aspectRatio: '920/800', objectFit: 'cover' }} />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700 }}>{b.title}</h4>
              </a>
            ))}
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, marginBottom: 32 }}>Resources</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {resources.map((r, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 32 }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{r.title}</h4>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5, marginBottom: 16 }}>{r.desc}</p>
                <a href={r.link} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 14 }}>Read More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '80px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Stress less with Later's Facebook post scheduler.</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Try any Later plan for free.</p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Get 14 days for free</a>
        </div>
      </section>
    </div>
  )
}
