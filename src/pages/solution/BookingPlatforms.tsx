import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlinePhonelink } from 'react-icons/md'
import { TbCalendarTime, TbCloudLock } from 'react-icons/tb'
import { AiOutlineSolution } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { GoDotFill } from 'react-icons/go';
import { Zoom } from 'react-awesome-reveal';
import { motion, useInView } from "framer-motion";
import { CheckCircle } from 'lucide-react';

import { usePageTitle } from '@/hooks/usePageTitle';
import { Button } from '@/components/ui/button';
import Breadcrumb from '@/components/Breadcrumb';
import { Badge } from '@/components/ui/badge';
import BottomSolution from './common/BottomSolution'
import DiagonalCard from '@/components/common/DiagonalCard'
import SlidingStroke from '@/components/common/SlidingStroke'
import StepCard from '@/components/common/StepCard';
import TransparentCard from '@/components/common/TransparentCard';

import BookingPlatformsHeroPng from "../../images/Solution/BookingPlateforms/bookingPlateformsHeroPng.png"
import BookingPlateformSolutionVector from "../../images/Solution/BookingPlateforms/bookingPlateformSolutionVector.png"
import DribbleGif from "../../images/Solution/BookingPlateforms/dribbble.gif"
import BookingWorldPng from "../../images/Solution/BookingPlateforms/bookingWorld.png"
import WhyChooseVectorPng from "../../images/Solution/BookingPlateforms/whyChooseVectorPng.png"
import BookingTypeVector1Png from "../../images/Solution/BookingPlateforms/bookingTypesVector1.png"
import BookingTypeVector2Png from "../../images/Solution/BookingPlateforms/bookingTypesVector2.png"

const solutions = [
    {
        id: 1,
        title: "Healthcare Providers",
        description: "Hospitals, clinics, doctors, and telemedicine apps."
    },
    {
        id: 2,
        title: "Transport & Travel Companies",
        description: "Bus, taxi, auto, train, and flight ticketing."
    },
    {
        id: 3,
        title: "Event & Entertainment",
        description: "Concerts, theaters, sports, and shows.Use proven tools to grow members organically."
    },
    {
        id: 4,
        title: "Lifestyle & Services",
        description: "Salons, spas, fitness trainers, co-working spaces."
    },
    {
        id: 5,
        title: "Corporate Teams",
        description: "Internal meeting room and resource scheduling."
    },
]

const benefits = [
    {
        icon: <TbCalendarTime />,
        title: "24/7 Availability",
        description: "Customers can book anytime, anywhere"
    },
    {
        icon: <AiOutlineSolution />,
        title: "Custom-Fit Solutions",
        description: "Built for your specific industry workflows."
    },
    {
        icon: <RiMoneyDollarCircleFill />,
        title: "Time & Cost Efficiency",
        description: "Reduce no-shows, double bookings, and admin work."
    },
    {
        icon: <MdOutlinePhonelink />,
        title: "Multi-Platform Access",
        description: "Mobile apps, web portals, and kiosk systems."
    },
    {
        icon: <TbCloudLock />,
        title: "Scalable & Secure",
        description: "Handle millions of bookings with confidence."
    },
]

const typesData = [
    {
        id: 1,
        title: "Doctor & Healthcare Appointments"
    },
    {
        id: 2,
        title: "Real-time doctor availability"
    },
    {
        id: 3,
        title: "Patient management & reminders"
    },
    {
        id: 4,
        title: "Telemedicine integrations"
    },
    {
        id: 5,
        title: "Transport & Ticketing"
    },
    {
        id: 6,
        title: "Bus, auto, train, and flight bookings"
    },
    {
        id: 7,
        title: "Live seat maps & dynamic pricing"
    },
    {
        id: 8,
        title: "Integration with payment & logistics APIs"
    },
    {
        id: 9,
        title: "Event & Entertainment"
    },
    {
        id: 10,
        title: "Concert & cinema ticket booking"
    },
    {
        id: 11,
        title: "QR code ticketing & access control"
    },
    {
        id: 12,
        title: "Loyalty & membership programs"
    },
    {
        id: 13,
        title: "Salon, spa, fitness trainer bookings"
    },
    {
        id: 14,
        title: "Recurring appointments"
    },
    {
        id: 15,
        title: "Service provider dashboards"
    },
    {
        id: 16,
        title: "Enterprise Booking Solutions"
    },
    {
        id: 17,
        title: "Meeting room & desk reservations"
    },
    {
        id: 18,
        title: "Corporate resource scheduling"
    },
    {
        id: 19,
        title: "Integration with calendars & CRMs"
    },
]

