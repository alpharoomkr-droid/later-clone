import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'

const p = (fn) => lazy(fn)

const HomePage = p(() => import('./pages/HomePage'))
const PricingPage = p(() => import('./pages/PricingPage'))
const InfluencerMarketingPlatformPage = p(() => import('./pages/InfluencerMarketingPlatformPage'))
const InfluencerMarketingServicesPage = p(() => import('./pages/InfluencerMarketingServicesPage'))
const SocialMediaSchedulerPage = p(() => import('./pages/SocialMediaSchedulerPage'))
const InfluencerCreatorProgramPage = p(() => import('./pages/InfluencerCreatorProgramPage'))
const LinkInBioPage = p(() => import('./pages/LinkInBioPage'))
const InstagramSchedulerPage = p(() => import('./pages/InstagramSchedulerPage'))
const InstagramPlannerPage = p(() => import('./pages/InstagramPlannerPage'))
const InstagramAnalyticsPage = p(() => import('./pages/InstagramAnalyticsPage'))
const InstagramAutoPostPage = p(() => import('./pages/InstagramAutoPostPage'))
const InstagramBestTimePage = p(() => import('./pages/InstagramBestTimePage'))
const InstagramReelsPage = p(() => import('./pages/InstagramReelsPage'))
const InstagramDesktopPage = p(() => import('./pages/InstagramDesktopPage'))
const InstagramHashtagsPage = p(() => import('./pages/InstagramHashtagsPage'))
const TikTokSchedulerPage = p(() => import('./pages/TikTokSchedulerPage'))
const FacebookSchedulerPage = p(() => import('./pages/FacebookSchedulerPage'))
const PinterestSchedulerPage = p(() => import('./pages/PinterestSchedulerPage'))
const YouTubeSchedulerPage = p(() => import('./pages/YouTubeSchedulerPage'))
const SnapchatSchedulerPage = p(() => import('./pages/SnapchatSchedulerPage'))
const ThreadsSchedulerPage = p(() => import('./pages/ThreadsSchedulerPage'))
const SocialMediaAnalyticsPage = p(() => import('./pages/SocialMediaAnalyticsPage'))
const SocialMediaListeningPage = p(() => import('./pages/SocialMediaListeningPage'))
const SocialMediaPublishingPage = p(() => import('./pages/SocialMediaPublishingPage'))
const ContentCreationToolsPage = p(() => import('./pages/ContentCreationToolsPage'))
const CaptionWriterPage = p(() => import('./pages/CaptionWriterPage'))
const ContentCalendarPage = p(() => import('./pages/ContentCalendarPage'))
const SocialMediaMarketingToolsPage = p(() => import('./pages/SocialMediaMarketingToolsPage'))
const ReputationManagementPage = p(() => import('./pages/ReputationManagementPage'))
const CaseStudiesPage = p(() => import('./pages/CaseStudiesPage'))
const CaseStudyDetailPage = p(() => import('./pages/CaseStudyDetailPage'))
const ResourcesPage = p(() => import('./pages/ResourcesPage'))
const PartnersPage = p(() => import('./pages/PartnersPage'))
const AffiliateProgram = p(() => import('./pages/AffiliateProgramPage'))
const BlogPage = p(() => import('./pages/BlogPage'))
const SocialMediaManagersPage = p(() => import('./pages/SocialMediaManagersPage'))
const SmallBusinessPage = p(() => import('./pages/SmallBusinessPage'))
const AgenciesPage = p(() => import('./pages/AgenciesPage'))
const AgenciesFreelancersPage = p(() => import('./pages/AgenciesFreelancersPage'))
const RetailInfluencersPage = p(() => import('./pages/RetailInfluencersPage'))
const FoodBeveragePage = p(() => import('./pages/FoodBeveragePage'))
const FashionBeautyPage = p(() => import('./pages/FashionBeautyPage'))
const EcommercePage = p(() => import('./pages/EcommercePage'))
const CpgPage = p(() => import('./pages/CpgPage'))
const InfluencerToolsPage = p(() => import('./pages/InfluencerToolsPage'))
const FindInfluencersPage = p(() => import('./pages/FindInfluencersPage'))
const InfluencerOutreachPage = p(() => import('./pages/InfluencerOutreachPage'))
const InfluencerManagementPage = p(() => import('./pages/InfluencerManagementPage'))
const InfluencerPaymentsPage = p(() => import('./pages/InfluencerPaymentsPage'))
const ContentSyndicationPage = p(() => import('./pages/ContentSyndicationPage'))
const InfluencerAnalyticsPlatformPage = p(() => import('./pages/InfluencerAnalyticsPlatformPage'))
const MarketingRoiPage = p(() => import('./pages/MarketingRoiPage'))
const ShopifyIntegrationPage = p(() => import('./pages/ShopifyIntegrationPage'))
const CampaignPlatformPage = p(() => import('./pages/CampaignPlatformPage'))
const LinktreeAlternativePage = p(() => import('./pages/LinktreeAlternativePage'))
const BufferAlternativePage = p(() => import('./pages/BufferAlternativePage'))
const HootsuiteAlternativePage = p(() => import('./pages/HootsuiteAlternativePage'))
const SproutAlternativePage = p(() => import('./pages/SproutAlternativePage'))
const PlanolyAlternativePage = p(() => import('./pages/PlanolyAlternativePage'))
const NativePostingAlternativePage = p(() => import('./pages/NativePostingAlternativePage'))
const CanvaAlternativePage = p(() => import('./pages/CanvaAlternativePage'))
const MetaAlternativePage = p(() => import('./pages/MetaAlternativePage'))
const TaggerAlternativePage = p(() => import('./pages/TaggerAlternativePage'))
const GrinAlternativePage = p(() => import('./pages/GrinAlternativePage'))
const Captiv8AlternativePage = p(() => import('./pages/Captiv8AlternativePage'))
const CreatorIqAlternativePage = p(() => import('./pages/CreatorIqAlternativePage'))
const UgcCreatorsPage = p(() => import('./pages/UgcCreatorsPage'))
const MicroInfluencersPage = p(() => import('./pages/MicroInfluencersPage'))
const BrandAmbassadorsPage = p(() => import('./pages/BrandAmbassadorsPage'))
const YoutubersPage = p(() => import('./pages/YoutubersPage'))
const InfluencerNetworkPage = p(() => import('./pages/InfluencerNetworkPage'))
const SocialContentCreationPage = p(() => import('./pages/SocialContentCreationPage'))
const SocialMediaManagementServicesPage = p(() => import('./pages/SocialMediaManagementServicesPage'))
const InfluencerPricingPage = p(() => import('./pages/InfluencerPricingPage'))
const AgreementsPage = p(() => import('./pages/AgreementsPage'))

