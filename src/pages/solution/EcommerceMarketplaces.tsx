import React from 'react'
import { Link } from 'react-router-dom';
import { LiaRocketSolid } from "react-icons/lia";
import { MdGroups2, MdOutlineLaptopChromebook } from "react-icons/md";
import { GiBreakingChain } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { TbWorldCheck } from "react-icons/tb";
import { RiMoneyDollarCircleLine, RiSecurePaymentFill, RiUserCommunityFill } from "react-icons/ri";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoBarChart, IoCart } from "react-icons/io5";
import { CheckCircle } from 'lucide-react';
import { Zoom } from 'react-awesome-reveal';

// components
import BottomSolution from './common/BottomSolution';
import { Badge } from '@/components/ui/badge';
import DiagonalCard from '@/components/common/DiagonalCard'
import StickyCard from '@/components/common/StickyCard';
import SlidingStroke from '@/components/common/SlidingStroke'
import StepCard from '@/components/common/StepCard';
import Breadcrumb from '@/components/Breadcrumb';
import SideImageInfo from '../../components/common/SideImageInfo';
import { Button } from '@/components/ui/button';

// images
import EcommerceHero from '../../images/Solution/Ecommerce/ecommerceHero.png'
import EcommerceSolution from "../../images/Solution/Ecommerce/ecommerceSolution.png"
import EcommerceVector from "../../images/Solution/Ecommerce/ecommerceVector.png"
import EcommereceVector from "../../images/Solution/Ecommerce/ecommerce-vector.png"
import Vender1 from "../../images/Solution/Ecommerce/vender1.png"
import Vender2 from "../../images/Solution/Ecommerce/vender2.png"
import Vender3 from "../../images/Solution/Ecommerce/vender3.png"
import { usePageTitle } from '@/hooks/usePageTitle';


const solutions = [
    {
        id: 1,
        title: "Startups",
        description: "Launch your online store quickly with scalable tech foundations.",
        icon: <LiaRocketSolid />

    },
    {
        id: 2,
        title: "SMBs",
        description: "Move from offline to online commerce with ease.",
        icon: <MdOutlineLaptopChromebook />

    },
    {
        id: 3,
        title: "Enterprises",
        description: "Build multi-vendor ecosystems like Amazon, Flipkart, or niche B2B marketplaces.",
        icon: <GiBreakingChain />

    },
    {
        id: 4,
        title: "Retail Chains & Brands",
        description: "Centralize inventory, logistics, and sales under one digital platform.",
        icon: <IoCart />

    }
]

const features = [
    {
        id: 1,
        image: Vender1,
        icon: <IoHome />,
        title: "Single Vendor Store Features:",
        points: [
            "Product Catalog, Cart",
            "Payment Gateway, Shipping Integrations",
            "Coupons, Reviews, and Analytics Dashboards",
        ],
    },
    {
        id: 2,
        image: Vender2,
        icon: <MdGroups2 />,
        title: "Multi-Vendor Marketplace Features:",
        points: [
            "Vendor Onboarding & Dashboards",
            "Commission Management",
            "Escrow Payments & Split Payouts",
            "Vendor Rating & Review System",
            "Multi-Warehouse & Logistics Integration",
            "Dispute Resolution Workflows",
        ],
    },
    {
        id: 3,
        image: Vender3,
        icon: <TbWorldCheck />,
        title: "Advanced / Enterprise-Grade Features:",
        points: [
            "AI-Driven Product Recommendations",
            "Automated Inventory & Supply Chain",
            "Hyper-Personalized Shopping Experiences",
            "Multi-Currency & Multilingual Support",
            "AR/VR Try-On, Voice Commerce, Social Commerce Integration",
        ],
    },
];

const benefits = [
    {
        icon: <IoBarChart />,
        title: "Tailored For Every Stage",
        description: "From MVP for Startups to Enterprise-Grade Platforms.",
    },
    {
        icon: <RiUserCommunityFill />,
        title: "Single Or Multi-Vendor Flexibility",
        description: "Start small, expand into a marketplace.",
    },
    {
        icon: <IoIosPhonePortrait />,
        title: "Seamless User Experience",
        description: "Smooth browsing, fast checkout, and mobile-friendly design.",
    },
    {
        icon: <RiSecurePaymentFill />,
        title: "Scalable & Secure",
        description: "Cloud-based architecture for handling growth & high traffic.",
    },
    {
        icon: <RiMoneyDollarCircleLine />,
        title: "Revenue-Ready",
        description: "Multiple monetization models — commissions, subscriptions, ads.",
    },
]

