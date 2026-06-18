import { Link } from 'react-router-dom'

const logos = [
  { name: 'Nike', src: 'https://images.ctfassets.net/nfpsrlop6sws/48ua7r8cCQCdo6IamRvUJV/cbc17ab7df6f3dcf3df1608405744fcc/logo-nike-dark.png?fm=webp' },
  { name: 'Wayfair', src: 'https://images.ctfassets.net/nfpsrlop6sws/EfDPSpu4N4chATsVvbDxc/00c7f1d205ced6b282cb0e5aa0e79f08/logo-wayfair-dark.png?fm=webp' },
  { name: 'Southwest', src: 'https://images.ctfassets.net/nfpsrlop6sws/4poHpqAuKtldh4FMEbCvfx/a9c291f95c7c67b9d4e7bde52b4de071/logo-southwest-dark.png?fm=webp' },
  { name: 'Unilever', src: 'https://images.ctfassets.net/nfpsrlop6sws/3jvYWSEwdKhHJR7TCNO6vb/df049a260378e26caa438bc8c701210e/logo-unilever-dark.png?fm=webp' },
  { name: 'Crumbl', src: 'https://images.ctfassets.net/nfpsrlop6sws/7xer7c56OxjqLQIwx41TEC/148f82b39ccb70b3e683c9e4908464dc/logo-crumbl-dark.png?fm=webp' },
  { name: 'KiwiCo', src: 'https://images.ctfassets.net/nfpsrlop6sws/2BCGRktXAkS22QtuDwZqFN/22c5a7b9c357f8fc630e0d4856755ce6/logo-kiwico-dark.png?fm=webp' },
]

