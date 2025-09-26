import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { usePageLoader, useInitialLoader } from "@/hooks/usePageLoader";
import { usePerformance } from "@/hooks/usePerformance";

// Lazy load heavy components
const Navigation = lazy(() => import("@/components/Navigation"));
const Footer = lazy(() => import("@/components/Footer"));
const GoToTop = lazy(() => import("@/components/GoToTop"));
const LoadingBar = lazy(() => import("@/components/LoadingBar"));
const InitialLoader = lazy(() => import("@/components/InitialLoader"));
// Lazy load all components
const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const About = lazy(() => import("@/pages/About"));
const Careers = lazy(() => import("@/pages/Careers"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogDetail = lazy(() => import("@/pages/BlogDetail"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Contact = lazy(() => import("@/pages/Contact"));
const Calendar = lazy(() => import("./pages/Calendar"));
const Solutions = lazy(() => import("@/pages/Solutions"));
const CaseStudies = lazy(() => import("@/pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("@/pages/CaseStudyDetail"));
const UseCases = lazy(() => import("@/pages/UseCases"));
const SuccessStories = lazy(() => import("@/pages/SuccessStories"));
const ECommerceStory = lazy(() => import("@/pages/success-stories/ECommerce"));
const FoodDeliveryStory = lazy(() => import("@/pages/success-stories/FoodDelivery"));
const OnDemandStory = lazy(() => import("@/pages/success-stories/OnDemand"));
const DatingStory = lazy(() => import("@/pages/success-stories/Dating"));
const TaxiBookingStory = lazy(() => import("@/pages/success-stories/TaxiBooking"));
const CmsLogin = lazy(() => import("@/pages/CmsLogin"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const ServicePreview = lazy(() => import("@/pages/ServicePreview"));
const NotFound = lazy(() => import("@/pages/not-found"));
import CriticalCSS from './components/CriticalCSS';

//Success-stories Pages
const Miuu = lazy(() => import("./pages/success-stories/Miuu"));
const Roadstr = lazy(() => import("./pages/success-stories/Roadstr"));
const SpainHeritageNetwork = lazy(() => import("./pages/success-stories/SpainHeritageNetwork"));
const AerlCloud = lazy(() => import("./pages/success-stories/AerlCloud"));
const CoachVantage = lazy(() => import("./pages/success-stories/CoachVantage"));
const MyDoorWallet = lazy(() => import("./pages/success-stories/MyDoorWallet"));
const MyQuantax = lazy(() => import("./pages/success-stories/MyQuantax"));
const Designed = lazy(() => import("./pages/success-stories/Designed"));
const TradLife = lazy(() => import("./pages/success-stories/TradLife"));
const Worktok = lazy(() => import("./pages/success-stories/Worktok"));

// Service Pages - Lazy loaded
const UIUXDesign = lazy(() => import("@/pages/services/UIUXDesign"));
const CustomSoftware = lazy(() => import("@/pages/services/CustomSoftware"));
const WebDevelopment = lazy(() => import("@/pages/services/WebDevelopment"));
const MobileApp = lazy(() => import("@/pages/services/MobileApp"));
const QATesting = lazy(() => import("@/pages/services/QATesting"));
const TalentSolutions = lazy(() => import("@/pages/services/TalentSolutions"));

// Other components - Lazy loaded
const SplashCursor = lazy(() => import("./components/animations/SplashCursor/SplashCursor"));
const HomeSkeleton = lazy(() => import("./components/HomeSkeleton"));

// Use Case Pages - Lazy loaded
const EnterPriseSolution = lazy(() => import('./pages/usecase/EnterPriseSolution'));
const EcommercePlateform = lazy(() => import('./pages/usecase/EcommercePlateform'));
const HealthCareSystem = lazy(() => import('./pages/usecase/HealthCareSystem'));
const EducationTechnology = lazy(() => import('./pages/usecase/EducationTechnology'));

// Solution Pages - Lazy loaded
const DigitalCommunityPlatform = lazy(() => import('./pages/solution/DigitalCommunityPlatform'));
const DatingApps = lazy(() => import('./pages/solution/DatingApps'));
const EcommerceMarketplaces = lazy(() => import('./pages/solution/EcommerceMarketplaces'));
const TravelHospitality = lazy(() => import('./pages/solution/TravelHospitality'));
const BookingPlatforms = lazy(() => import('./pages/solution/BookingPlatforms'));
const SaasPlatforms = lazy(() => import('./pages/solution/SaasPlatforms'));
const MarketplacePlatforms = lazy(() => import('./pages/solution/MarketplacePlatforms'));
const AiPoweredDevlopement = lazy(() => import('./pages/solution/AiPoweredDevlopement'));
const EnterpriseSecurity = lazy(() => import('./pages/solution/EnterpriseSecurity'));
const TeamCollaboration = lazy(() => import('./pages/solution/TeamCollaboration'));
const AnalyticsInsight = lazy(() => import('./pages/solution/AnalyticsInsight'));
const GlobalInfrastructure = lazy(() => import('./pages/solution/GlobalInfrastructure'));
const RapidDeployment = lazy(() => import('./pages/solution/RapidDeployment'));

// Layout or Routes - Lazy loaded
const ProtectedRoute = lazy(() => import('./layout/protectedRoutes'));

function AppRouter() {
  const { isLoading } = usePageLoader();
  const { isInitialLoading, completeInitialLoad } = useInitialLoader();

  if (isInitialLoading) {
    return <InitialLoader onComplete={completeInitialLoad} />;
  }

  // Minimal fallback that doesn't compete with your custom loader
  const MinimalFallback = ({ isHomePage }: { isHomePage?: boolean }) => {
    if (isHomePage) {
      return <HomeSkeleton />;
    }
    return <div className="h-4"></div>;
  };

  return (
    <Routes>
      {/* Auth Routes - No navigation/footer */}
      <Route path="/login" element={<Suspense fallback={<MinimalFallback />}><CmsLogin /></Suspense>} />
      <Route path="/cms/login" element={<Suspense fallback={<MinimalFallback />}><CmsLogin /></Suspense>} />


      <Route path="/dashboard" element={<ProtectedRoute redirectTo="/login"><Suspense fallback={<MinimalFallback />}><Dashboard /></Suspense></ProtectedRoute>} />
      <Route path="/cms/dashboard" element={<ProtectedRoute redirectTo='/login'><Suspense fallback={<MinimalFallback />}><Dashboard /></Suspense></ProtectedRoute>} />
      <Route path="/crm" element={<ProtectedRoute redirectTo="/login"><Suspense fallback={<MinimalFallback />}><Dashboard /></Suspense></ProtectedRoute>} />


      {/* Dashboard Routes - No navigation/footer */}
      {/* <Route path="/dashboard" element={<Suspense fallback={<MinimalFallback />}><Dashboard /></Suspense>} />
      <Route path="/cms/dashboard" element={<Suspense fallback={<MinimalFallback />}><Dashboard /></Suspense>} />
      <Route path="/crm" element={<Suspense fallback={<MinimalFallback />}><Dashboard /></Suspense>} /> */}

      {/* Main Website Routes - With navigation/footer */}
      <Route
        path="/"
        element={
          <div key="home" className="min-h-screen flex flex-col">
            <Suspense fallback={<div className="h-16 bg-white"></div>}>
              <LoadingBar isLoading={isLoading} />
              <Navigation />
            </Suspense>
            <main className="flex-1 pt-20">
              <Suspense fallback={<MinimalFallback isHomePage={true} />}>
                <Home />
              </Suspense>
            </main>
            <Suspense fallback={<div className="h-32 bg-gray-50"></div>}>
              <Footer />
            </Suspense>
          </div>
        }
      />
      <Route
        path="/services"
        element={
          <div key="services" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <Suspense fallback={<MinimalFallback />}>
                <Services />
              </Suspense>
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/service-preview"
        element={
          <div key="service-preview" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <ServicePreview />
            </main>
            <Footer />
          </div>
        }
      />

      {/* Service Pages */}
      <Route
        path="/services/ui-ux-design"
        element={
          <div key="ui-ux-design" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <UIUXDesign />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/services/custom-software"
        element={
          <div key="custom-software" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <CustomSoftware />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/services/web-development"
        element={
          <div key="web-development" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <WebDevelopment />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/services/mobile-app"
        element={
          <div key="mobile-app" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <MobileApp />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/services/qa-testing"
        element={
          <div key="qa-testing" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <QATesting />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/services/talent-solutions"
        element={
          <div key="talent-solutions" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <TalentSolutions />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/about"
        element={
          <div key="about" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <About />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/careers"
        element={
          <div key="careers" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <Careers />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/blog"
        element={
          <div key="blog" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <Blog />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/blog/:slug"
        element={
          <div key="blog-detail" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1">
              <BlogDetail />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/faq"
        element={
          <div key="faq" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <FAQ />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/contact"
        element={
          <div key="contact" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <Contact />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/calendar"
        element={
          <div key="calendar" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <Calendar />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/case-studies"
        element={
          <div key="case-studies" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <CaseStudies />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/case-studies/:id"
        element={
          <div key="case-study-detail" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <CaseStudyDetail />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/solutions"
        element={
          <div key="solutions" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <Solutions />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/solutions/digital-community"
        element={
          <div key="digital-community-solutions" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <DigitalCommunityPlatform />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/solutions/dating-apps"
        element={
          <div key="dating-apps-solutions" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <DatingApps />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/solutions/ecommerce-marketplaces"
        element={
          <div key="ecommerce-marketplaces-solutions" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <EcommerceMarketplaces />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/solutions/travel-hospitality"
        element={
          <div key="travel-hospitality-solutions" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <TravelHospitality />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/solutions/booking-platforms"
        element={
          <div key="booking-platforms-solutions" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <BookingPlatforms />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/solutions/saas-platforms"
        element={
          <div key="saas-platforms-solutions" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <SaasPlatforms />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/solutions/marketplace-platforms"
        element={
          <div key="marketplace-platforms-solutions" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <MarketplacePlatforms />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/solutions/ai-powered-devlopement"
        element={
          <div key="ai-powered-devlopement-solutions" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <AiPoweredDevlopement />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/solutions/enterprise-security"
        element={
          <div key="enterprise-security-solutions" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <EnterpriseSecurity />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/solutions/team-collaboration"
        element={
          <div key="team-collaboration-solutions" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <TeamCollaboration />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/solutions/analytics-insights"
        element={
          <div key="analytics-insights-solutions" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <AnalyticsInsight />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/solutions/global-infrastructure"
        element={
          <div key="global-infrastructure-solutions" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <GlobalInfrastructure />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/solutions/rapid-devlopement"
        element={
          <div key="rapid-devlopement-solutions" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <RapidDeployment />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/use-cases"
        element={
          <div key="use-cases" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <UseCases />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/use-cases/enterprise-solution"
        element={
          <div key="enterprise-solution-usecases" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <EnterPriseSolution />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/use-cases/ecommerce-platforms"
        element={
          <div key="ecommerce-platforms-usecases" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <EcommercePlateform />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/use-cases/healthcare-system"
        element={
          <div key="healthcare-system-usecases" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <HealthCareSystem />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/use-cases/education-technology"
        element={
          <div key="education-technology-usecases" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <EducationTechnology />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/success-stories"
        element={
          <div key="success-stories" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <SuccessStories />
            </main>
            <Footer />
          </div>
        }
      />
           <Route
        path="/success-stories/miuu"
        element={
          <div key="miuu-story" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <Miuu />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/success-stories/roadstr"
        element={
          <div key="roadstr-story" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <Roadstr />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/success-stories/spain-heritage-network"
        element={
          <div key="spain-heritage-network-story" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <SpainHeritageNetwork />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/success-stories/aerlcloud"
        element={
          <div key="aerlcloud-story" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <AerlCloud />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/success-stories/coachvantage"
        element={
          <div key="coachvantage-story" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <CoachVantage />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/success-stories/mydoor-wallet"
        element={
          <div key="mydoor-wallet-story" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <MyDoorWallet />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/success-stories/myquantex"
        element={
          <div key="myquantex-story" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <MyQuantax />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/success-stories/designed"
        element={
          <div key="designed-story" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <Designed />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/success-stories/tradlife"
        element={
          <div key="tradlife-story" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <TradLife />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/success-stories/worktok"
        element={
          <div key="worktok-story" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <Worktok />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/success-stories/e-commerce"
        element={
          <div key="e-commerce-story" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <ECommerceStory />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/success-stories/food-delivery"
        element={
          <div key="food-delivery-story" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <FoodDeliveryStory />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/success-stories/on-demand"
        element={
          <div key="on-demand-story" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <OnDemandStory />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/success-stories/dating"
        element={
          <div key="dating-story" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <DatingStory />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/success-stories/taxi-booking"
        element={
          <div key="taxi-booking-story" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <TaxiBookingStory />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="*"
        element={
          <div key="not-found" className="min-h-screen flex flex-col">
            <LoadingBar isLoading={isLoading} />
            <Navigation />
            <main className="flex-1 pt-20">
              <NotFound />
            </main>
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

function App() {
  usePerformance();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <CriticalCSS />
        <AppRouter />
        <Suspense fallback={<div style={{ height: '40px' }}></div>}>
          <GoToTop />
        </Suspense>
        {/* <SplashCursor /> */}
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;