const steps = [
    {
        title: 'Requirement Analysis & Market Fit',
        description: 'Define your business model (single vendor, multi-vendor, B2C, B2B).',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right, #2457C5, #31EBFF)",
        side: 'left',
        highlight: true,
        borderColor: '#387CEB',
        textColor: '#387CEB',
        hoverTextColor: 'white',
        hoverArrowBgColor: '#31E8FE',

    },
    {
        title: 'Tech Stack & Platform Proposal',
        description: 'Choose between platforms (Shopify, Magento, WooCommerce) or fully custom development.',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right, #2457C5, #31EBFF)",
        side: 'right',
        highlight: false,
        borderColor: '#63BCCC',
        textColor: '#63BCCC',
        hoverTextColor: 'white',
        hoverArrowBgColor: '#2559C6',

    },
    {
        title: 'Design & Development',
        description: 'Build an intuitive storefront, vendor dashboards, and scalable backend.',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right, #2457C5, #31EBFF)",
        side: 'left',
        highlight: true,
        borderColor: '#387CEB',
        textColor: '#387CEB',
        hoverTextColor: 'white',
        hoverArrowBgColor: '#31E8FE',

    },
    {
        title: 'Payment, Logistics & Security Integration',
        description: 'Set up gateways, shipping APIs, fraud detection, and compliance.',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right, #2457C5, #31EBFF)",
        side: 'right',
        highlight: false,
        borderColor: '#63BCCC',
        textColor: '#63BCCC',
        hoverTextColor: 'white',
        hoverArrowBgColor: '#2559C6',

    },
    {
        title: 'Launch, Growth & Support',
        description: 'Deploy to cloud, optimize for performance, and enable growth hacks like referrals & loyalty.',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right, #2457C5, #31EBFF)",
        side: 'left',
        highlight: true,
        borderColor: '#387CEB',
        textColor: '#387CEB',
        hoverTextColor: 'white',
        hoverArrowBgColor: '#31E8FE',

    },
];

const whyChoose = [
    {
        title: "Experience Across All Models",
        description: "From single-vendor startups to global B2B & B2C marketplaces.",
    },
    {
        title: "AI-Powered Development",
        description: "Faster time-to-market, smarter workflows.",
    },
    {
        title: "Flexible Engagement",
        description: "Pre-built solutions for quick launch, custom for enterprise needs.",
    },
    {
        title: "Future-Proof Tech",
        description: "Mobile-first, API-driven, cloud-native solutions.",
    },
    {
        title: "Growth-Focused",
        description: "We don’t just build marketplaces — we help scale them.",
    },
]

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "E-commerce Marketplaces" },
];

const EcommerceMarketplaces = () => {

    usePageTitle(
        "Ecommerce Marketplaces",
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
                                <Badge className="mb-4 bg-blue-100 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent border-blue-200">
                                    Shop Tech
                                </Badge>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                    Launch Powerful E-commerce <span className="bg-gradient-to-r from-[#31EBFF] to-[#4091FF] bg-clip-text text-transparent">
                                        Marketplaces that Scale with Your Vision
                                    </span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    From single-vendor stores to enterprise-grade multi-vendor marketplaces, we design and develop e-commerce solutions that help you grow fast, stay flexible, and compete globally.
                                </p>
                            </div>
                            <div className="flex flex-wrap sm:gap-4 gap-2">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-[#31EBFF] to-[#4091FF] hover:from-[#2edef1] hover:to-[#3a84eb] transition-all duration-500 ease-in-out"
                                >
                                    <Link to="/contact"> Build Your Marketplace with Us</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link to="/about">Case Studies</Link>
                                </Button>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="size-4 md:size-5 text-emerald-500" />
                                    <span className="text-gray-600">Seamless Buying & Selling</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="size-4 md:size-5 text-emerald-500" />
                                    <span className="text-gray-600">Scalable Solutions</span>
                                </div>
                            </div>
                        </div>
                        <img
                            src={EcommerceHero}
                            alt="E-commerce"
                            className="rounded-3xl h-full xl:h-[479px] mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
                <div className='max-w-7xl mx-auto'>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 text-center mb-4">
                        Who is this solution for?
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-500 mb-12 max-w-2xl mx-auto text-center">
                        Over 24 million+ e-commerce stores are live worldwide — marketplaces are the fastest-growing business model.
                    </p>
                    <SideImageInfo cardData={solutions} sideImage={EcommerceSolution} secondaryColor='#4093FF' primaryColor='#265899' />
                </div>
            </section>

            {/* Screen section */}
             <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <Zoom triggerOnce className='max-w-7xl mx-auto'>  <img src={EcommereceVector} alt="EcommereceVector" className='mx-auto animate-pulse md:h-[500px]'/></Zoom>
            </section>
            

            {/* Features */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
                <div className='max-w-7xl mx-auto'>
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent font-bold mb-4">
                            Features We Can Add
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-500 mb-16 max-w-2xl mx-auto">
                            Whether you want to build Shopify-style single stores or Amazon-scale
                            marketplaces, we’ve got you covered
                        </p>
                    </div>
                    <StickyCard cardData={features} />
                </div>
            </section>

            {/* Benefits */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className='max-w-7xl mx-auto'>
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text mb-4">
                            Benefits of Our E-commerce Marketplace Solutions
                        </h2>
                    </div>
                    <SlidingStroke cardData={benefits} />
                </div>
            </section>

            {/* Development Process */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
                <div className='max-w-7xl mx-auto'>
                    <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent mb-12 leading-tight">
                        Development Process for E-commerce Marketplaces
                    </h2>
                    <StepCard cardData={steps} stepCount={true}/>
                </div>
            </section>

            {/* why choose hmr */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className='max-w-7xl mx-auto'>
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text mb-4">
                            Why Choose HMR for Your Marketplace
                        </h2>
                    </div>
                    <DiagonalCard cardData={whyChoose} vectorImg={EcommerceVector}  />
                </div>
            </section>

            <BottomSolution />
        </div>
    )
}

export default EcommerceMarketplaces






