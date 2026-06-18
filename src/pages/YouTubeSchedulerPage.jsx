export default function YouTubeSchedulerPage() {
  const features = [
    {
      title: 'Bulk schedule YouTube shorts',
      desc: 'Repurpose & schedule videos in advance to automatically publish.',
    },
    {
      title: 'Get more views',
      desc: 'Share your video content on YouTube Shorts to reach more audiences.',
    },
    {
      title: 'Work smarter with reposting',
      desc: 'Post your short-form videos on YouTube, Instagram, Facebook, Snapchat, and TikTok in one go.',
    },
  ]

  const steps = [
    { num: '01', title: 'Drag and drop your videos into Later\'s content calendar', desc: 'Speed up your planning by uploading all of your video content to your media library ahead of time.' },
    { num: '02', title: 'Post consistently across multiple profiles', desc: 'Keep the content rolling and your audience engaged by repurposing your short-form video across all platforms at once.' },
    { num: '03', title: 'Add details while you schedule', desc: 'Add your title and description, choose your keywords, and notify your subscribers — all in a few quick taps.' },
    { num: '04', title: 'Schedule posts in advance', desc: 'Set it and forget it when you automatically post Youtube Shorts — no notifications required!' },
  ]

  const showcases = [
    {
      tag: 'MULTI-PROFILE SCHEDULING',
      title: 'Build it once, automatically post it everywhere.',
      desc: 'Schedule content to automatically post across multiple social profiles at once, including YouTube, Instagram, Facebook, TikTok, Pinterest, LinkedIn, Snapchat, and X.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/314Kdk7HGyd4ZNnTl1jZhA/15594db65564c3c8cd50b80784a27ac5/multi-profile-scheduling-all-social-platforms.png?w=1136&h=842&q=70&fm=png',
    },
    {
      tag: 'AUTO PUBLISH',
      title: 'Streamline your workflow.',
      desc: 'No more late nights or early mornings. Set it, forget it, and keep the content rolling on all your platforms with auto publishing.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/4FWciYQqQTprQZeHkEnJQt/9f1d12b5ebcc51357b3173df8abf44c1/auto-publish-youtube-shorts.png?w=1136&h=824&q=70&fm=png',
    },
    {
      tag: 'LINK IN BIO',
      title: 'Infinitely grow your brand.',
      desc: 'Reach new audiences by expanding your brand presence on YouTube and drive your followers to your video content with a link in bio tool.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/68eCRlzKsz9w0FktvrF0LU/fa64645295e651671a6b721f0c3eee9d/link-in-bio-drive-followers-video-content.png?w=1136&h=796&q=70&fm=png',
    },
  ]

  const testimonials = [
    {
      img: 'https://images.ctfassets.net/nfpsrlop6sws/1UkhjmSljwhDK3suCxuHxC/853f5ceda864ab9941c586938691d215/lucas-o-keefe.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg',
      quote: "As a business owner and content creator who also works a busy 9-5, being able to stay consistent for my audience is a must. By planning and scheduling my content in advance with Later, I'm able to do it all and still get some much-needed ME time.",
      name: 'Lucas O\'Keefe',
      role: 'Content Creator and Social Media Marketing Consultant',
    },
    {
      img: 'https://images.ctfassets.net/nfpsrlop6sws/qiCbxkipeARvkstoUd3FE/af9adb3e6306da933040260a0c80a1a9/goldilocks-steph-snelling.jpeg?w=800&h=800&fl=progressive&q=50&fm=jpg',
      quote: 'The key to a strong organic social strategy is batch working. Later helps me repurpose content for various channels easily when scheduling and optimizing content across accounts.',
      name: 'Steph Snelling',
      role: 'Goldilocks',
    },
  ]

  const faqs = [
    { q: 'What are YouTube Shorts?', a: "YouTube Shorts are YouTube's version of vertical short-form videos that have a maximum length of 60 seconds." },
    { q: 'Can I schedule YouTube Shorts to post automatically?', a: 'With Later, you can bulk schedule all sorts of short-form video content to post automatically including YouTube Shorts, Instagram Reels, Facebook Reels, Snapchat Stories, and TikTok posts. By scheduling ahead, your posts will go live at a specific date and time so you can maximize your reach.' },
    { q: 'Can I add YouTube Shorts to my link in bio page?', a: 'Yes! You can drive more traffic to your YouTube Shorts by selecting your YouTube Short as Featured Media, or by linking a button or a Featured Banner to your video on your link in bio page.' },
  ]

  const blogs = [
    { title: 'How to Schedule YouTube Shorts with Later', img: 'https://images.ctfassets.net/nfpsrlop6sws/7GxhX72B1qq1gThmg8tSRc/43494db622f62c57ef003989a15f3f64/How_to_Schedule_YouTube_Shorts_Blog_Desktop.png?w=921&h=801&q=80&fm=png', link: 'https://later.com/blog/schedule-youtube-shorts/' },
    { title: 'Everything You Need to Know About YouTube Shorts', img: 'https://images.ctfassets.net/nfpsrlop6sws/5FzevEcF6hEu15cBc8PFMq/54ed51d25e680998e69f3e562ed132ca/Everything_You_Need_to_Know_About_YouTube_Shorts_Blog_920x800.png?w=921&h=801&q=80&fm=png', link: 'https://later.com/blog/youtube-shorts/' },
    { title: '8 Things to Know Before You Publish Your First YouTube Video', img: 'https://images.ctfassets.net/nfpsrlop6sws/7wQYElWFRST6afKH6ZFAPK/4856cdbd3a22f5e9f4cc5946c605d973/Apr1-How_to_Make_Money_on_Instagram-Feature-FL.png?w=1200&h=800&q=80&fm=png', link: 'https://later.com/blog/youtube-tips/' },
  ]

  const resources = [
    { title: 'Free YouTube Script Template', desc: 'Grow your YouTube audience and keep them coming back for more with our free YouTube Script Template.', link: 'https://later.com/resources/downloadable/youtube-script-template' },
    { title: 'Launch Your Business on Social Media', desc: 'Supercharge your growth with this email series, including expert advice to market your business on social.', link: 'https://later.com/resources/challenge/launch-your-business-on-social-media' },
    { title: 'Influencer Marketing Planning Guide', desc: 'Download the planning guide and get ready for the year ahead!', link: 'https://later.com/resources/guide/influencer-marketing-planning' },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter">
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>YOUTUBE YOUR WAY!</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}>
            The YouTube Scheduler That Simplifies Your Content Planning
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Reach new audiences with YouTube Shorts. Easily repurpose & repost video content across all your social channels with Later.
          </p>
          <a href="/pricing" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 28 }}>Get 14 days for free</a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/7MIYG9azGPVw2KGcxiJAHc/6a6e70d98877e9dd5461e6885826e7f6/youtube-scheduler-hero.png?w=1136&h=776&q=80&fm=png" alt="Later YouTube Scheduler" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Quick features */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>One solution for all your video scheduling needs.</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Plan, schedule, and manage video content across all platforms.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {features.map((f, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>HOW TO SCHEDULE YOUTUBE SHORTS</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>Drag it. Drop it. Watch the views roll in.</h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>Try it on any Later plan for free.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/7DvRcfNQTUG192BANofL7b/5f3c86c694ca9e49d6be23adab5487f2/plan-schedule-auto-publish-youtube-shorts.png?w=1136&h=1000&q=70&fm=png" alt="YouTube Shorts scheduling" style={{ width: '100%', borderRadius: 8 }} />
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
          <p className="text-charcoal/60 uppercase tracking-widest text-center reveal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>YOUTUBE SCHEDULING TOOL</p>
          <h2 className="text-center reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Take on the world of YouTube.</h2>
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
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>CUSTOMER TESTIMONIALS</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 32 }}>Why our customers love Later.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
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
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 28 }}>Frequently asked questions</h2>
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
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal">
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, lineHeight: 1.2, marginBottom: 28, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>Learn how to get better ROI from your social media content & campaigns.</h2>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, marginBottom: 32 }}>Blogs</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 32 }}>
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
      <section style={{ padding: '60px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Get started with YouTube for Later.</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Available on all plans. Try it free for 14 days.</p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Get 14 days for free</a>
        </div>
      </section>
    </div>
  )
}
