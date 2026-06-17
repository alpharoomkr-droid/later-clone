import { Link } from 'react-router-dom'

const valueCards = [
  {
    title: 'High-tech low stress',
    desc: 'Later\'s AI-powered Caption Writer takes the pressure off creating captions. Just add a few details about your post and let the tool generate on-brand options for you.',
  },
  {
    title: 'Goodbye writer\'s block',
    desc: 'Never stare at a blank screen again. Generate multiple caption options in seconds so you can focus on what matters most — growing your audience.',
  },
  {
    title: 'Your brainstorm sidekick',
    desc: 'Use the Caption Writer as a creative partner to spark new ideas, refine your voice, and craft captions that truly resonate with your audience.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Open the Caption Writer tool',
    desc: 'Find the Caption Writer inside Later\'s content creation flow. It\'s built right into the scheduling experience so you never have to leave the app.',
  },
  {
    num: '02',
    title: 'Add details about your Instagram post',
    desc: 'Tell the AI what your post is about, your desired tone, and any key points you want to include. The more context you give, the better your captions.',
  },
  {
    num: '03',
    title: 'Experiment with different captions',
    desc: 'Generate multiple caption variations and tweak them until you find the perfect fit for your brand voice. Try different tones and styles in seconds.',
  },
  {
    num: '04',
    title: 'Insert your perfect caption',
    desc: 'Once you\'ve found the one, insert it directly into your scheduled post with a single click. Done — time to move on to your next great post.',
  },
]

const moreWays = [
  {
    tag: 'HASHTAG SUGGESTIONS',
    title: 'Get hashtag recommendations that actually work.',
    desc: 'Pair your perfect caption with high-performing hashtags. Later suggests relevant hashtags based on your content to help you reach more people and boost engagement on every single post.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/1Nn1eQmNjmNQJ4Oa5sqwD2/52fb6f0a1c76caaa001f2d76aabff648/later-hashtag-suggestions.png?w=1139&h=960&q=70&fm=png',
    link: '/instagram-scheduler/hashtags',
  },
  {
    tag: 'BEST TIME TO POST',
    title: 'Post when your audience is actually online.',
    desc: 'Combine great captions with perfect timing. Later analyzes your unique audience activity patterns and tells you exactly when to post for maximum reach and engagement.',
    img: 'https://images.ctfassets.net/nfpsrlop6sws/uNTgR6n58etSWRzJIsIxS/e36e602b751a909e47dce2b6a388a863/later-best-time-to-post.png?w=1136&h=960&q=70&fm=png',
    link: '/instagram-scheduler/best-time-to-post',
  },
]

const testimonials = [
  {
    img: 'https://images.ctfassets.net/nfpsrlop6sws/7MAJY1RHlZcDZ1PzIOjRnP/d4a0b27bddfe0f0f5ce707cb63be6612/whitney-kerney.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg',
    quote: "Later's Caption Writer has completely changed my workflow. I used to spend ages trying to come up with the perfect caption — now I get great options in seconds and can focus on creating content.",
    name: 'Whitney Kerney',
    handle: '@wkcreative',
  },
  {
    img: 'https://images.ctfassets.net/nfpsrlop6sws/Ci7MTrvOyi4UszzowvQm0/d8f61e75e38f45240c53e35c32180484/michelle-velazques-testimonial.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg',
    quote: "As a social media manager juggling multiple accounts, the Caption Writer is a lifesaver. It keeps my captions on-brand across every client without the burnout.",
    name: 'Michelle Velazquez',
    handle: '@symbaloo',
  },
  {
    img: 'https://images.ctfassets.net/nfpsrlop6sws/1UkhjmSljwhDK3suCxuHxC/853f5ceda864ab9941c586938691d215/lucas-o-keefe.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg',
    quote: "I love how easy it is to generate captions that match my voice. Later's AI gets my tone right every time — it's like having a professional copywriter on call 24/7.",
    name: "Lucas O'Keefe",
    handle: '@thelucasokeefe',
  },
]

