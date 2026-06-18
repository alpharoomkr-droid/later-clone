export default function InstagramAnalyticsPage() {
  const steps = [
    { num: '01', title: 'Always post at the perfect time', desc: 'Use the Best Time to Post tool to schedule content for maximum views & likes.' },
    { num: '02', title: 'Optimize posts for performance', desc: 'Analyze & compare posts to discover what works best for your followers.' },
    { num: '03', title: 'Get more Instagram Story views', desc: 'See how your Stories are performing & rank them by impressions, reach & more.' },
    { num: '04', title: 'Drive traffic & sales with Link in Bio', desc: 'Get detailed analytics for your Link in Bio page to track clicks & sales.' },
    { num: '05', title: 'Get detailed Reels Analytics', desc: "Use Later's Analytics tool to measure, track, and optimize your Reels performance." },
  ]

  const showcases = [
    {
      tag: 'Improve Instagram Engagement',
      title: 'Increase Your Engagement Rate',
      desc: 'Compare your Instagram posts to discover your most engaging content. Automatically calculate your engagement rate, rank posts by engagement to see what content is working, and see your best performing posts at a glance.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/01RwEObuYgj6jXyRxHwRUG/5bf55455b385a35187b58f4f69193cf2/increase-your-engagement-rate.png?w=1136&h=838&q=70&fm=png',
    },
    {
      tag: 'Find your Best time to post on Instagram',
      title: 'Optimize Your Posting Times',
      desc: "Get more likes, comments, and views on your content by optimizing your posting times! Later's Best Time to Post feature automatically calculates your top 7 posting times that get the most engagement. See when your audience is most active and use location data to pinpoint your top time zones.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/3bX19MYMMl1S5sSHLfyKDi/a911310b83debb48e55709d15665a7d7/optimize-your-positng-times.png?w=1136&h=826&q=70&fm=png',
    },
    {
      tag: 'Instagram Story Analytics',
      title: 'Get more views with Instagram Story Analytics',
      desc: 'Track Instagram Story views and engagement data for up to 3 months! See how your Stories are performing and rank them by impressions, reach, completion rate, reply count, and more. Get detailed analytics for each story to improve your posting times and test different content types.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/5oEGuyopNDMF50RCnfmQYE/c38956dae14c6ab700af2f5e2175466b/get-more-views-with-instagram-stories-analytics.png?w=1136&h=904&q=70&fm=png',
    },
    {
      tag: 'Instagram Follower Analytics',
      title: 'Attract the Right Followers',
      desc: 'Use demographics data like age and gender to guide your content strategy. Find out where your followers are located with your top cities, countries, and languages spoken. Track your follower growth, growth rate, and profile views over time. Use Instagram Hashtag Analytics to discover which hashtags perform the best.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/5f5xPtUe2JgTQjHxpVxurT/8685aa95ad4ac7378ff466f935b38186/attract-the-right-followers.png?w=1152&h=937&q=70&fm=png',
    },
    {
      tag: 'Instagram Audience Analytics',
      title: 'Improve your Instagram Marketing Strategy',
      desc: 'Grow your business by understanding what content is performing best. See how your Instagram account is performing overall, deep dive into the detailed performance of each post and story, and rank your posts by impressions, engagement, likes, comments, and saves.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/76woizN9UiCW3MEfw5t69U/c15768e19dc78da902adb404545caa2f/improve-your-instagram-marketing-strategy.png?w=1136&h=1072&q=70&fm=png',
    },
    {
      tag: 'Link in Bio Analytics',
      title: 'Drive Traffic from Instagram',
      desc: 'Convert more followers into readers and customers by tracking traffic from Instagram. View website clicks from your profile over time, track clicks, page views, and click-through rates with Link in Bio analytics, and find out which posts are driving the most traffic and sales.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/3Typne2lFuWf3s3Lcuggoy/afde4b3f4600da4f3c38c4b24192940d/drive-traffic-from-instagram.png?w=1137&h=849&q=70&fm=png',
    },
  ]

  const faqs = [
    { q: "What profile type do I need for Later's Instagram Analytics?", a: "Due to API limitations from Instagram, analytics are available for Instagram business and creator profiles only. And heads up: if you have a business or creator profile with fewer than 100 followers, you won't be able to see demographic analytics in Later." },
    { q: 'Are Later Analytics available on the Later mobile app?', a: 'At this time, Later Analytics is not available on the Later Mobile App and are only available in Later for Desktop.' },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1440px] mx-auto text-center hero-enter" style={{ padding: '0 40px' }}>
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>Talk Data to Me</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}>
            Get Instagram Analytics that actually make sense
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Measure what matters with Later's Instagram Analytics tools! Get detailed audience & engagement data to see which posts are working (and which ones aren't) — so you can create more content your followers love & engage with.
          </p>
          <a href="/pricing" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 28 }}>Start free trial</a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/4N1d1DTOtveU5gTpaKJcmI/62d3143620fc7c80770dad175b83b1a9/later-instagram-analytics-hero.png?w=1114&h=858&q=80&fm=png" alt="Later Instagram Analytics" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1440px] mx-auto reveal" style={{ padding: '0 40px' }}>
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>Why you need Analytics for Instagram</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>All data, no drama</h2>
          <p className="text-center" style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>Understand your audience, optimize your content, and grow your account with actionable insights.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'start' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/3B0jzk91BSIfp1JJq5LDRk/d7f2195fb37d20baa70596fe5696c7ea/later-instagram-analytics-how-it-works.png?w=1171&h=997&q=70&fm=png" alt="Instagram Analytics how it works" style={{ width: '100%', borderRadius: 8 }} />
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
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <p className="text-charcoal/60 uppercase tracking-widest text-center reveal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>Later's Instagram Analytics Tools</p>
          <h2 className="text-center reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Get the insights you need, no number crunching required.</h2>
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
        <div className="max-w-[1440px] mx-auto reveal" style={{ padding: '0 40px' }}>
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>Customer Testimonial</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 32 }}>How Later's Instagram Analytics Can Help You</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
            <div className="reveal reveal-d1" style={{ background: '#F8F2EA', borderRadius: 12, padding: 32, display: 'flex', flexDirection: 'column' }}>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/5uEkgAvDHkaVHUwDFoEr9S/87948264d3fd47bbdaadd5a8e17a5bd1/nikki-reed-staci-inspektor.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg" alt="Nikki Reed & Staci Inspektor" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginBottom: 20 }} />
              <p style={{ fontSize: 16, lineHeight: 1.6, color: '#333', marginBottom: 24, flex: 1 }}>"Not only is Later's Analytics feature incredibly user-friendly, it's also so helpful seeing our analytics all in one place! We especially love using the Performance Report to track performance over the last 90 days and see how our engagement compares to similar profiles in our industry."</p>
              <div>
                <p style={{ fontWeight: 700, fontSize: 15 }}>Nikki Reed & Staci Inspektor</p>
                <p style={{ fontSize: 14, color: '#777' }}>ATELIER SAUCIER, Co-founders</p>
              </div>
            </div>
            <div className="reveal reveal-d2" style={{ background: '#F8F2EA', borderRadius: 12, padding: 32, display: 'flex', flexDirection: 'column' }}>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/7nMlwBPmQiAEXbrCVFUK91/842ff1f7d440fe30a27e7acf66f3578a/jessica-hong-apotheke.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg" alt="Jessica Hong" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginBottom: 20 }} />
              <p style={{ fontSize: 16, lineHeight: 1.6, color: '#333', marginBottom: 24, flex: 1 }}>"Later's Instagram Reels analytics tools have helped us tremendously with being more data-driven in our content strategy. The Reels auto publish is also a must — now we can spend less time manually posting, and more time creating great content!"</p>
              <div>
                <p style={{ fontWeight: 700, fontSize: 15 }}>Jessica Hong</p>
                <p style={{ fontSize: 14, color: '#777' }}>Social Media Manager, APOTHEKE</p>
              </div>
            </div>
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
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Crush your social goals. Again & again.</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Get analytics that help you grow on social. Try Later for free.</p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Start free trial</a>
        </div>
      </section>
    </div>
  )
}
