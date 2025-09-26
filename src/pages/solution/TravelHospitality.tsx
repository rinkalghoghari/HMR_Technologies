import React from 'react'
import { Link } from 'react-router-dom';
import { TbWorld } from 'react-icons/tb';
import { FaChalkboardUser } from "react-icons/fa6";
import { RiRobot2Fill } from 'react-icons/ri';
import { CheckCircle, LucideCircleFadingPlus } from 'lucide-react';
import { MdCurrencyExchange } from 'react-icons/md';
import { TiArrowRepeat } from "react-icons/ti";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaHospital } from 'react-icons/fa';
import { PiHospitalFill, PiShootingStarFill } from "react-icons/pi";
import { BsFillAirplaneFill } from 'react-icons/bs';
import { GrMapLocation } from "react-icons/gr";
import { Slide } from 'react-awesome-reveal';

import { usePageTitle } from '@/hooks/usePageTitle';
import BottomSolution from './common/BottomSolution'
import SolutionCard from '@/components/common/SolutionCard'
import TransparentCard from '@/components/common/TransparentCard';
import SlidingStroke from '@/components/common/SlidingStroke';
import StickyCard from '@/components/common/StickyCard';
import StepCard from '@/components/common/StepCard';
import { Badge } from '@/components/ui/badge';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';

// imgs
import DevProcessBgImage from "../../images/Solution/Travel-hospitality/devProcessBgImage.png"
import TravelPng from "../../images/Solution/Travel-hospitality/travelPng.png"
import HospitalPng from "../../images/Solution/Travel-hospitality/hospitalPng.png"
import AdvacedFeaturesPng from "../../images/Solution/Travel-hospitality/advanceFeaturesPng.png"
import TripzyMainPng from "../../images/Solution/Travel-hospitality/tripzyMainPng.png"
import TripzyPlacePng from "../../images/Solution/Travel-hospitality/tripzyPlacesPng.png"
import TripzyDestinationPng from "../../images/Solution/Travel-hospitality/tripzyDestinationPng.png"
import HospitalHeroPng from '../../images/Solution/Travel-hospitality/hospitalHeroPng.png'
import TelemedicinaGif from "../../images/Solution/Travel-hospitality/Telemedicina.gif"
import LocationPng from '../../images/Solution/Travel-hospitality/location.png'

const solutions = [
    {
        id: 1,
        icon: <BsFillAirplaneFill className="text-white text-lg sm:text-2xl" />,
        title: "Travel Startups & OTAs",
        description: "Launch booking and discovery apps for flights, hotels, and experiences.",
        stepBgColor: "bg-gradient-to-r from-[#9333EA] to-[#531D84]",
        primaryColor: "#9333EA",
        secondaryColor: "#531D84",
        bgColor: "#FBEEFF"

    },
    {
        id: 2,
        icon: <PiHospitalFill className="text-white text-lg sm:text-2xl" />,
        title: "Hospitality Businesses",
        description: "Hotels, resorts, restaurants needing direct booking and digital presence.",
        stepBgColor: "bg-gradient-to-r from-[#2F8CFF] to-[#1C5499]",
        primaryColor: "#0D82FF",
        secondaryColor: "#0861c2",
        bgColor: "#E4F1FF"
    },
    {
        id: 3,
        icon: <GrMapLocation className="text-white text-lg sm:text-2xl" />,
        title: "Tour Operators & Agencies",
        description: "Manage itineraries, bookings, and customer interactions online.",
        stepBgColor: "bg-gradient-to-r from-[#2F8CFF] to-[#1C5499]",
        primaryColor: "#0D82FF",
        secondaryColor: "#0861c2",
        bgColor: "#E4F1FF"

    },
    {
        id: 4,
        icon: <TbWorld className="text-white text-lg sm:text-2xl" />,
        title: "Enterprise Travel Platforms",
        description: "Large-scale, multi-service marketplaces with global reach.",
        stepBgColor: "bg-gradient-to-r from-[#9333EA] to-[#531D84]",
        primaryColor: "#9333EA",
        secondaryColor: "#531D84",
        bgColor: "#FBEEFF"
    }
];

const steps = [
    {
        number: "1",
        title: "Discovery & Market Fit",
        description: "Understand your target users and business goals.",
    },
    {
        number: "2",
        title: "Platform Strategy",
        description: "Choose whether to build a niche travel app, a booking engine, or a full OTA.",
    },
    {
        number: "3",
        title: "Design & Development",
        description: "User-first design, robust backend, real-time booking integrations.",
    },
    {
        number: "4",
        title: "Integration & Testing",
        description: "Payments, APIs (flight/hotel providers), fraud protection, scalability testing.",
    },
    {
        number: "5",
        title: "Launch & Growth",
        description: "Deploy, optimize, and enable continuous enhancements (loyalty programs, upselling features).",
    }
]