const steps = [
    {
        title: 'Requirement Analysis',
        description: 'Define booking flow, users, and business model (B2B, B2C, internal use).',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right,#1660D0 ,#04E4FF)",
        side: 'left',
        highlight: true,
        borderColor: "#387CEB",
        textColor: '#1660D0',
        hoverTextColor: 'white',
        hoverArrowBgColor: '#04E4FF',

    },
    {
        title: 'Design & Prototyping',
        description: 'Craft user-friendly booking flows with minimal clicks..',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right,#1660D0 ,#04E4FF)",
        side: 'right',
        highlight: false,
        borderColor: '#1660D0',
        textColor: '#1660D0',
        hoverTextColor: 'white',
        hoverArrowBgColor: '#1660D0'
    },
    {
        title: 'Development & Integrations',
        description: 'Real-time availability, payments, calendar sync, and vendor management.',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right,#1660D0 ,#04E4FF)",
        side: 'left',
        highlight: true,
        borderColor: '#387CEB',
        textColor: '#1660D0',
        hoverTextColor: 'white',
        hoverArrowBgColor: '#04E4FF'
    },
    {
        title: 'Testing & Optimization',
        description: 'Load testing, data security, and performance checks under peak demand.',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right,#1660D0 ,#04E4FF)",
        side: 'right',
        highlight: false,
        borderColor: '#387CEB',
        textColor: '#1660D0',
        hoverTextColor: 'white',
        hoverArrowBgColor: '#1660D0'
    },
    {
        title: 'Launch & Scale',
        description: 'Deploy on mobile & web, add advanced features like AI scheduling or predictive booking.',
        bgColor: 'bg-white',
        hoverBgColor: "linear-gradient(to right,#1660D0 ,#04E4FF)",
        side: 'left',
        highlight: true,
        borderColor: '#387CEB',
        textColor: '#1660D0',
        hoverTextColor: 'white',
        hoverArrowBgColor: '#04E4FF',
    },
];

const whyChoose = [
    {
        number: "1",
        title: "Industry Versatility",
        description: "Healthcare, travel, events, lifestyle, and enterprise booking experience.",
    },
    {
        number: "2",
        title: "AI-Powered Scheduling",
        description: "Smart slot recommendations & demand forecasting.",
    },
    {
        number: "3",
        title: "Scalable Architecture",
        description: "Handle thousands of bookings per minute.",
    },
    {
        number: "4",
        title: "User-Friendly Design",
        description: "Built for fast adoption by both customers & staff.",
    },
    {
        number: "5",
        title: "Future-Ready",
        description: "Add-ons like chatbots, AI assistants, and voice booking.",
    }
]
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Booking Platform" },
];