const toolItems = [
  {
    num: '01',
    title: 'Optimize hashtag performance',
    text: 'Analyze which hashtags drive the most reach and engagement so you can fine-tune your strategy and stop wasting effort on tags that don\'t perform.',
  },
  {
    num: '02',
    title: 'Track profile analytics',
    text: 'Monitor follower growth, impressions, and engagement rates across all your social profiles in one unified dashboard.',
  },
  {
    num: '03',
    title: 'View your best-performing posts',
    text: 'Identify top content at a glance and understand what makes your audience engage, so you can replicate success.',
  },
  {
    num: '04',
    title: 'Connect with your audience',
    text: 'Understand your audience demographics, active hours, and content preferences to build deeper, more meaningful connections.',
  },
  {
    num: '05',
    title: 'Schedule posts at the perfect time',
    text: 'Use data-backed Best Time to Post suggestions to maximize reach and engagement every time you publish.',
  },
]

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M1 7h12M8 2l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function SocialMediaAnalyticsPage() {
  return (
    <div style={{ paddingTop: 70 }}>

      {/* Hero */}
      <section className="wood-bg" style={{ padding: '60px 0' }}>
        <div
          className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          style={{ padding: '0 40px' }}
        >
          <div className="reveal">
            <p
              className="text-gridglow"
              style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}
            >
              Measure What Matters
            </p>
            <h1
              className="ff-heading text-charcoal"
              style={{ fontSize: 56, fontWeight: 900, lineHeight: '62px', letterSpacing: 0.28, marginBottom: 24 }}
            >
              Social Analytics Software That Turns Social Data Into Actionable Insights
            </h1>
            <p
              className="text-charcoal"
              style={{ fontSize: 18, lineHeight: '28px', marginBottom: 32, maxWidth: 520 }}
            >
              Stop guessing what works. Later's social media analytics tools give you the data you need to create better content, reach more people, and grow your brand on every platform.
            </p>
            <Link to="/signup" className="btn-primary" style={{ fontSize: 18 }}>
              Start free trial <ArrowIcon />
            </Link>
          </div>
          <div className="reveal reveal-d1">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/7bcV6vb1dOOw5sF4Y5Eemg/c6fab71a884dfebfe6110362c88298e5/later-social-media-analytics.png?w=1136&h=960&q=80&fm=png"
              alt="Later social media analytics dashboard"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto" style={{ padding: '0 40px' }}>
          <h2
            className="ff-heading text-charcoal text-center reveal"
            style={{ fontSize: 44, fontWeight: 900, lineHeight: '50px', marginBottom: 12 }}
          >
            Analytics built for growth
          </h2>
          <p
            className="text-charcoal text-center reveal"
            style={{ fontSize: 18, lineHeight: '28px', opacity: 0.7, marginBottom: 48, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}
          >
            Reach your social media goals faster with detailed data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 reveal reveal-d1">
            <div className="text-center" style={{ padding: '32px 0' }}>
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/3VbQ3xI0fDOSQw2yofBSok/346cf97d29755f1dbc2ec89c36e107e9/target-60.png"
                alt="Target icon"
                className="mx-auto"
                style={{ width: 60, height: 60, marginBottom: 20 }}
              />
              <h3 className="ff-heading text-charcoal" style={{ fontSize: 24, fontWeight: 900, lineHeight: '30px', marginBottom: 12 }}>
                Simplify your reporting
              </h3>
              <p className="text-charcoal" style={{ fontSize: 16, lineHeight: '26px', opacity: 0.7 }}>
                Pull together all of your social media metrics in one place. No more jumping between apps to understand how your content is performing across channels.
              </p>
            </div>
            <div className="text-center" style={{ padding: '32px 0' }}>
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/6CFALc9zz6gg7JjgTs0S9W/70752ee531d8b4fff2ec81c3ca6aabd8/data-60.png"
                alt="Data icon"
                className="mx-auto"
                style={{ width: 60, height: 60, marginBottom: 20 }}
              />
              <h3 className="ff-heading text-charcoal" style={{ fontSize: 24, fontWeight: 900, lineHeight: '30px', marginBottom: 12 }}>
                Data-driven insights
              </h3>
              <p className="text-charcoal" style={{ fontSize: 16, lineHeight: '26px', opacity: 0.7 }}>
                Get actionable recommendations based on your data so you can create content that resonates with your audience and drives real, measurable results.
              </p>
            </div>
            <div className="text-center" style={{ padding: '32px 0' }}>
              <img
                src="https://images.ctfassets.net/nfpsrlop6sws/2uVIveCiE1SdKM0g7ZP8VY/f11ddc7850194a41078684b9514ee39b/plant-60.png"
                alt="Plant icon"
                className="mx-auto"
                style={{ width: 60, height: 60, marginBottom: 20 }}
              />
              <h3 className="ff-heading text-charcoal" style={{ fontSize: 24, fontWeight: 900, lineHeight: '30px', marginBottom: 12 }}>
                Expand your reach
              </h3>
              <p className="text-charcoal" style={{ fontSize: 16, lineHeight: '26px', opacity: 0.7 }}>
                Discover what content works best, when to post, and which hashtags to use to grow your audience and increase engagement organically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Tools - Numbered List */}
      <section className="wood-bg" style={{ padding: '60px 0' }}>
        <div
          className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          style={{ padding: '0 40px' }}
        >
          <div className="reveal">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/CVA2sKGLA2SS6Z94fCHHr/9dd908addf20cfec0cf0eac22af1e256/later-analytics-tools.png?w=1136&h=1000&q=70&fm=png"
              alt="Later analytics tools overview"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="reveal reveal-d1">
            <h2
              className="ff-heading text-charcoal"
              style={{ fontSize: 44, fontWeight: 900, lineHeight: '50px', marginBottom: 24 }}
            >
              The insights you need. The features you want.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {toolItems.map((item) => (
                <div key={item.num} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <span
                    className="text-gridglow ff-heading"
                    style={{ fontSize: 32, fontWeight: 900, lineHeight: '36px', flexShrink: 0 }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-charcoal" style={{ fontSize: 18, fontWeight: 700, lineHeight: '24px', marginBottom: 4 }}>
                      {item.title}
                    </h3>
                    <p className="text-charcoal" style={{ fontSize: 15, lineHeight: '24px', opacity: 0.7 }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto flex flex-col items-center reveal" style={{ padding: '0 40px' }}>
          <h2
            className="text-center text-charcoal"
            style={{ fontSize: 18, fontWeight: 700, lineHeight: '27px', marginBottom: 24 }}
          >
            Trusted by industry leaders
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 max-w-[900px] mx-auto">
            {logos.map((logo, i) => (
              <div key={i} style={{ opacity: 0.8 }} className="hover:opacity-100 transition-opacity">
                <img src={logo.src} alt={logo.name} className="h-[38px] w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Analytics Header */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '60px 0 0' }}>
        <div className="max-w-[1440px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <p
            className="text-gridglow"
            style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}
          >
            In Data We Trust
          </p>
          <h2
            className="ff-heading text-charcoal"
            style={{ fontSize: 44, fontWeight: 900, lineHeight: '50px', marginBottom: 12 }}
          >
            Manage your platform analytics in one place
          </h2>
        </div>
      </section>

      {/* Instagram Analytics */}
      <section className="wood-bg" style={{ padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ padding: '0 40px' }}>
          <div className="reveal">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/ewoVk0Lh25i2CSL5XV8Xb/1eb0f7d7fa81d563bfc003729c98c443/later-instagram-analytics.png?w=1136&h=960&q=70&fm=png"
              alt="Instagram analytics dashboard"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="reveal reveal-d1">
            <h2 className="ff-heading text-charcoal" style={{ fontSize: 44, fontWeight: 900, lineHeight: '50px', marginBottom: 20 }}>
              Instagram Analytics
            </h2>
            <p className="text-charcoal" style={{ fontSize: 18, lineHeight: '28px', marginBottom: 28, opacity: 0.7 }}>
              Track your Instagram performance with detailed analytics on stories, reels, posts, and profile activity. Understand what drives engagement and grow your following with data-backed insights.
            </p>
            <Link to="/pricing" className="btn-outline">Explore plans <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* TikTok Analytics */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ padding: '0 40px' }}>
          <div className="reveal lg:order-2">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/3JcgfOB8vsy6VO4FACZ2PU/ed77fbffc5d775383b43801f42edd714/later-tiktok-analytics.png?w=1136&h=960&q=70&fm=png"
              alt="TikTok analytics dashboard"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="reveal reveal-d1 lg:order-1">
            <h2 className="ff-heading text-charcoal" style={{ fontSize: 44, fontWeight: 900, lineHeight: '50px', marginBottom: 20 }}>
              TikTok Analytics
            </h2>
            <p className="text-charcoal" style={{ fontSize: 18, lineHeight: '28px', marginBottom: 28, opacity: 0.7 }}>
              Dive into your TikTok metrics including video views, profile visits, and follower growth. See which content goes viral and replicate your success with confidence.
            </p>
            <Link to="/pricing" className="btn-outline">Explore plans <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* Pinterest Analytics */}
      <section className="wood-bg" style={{ padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ padding: '0 40px' }}>
          <div className="reveal">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/dj6TzVa5UiWY5FjhbSI9v/6b27134b38b42a90d407a769f561295f/later-pinterest-analytics.png?w=1136&h=960&q=70&fm=png"
              alt="Pinterest analytics dashboard"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="reveal reveal-d1">
            <h2 className="ff-heading text-charcoal" style={{ fontSize: 44, fontWeight: 900, lineHeight: '50px', marginBottom: 20 }}>
              Pinterest Analytics
            </h2>
            <p className="text-charcoal" style={{ fontSize: 18, lineHeight: '28px', marginBottom: 28, opacity: 0.7 }}>
              Measure pin performance, outbound clicks, and audience insights to optimize your Pinterest strategy and drive meaningful traffic to your website.
            </p>
            <Link to="/pricing" className="btn-outline">Explore plans <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* Facebook Analytics */}
      <section style={{ backgroundColor: '#FEFCFB', padding: '60px 0' }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ padding: '0 40px' }}>
          <div className="reveal lg:order-2">
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/I8rjdIqQtVktSskqPSx91/5223c3a3b509c64fcd89f7f30a15b6d9/later-facebook-analytics.png?w=1136&h=960&q=70&fm=png"
              alt="Facebook analytics dashboard"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="reveal reveal-d1 lg:order-1">
            <h2 className="ff-heading text-charcoal" style={{ fontSize: 44, fontWeight: 900, lineHeight: '50px', marginBottom: 20 }}>
              Facebook Analytics
            </h2>
            <p className="text-charcoal" style={{ fontSize: 18, lineHeight: '28px', marginBottom: 28, opacity: 0.7 }}>
              Monitor your Facebook page performance with insights on post reach, engagement, and audience demographics to refine your content strategy and maximize results.
            </p>
            <Link to="/pricing" className="btn-outline">Explore plans <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="purple-wood-bg" style={{ padding: '60px 0' }}>
        <div
          className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal"
          style={{ padding: '0 40px' }}
        >
          <div>
            <img
              src="https://images.ctfassets.net/nfpsrlop6sws/5uEkgAvDHkaVHUwDFoEr9S/87948264d3fd47bbdaadd5a8e17a5bd1/nikki-reed-staci-inspektor.jpg?w=640&h=640&fl=progressive&q=50&fm=jpg"
              alt="Nikki Reed and Staci Inspektor"
              className="w-full max-w-[480px] h-auto"
              loading="lazy"
              style={{ borderRadius: 8 }}
            />
          </div>
          <div>
            <blockquote
              style={{ fontSize: 28, fontWeight: 400, lineHeight: '40px', color: '#FEFCFB', marginBottom: 24 }}
            >
              "Later's analytics helped us understand exactly which content resonated with our audience. The data-driven insights allowed us to double down on what works and stop wasting time on what doesn't."
            </blockquote>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#FEFCFB' }}>
              Nikki Reed &amp; Staci Inspektor
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: '#000', padding: '60px 0' }}>
        <div className="max-w-[800px] mx-auto text-center reveal" style={{ padding: '0 40px' }}>
          <h2
            className="ff-heading"
            style={{ fontSize: 52, fontWeight: 900, lineHeight: '58px', color: '#FEFCFB', marginBottom: 16 }}
          >
            Measure your performance with proven social media analytics
          </h2>
          <p style={{ fontSize: 18, lineHeight: '28px', color: '#FEFCFB', opacity: 0.7, marginBottom: 32 }}>
            Make decisions backed by accurate data — and watch your social channels grow.
          </p>
          <Link to="/signup" className="btn-primary" style={{ fontSize: 18 }}>
            Start free trial <ArrowIcon />
          </Link>
        </div>
      </section>

    </div>
  )
}
