import { Link } from 'react-router-dom'

export default function SocialMediaPublishingPage() {
  const valueProps = [
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/537WvxPFZdaYNZ0M8Khb0Z/2c80d5b3e213c4d6599dfa15497d3419/schedule-all-platforms-icon.png',
      title: 'Streamline your workflow',
      desc: 'Manage all of your social profiles in one place — and schedule content across channels from a single dashboard.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/604XO5TEeSwNfARO48IEln/aec16ae66b35db81967bcfd9be3fda85/icon-save-time.png',
      title: 'Save time',
      desc: 'Plan, create, and schedule your content in advance so you can focus on the big picture.',
    },
    {
      icon: 'https://images.ctfassets.net/nfpsrlop6sws/5dYu8qo8etGEdoF56x44EO/4d099303c49f425616dd4534c0d84083/icon-post-on-go.png',
      title: 'Post on the go',
      desc: 'Later works on desktop and mobile, so you can manage your content from wherever you are.',
    },
  ]

  const steps = [
    {
      num: '01',
      title: 'Bulk schedule & Auto Publish',
      desc: 'Upload and schedule batches of content across platforms, then let Later auto publish them for you.',
    },
    {
      num: '02',
      title: 'Publish on all platforms',
      desc: 'Schedule posts to Instagram, TikTok, Facebook, Pinterest, LinkedIn, YouTube, and X (Twitter).',
    },
    {
      num: '03',
      title: 'Edit & optimize content',
      desc: 'Crop photos, add filters, write captions, and get hashtag suggestions — all within Later.',
    },
    {
      num: '04',
      title: 'Create the perfect feed',
      desc: 'Use the Visual Planner to preview how posts will look on your grid before publishing.',
    },
    {
      num: '05',
      title: 'Ready to post when you are',
      desc: 'Get Best Time to Post suggestions and schedule content when your audience is most active.',
    },
  ]

  const features = [
    {
      tag: 'AUTO PUBLISH & BEST TIME TO POST',
      title: 'Reach your followers at the right time',
      desc: 'Schedule your content and let Later auto publish it for you — no notification needed. Plus, get personalized Best Time to Post suggestions so your content reaches the right people at the right time.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/1loj2kFzbzPpUfanWbBZ5f/dfd7c716c529f8728cbe4af40af72017/later-auto-publish-and-best-time-to-post.png?w=1132&h=960&q=70&fm=png',
    },
    {
      tag: 'MEDIA LIBRARY',
      title: 'All your media, all in one spot',
      desc: 'Store, organize, and manage all of your photos and videos in one place. Upload from your computer, Dropbox, or Google Drive, then drag and drop them right onto your content calendar.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/2GMtMaimFKzYyx8bYGYSfO/2d140341857d1ea6dae00e195a1652f0/later-media-library.png?w=1138&h=978&q=70&fm=png',
    },
    {
      tag: 'VISUAL FEED PLANNER',
      title: 'Plan your content for the perfect feed',
      desc: 'Preview your Instagram feed before you publish. Drag and drop to rearrange posts, plan your aesthetic, and make sure every post fits perfectly on your grid.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/7hYsqevyVI1eE2dsK9yumA/d43bb0412473e8a60c54f9fe3650217a/later-visual-feed-planner.png?w=1136&h=960&q=70&fm=png',
    },
    {
      tag: 'HASHTAG SUGGESTIONS & COMMENTING',
      title: 'Amplify your posts ahead of time',
      desc: 'Get instant hashtag suggestions based on your content and caption. Later helps you find the most relevant hashtags to increase your reach and engagement.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/3YlsUs6JcS7uV2HrBbd6S7/3125f79ff52a0944f87fca33a957f4bc/later-hashtag-suggestions-and-commenting.png?w=1138&h=926&q=70&fm=png',
    },
    {
      tag: 'SEARCH & FIND MEDIA',
      title: 'Find content for every kind of post',
      desc: 'Search for on-brand stock photos using Unsplash — directly inside Later. Find the perfect image, add it to your Media Library, and schedule it in seconds.',
      img: 'https://images.ctfassets.net/nfpsrlop6sws/3XCAPlbKIUA9Ds1IRM6yeA/3a37406c793f5850514f22478dd64d26/later-search-and-find-media.png?w=1136&h=960&q=70&fm=png',
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
            CREATE & POST CONTENT ON THE GO
          </p>
          <h1
            className="ff-heading"
            style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.1, maxWidth: 860, margin: '0 auto 24px' }}
          >
            Social Media Publishing Tool: Plan, Schedule, and Publish Content With Confidence
          </h1>
          <p
            className="hero-enter-d1"
            style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 680, margin: '0 auto 32px', color: '#333' }}
          >
            Later makes it easy to plan, schedule, and auto publish content across every major
            social platform — all from one dashboard. Spend less time posting and more time
            connecting with your audience.
          </p>
          <Link
            to="/pricing"
            className="btn-primary hero-enter-d2"
            style={{ fontSize: 16, marginBottom: 28 }}
          >
            Get started
          </Link>
          <div className="hero-enter-d3" style={{ maxWidth: 900, margin: '0 auto' }}>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/5NuIyYYxkmRBpK4OuwCMtT/89adf2697f6be4e3764373a421f836f1/social-media-publishing-hero.png?w=1136&h=960&q=80&fm=png"
              alt="Social Media Publishing"
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
            Post more, grow more with Later
          </h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 32, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            Everything you need to create, edit, &amp; publish social posts that help you build your brand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 28 }}>
            {valueProps.map((v, i) => (
              <div key={i} className={`reveal reveal-d${i + 1}`} style={{ textAlign: 'center' }}>
                <img
                  src={v.icon}
                  alt=""
                  style={{ width: 48, height: 48, margin: '0 auto 16px' }}
                />
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
          <p
            className="text-charcoal/60 uppercase tracking-widest text-center"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}
          >
            LATER'S SOCIAL MEDIA PUBLISHING TOOLS
          </p>
          <h2
            className="ff-heading text-center"
            style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}
          >
            Manage your entire social strategy in one place
          </h2>
          <p
            className="text-center"
            style={{
              fontSize: 18,
              color: '#555',
              marginBottom: 32,
              maxWidth: 640,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            From planning to publishing, Later has you covered at every step.
          </p>
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{
              gap: 36,
              alignItems: 'center',
            }}
          >
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/7nOkdPEIVEsrALLY21wyqo/ed8c8fe241610e5eb48d60296bfa471a/later-social-social-media-management-tools.png?w=1168&h=1034&q=70&fm=png"
              alt="Social media management tools"
              style={{ width: '100%', borderRadius: 8 }}
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

      {/* Feature Sections */}
      <section style={{ padding: '60px 40px' }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: '0 20px' }}>
          <div className="text-center reveal" style={{ marginBottom: 60 }}>
            <p
              className="text-charcoal/60 uppercase tracking-widest"
              style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}
            >
              DO IT ALL WITH LATER SOCIAL
            </p>
            <h2
              className="ff-heading"
              style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, maxWidth: 700, margin: '0 auto' }}
            >
              Posting and growing on social media has never been easier
            </h2>
          </div>
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal grid grid-cols-1 lg:grid-cols-2"
              style={{
                gap: 36,
                alignItems: 'center',
                marginBottom: 80,
                direction: i % 2 === 1 ? 'rtl' : 'ltr',
              }}
            >
              <img
                src={f.img}
                alt={f.title}
                style={{ width: '100%', borderRadius: 8, direction: 'ltr' }}
              />
              <div style={{ direction: 'ltr' }}>
                <p
                  className="uppercase tracking-widest"
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#FE3F00',
                    letterSpacing: 2,
                    marginBottom: 12,
                  }}
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
        <div
          className="max-w-[800px] mx-auto text-center reveal"
          style={{ color: '#fff' }}
        >
          <p
            className="uppercase tracking-widest"
            style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, marginBottom: 12, opacity: 0.7 }}
          >
            CUSTOMER TESTIMONIAL
          </p>
          <h2
            className="ff-heading"
            style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.15, marginBottom: 32 }}
          >
            How social media publishing helps Later users
          </h2>
          <img
            src="https://images.ctfassets.net/nfpsrlop6sws/1UkhjmSljwhDK3suCxuHxC/853f5ceda864ab9941c586938691d215/lucas-o-keefe.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg"
            alt="Lucas O'Keefe"
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              objectFit: 'cover',
              margin: '0 auto 24px',
            }}
          />
          <p style={{ fontSize: 22, lineHeight: 1.6, marginBottom: 24, fontStyle: 'italic' }}>
            "Later's scheduling tools make it so easy to plan and publish content across all
            our social channels. It's completely transformed our workflow and saved us
            countless hours every week."
          </p>
          <p style={{ fontWeight: 700, fontSize: 16 }}>Lucas O'Keefe</p>
          <p style={{ fontSize: 14, opacity: 0.8 }}>Social Media Manager</p>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '60px 40px', background: '#000', textAlign: 'center' }}>
        <div className="max-w-[700px] mx-auto reveal">
          <h2
            className="ff-heading"
            style={{
              fontSize: 42,
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: 24,
              color: '#fff',
            }}
          >
            Get Later's social media publishing tool
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>
            Try any Later Social plan for free.
          </p>
          <Link to="/pricing" className="btn-primary" style={{ fontSize: 16 }}>
            Get started
          </Link>
        </div>
      </section>
    </div>
  )
}