const BookingPlatforms = () => {
     usePageTitle(
          "Booking Platform",
          "Get in touch with HMR Technologies for your next AI-powered development project. Let's discuss how we can accelerate your goals.",
        );
    const [activeImage, setActiveImage] = useState<"img1" | "img2">("img1");

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
                                <Badge className="mb-4 bg-blue-100 bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent border-sky-200">
                                    Reserve Hub
                                </Badge>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                    Smart, Scalable  <span className="bg-gradient-to-r from-[#31E7FF] to-[#1660D0] bg-clip-text text-transparent">
                                        Booking Platforms for Every Industry
                                    </span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    Whether it’s healthcare appointments, transport bookings, event tickets, or salon schedules, we build powerful booking platforms that simplify scheduling and improve customer experiences.
                                </p>
                            </div>
                            <div className="flex flex-wrap sm:gap-4 gap-2">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-[#31E7FF] to-[#1660D0] hover:from-[#2ed7ee] hover:to-[#1558bd] transition-all duration-500 ease-in-out"
                                >
                                    <Link to="/contact">Build Your Booking Platform Today</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link to="/about">Case Studies</Link>
                                </Button>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="size-4 md:size-5 text-emerald-500" />
                                    <span className="text-gray-600">Quick Reservations</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="size-4 md:size-5 text-emerald-500" />
                                    <span className="text-gray-600">Hassle-Free Scheduling</span>
                                </div>
                            </div>
                        </div>
                        <img
                            src={BookingPlatformsHeroPng}
                            alt="Dating app interface"
                            className="rounded-3xl h-full xl:h-[479px] mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
                <div className='max-w-7xl mx-auto'>
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-[#31E7FF] to-[#1660D0] bg-clip-text">
                            who is this solution is for </h2>
                    </div>
                    <DiagonalCard cardData={solutions} bgColor=" linear-gradient(180deg, rgba(1, 207, 236, 0.21) 0%, rgba(37, 103, 203, 0.21) 100%)" bgHoverColor="linear-gradient(135deg, #00D3ED, #1660D0)"
                        vectorImg={BookingPlateformSolutionVector} />
                </div>
            </section>

            {/* Screen section*/}
            {/* <ScreenSlider screenImage={{ slideImages: [LocationScreen, ResortHotelScreen, EventDetail, ThongBao], middle: BookingComScreen }} /> */}
             <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className='max-w-7xl mx-auto'>
                    <img src={DribbleGif} alt="DribbleGif" className='mx-auto lg:h-[600px]'/>
                </div>
            </section>
            {/* Benefits */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
                <div className='max-w-7xl mx-auto '>
                    <div className="text-center mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text">
                            Benefits of Our Booking Platforms
                        </h2>
                    </div>
                    <SlidingStroke cardData={benefits} />
                </div>
            </section>

            {/* Types */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50">
                <div className='max-w-7xl mx-auto sticky top-0'>
                    <div className="text-center mb-6">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl bg-[linear-gradient(90deg,#1660D0_40%,#31E9FF_70%)] bg-clip-text text-transparent font-bold">
                            Types of Booking Platforms We Build                    </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-500 mt-4 text-center">
                            One platform, endless possibilities — if it can be booked, we can build it
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="relative hidden sm:block">
                            <div className="sticky top-0 min-h-[70vh] flex items-center justify-center">
                                {activeImage === "img1" ? (
                                    <motion.img
                                        key="img1"
                                        src={BookingTypeVector1Png}
                                        alt="BookingTypeVector1"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="h-[600px] object-contain"
                                    />
                                ) : (
                                    <motion.img
                                        key="img2"
                                        src={BookingTypeVector2Png}
                                        alt="BookingTypeVector2"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="h-[400px] object-contain"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col p-4 md:p-10 gap-y-6 lg:gap-y-8 h-[65vh] overflow-auto hide-scrollbar">
                            {typesData.map((item) => {
                                const ref = useRef(null);
                                const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });
                                useEffect(() => {
                                    if (inView) {
                                        if (item.id <= 10) setActiveImage("img1");
                                        else setActiveImage("img2");
                                    }
                                }, [inView, item.id]);

                                return (
                                    <div
                                        key={item.id}
                                        ref={ref}
                                        className="flex items-center"
                                    >
                                        <p className="text-base sm:text-lg text-gray-600 flex items-center gap-2">
                                            <GoDotFill className="text-blue-900 shrink-0" />
                                            {item.title}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* single img */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
                <Zoom triggerOnce className='max-w-7xl mx-auto'> <img src={BookingWorldPng} alt="BookingWorldPng" className='h-[700px] mx-auto'/></Zoom>
            </section>

            {/*Develeopment process */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className='max-w-7xl mx-auto'>
                    <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#31EBFF] to-[#4091FF] bg-clip-text text-transparent mb-12 leading-tight">
                        Development Process for Booking Platforms</h2>
                    <StepCard cardData={steps} stepCount={true} />
                </div>
            </section>

            {/* Why choose */}
            <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-cover bg-center" style={{ backgroundImage: `url(${WhyChooseVectorPng})` }}>
                <div className='max-w-7xl mx-auto'>
                    <div className="text-center mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-3xl mx-auto font-bold text-[#3493FD]">
                            Why Choose HMR for Booking Platforms</h2>
                    </div>
                    <TransparentCard cardData={whyChoose} stepColor={["#0F7CFF", "#094A99"]} borderColor='#fff6' hoverBorderColor="#0F7CFF" hoverBgColor='#DBECFF' hoverTextColor="#0F7CFF" titleColor="#000000" descColor="#00000080" inOrder={true} />
                </div>
            </section>

            <BottomSolution />
        </div>
    )
}

export default BookingPlatforms
