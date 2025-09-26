import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillThunderbolt } from 'react-icons/ai';
import { FaSackDollar } from 'react-icons/fa6';
import { BiSolidUserBadge } from 'react-icons/bi';
import { RiRobot2Fill, RiSecurePaymentLine } from 'react-icons/ri';
import { LiaRocketSolid } from 'react-icons/lia';
import { MdOutlineLaptopChromebook, MdPhonelink } from 'react-icons/md';
import { GiBreakingChain, GiWorld } from 'react-icons/gi';
import { GoDotFill } from 'react-icons/go';
import { IoCart } from 'react-icons/io5';
import { FaCloud, FaProjectDiagram, FaRobot } from 'react-icons/fa';
import { Zoom } from 'react-awesome-reveal';
import { CheckCircle } from 'lucide-react';

import { usePageTitle } from '@/hooks/usePageTitle';
import BottomSolution from './common/BottomSolution'
import Breadcrumb from '@/components/Breadcrumb'
import { Badge } from '@/components/ui/badge';
import DiagonalCard from '@/components/common/DiagonalCard';
import SideImageInfo from '@/components/common/SideImageInfo';
import CenterImageCard from '@/components/common/CenterImageCard';
import { ToFroCard } from '@/components/common/ToFroCard';
import { Button } from '@/components/ui/button';

import MarketplacePlatformHeroPng from "../../images/Solution/MarketPlacePlatforms/marketplacePlatformHero.png"
import MarketplaceSolution from "../../images/Solution/MarketPlacePlatforms/marketplaceSolution.png"
import MarketplaceTypesVector from "../../images/Solution/MarketPlacePlatforms/marketplaceTypesVector.png"
import MarketplaceCoreFeatures from "../../images/Solution/MarketPlacePlatforms/marketplaceCoreFeatures.png"
import MarketPlacePng from "../../images/Solution/MarketPlacePlatforms/marketplace.png"
import MarketPlaceWorldPng from "../../images/Solution/MarketPlacePlatforms/MarketPlaceWorldPng.png"



const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Marketplace Platform" },
];

const solutions = [
    {
        id: 1,
        hoverDescription: "Startups launching a niche marketplace idea.",
        icon: <LiaRocketSolid />
    },
    {
        id: 2,
        hoverDescription: "Enterprises expanding into platform-driven business models.",
        icon: <MdOutlineLaptopChromebook />
    },
    {
        id: 3,
        hoverDescription: "Service providers looking to build booking & vendor platforms.",
        icon: <GiBreakingChain />
    },
    {
        id: 4,
        hoverDescription: "B2B companies building distribution or wholesale ecosystems.",
        icon: <IoCart />
    }
]

const features = [
    { text: "Vendor & Buyer Onboarding" },
    { text: "Product/Service Listings & Profiles" },
    { text: "Search, Filtering & Smart Recommendations" },
    { text: "Booking & Scheduling (For Services/Appointments)" },
    { text: "Secure Payments With Escrow & Split Options" },
    { text: "Ratings, Reviews, And Reputation Systems" },
    { text: "Admin, Vendor & Buyer Dashboards" },
    { text: "Messaging, Chat & Notifications" },
    { text: "Reporting & Analytics" },
]

const types = [
    {
        id: 1,
        title: "Freelance & Talent Marketplaces",
        description: "connecting professionals with clients."
    },
    {
        id: 2,
        title: "Product Marketplaces",
        description: "multi-vendor platforms for selling goods."
    },
    {
        id: 3,
        title: "Service Marketplaces",
        description: "from home services to healthcare and beyond."
    },
    {
        id: 4,
        title: "Niche Marketplaces",
        description: "Salons, spas, fitness trainers, co-working spaces."
    },
    {
        id: 5,
        title: "B2B Marketplaces",
        description: "Internal meeting room and resource scheduling."
    },
    {
        id: 6,
        title: "Peer-to-Peer Platforms",
        description: "Internal meeting room and resource scheduling."
    },
]

const partnerWithUsData = [
    {
        title: "Expertise in multi-vendor architectures",
        icon: <FaProjectDiagram className="text-3xl inline-block mr-2" />,
        color: "hover:text-[#0073FB]",
        withBorder: false,
    },
    {
        title: "Secure payment & escrow system integrations",
        icon: <RiSecurePaymentLine className="text-3xl inline-block mr-2" />,
        color: "hover:text-[#0073FB]",
        withBorder: false,
    },
    {
        title: "Single codebase for both web and mobile apps",
        icon: <MdPhonelink className="text-3xl inline-block mr-2" />,
        color: "hover:text-[#0073FB]",
        withBorder: false,
    },
    {
        title: "Cloud-native architecture for scalability",
        icon: <FaCloud className="text-3xl inline-block mr-2" />,
        color: "hover:text-[#0073FB]",
        withBorder: false,
    },
    {
        title: "Ability to embed AI & automation for growth acceleration",
        icon: <FaRobot className="text-3xl inline-block mr-2" />,
        color: "hover:text-[#0073FB]",
        withBorder: false,
    },
];

