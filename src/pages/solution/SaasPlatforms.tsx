import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlinePhonelink } from 'react-icons/md'
import { BsArrowRepeat } from 'react-icons/bs'
import { Slide } from 'react-awesome-reveal'
import { CgGym } from "react-icons/cg";
import { TbCloudLock, TbLayoutGridAdd } from 'react-icons/tb'
import { FaClinicMedical, FaMoneyBillWave } from 'react-icons/fa'
import { BiSolidInstitution } from 'react-icons/bi'
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { CheckCircle, LucideWorkflow } from 'lucide-react'

import { usePageTitle } from '@/hooks/usePageTitle'
import BottomSolution from './common/BottomSolution'
import DiagonalCard from '@/components/common/DiagonalCard'
import CenterImageCard from '@/components/common/CenterImageCard';
import { ToFroCard } from '@/components/common/ToFroCard'
import StepCard from '@/components/common/StepCard'
import TransparentCard from '@/components/common/TransparentCard'
import Breadcrumb from '@/components/Breadcrumb'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import OrderTimePng from "../../images/Solution/Saas/orderTimePng.png"
import ExampleVector from "../../images/Solution/Saas/exampleVector.png"
import SaasHeroPng from "../../images/Solution/Saas/saasHeroPng.png"
import SaasSolutionPng from "../../images/Solution/Saas/saasSolutionPng.png"
import WhyChoosePng from "../../images/Solution/Saas/whyChoosePng.png"

const features = [
    {
        title: "Gym & Fitness SaaS",
        description: "Member management, class bookings, payment collection.",
    },
    {
        title: "Healthcare SaaS",
        description: "Appointment booking, telemedicine, patient management.",
    },
    {
        title: "Education SaaS",
        description: "Online learning, exams, attendance tracking, grading.",
    },
    {
        title: "Event SaaS",
        description: "Vendor management, attendee registration, ticketing.",
    },
    {
        title: "Co-working SaaS",
        description: "Hot desk reservations, billing, and collaboration tools.",
    },
    {
        title: "Retail SaaS",
        description: "POS systems, loyalty programs, inventory management.",
    },
]

const solutions = [
    {
        title: "Gyms & Fitness Studios",
        icon: <CgGym className="text-3xl inline-block mr-2" />,
        description: "Membership management, scheduling, billing.",
        color: "hover:text-[#2F8CFF]",
        withBorder: false
    },
    {
        title: "Clinics & Healthcare Providers",
        icon: <FaClinicMedical className="text-3xl inline-block mr-2" />,
        description: "Patient scheduling, records, billing.",
        color: "hover:text-[#2F8CFF]",
        withBorder: false

    },
    {
        title: "Educational Institutions",
        icon: <BiSolidInstitution className="text-3xl inline-block mr-2" />,
        description: "Course delivery, student tracking, online exams.",
        color: "hover:text-[#2F8CFF]",
        withBorder: false

    },
    {
        title: "Co-working Spaces",
        icon: <HiOutlineBuildingLibrary className="text-3xl inline-block mr-2" />,
        description: "Desk booking, resource management, invoicing.",
        color: "hover:text-[#2F8CFF]",
        withBorder: false
    },
    {
        title: "Niche Businesses",
        icon: <LucideWorkflow className="text-3xl inline-block mr-2" />,
        description: "Any company needing a SaaS platform tailored to its unique workflows.",
        color: "hover:text-[#2F8CFF]",
        withBorder: false

    },
]

