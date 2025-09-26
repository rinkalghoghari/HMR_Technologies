import React from 'react'
import { Link } from 'react-router-dom'
import { LiaHandshakeSolid, LiaNetworkWiredSolid } from 'react-icons/lia'
import { MdGroups, MdOutlineCastForEducation } from 'react-icons/md'
import { RiHandHeartFill } from 'react-icons/ri'
import { CheckCircle } from 'lucide-react'

// components
import { usePageTitle } from '@/hooks/usePageTitle'
import TransparentCard from '@/components/common/TransparentCard'
import NumberCard from '@/components/common/NumberCard'
import DiagonalCard from '@/components/common/DiagonalCard'
import CenterImageCard from '@/components/common/CenterImageCard'
import Breadcrumb from '@/components/Breadcrumb'
import { Badge } from '@/components/ui/badge'
import BottomSolution from './common/BottomSolution'
import { Button } from '@/components/ui/button'

//images
import DigitalPlatformHeroVideo from "../../images/Solution/DigitalCommunityPlatform/digitalPlatformHeroVideo.gif"
import WhyChooseBgImage from "../../images/Solution/DigitalCommunityPlatform/whyChooseBgImage.png"
import DigitalPlatformBenefitsVector from "../../images/Solution/DigitalCommunityPlatform/digitalPlatformBenefitsVector.png"
import solutionVector from "../../images/Solution/DigitalCommunityPlatform/solutionVector.png"
import LaptopScreen1Png from "../../images/Solution/DigitalCommunityPlatform/laptopScreen1.png"
import LaptopScreen2Png from "../../images/Solution/DigitalCommunityPlatform/laptopScreen2.png"
import ScreenExPng from "../../images/Solution/DigitalCommunityPlatform/screenex.png"

const steps = [
  {
    number: "01",
    title: "Understanding Your Vision & Mission",
    description: "We begin by learning about your community’s goals, values, and target members."
  },
  {
    number: "02",
    title: "Strategy & Platform Proposal",
    description: [
      "Based on your needs, we propose the best path:",
      "Low-cost launch using platforms like Skool / Circle.",
      "Fully custom-built digital community aligned with your branding."
    ]
  },
  {
    number: "03",
    title: "Design & Development",
    description: "Fully custom-built digital community aligned with your branding. From UX design to backend development, we create a seamless experience for admins and members."
  },
  {
    number: "04",
    title: "Growth Enablement",
    description: "We integrate engagement features like gamification, forums, events, live sessions, and analytics to boost adoption."
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "After deployment, we provide continuous support and scaling options as your community grows."
  },
];

const benefits = [
  {
    id: 1,
    title: "Always Connected",
    description: "Keep your members engaged, anytime, anywhere."
  },
  {
    id: 2,
    title: "Centralized Hub",
    description: "One platform for events, discussions, learning, and growth."
  },
  {
    id: 3,
    title: "Faster Growth",
    description: "Use proven tools to grow members organically."
  },
  {
    id: 4,
    title: "Customizable",
    description: "From ready-made platforms like Skool, MightyNetworks, Circle to fully custom-built solutions."
  },
  {
    id: 5,
    title: "Scalable",
    description: "Start small, scale globally."
  },
];

const solutions = [
  {
    title: "NGOs & Non-Profits",
    icon: <RiHandHeartFill className="text-3xl inline-block mr-2" />,
    description: "Expand reach and build transparency.",
    withBorder: false,
    color: "hover:text-[#2F8CFF]",
  },
  {
    title: "Educational & Alumni Networks",
    icon: <MdOutlineCastForEducation className="text-3xl inline-block mr-2" />,
    description: "Create engaging learning and collaboration spaces.",
    withBorder: false,
    color: "hover:text-[#2F8CFF]",
  },
  {
    title: "Professional Associations",
    icon: <LiaHandshakeSolid className="text-3xl inline-block mr-2" />,
    description: "Centralize knowledge, events, and member interaction.",
    withBorder: false,
    color: "hover:text-[#2F8CFF]",
  },
  {
    title: "Hobby & Interest Groups",
    icon: <MdGroups className="text-3xl inline-block mr-2" />,
    description: "Grow niche communities and foster connections.",
    withBorder: false,
    color: "hover:text-[#2F8CFF]",
  },
  {
    title: "Corporate Teams & Internal Networks",
    icon: <LiaNetworkWiredSolid className="text-3xl inline-block mr-2" />,
    description: "Improve communication, collaboration, and culture.",
    withBorder: false,
    color: "hover:text-[#2F8CFF]",
  }
];