const benefits = [
    {
        id: 1,
        description: "Faster Go-to-Market with modular development",
        icon: <AiFillThunderbolt className="text-white text-3xl mx-auto" />,
        bgColor: "#FFFFFF61",
        textColor: "#FFFFFFB2",
        hoverBgColor: "#2F8CFF"
    },
    {
        id: 2,
        description: "Flexible Monetization Models – commissions, subscriptions, pay-per-lead",
        icon: <FaSackDollar className="text-white text-3xl mx-auto" />,
        bgColor: "#FFFFFF61",
        textColor: "#FFFFFFB2",
        hoverBgColor: "#2F8CFF"
    },
    {
        id: 3,
        description: "Scalable Infrastructure to handle thousands of vendors and users",
        icon: <GiWorld className="text-white text-3xl mx-auto" />,
        bgColor: "#FFFFFF61",
        textColor: "#FFFFFFB2",
        hoverBgColor: "#2F8CFF"
    },
    {
        id: 4,
        description: "Mobile-First & User-Centric Design for seamless adoption",
        icon: <BiSolidUserBadge className="text-white text-3xl mx-auto" />,
        bgColor: "#FFFFFF61",
        textColor: "#FFFFFFB2",
        hoverBgColor: "#2F8CFF"
    },
    {
        id: 5,
        description: "Future-Ready Enhancements with AI-driven matching, fraud detection, and pricing optimization",
        icon: <RiRobot2Fill className="text-white text-3xl mx-auto" />,
        bgColor: "#FFFFFF61",
        textColor: "#FFFFFFB2",
        hoverBgColor: "#2F8CFF"
    },
];

const MarketplacePlatforms = () => {
    usePageTitle(
        "Marketplace Platforms",
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
                                <Badge className="mb-4 bg-blue-100 bg-gradient-to-r from-[#31E9FF] to-[#1660D0] bg-clip-text text-transparent border-blue-200">
                                    MarketMingle
                                </Badge>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                    Custom-Built Marketplaces for  <span className="bg-gradient-to-r from-[#31E9FF] to-[#1660D0] bg-clip-text text-transparent">
                                        Products, Services, and Talent
                                    </span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    We design and develop digital marketplaces that connect buyers and sellers, service providers and clients, or businesses and vendors — tailored to your industry and growth goals.
                                </p>
                            </div>
                            <div className="flex flex-wrap sm:gap-4 gap-2">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-[#31E9FF] to-[#1660D0] hover:from-[#2ddbee] hover:to-[#1458bd] transition-all duration-500 ease-in-out"
                                >
                                    <Link to="/contact">Start Building Your Marketplace</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link to="/about">Case Studies</Link>
                                </Button>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="size-4 md:size-5 text-emerald-500" />
                                    <span className="text-gray-600">Multi-Vendor Support</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="size-4 md:size-5 text-emerald-500" />
                                    <span className="text-gray-600">Growth-Oriented</span>
                                </div>
                            </div>
                        </div>
                        <img
                            src={MarketplacePlatformHeroPng}
                            alt="marketplace"
                            className="rounded-3xl h-full xl:h-[479px] mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
                <div className='max-w-7xl mx-auto'>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#31EBFF] to-[#4091FF] text-center pb-10">
                        Who is this solution for?
                    </h1>
                    <SideImageInfo cardData={solutions} sideImage={MarketplaceSolution} primaryColor='#31E9FF' secondaryColor='#1660D0' />
                </div>
            </section>

            {/* Benefits */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className='max-w-7xl mx-auto'>
                    <div className="text-center mb-12">
                        <h2 className="ttext-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-[#31E7FF] to-[#1660D0] bg-clip-text">
                            Types of Marketplaces We Build </h2>
                    </div>
                    <DiagonalCard cardData={types} bgColor=" linear-gradient(180deg, rgba(1, 207, 236, 0.21) 0%, rgba(37, 103, 203, 0.21) 100%)" bgHoverColor="linear-gradient(135deg, #00D3ED, #1660D0)"
                        vectorImg={MarketplaceTypesVector} />
                </div>
            </section>
           
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
                <Zoom triggerOnce className='max-w-7xl mx-auto'> <img src={MarketPlaceWorldPng} alt="MarketPlaceWorldPng" className='mx-auto animate-pulse lg:h-[500px]'/></Zoom>
            </section>
            
            {/*core Features */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-[#31E7FF] to-[#1660D0] bg-clip-text">
                        Core Features </h2>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <img
                            src={MarketplaceCoreFeatures}
                            alt="Core Features Illustration"
                            className="w-full max-w-md"
                        />
                    </div>
                    {/* Right Content */}
                    <div>
                        <ul className="space-y-4">
                            {features.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <GoDotFill className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                                    <p
                                        className={`text-[#2457C58C] text-base lg:text-lg hover:text-[#2457C5] hover:font-bold transition-colors}`}
                                    >
                                        {item.text}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* benefits */}
            <section className="lg:pt-24 lg:pb-32 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-[#0A2342]">
                <div className='max-w-7xl mx-auto'>
                    <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
                        Benefits of Our Marketplace Solutions
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        <ToFroCard cardData={benefits} />
                    </div>
                </div>
            </section>

            {/* Partner */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
                <div className='max-w-6xl mx-auto'>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#31E7FF] to-[#1660D0] bg-clip-text text-transparent mb-12 text-center">
                        Why Partner With Us</h2>
                    <CenterImageCard cardData={partnerWithUsData} centerImage={MarketPlacePng} />
                </div>
            </section>

            {/* Solution */}
            <BottomSolution />
        </div>
    )
}

export default MarketplacePlatforms