export default function CaptionWriterPage() {
  return (
    <div style={{ paddingTop: 70 }}>

      {/* Hero */}
      <section className="wood-bg" style={{ padding: '80px 0' }}>
        <div
          className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          style={{ padding: '0 40px' }}
        >
          <div className="reveal">
            <p
              className="text-gridglow"
              style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}
            >
              Instagram Caption Generator
            </p>
            <h1
              className="ff-heading text-charcoal"
              style={{ fontSize: 52, fontWeight: 900, lineHeight: '58px', marginBottom: 24 }}
            >
              Generate on-brand captions with Later's Caption Writer
            </h1>
            <p
              className="text-charcoal"
              style={{ fontSize: 18, lineHeight: '28px', marginBottom: 32, maxWidth: 520 }}
            >
              Say goodbye to writer's block. Later's AI-powered Caption Writer
              helps you create engaging, on-brand Instagram captions in seconds
              — so you can spend less time writing and more time connecting with
              your audience.
            </p>
            <Link to="/signup" className="btn-primary" style={{ fontSize: 18 }}>
              Start free trial
            </Link>
          </div>
          <div className="reveal reveal-d1">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/6KuJv9MvyWHDriakWP51UU/b413a960bee765f0ae8e2bb4b7582045/later-caption-writer-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Later Caption Writer"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '80px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2
            className="ff-heading text-charcoal text-center reveal"
            style={{ fontSize: 44, fontWeight: 900, lineHeight: '50px', marginBottom: 56 }}
          >
            Create better content, faster
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 reveal reveal-d1">
            {valueCards.map((card, i) => (
              <div key={i} style={{ padding: '32px 0' }}>
                <h3
                  className="ff-heading text-charcoal"
                  style={{ fontSize: 24, fontWeight: 900, lineHeight: '30px', marginBottom: 12 }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-charcoal"
                  style={{ fontSize: 16, lineHeight: '26px', opacity: 0.7 }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbered Steps */}
      <section className="wood-bg" style={{ padding: '80px 0' }}>
        <div
          className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          style={{ padding: '0 40px' }}
        >
          <div className="reveal">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/6GmsdzOE02tReRpjzeGDHA/2f0235a53ec530360584e7f8612c867e/how-the-later-caption-writer-works.png?w=1168&h=940&q=70&fm=png"
              alt="How the Caption Writer works"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="reveal reveal-d1">
            <h2
              className="ff-heading text-charcoal"
              style={{ fontSize: 44, fontWeight: 900, lineHeight: '50px', marginBottom: 40 }}
            >
              The IG caption generator you want, need, & love
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {steps.map((s) => (
                <div key={s.num} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <span
                    className="text-gridglow ff-heading"
                    style={{ fontSize: 32, fontWeight: 900, lineHeight: '36px', flexShrink: 0 }}
                  >
                    {s.num}
                  </span>
                  <div>
                    <h3
                      className="text-charcoal"
                      style={{ fontSize: 18, fontWeight: 700, lineHeight: '24px', marginBottom: 4 }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-charcoal"
                      style={{ fontSize: 15, lineHeight: '24px', opacity: 0.7 }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mid CTA Banner */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '64px 0' }}>
        <div className="max-w-[900px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <h2
            className="ff-heading text-charcoal"
            style={{ fontSize: 36, fontWeight: 900, lineHeight: '42px', marginBottom: 28 }}
          >
            Writing on the fly? Try Later's Caption Writer instead.
          </h2>
          <Link to="/signup" className="btn-primary" style={{ fontSize: 18 }}>
            Start free trial
          </Link>
        </div>
      </section>

      {/* More Ways to Use Later */}
      <section style={{ padding: '80px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2
            className="ff-heading text-charcoal text-center reveal"
            style={{ fontSize: 44, fontWeight: 900, lineHeight: '50px', marginBottom: 64 }}
          >
            More ways to use Later
          </h2>
          {moreWays.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal"
              style={{ marginBottom: i < moreWays.length - 1 ? 80 : 0 }}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto"
                  loading="lazy"
                  style={{ borderRadius: 8 }}
                />
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <p
                  className="text-gridglow"
                  style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}
                >
                  {item.tag}
                </p>
                <h3
                  className="ff-heading text-charcoal"
                  style={{ fontSize: 36, fontWeight: 900, lineHeight: '42px', marginBottom: 16 }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-charcoal"
                  style={{ fontSize: 17, lineHeight: '28px', marginBottom: 24, opacity: 0.7 }}
                >
                  {item.desc}
                </p>
                <Link to={item.link} className="btn-outline" style={{ fontSize: 15 }}>
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="purple-wood-bg" style={{ padding: '80px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2
            className="ff-heading text-center reveal"
            style={{ fontSize: 44, fontWeight: 900, lineHeight: '50px', marginBottom: 56, color: '#FEFCFB' }}
          >
            Loved by creators & brands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal reveal-d1">
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 12,
                  padding: 32,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginBottom: 20 }}
                  loading="lazy"
                />
                <p style={{ fontSize: 16, lineHeight: '26px', color: '#FEFCFB', marginBottom: 24, flex: 1 }}>
                  "{t.quote}"
                </p>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 15, color: '#FEFCFB' }}>{t.name}</p>
                  <p style={{ fontSize: 14, color: 'rgba(254,252,251,0.6)' }}>{t.handle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: '#000', padding: '100px 0' }}>
        <div className="max-w-[800px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <h2
            className="ff-heading"
            style={{ fontSize: 52, fontWeight: 900, lineHeight: '58px', color: '#FEFCFB', marginBottom: 20 }}
          >
            Kick back & relax thanks to Later's Caption Writer
          </h2>
          <p style={{ fontSize: 18, lineHeight: '28px', color: 'rgba(254,252,251,0.7)', marginBottom: 36 }}>
            Let AI handle the heavy lifting so you can focus on creating content your audience loves.
          </p>
          <Link to="/signup" className="btn-primary" style={{ fontSize: 18 }}>
            Start free trial
          </Link>
        </div>
      </section>

    </div>
  )
}