function Loader() {
  return <div className="min-h-screen" />
}

function S({ children }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<S><HomePage /></S>} />
        <Route path="pricing" element={<S><PricingPage /></S>} />
        <Route path="influencer-marketing-platform" element={<S><InfluencerMarketingPlatformPage /></S>} />
        <Route path="influencer-marketing-platform/pricing" element={<S><InfluencerPricingPage /></S>} />
        <Route path="influencer-marketing-services" element={<S><InfluencerMarketingServicesPage /></S>} />
        <Route path="influencer-marketing-services/social-media-content-creation" element={<S><SocialContentCreationPage /></S>} />
        <Route path="social-media-scheduler" element={<S><SocialMediaSchedulerPage /></S>} />
        <Route path="influencer-creator-program" element={<S><InfluencerCreatorProgramPage /></S>} />
        <Route path="link-in-bio" element={<S><LinkInBioPage /></S>} />
        <Route path="instagram-scheduler" element={<S><InstagramSchedulerPage /></S>} />
        <Route path="instagram-scheduler/visual-instagram-planner" element={<S><InstagramPlannerPage /></S>} />
        <Route path="instagram-scheduler/analytics" element={<S><InstagramAnalyticsPage /></S>} />
        <Route path="instagram-scheduler/auto-post" element={<S><InstagramAutoPostPage /></S>} />
        <Route path="instagram-scheduler/best-time-to-post" element={<S><InstagramBestTimePage /></S>} />
        <Route path="instagram-scheduler/schedule-instagram-reels" element={<S><InstagramReelsPage /></S>} />
        <Route path="instagram-scheduler/desktop-posting" element={<S><InstagramDesktopPage /></S>} />
        <Route path="instagram-scheduler/hashtag-suggestions" element={<S><InstagramHashtagsPage /></S>} />
        <Route path="tiktok-scheduler" element={<S><TikTokSchedulerPage /></S>} />
        <Route path="facebook-scheduler" element={<S><FacebookSchedulerPage /></S>} />
        <Route path="pinterest-scheduler" element={<S><PinterestSchedulerPage /></S>} />
        <Route path="youtube-scheduler" element={<S><YouTubeSchedulerPage /></S>} />
        <Route path="snapchat-scheduler" element={<S><SnapchatSchedulerPage /></S>} />
        <Route path="threads-scheduler" element={<S><ThreadsSchedulerPage /></S>} />
        <Route path="social-media-analytics" element={<S><SocialMediaAnalyticsPage /></S>} />
        <Route path="social-media-listening" element={<S><SocialMediaListeningPage /></S>} />
        <Route path="social-media-publishing" element={<S><SocialMediaPublishingPage /></S>} />
        <Route path="content-creation-tools" element={<S><ContentCreationToolsPage /></S>} />
        <Route path="caption-writer" element={<S><CaptionWriterPage /></S>} />
        <Route path="social-media-content-calendar" element={<S><ContentCalendarPage /></S>} />
        <Route path="social-media-marketing-tools" element={<S><SocialMediaMarketingToolsPage /></S>} />
        <Route path="reputation-management-software" element={<S><ReputationManagementPage /></S>} />
        <Route path="case-studies" element={<S><CaseStudiesPage /></S>} />
        <Route path="case-studies/:slug" element={<S><CaseStudyDetailPage /></S>} />
        <Route path="resources" element={<S><ResourcesPage /></S>} />
        <Route path="partners" element={<S><PartnersPage /></S>} />
        <Route path="affiliate-program" element={<S><AffiliateProgram /></S>} />
        <Route path="blog" element={<S><BlogPage /></S>} />
        <Route path="social-media-managers" element={<S><SocialMediaManagersPage /></S>} />
        <Route path="small-business-owners" element={<S><SmallBusinessPage /></S>} />
        <Route path="later-social-for-agencies" element={<S><AgenciesPage /></S>} />
        <Route path="agencies-freelancers" element={<S><AgenciesFreelancersPage /></S>} />
        <Route path="retail-influencers" element={<S><RetailInfluencersPage /></S>} />
        <Route path="food-beverage-influencers" element={<S><FoodBeveragePage /></S>} />
        <Route path="fashion-beauty-influencers" element={<S><FashionBeautyPage /></S>} />
        <Route path="ecommerce-influencers" element={<S><EcommercePage /></S>} />
        <Route path="cpg-influencers" element={<S><CpgPage /></S>} />
        <Route path="influencer-marketing-tools" element={<S><InfluencerToolsPage /></S>} />
        <Route path="influencer-marketing-tools/find-influencers" element={<S><FindInfluencersPage /></S>} />
        <Route path="influencer-marketing-tools/influencer-outreach" element={<S><InfluencerOutreachPage /></S>} />
        <Route path="influencer-marketing-tools/influencer-management-platform" element={<S><InfluencerManagementPage /></S>} />
        <Route path="influencer-marketing-tools/influencer-payments" element={<S><InfluencerPaymentsPage /></S>} />
        <Route path="influencer-marketing-tools/influencer-content-syndication-platform" element={<S><ContentSyndicationPage /></S>} />
        <Route path="influencer-marketing-tools/influencer-analytics-platform" element={<S><InfluencerAnalyticsPlatformPage /></S>} />
        <Route path="influencer-marketing-tools/calculate-marketing-roi-emv" element={<S><MarketingRoiPage /></S>} />
        <Route path="influencer-marketing-tools/shopify-integration" element={<S><ShopifyIntegrationPage /></S>} />
        <Route path="influencer-marketing-tools/influencer-campaign-platform" element={<S><CampaignPlatformPage /></S>} />
        <Route path="linktree-alternative" element={<S><LinktreeAlternativePage /></S>} />
        <Route path="buffer-alternative" element={<S><BufferAlternativePage /></S>} />
        <Route path="hootsuite-alternative" element={<S><HootsuiteAlternativePage /></S>} />
        <Route path="sprout-social-alternative" element={<S><SproutAlternativePage /></S>} />
        <Route path="planoly-alternative" element={<S><PlanolyAlternativePage /></S>} />
        <Route path="native-posting-alternative" element={<S><NativePostingAlternativePage /></S>} />
        <Route path="canva-alternative" element={<S><CanvaAlternativePage /></S>} />
        <Route path="meta-alternative" element={<S><MetaAlternativePage /></S>} />
        <Route path="tagger-alternative" element={<S><TaggerAlternativePage /></S>} />
        <Route path="grin-alternative" element={<S><GrinAlternativePage /></S>} />
        <Route path="captiv8-alternative" element={<S><Captiv8AlternativePage /></S>} />
        <Route path="creatoriq-alternative" element={<S><CreatorIqAlternativePage /></S>} />
        <Route path="ugc-creators" element={<S><UgcCreatorsPage /></S>} />
        <Route path="micro-influencers" element={<S><MicroInfluencersPage /></S>} />
        <Route path="brand-ambassadors" element={<S><BrandAmbassadorsPage /></S>} />
        <Route path="youtubers" element={<S><YoutubersPage /></S>} />
        <Route path="influencer-network" element={<S><InfluencerNetworkPage /></S>} />
        <Route path="social-media-management-services" element={<S><SocialMediaManagementServicesPage /></S>} />
        <Route path="agreements" element={<S><AgreementsPage /></S>} />
      </Route>
    </Routes>
  )
}
