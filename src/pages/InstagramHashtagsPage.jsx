export default function InstagramHashtagsPage() {
  const steps = [
    { num: '01', title: 'Schedule your Instagram First Comment', desc: 'Get all of the reach, with none of the clutter in your caption by scheduling your first comment at the same time as your post.' },
    { num: '02', title: 'Hashtag Suggestions', desc: "Feeling the hashtag fatigue? Tell us your go-to hashtags, and we'll give you some new ones to try." },
    { num: '03', title: 'Saved Captions', desc: 'Organize your hashtags by different categories then insert them into your posts with one click.' },
    { num: '04', title: 'Search for UGC by Caption', desc: 'Search by hashtag to find and repost UGC or track your branded hashtags from within the Later app.' },
    { num: '05', title: 'Instagram Hashtag Analytics', desc: 'Find out which hashtags are bringing in the most engagement. See likes, comments, reach, and saves.' },
  ]

  const showcases = [
    {
      tag: 'PLAN & SCHEDULE',
      title: 'Schedule perfect posts in half the time',
      desc: 'No more hopping between different apps. Create & edit content, get on-brand Instagram hashtag suggestions, and schedule posts to automatically publish whenever you want.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/1IiZoO9OL3Sil1n3jEpjhT/d13556f1194073267eae90b9bfa3cef1/later-caption-tools.png?w=1136&h=804&q=70&fm=png',
    },
    {
      tag: 'HASHTAGS FOR INSTAGRAM GROWTH',
      title: 'Extend your reach on Instagram',
      desc: 'Finding the right followers has never been easier. Use Hashtag Suggestions to create and save new lists of hashtags to get your posts in front of more people.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/7Iua3qPqdVw3RigiCEwtud/d7db18add5337f2cbf86458f614df793/find-hashtags-using-later.png?w=1136&h=848&q=70&fm=png',
    },
    {
      tag: 'PERFECT YOUR FEED',
      title: 'Keep your grid, posts, and captions looking fresh',
      desc: 'Share perfectly captioned posts with an optimized first caption, or find stunning shareable content in just one search.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/6lRguMSfAvkSGSETwrRt7w/b60d88f4ce4dd98b667969853706c07e/schedule-your-first-instagram-comment.png?w=1172&h=792&q=70&fm=png',
    },
    {
      tag: 'INSTAGRAM HASHTAG ANALYTICS',
      title: 'See which hashtags are working',
      desc: "Not all 'tags are created equal. Our Instagram Analytics tool will tell you which ones are bringing in the most engagement. Compare hashtags side-by-side, or dive into detailed performance metrics.",
      img: 'https://images.ctfassets.net/nfpsrlop6sws/YyeJy3P9RPpf1v5LY0WDM/01cb9c353efeeecc7882b344a306e4f1/instagram-hashtag-analytics.png?w=1136&h=852&q=70&fm=png',
    },
  ]

  const blogs = [
    { img: 'https://images.ctfassets.net/nfpsrlop6sws/1YqQnHfBc8neko5YMiOCvO/478457caa36a91daa95d203663538f42/May17-InstagramHashtags_EverythingYouNeedToKnow-BlogHorizontal.png?w=920&h=800&q=80&fm=png', title: 'Instagram Hashtags: Everything You Need To Know', link: '/blog/ultimate-guide-to-using-instagram-hashtags' },
    { img: 'https://images.ctfassets.net/nfpsrlop6sws/6p13xHL3mAP6y5YrfL5b5T/e9aedf26f7083f48492a13a8fec4941d/instagram_hashtag_hacks.jpeg?w=1200&h=800&fl=progressive&q=80&fm=jpg', title: '12 Instagram Hashtag Hacks + Tricks You Definitely Want to Try', link: '/blog/instagram-hashtag-hacks' },
    { img: 'https://images.ctfassets.net/nfpsrlop6sws/1x94VnTo3aRNs8xC5SHvzQ/fb1832bf69d1ccca35f258a668db85eb/1_Number_of_Hashtags_You_Should_Use_on_Instagram_Blog_Horizontal-2.png?w=920&h=800&q=80&fm=png', title: 'The Number of Hashtags You Should Use on Instagram, According to 18M Posts', link: '/blog/how-many-hashtags-on-instagram' },
  ]

  const resources = [
    { title: 'Free Instagram Hashtag Strategy Guide', desc: 'Reach new audiences and grow your Instagram account with our free Instagram Hashtag Strategy Guide.', link: '/resources/guide/instagram-hashtag-strategy' },
    { title: 'What is a Hashtag?', desc: 'Hashtags make it easier for users to find and follow conversations and posts related to that topic.', link: '/social-media-glossary/hashtag' },
    { title: 'Kraft', desc: 'How Kraft partnered with Later to drive a double-digit lift in favorability and intent.', link: '/case-studies/kraft' },
    { title: 'Influencer Marketing Guide by Social Platforms', desc: 'Download our guide to learn how to market on different social media platforms.', link: '/resources/guide/influencer-marketing-social' },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1200px] mx-auto text-center hero-enter" style={{ padding: '0 20px' }}>
          <p className="text-charcoal/60 uppercase tracking-widest" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>Instagram Hashtag Generator</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 800, margin: '0 auto 24px' }}>
            Meet the ultimate hashtag research tool for Instagram
          </h1>
          <p className="hero-enter-d1" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}>
            Actually, it's a collection of tools from Later Social. They'll help you extend your reach, get more engagement on your posts, and save a ton of time while managing your profile.
          </p>
          <a href="/pricing" className="btn-primary hero-enter-d2" style={{ fontSize: 16, marginBottom: 28 }}>Get 14 days for free</a>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/7lxYnUR3Zyu0tQ0mcTyPaP/cab8700bb91412e9b8b198c8abc7c199/hashtag-suggestions-hero.png?w=1136&h=947&q=80&fm=png" alt="Later Instagram hashtag tools" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1200px] mx-auto reveal" style={{ padding: '0 20px' }}>
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>LATER'S HASHTAG TOOLS</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 32 }}>Maximize the impact of your hashtags</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'start' }}>
            <img src="https://images.ctfassets.net/nfpsrlop6sws/6L45yQVsPqJi2fq0kAYY93/7359677b87b06d4b6e9a9aa87247edfd/later-hashtag-tools-2.png?w=1194&h=1020&q=70&fm=png" alt="Later hashtag tools" style={{ width: '100%', borderRadius: 8 }} />
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
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          <p className="text-charcoal/60 uppercase tracking-widest text-center reveal" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>The #1 Hashtag Research Tool for Instagram</p>
          <h2 className="text-center reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>Why you should use our Instagram hashtag tools</h2>
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
        <div className="max-w-[1200px] mx-auto reveal" style={{ padding: '0 20px' }}>
          <p className="text-charcoal/60 uppercase tracking-widest text-center" style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>CUSTOMERS</p>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 32 }}>Why people love Later Social's Instagram hashtag tool</h2>
          <div style={{ maxWidth: 800, margin: '0 auto', background: '#fff', borderRadius: 12, padding: 48 }}>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              <img src="https://images.ctfassets.net/nfpsrlop6sws/UDqUwQ8sEzzFnpjU2dpKQ/f932c63d18d957e4996676ca487e56bb/Chloe_Pedersen.png?w=615&h=615&q=50&fm=png" alt="Chloe Pedersen" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: 18, lineHeight: 1.7, color: '#333', fontStyle: 'italic', marginBottom: 24 }}>
                  "Later's hashtag tools are so simple. Adding a first comment barely adds a step to my process but it's so invaluable. It helps improve the look and feel of my post and drives reach at the same time."
                </p>
                <p style={{ fontWeight: 700, fontSize: 16 }}>Chloe Pedersen</p>
                <p style={{ fontSize: 14, color: '#777' }}>Art Director, Ranch & Coast Magazine</p>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: 32 }}>
            <a href="/case-studies" className="btn-outline" style={{ fontSize: 15 }}>Read case studies</a>
          </div>
        </div>
      </section>

      {/* Blogs & Resources */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1200px] mx-auto reveal" style={{ padding: '0 20px' }}>
          <h2 className="text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 900, lineHeight: 1.3, marginBottom: 12 }}>Learn how to get better ROI from your social media content & campaigns with Later's helpful (free!) resources.</h2>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, marginBottom: 32, marginTop: 48 }}>Blogs</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 32 }}>
            {blogs.map((b, i) => (
              <a key={i} href={b.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={b.img} alt={b.title} style={{ width: '100%', borderRadius: 8, marginBottom: 16, aspectRatio: '16/9', objectFit: 'cover' }} />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, lineHeight: 1.4 }}>{b.title}</h4>
                <p style={{ fontSize: 14, color: '#777', marginTop: 4 }}>Blog Post</p>
              </a>
            ))}
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Resources</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {resources.map((r, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #eee' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{r.title}</h4>
                <p style={{ fontSize: 15, color: '#555', lineHeight: 1.5, marginBottom: 16 }}>{r.desc}</p>
                <a href={r.link} style={{ fontSize: 15, color: '#FE3F00', fontWeight: 600, textDecoration: 'none' }}>Read More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '60px 40px', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>See what the right hashtags can do for your Instagram growth</h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>Create a Later account and become a hashtag power-user.</p>
          <a href="/pricing" className="btn-primary" style={{ fontSize: 16 }}>Get 14 days for free</a>
        </div>
      </section>
    </div>
  )
}
