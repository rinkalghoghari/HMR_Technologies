import React from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaRocket } from "react-icons/fa";
import { BsCalendarHeart } from "react-icons/bs";
import { TbDeviceMobileHeart, TbVectorTriangle } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { IoDiamondSharp, IoFlower } from 'react-icons/io5';
import { RiLock2Fill } from 'react-icons/ri';
import { GiArrowScope } from 'react-icons/gi';
import { CheckCircle } from 'lucide-react';

import { usePageTitle } from '@/hooks/usePageTitle';
import TransparentCard from '@/components/common/TransparentCard';
import NumberCard from '@/components/common/NumberCard';
import SolutionCard from "@/components/common/SolutionCard";
import CenterImageCard from '@/components/common/CenterImageCard';
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from '@/components/ui/badge';
import BottomSolution from './common/BottomSolution';
import { Button } from '@/components/ui/button';

//images
import DatingAppHero from "../../images/Solution/DatingApp/datingAppHero.png"
import FeaturesDatingApp from "../../images/Solution/DatingApp/featuresDatingApp.png"
import WhyChooseBgImage from "../../images/Solution/DatingApp/whyChooseBgImage.png"
import WhyChooseBgImage_2 from "../../images/Solution/DatingApp/whyChooseBgImage_2.png"
import BlueWavePng from "../../images/Solution/DatingApp/blueWavePng.png"
import DatingAppVectorPng from "../../images/Solution/DatingApp/datingAppVector.png"
import ScreenTwinPng from "../../images/Solution/DatingApp/screenTwinPng.png"
import ScreenLookPng from "../../images/Solution/DatingApp/screenLookPng.png"
import ScreenProfilePng from "../../images/Solution/DatingApp/screenProfilePng.png"
import BenefitsPng from "../../images/Solution/DatingApp/benefits.png"
import DatingScreenPng from "../../images/Solution/DatingApp/datingScreen.png"
import LocationScreenPng from "../../images/Solution/DatingApp/locationScreen.png"
import MatchScreenPng from "../../images/Solution/DatingApp/matchScreen.png"
import FindPartnerScreenPng from "../../images/Solution/DatingApp/findPartner.png"

  const solutions = [
    {
      id: 1,
      icon: <TbDeviceMobileHeart className="text-white text-lg sm:text-2xl" />,
      title: "Entrepreneurs & Startups",
      description: "Launch your unique dating app idea and capture market share.",
      stepBgColor: "bg-gradient-to-r from-[#FF2BB8] to-[#991A6F]",
      primaryColor: "#C410FB",
      secondaryColor: "#a009d1",
      bgColor: "#FBEEFF"

    },
    {
      id: 2,
      icon: <FaLightbulb className="text-white text-lg sm:text-2xl" />,
      title: "Existing Dating Platforms",
      description: "Upgrade with modern features to stay ahead of trends.",
      stepBgColor: "bg-gradient-to-r from-[#2F8CFF] to-[#1C5499]",
      primaryColor: "#0D82FF",
      secondaryColor: "#0861c2",
      bgColor: "#E4F1FF"
    },
    {
      id: 3,
      icon: <TbVectorTriangle className="text-white text-lg sm:text-2xl" />,
      title: "Niche Communities",
      description: "Build dating apps for specific cultures, interests, or professions.",
      stepBgColor: "bg-gradient-to-r from-[#2F8CFF] to-[#1C5499]",
      primaryColor: "#0D82FF",
      secondaryColor: "#0861c2",
      bgColor: "#E4F1FF"

    },
    {
      id: 4,
      icon: <BsCalendarHeart className="text-white text-lg sm:text-2xl" />,
      title: "Event & Matchmaking Companies",
      description: "Expand into digital matchmaking solutions.",
      stepBgColor: "bg-gradient-to-r from-[#FF2BB8] to-[#991A6F]",
      primaryColor: "#C410FB",
      secondaryColor: "#a009d1",
      bgColor: "#FBEEFF"
    }
  ];

  const leftFeatures = [
    { icon: <GoDotFill />, text: "Smart Matching Algorithms (AI/ML based on preferences & behavior)" },
    { icon: <GoDotFill />, text: "Swipe & Like/Dislike Interaction" },
    { icon: <GoDotFill />, text: "Real-Time Chat & Video Calls" },
    { icon: <GoDotFill />, text: "User Profiles with Verification" },
    { icon: <GoDotFill />, text: "Location-Based Discovery" },
  ];

  const rightFeatures = [
    { icon: <GoDotFill />, text: "AI Safety Features (content moderation, scam detection, block/report)" },
    { icon: <GoDotFill />, text: "Gamification (streaks, boosts, super likes, badges)" },
    { icon: <GoDotFill />, text: "Event & Group Matching (meet at events, group interactions)" },
    { icon: <GoDotFill />, text: "Subscription & Monetization Options (premium plans, boosts, ads)" },
  ];

  const steps = [
    {
      number: "01",
      title: "Discovery & Market Research",
      description:
        "Understand your niche, audience, and positioning in the crowded dating space.",
    },
    {
      number: "02",
      title: "Feature Planning & Prototyping",
      description:
        "Create user flows, wireframes, and finalize the features that set your app apart.",
    },
    {
      number: "03",
      title: "Development & Integration",
      description:
        "Build the app with robust backend, secure databases, and smooth frontend interactions.",
    },
    {
      number: "04",
      title: "QA & Security Testing",
      description:
        "Dating apps require extra care for data security, privacy, and smooth performance.",
    },
    {
      number: "05",
      title: "Launch & Scale",
      description:
        "Go live on iOS & Android, then scale with growth strategies and continuous feature updates.",
    },
  ];

  const benefits = [
    {
      title: "User-Centric",
      description: "Designed for smooth onboarding, matching, and chatting.",
      icon: <GiArrowScope className="text-xl inline-block mr-2" />,
      color: "bg-blue-50 border-blue-200 hover:border-blue-500 hover:text-[#2F8CFF]",
      withBorder: true
    },
    {
      title: "Feature-Rich",
      description: "Integrate features your users expect plus trending elements.",
      icon: <IoDiamondSharp className=" text-xl inline-block mr-2" />,
      color: "bg-blue-50 border-blue-200 hover:border-blue-500 hover:text-[#2F8CFF]",
      withBorder: true

    },
    {
      title: "Scalable & Secure",
      description: "Built for long-term growth and user trust.",
      icon: <RiLock2Fill className=" text-xl inline-block mr-2" />,
      color: "bg-pink-50 border-pink-200 hover:border-pink-500 hover:text-[#FF2BB8]",
      withBorder: true

    },
    {
      title: "Faster Time-to-Market",
      description: "With AI-powered tools, we deliver 10x faster.",
      icon: <IoFlower className=" text-xl inline-block mr-2" />,
      color: "bg-pink-50 border-pink-200 hover:border-pink-500 hover:text-[#FF2BB8]",
      withBorder: true

    },
    {
      title: "Custom-Built or Ready-to-Launch",
      description: "Choose from scratch development or rapid MVP builds.",
      icon: <FaRocket className=" text-xl inline-block mr-2" />,
      color: "bg-blue-50 border-blue-200 hover:border-blue-500 hover:text-[#2F8CFF]",
      withBorder: true

    }]

  const features = [
    {
      number: "1",
      description: "Faster MVP Delivery with AI-powered development.",
    },
    {
      number: "2",
      description: "Proven Expertise in mobile app development across industries.",
    },
    {
      number: "3",
      description: "Flexible Models – from prototype to enterprise-grade platform.",
    },
    {
      number: "4",
      description: "Security-First Approach – user safety and data protection at the core.",
    },
    {
      number: "5",
      description: "Future-Ready Features – AR/VR dating, AI-driven matches, social integrations.",
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Dating Apps" },
  ];


const DatingApps = () => {
    usePageTitle(
      "Dating App",
      "Get in touch with HMR Technologies for your next AI-powered development project. Let's discuss how we can accelerate your goals.",
    );
  return (
    <div>
      {/* Hero section */}
  <section className="sm:py-20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 sm:gap-12 gap-6 items-center">
            <div className="sm:space-y-8 space-y-4">
              <div>
                {/* Breadcrumb */}
                <div className="mb-4">
                  <Breadcrumb
                    items={breadcrumbItems}
                    className="text-pink-700" />
                </div>
                <Badge className="mb-4 bg-blue-100 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent border-pink-200">
                  Heart Link
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Build the Next <span className="bg-[linear-gradient(7deg,#4861FF_0.6%,#FA53E4_100%)] bg-clip-text text-transparent">
                    Big Dating App That Users Love
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  From idea to launch, we design and develop custom dating apps with trending features and smooth user experiences that keep people engaged.
                </p>
              </div>
              <div className="flex flex-wrap sm:gap-4 gap-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 transition-all duration-500 ease-in-out"
                >
                  <Link to="/contact">Start Your Dating App Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Case Studies</Link>
                </Button>
              </div>

 <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="size-4 md:size-5 text-emerald-500" />
                  <span className="text-gray-600">Smart Matchmaking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="size-4 md:size-5 text-emerald-500" />
                  <span className="text-gray-600">Secure & Private</span>
                </div>
              </div>
            </div>

            <img
              src={DatingAppHero}
              alt="Dating app interface"
              className="rounded-3xl h-full xl:h-[479px] mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="bg-[linear-gradient(90deg,#4861FF_40%,#FA53E4_70%)] bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Who is this solution is for
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-500 md:max-w-2xl mx-auto text-center">The online dating industry is projected to cross $10 billion globally by 2030, with millions of users looking for better, safer, and smarter ways to connect.</p>
          </div>
          <SolutionCard cardData={solutions} className="h-full" />
        </div>
      </section>

      {/* mobile screen section */}
      <section className="relative pt-32 sm:pt-48 md:pt-60 lg:pt-72 md:overflow-x-hidden">
        <img
          src={BlueWavePng}
          alt="BlueWavePng"
          className="relative z-20 w-full"
        />
        <img
          src={DatingAppVectorPng}
          alt="RightVectorPng"
          className="hidden lg:flex absolute z-10 h-40 sm:h-60 md:h-72 lg:h-[400px] xl:h-[500px] 2xl:h-[560px] top-0 md:top-20 xl:-top-1 right-0 xl:right-28"
        />
        <img
          src={DatingAppVectorPng}
          alt="LeftVectorPng"
          className="hidden lg:flex absolute z-10 h-40 sm:h-60 md:h-72 lg:h-[400px] xl:h-[500px] 2xl:h-[560px] top-0 md:top-10 xl:-top-4 left-0 xl:left-14"
        />
        <div
          className="absolute z-30 bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 sm:gap-6 px-4 md:px-0">
          <img
            src={ScreenTwinPng}
            alt="ScreenTwinPng"
            className="h-40 sm:h-60 md:h-80 lg:h-[500px] 2xl:h-[650px] animate-[floatDown_4s_ease-in-out_infinite]"
          />
          <img
            src={ScreenLookPng}
            alt="ScreenLookPng"
            className="h-40 sm:h-60 md:h-80 lg:h-[500px] 2xl:h-[650px] animate-[floatUp_4s_ease-in-out_infinite]"
          />
          <img
            src={ScreenProfilePng}
            alt="ScreenProfilePng"
            className="h-40 sm:h-60 md:h-80 lg:h-[500px] 2xl:h-[650px] animate-[floatDown_4s_ease-in-out_infinite]"
          />
        </div>
      </section>

      {/* Benefits Dating app */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className='max-w-6xl mx-auto'>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-12 text-center">
            Benefits of Launching a Dating App with HMR
          </h2>
          <CenterImageCard cardData={benefits} centerImage={BenefitsPng} />
        </div>
      </section>

      {/* Features */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className='max-w-7xl mx-auto'>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-[linear-gradient(100deg,#4861FF_0.6%,#FA53E4_100%)] bg-clip-text text-transparent">
              Features Users Love in Dating Apps
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              “Your app can be as unique as your vision — from swipe-based dating to AI-curated matchmaking.”
            </p>
            <p className="text-base sm:text-lg md:text-xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text mt-3 text-transparent ">
              We can integrate unlimited features, but here are top must-have & trending one
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="space-y-6">
              {leftFeatures.map((item, idx) => (
                <div key={idx} className="flex items-center md:justify-end gap-2">
                  <span className="text-pink-500 md:hidden">{item.icon}</span>
                  <p className="text-gray-700 md:text-right md:text-sm lg:text-base xl:text-lg hover:text-pink-500 transition-all duration-200">{item.text}</p>
                  <span className="text-pink-500 hidden md:flex">{item.icon}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center relative">
              <div>
                <img
                  src={FeaturesDatingApp}
                  alt="App Mockup"
                  className="rounded-2xl size-60 md:size-auto"
                />
              </div>
              <div className="absolute -z-10 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-50 top-10"></div>
            </div>
            <div className="space-y-6">
              {rightFeatures.map((item, idx) => (
                <div key={idx} className="flex items-center justify-start gap-2">
                  <span className="text-pink-500">{item.icon}</span>
                  <p className="text-gray-700 text-left md:text-sm lg:text-base xl:text-lg hover:text-pink-500 transition-all duration-200">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* mobile screen section 2 */}
      <section className="relative pt-20 bg-[url(../../images/Solution/DatingApp/datingWavebg.png)] bg-no-repeat bg-contain bg-bottom">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center pb-10 sm:pb-20 md:pb-40">
          <div className="flex justify-center items-end gap-6 lg:gap-x-24">

            <div className='flex gap-3 items-end'>
              <div className="animate-float max-[393px]:w-11 max-[482px]:w-16 w-20 sm:w-28 md:w-32 lg:w-40 xl:w-52 overflow-hidden">
                <img src={FindPartnerScreenPng} alt="App 1" className="w-full h-auto" />
              </div>
              <div className="animate-tilt max-[393px]:w-16 max-[482px]:w-24 w-32 sm:w-44 md:w-48 lg:w-60 xl:w-80 overflow-hidden">
                <img src={LocationScreenPng} alt="App 2" className="w-full h-auto" />
              </div>
            </div>

            <div className='flex items-end'>
              <div className="animate-float-scale max-[393px]:w-11 max-[482px]:w-16 w-20 sm:w-32 md:w-36 lg:w-48 xl:w-60 overflow-hidden">
                <img src={DatingScreenPng} alt="App 4" className="w-full h-auto" />
              </div>
              <div className="animate-float max-[393px]:w-16 max-[482px]:w-28 w-32 sm:w-52 md:w-50 lg:w-72 xl:w-[340px] overflow-hidden">
                <img src={MatchScreenPng} alt="App 3" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development process */}
      <section className="bg-muted/30 lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className='max-w-7xl mx-auto'>
          <div className="flex items-center justify-center px-6 py-12">
            <div className="max-w-4xl w-full text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-12">
                Development Process for Dating Apps
              </h2>
              <NumberCard cardData={steps} primaryColor='#1353ef' secondaryColor='#b928ef' isArrow={true} ordered={false}/>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section
        className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${WhyChooseBgImage_2}), url(${WhyChooseBgImage})`,
          backgroundSize: "contain",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <div className='max-w-7xl mx-auto'>
          <div className="absolute inset-0 bg-white/60 -z-10"></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-12">
            Why Choose HMR for Your Dating App
          </h2>
          <TransparentCard cardData={features} stepColor={["#F920C7", "#A41582"]} borderColor="pink" hoverBgColor="#FFF6F9" hoverTextColor="#FF2BB8" descColor="#00000099" inOrder={false} />
        </div>
      </section>

      {/* CTA Section */}
      <BottomSolution />
    </div>
  );
};

export default DatingApps;