const benefits = [
    {
        icon: <FaChalkboardUser />,
        title: "Smooth Customer Experience",
        description: "Intuitive booking flows with mobile-first design."
    },
    {
        icon: <LucideCircleFadingPlus />,
        title: "Multi-Service Capabilities",
        description: "Hotels, flights, car rentals, and tours in one platform."
    },
    {
        icon: <TiArrowRepeat />,
        title: "Scalable & Reliable",
        description: "Handle high seasonal traffic with ease."
    },
    {
        icon: <RiRobot2Fill />,
        title: "AI-Enhanced Features",
        description: "Personalized recommendations, smart pricing, and predictive analytics."
    },
    {
        icon: <MdCurrencyExchange />,
        title: "Revenue-Focused",
        description: "Monetization through commissions, ads, premium listings, and memberships."
    },
]

const features = [
    {
        id: 1,
        image: TravelPng,
        icon: <BiSolidPlaneAlt />,
        title: "Core Travel Platform Features:",
        points: [
            "Search, filter & compare flights/hotels.",
            "Real-time availability & pricing.",
            "Instant booking & secure payments.",
            "Multi-currency & multilingual support.",
        ],
    },
    {
        id: 2,
        image: HospitalPng,
        icon: <FaHospital />,
        title: "Hospitality-Specific Features:",
        points: [
            "Direct booking engine for hotels/restaurants.",
            "Property management dashboards.",
            "Guest engagement tools (chat, loyalty rewards).",
        ],
    },
    {
        id: 3,
        image: AdvacedFeaturesPng,
        icon: <PiShootingStarFill />,
        title: "Advanced Features:",
        points: [
            "AR/VR tours of hotels and destinations.",
            "Dynamic pricing engines.",
            "Integration with global distribution systems (GDS).",
            "Review & reputation management.",
            "AI-powered recommendations (best time to book, personalized itineraries).",
        ],
    },
];

const whyChoose = [
    {

        description: 'Proven Experience with marketplaces, booking engines, and SaaS solutions.',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right, #3295FD, #7452F0)",
        side: 'left',
        highlight: true,
        borderColor: "#387CEB",
        textColor: "#7452f0",
        hoverTextColor: 'white',
        hoverArrowBgColor: '#7255F1'

    },
    {
        description: '10x Faster Development using AI-powered and low-code tools.',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right, #3295FD, #7452F0)",
        side: 'right',
        highlight: false,
        borderColor: "#387CEB",
        textColor: "#7452f0",
        hoverTextColor: 'white',
        hoverArrowBgColor: '#3394FD'
    },
    {
        description: 'Global Scalability – from niche startups to enterprise-grade OTAs.',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right, #3295FD, #7452F0)",
        side: 'left',
        highlight: true,
        borderColor: "#387CEB",
        textColor: "#7452f0",
        hoverArrowBgColor: '#7255F1',
        hoverTextColor: 'white'
    },
    {
        title: 'Secure & Compliant – ',
        description: 'data safety, GDPR-ready, and PCI-compliant payment solutions.',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right, #3295FD, #7452F0)",
        side: 'right',
        highlight: false,
        borderColor: "#387CEB",
        textColor: "#7452f0",
        hoverTextColor: 'white',
        hoverArrowBgColor: '#3394FD'
    },
    {
        title: 'Future-Ready Features – ',
        description: 'AI, AR/VR, and IoT for next-gen travel experiences.',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right, #3295FD, #7452F0)",
        side: 'left',
        highlight: true,
        borderColor: "#387CEB",
        textColor: "#7452f0",
        hoverTextColor: 'white',
        hoverArrowBgColor: '#7255F1'
    },
];

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Travel Hospitality" },
];

