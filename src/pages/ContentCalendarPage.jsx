import { Link } from 'react-router-dom'
import TrustedBy from '../components/TrustedBy'

export default function ContentCalendarPage() {
  const valueProps = [
    {
      title: 'Create the perfect feed',
      desc: 'Use the Visual Planner to drag, drop, and rearrange posts before they go live. Curate a cohesive look that reflects your brand.',
    },
    {
      title: 'See the big picture',
      desc: 'View all your scheduled posts across every platform in one calendar. Spot gaps, plan campaigns, and never miss a beat.',
    },
    {
      title: 'Collab with your team',
      desc: 'Share your calendar with teammates and clients. Review posts, leave notes, and approve content — all in one place.',
    },
  ]

  const steps = [
    { num: '01', title: 'Organize your media storage', desc: 'Upload photos and videos to your Media Library and keep everything organized with labels and search.' },
    { num: '02', title: 'Write like a pro', desc: 'Use the AI-powered Caption Writer to draft engaging captions and get hashtag suggestions in seconds.' },
    { num: '03', title: 'Plan your next post', desc: 'Drag and drop content onto the calendar, choose the best time to post, and preview your feed before publishing.' },
    { num: '04', title: 'Design your grid your way', desc: 'Rearrange posts visually so your Instagram grid looks exactly the way you want — before anything goes live.' },
    { num: '05', title: 'Set it and forget it', desc: 'Turn on Auto Publish and let Later post your content for you. No notifications, no manual posting required.' },
  ]

  const features = [
    {
      tag: 'SCHEDULE & POST',
      title: 'Publish on all platforms with Later',
      desc: 'Schedule and auto publish posts to Instagram, TikTok, Facebook, Pinterest, LinkedIn, YouTube, and X — all from one dashboard. Spend less time switching between apps and more time creating great content.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/5fxHLAQHtlnpnuqe5XZmL7/d0f9e7b407935fb40637302a7066a7f5/publish-on-all-platforms-with-later.png?w=1136&h=960&q=70&fm=png',
    },
    {
      tag: 'COLLABORATION',
      title: 'Collaboration made easy',
      desc: 'Invite your team, assign roles, and streamline your approval workflow. Later makes it simple to collaborate on content — so everyone stays aligned and nothing slips through the cracks.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/1HyCqR5luTWMM6pEVRrkje/6557d8c769b0d61e02f28962c6057584/collaboration-made-easy-with-later.png?w=1136&h=960&q=70&fm=png',
    },
    {
      tag: 'GROWTH TOOLS',
      title: 'Tools built for growth',
      desc: 'From analytics and Best Time to Post to Link in Bio and hashtag suggestions, Later gives you everything you need to grow your audience and measure your impact.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/3ij24kmeYgf7BeuGPSnikZ/ee52665a0bc4acc0c711141efc5bbf42/later-tools-built-for-growth.png?w=1136&h=960&q=70&fm=png',
    },
  ]

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 40px 0' }}>
        <div className="max-w-[1200px] mx-auto text-center hero-enter" style={{ padding: '0 20px' }}>
          <p
            className="text-charcoal/60 uppercase tracking-widest"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}
          >
            Post More, Work Less
          </p>
          <h1
            className="ff-heading"
            style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 860, margin: '0 auto 24px' }}
          >
            Streamline your social media content calendar with Later.
          </h1>
          <p
            className="hero-enter-d1"
            style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}
          >
            Ditch the DIY spreadsheets and disjointed tools. Later's content calendar brings
            planning, scheduling, and publishing together in one beautiful, drag-and-drop interface.
          </p>
          <Link
            to="/pricing"
            className="btn-primary hero-enter-d2"
            style={{ fontSize: 16, marginBottom: 28 }}
          >
            Start a 14-Day Trial
          </Link>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/5cRVkk1ZBrjHY5dKn47qhN/9fba206bb089e656d8c7e921fe83bccf/streamline-your-social-media-content-calendar-with_-Later-Social.png?w=1136&h=960&q=80&fm=png"
              alt="Later Content Calendar"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1200px] mx-auto text-center reveal" style={{ padding: '0 20px' }}>
          <h2
            className="ff-heading"
            style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}
          >
            Save time with smart planning
          </h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32 }}>
            Everything you need to plan a winning content strategy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {valueProps.map((v, i) => (
              <div key={i} className={`reveal reveal-d${i + 1} text-center`}>
                <h3
                  className="ff-heading"
                  style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}
                >
                  {v.title}
                </h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbered Steps */}
      <section className="wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[1200px] mx-auto reveal" style={{ padding: '0 20px' }}>
          <h2
            className="ff-heading text-center"
            style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 32 }}
          >
            Manage your social media calendar with ease
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/2PlFehpkx4GKrmLGfuhreO/88897d84e9482665fbf231c860dee5f0/manage-your-social-media-calendar-with-ease.png?w=1136&h=1000&q=70&fm=png"
              alt="Manage your calendar"
              className="w-full rounded-lg"
            />
            <div>
              {steps.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 32 }}>
                  <span
                    className="ff-heading"
                    style={{ fontSize: 28, fontWeight: 900, color: '#FE3F00', minWidth: 40 }}
                  >
                    {s.num}
                  </span>
                  <div>
                    <h3
                      className="ff-heading"
                      style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}
                    >
                      {s.title}
                    </h3>
                    <p style={{ fontSize: 16, color: '#555', lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <TrustedBy />

      {/* Feature Sections */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          {features.map((f, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-9 items-center reveal reveal-d${(i % 2) + 1}`}
              style={{ marginBottom: i < features.length - 1 ? 80 : 0 }}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full rounded-lg"
                />
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <p
                  className="uppercase tracking-widest text-gridglow"
                  style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}
                >
                  {f.tag}
                </p>
                <h3
                  className="ff-heading"
                  style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6, marginBottom: 24 }}>
                  {f.desc}
                </p>
                <Link to="/pricing" className="btn-outline" style={{ fontSize: 15 }}>
                  Explore plans
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="purple-wood-bg" style={{ padding: '60px 40px' }}>
        <div className="max-w-[800px] mx-auto text-center reveal" style={{ color: '#fff' }}>
          <img
            src="https://images.ctfassets.net/nfpsrlop6sws/7LfVwNa05ypLSmVOtFzPlQ/fbe6354d679b58b12994ed2c02dd4dfe/sam-turnball.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg"
            alt="Sam Turnbull"
            style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 24px' }}
          />
          <p style={{ fontSize: 22, lineHeight: 1.6, marginBottom: 24, fontStyle: 'italic' }}>
            "Later has been a lifesaver for planning out my social media posts. Being able to see
            everything on the calendar and visually plan my feed has completely changed my workflow.
            I can't imagine going back to spreadsheets."
          </p>
          <p style={{ fontWeight: 700, fontSize: 16 }}>Sam Turnbull</p>
          <p style={{ fontSize: 14, opacity: 0.8 }}>@itdoesnttastelikechicken</p>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '60px 40px', background: '#000', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2
            className="ff-heading"
            style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24, color: '#fff' }}
          >
            Your ultimate social media content calendar
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>
            Plan smarter, publish faster, and grow your audience with Later.
          </p>
          <Link to="/pricing" className="btn-primary" style={{ fontSize: 16 }}>
            Start a 14-Day Trial
          </Link>
        </div>
      </section>
    </div>
  )
}