const whyChoose = [
  {
    number: "1",
    title: "AI-Powered Development",
    description: "Build 10x faster using the right AI and low-code tools.",
  },
  {
    number: "2",
    title: "Flexibility",
    description: "From ready-made platforms to custom solutions, we adapt to your budget and vision.",
  },
  {
    number: "3",
    title: "Proven Experience",
    description: "Successfully developed platforms for education, local networks, and NGOs.",
  },
  {
    number: "4",
    title: "Scalability & Security",
    description: "Future-ready solutions with strong backend, cloud integration, and user safety in mind.",
  },
  {
    number: "5",
    title: "Human-Centric Design",
    description: "Focused on user engagement and growth.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Digital Community Platforms" },
];

const DigitalCommunityPlatform = () => {
     usePageTitle(
            "Digital Community Platform",
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
                    items={breadcrumbItems} />
                </div>
                <Badge className="mb-4 bg-blue-100 bg-gradient-to-r from-[#0075FF] to-[#004699] bg-clip-text text-transparent border-blue-200">
                  Connect Sphere
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Empower Your Community with a <span className="bg-gradient-to-r from-[#0075FF] to-[#004699] bg-clip-text text-transparent">
                    Digital-First Platform
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  From NGOs to professional networks, we help you build thriving digital communities that connect, engage, and grow.
                </p>
              </div>
              <div className="flex flex-wrap sm:gap-4 gap-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#0075FF] to-[#004699] hover:from-[#006de9] hover:to-[#013d86] transition-all duration-500 ease-in-out"
                >
                  <Link to="/contact">Start Building Your Community</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Case Studies</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="size-4 md:size-5 text-emerald-500" />
                  <span className="text-gray-600">Build Engaging Communities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="size-4 md:size-5 text-emerald-500" />
                  <span className="text-gray-600">Drive Member Retention</span>
                </div>
              </div>
            </div>
            <img
              src={DigitalPlatformHeroVideo}
              alt="Digital Platform"
              className="rounded-3xl h-full xl:h-[479px] mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className='max-w-6xl mx-auto'>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0F7CFF] to-[#094A99] bg-clip-text text-transparent mb-4 text-center">
            Who is this solution is for</h2>
          <p className='text-base sm:text-lg lg:text-xl text-gray-500 mt-4 max-w-2xl mx-auto text-center mb-8'>
            There are over 10 million+ active communities worldwide ranging from social groups to professional associations. Every strong movement today needs a digital presence.</p>
          <CenterImageCard cardData={solutions} centerImage={solutionVector} />
        </div>
      </section>

      {/* screen section */}
      <section className="g:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 md:overflow-x-hidden bg-gray-50">
        <div className="flex justify-center gap-0">
          <img src={LaptopScreen1Png} alt="LaptopScreen1Png" className='h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] animate-float' />
          <img src={ScreenExPng} alt="ScreenExPng" className='h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px]' />
          <img src={LaptopScreen2Png} alt="LaptopScreen2Png" className='h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] animate-float' />
        </div>
      </section>

      {/* Benefits */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className='max-w-7xl mx-auto'>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-[#0F7CFF] to-[#094A99] bg-clip-text">
              Benefits of a Digital Community Platform </h2>
          </div>
          <DiagonalCard cardData={benefits} vectorImg={DigitalPlatformBenefitsVector} />
        </div>
      </section>

      {/* Development process */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className='max-w-7xl mx-auto'>
          <div className="flex items-center justify-center px-6 py-12">
            <div className="max-w-4xl w-full text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0F7CFF] to-[#094A99] bg-clip-text text-transparent mb-12">
                Development Process for Digital Community Platform
              </h2>
              <NumberCard cardData={steps} primaryColor="#0273FA" secondaryColor="#0273FA" isArrow={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center" style={{ backgroundImage: `url(${WhyChooseBgImage})` }}>
        <div className='max-w-7xl mx-auto'>
          <div className="text-center mb-12">
            <h2 className="max-w-3xl mx-auto text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Why Choose HMR for Your Community Platform </h2>
          </div>
          <TransparentCard cardData={whyChoose} stepColor={["#0F7CFF", "#094A99"]} borderColor='transparent' hoverBgColor='#DBECFF' hoverTextColor="#0F7CFF" titleColor="#DBECFF" descColor="#DBECFF80" inOrder={true} />
        </div>
      </section>

      <BottomSolution />

    </div>

  )
}

export default DigitalCommunityPlatform