const benefits = [
    {
        id: 1,
        title: "Tailored Functionality",
        description: "Built Around Your Exact Workflows.",
        icon: <TbLayoutGridAdd className="text-white text-4xl mx-auto" />,
        bgColor: "#FFFFFF61",
        textColor: "#FFFFFFB2",
        hoverBgColor: "#3964e1bd"
    },
    {
        id: 2,
        title: "Recurring Revenue",
        description: "SaaS Model Ensures Predictable Income Streams.",
        icon: <BsArrowRepeat className="text-white text-4xl mx-auto" />,
        bgColor: "#FFFFFF61",
        textColor: "#FFFFFFB2",
        hoverBgColor: "#3964e1bd"
    },
    {
        id: 3,
        title: "Cloud-First & Scalable",
        description: "Access From Anywhere, Scale Globally.",
        icon: <TbCloudLock className="text-white text-4xl mx-auto" />,
        bgColor: "#FFFFFF61",
        textColor: "#FFFFFFB2",
        hoverBgColor: "#3964e1bd"
    },
    {
        id: 4,
        title: "Lower Operational Costs",
        description: "Automate Manual Work And Reduce Staff Overhead.",
        icon: <FaMoneyBillWave className="text-white text-4xl mx-auto" />,
        bgColor: "#FFFFFF61",
        textColor: "#FFFFFFB2",
        hoverBgColor: "#3964e1bd"
    },
    {
        id: 5,
        title: "User-Friendly Design",
        description: "Easy Onboarding For Non-Technical Users.",
        icon: <MdOutlinePhonelink className="text-white text-4xl mx-auto" />,
        bgColor: "#FFFFFF61",
        textColor: "#FFFFFFB2",
        hoverBgColor: "#3964e1bd"
    },
];

const steps = [
    {
        title: 'Discovery & Market Understanding',
        description: 'Research your target industry and identify gaps.',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right,#0F7CFF ,#094A99)",
        side: 'left',
        highlight: true,
        borderColor: "#094A99",
        textColor: '#3493FD',
        hoverTextColor: 'white',
        hoverArrowBgColor: '#094A99',
    },
    {
        title: 'MVP & Feature Planning',
        description: 'Build the first version with core features to validate your SaaS idea.',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right,#0F7CFF ,#094A99)",
        side: 'right',
        highlight: false,
        borderColor: '#094A99',
        textColor: '#3493FD',
        hoverTextColor: 'white',
        hoverArrowBgColor: '#0F7CFF',
    },
    {
        title: 'Development & Subscription Model',
        description: 'Design dashboards, integrate billing (Stripe, Razorpay, PayPal), and build scalable backend.',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right,#0F7CFF ,#094A99)",
        side: 'left',
        highlight: true,
        borderColor: '#094A99',
        textColor: '#3493FD',
        hoverTextColor: 'white',
        hoverArrowBgColor: '#094A99',
    },
    {
        title: 'Testing & Compliance',
        description: 'Ensure security, multi-tenant setup, and data privacy compliance (GDPR, HIPAA if needed).',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right,#0F7CFF ,#094A99)",
        side: 'right',
        highlight: false,
        borderColor: '#094A99',
        textColor: '#3493FD',
        hoverTextColor: 'white',
        hoverArrowBgColor: '#0F7CFF',
    },
    {
        title: 'Launch & Growth Enablement',
        description: 'Deploy cloud-ready SaaS, add analytics, marketing automation, and upselling features.',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right,#0F7CFF ,#094A99)",
        side: 'left',
        highlight: true,
        borderColor: '#094A99',
        textColor: '#3493FD',
        hoverTextColor: 'white',
        hoverArrowBgColor: '#094A99',
    },
];

const whyChoose = [
    {
        number: "1",
        title: "End-to-End Expertise",
        description: "Faster MVP Delivery with AI-powered development.",
    },
    {
        number: "2",
        title: "Subscription & Monetization Focus",
        description: "Built-in recurring billing models.",
    },
    {
        number: "3",
        title: "Scalable Architecture",
        description: "Multi-tenant systems that grow with users.",
    },
    {
        number: "4",
        title: "Rapid Delivery",
        description: "AI-assisted development for faster time-to-market.",
    },
    {
        number: "5",
        title: "Experience Across Verticals",
        description: "Healthcare, fitness, education, real estate, events, retail.",
    },
];

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "SaaS Platforms" },
];