const TravelHospitality = () => {
    usePageTitle(
                    "Travel Hospitality",
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
                                <Badge className="mb-4 bg-blue-100 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent border-purple-200">
                                    Globe Trek
                                </Badge>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                    Smart Digital Solutions for <span className="bg-gradient-to-r from-[#289EFF] to-[#9333EA] bg-clip-text text-transparent">
                                        Travel & Hospitality Businesses
                                    </span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    From hotel booking platforms to global travel marketplaces, we build user-friendly, scalable, and revenue-driven travel solutions tailored to your business model.
                                </p>
                            </div>
                            <div className="flex flex-wrap sm:gap-4 gap-2">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-[#289EFF] to-[#9333EA] hover:from-[#2592eb] hover:to-[#852ed6] transition-all duration-500 ease-in-out"
                                >
                                    <Link to="/contact">Start Building Your Travel Platform</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link to="/about">Case Studies</Link>
                                </Button>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="size-4 md:size-5 text-emerald-500" />
                                    <span className="text-gray-600">Easy Travel Booking</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="size-4 md:size-5 text-emerald-500" />
                                    <span className="text-gray-600">Smooth Management</span>
                                </div>
                            </div>
                        </div>
                        <img
                            src={HospitalHeroPng}
                            alt="Dating app interface"
                            className="rounded-3xl h-full xl:h-[479px] mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="bg-[linear-gradient(90deg,#289EFF_40%,#9333EA_70%)] bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                            Who is this solution is for
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-500 mt-4 max-w-2xl mx-auto text-center mb-8">The online dating industry is projected to cross $10 billion globally by 2030, with millions of users looking for better, safer, and smarter ways to connect.</p>
                    </div>
                    <SolutionCard cardData={solutions} className="h-full" />
                </div>
            </section >

            {/* YPM Section */}
           <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50">
                <Slide direction='up' triggerOnce className='max-w-7xl mx-auto'>
                    <img src={TelemedicinaGif} className='mx-auto'/>
                </Slide>
            </section>

            {/* Benefits */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
                <div className='max-w-7xl mx-auto'>
                    <div className="text-center mb-12">
                        <h2 className="bg-[linear-gradient(90deg,#289EFF_40%,#9333EA_70%)] bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                            Benefits of Our Travel & Hospitality Solutions
                        </h2>
                    </div>
                    <SlidingStroke cardData={benefits} hoverColor="bg-gradient-to-r from-[#289EFF] to-
                    [#31E9FF]" />
                </div>
            </section>

            {/* Features */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
               <div className='max-w-7xl mx-auto'>
                 <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl bg-[linear-gradient(90deg,#289EFF_40%,#9333EA_70%)] bg-clip-text text-transparent font-bold mb-4">
                        Features We Can Add
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-500 mt-4 max-w-2xl mx-auto text-center mb-8">
                        From a small hotel booking engine to a global multi-service OTA, we design platforms that scale with your vision.
                    </p>
                </div>
                <StickyCard cardData={features} />
               </div>
            </section>

            {/* Screen Section */}
          <section className="relative pt-28 sm:pt-48 md:pt-60 lg:pt-72 pb-10 overflow-hidden">
                <div className="relative z-20 inset-0 flex items-center justify-center gap-4 sm:gap-6 px-4">
                    <img
                        src={TripzyDestinationPng}
                        alt="ScreenTwinPng"
                        className="h-40 sm:h-60 md:h-80 lg:h-[500px] 2xl:h-[650px] max-w-full animate-[floatDown_4s_ease-in-out_infinite]"
                    />
                    <img
                        src={TripzyMainPng}
                        alt="ScreenLookPng"
                        className="h-40 sm:h-60 md:h-80 lg:h-[500px] 2xl:h-[650px] max-w-full animate-[floatUp_4s_ease-in-out_infinite]"
                    />
                    <img
                        src={TripzyPlacePng}
                        alt="ScreenProfilePng"
                        className="h-40 sm:h-60 md:h-80 lg:h-[500px] 2xl:h-[650px] max-w-full animate-[floatDown_4s_ease-in-out_infinite]"
                    />
                </div>
                <img src={LocationPng} alt="LocationPng" className='absolute top-10 h-40 sm:h-64 md:h-80 lg:h-96 left-1/2 -translate-x-1/2 z-10' />
            </section>
            {/* Development process */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center" style={{ backgroundImage: `url(${DevProcessBgImage})` }}>
                <div className='max-w-7xl mx-auto'>
                    <div className="text-center mb-12">
                        <h2 className="max-w-3xl mx-auto text-3xl md:text-5xl font-bold text-white">
                            Development Process for Travel & Hospitality Solutions </h2>
                    </div>
                    <TransparentCard cardData={steps} stepColor={["#289EFF", "#9333EA"]} borderColor='transparent' hoverBgColor='#DBECFF' hoverTextColor="#0F7CFF" titleColor="#DBECFF" descColor="#DBECFF80" inOrder={true} />
                </div>
            </section>

            {/* Why Choose */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
                <div className='max-w-7xl mx-auto'>
                    <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold bg-[linear-gradient(90deg,#289EFF_40%,#9333EA_70%)] bg-clip-text text-transparent mb-12">
                        Why Choose HMR for Travel & Hospitality
                    </h2>
                    <StepCard cardData={whyChoose} stepCount={false} />
                </div>
            </section>

            <BottomSolution />
        </div >
    )
}

export default TravelHospitality