const SaasPlatforms = () => {
       usePageTitle(
                        "Saas Platforms",
                        "Get in touch with HMR Technologies for your next AI-powered development project. Let's discuss how we can accelerate your goals.",
                      );        
    return (
        <div>
            {/* Hero Section */}
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
                                <Badge className="mb-4 bg-blue-100 bg-gradient-to-r from-[#004699] to-[#0075FF] bg-clip-text text-transparent border-sky-200">
                                    CloudSuite
                                </Badge>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                    Custom SaaS Platforms for  <span className="bg-gradient-to-r from-[#004699] to-[#0075FF] bg-clip-text text-transparent">
                                        Every Niche Business Need
                                    </span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                   From gyms to schools, clinics to co-working spaces — we build subscription-based SaaS platforms that streamline operations, engage users, and scale with your growth.
                                </p>
                            </div>
                            <div className="flex flex-wrap sm:gap-4 gap-2">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-[#004699] to-[#0075FF] hover:from-[#013a81] hover:to-[#026be4] transition-all duration-500 ease-in-out"
                                >
                                    <Link to="/contact">Launch Your SaaS Platform</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link to="/about">Case Studies</Link>
                                </Button>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="size-4 md:size-5 text-emerald-500" />
                                    <span className="text-gray-600">Scalable Architecture</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="size-4 md:size-5 text-emerald-500" />
                                    <span className="text-gray-600">Cost-Effective Delivery</span>
                                </div>
                            </div>
                        </div>
                        <img
                            src={SaasHeroPng}
                            alt="saas"
                            className="rounded-3xl h-full xl:h-[479px] mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
                <div className='max-w-7xl mx-auto'>
                    <div className='mb-12'>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0075FF] to-[#004699] bg-clip-text text-transparent mb-4 text-center">
                            Who is this solution is for
                        </h2>
                        <p className='text-base sm:text-lg lg:text-xl text-gray-500 md:max-w-2xl mx-auto text-center'>
                            There are over 10 million+ active communities worldwide ranging from social groups to professional associations. Every strong movement today needs a digital presence.
                        </p>
                    </div>
                    <CenterImageCard cardData={solutions} centerImage={SaasSolutionPng} />
                </div>
            </section>

            {/* Benefits */}
            <section className="lg:pt-24 lg:pb-32 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-[#0A2342]">
                <div className='max-w-7xl mx-auto'>
                    <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
                        Benefits of Niche SaaS Platforms
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        <ToFroCard cardData={benefits} />
                    </div>
                </div>
            </section>

            {/* why choose */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
                <div className='max-w-7xl mx-auto'>
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-[#0F7CFF] to-[#094A99] bg-clip-text mb-4">
                            Examples of SaaS Platforms We Build</h2>
                        <p className='text-base sm:text-lg lg:text-xl text-gray-500 md:max-w-2xl mx-auto text-center'>
                            Whatever the niche, we can design a SaaS platform that fits like a glove — no wasted features, no compromise.
                        </p>
                    </div>
                    <DiagonalCard cardData={features} vectorImg={ExampleVector} />
                </div>
            </section>

            {/* Order Time */}
            <section className="py-10 sm:py-20 bg-muted/30 overflow-hidden bg-gray-50">
                <Slide triggerOnce direction='up' className='max-w-7xl mx-auto'><img src={OrderTimePng} /></Slide>
            </section>

            {/* Development Process */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
                <div className='max-w-7xl mx-auto'>
                    <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#0F7CFF] to-[#094A99] bg-clip-text text-transparent mb-12 leading-tight">
                        Development Process for SaaS Platforms</h2>
                    <StepCard cardData={steps} stepCount={true} />
                </div>
            </section>

            {/* Why Choose */}
            <section className="px-6 py-16 relative bg-cover bg-center" style={{ backgroundImage: `url(${WhyChoosePng})` }}>
                <div className='max-w-7xl mx-auto'>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
                        Why Choose HMR for Your SaaS Platform</h2>
                    <TransparentCard cardData={whyChoose} stepColor={["#0F7CFF", "#094A99"]} borderColor='transparent' hoverBorderColor="#0F7CFF" hoverBgColor='#DBECFF' hoverTextColor="#0F7CFF" titleColor="#DBECFF" descColor="#DBECFF" />
                </div>
            </section>

            <BottomSolution />
        </div>
    )
}

export default SaasPlatforms