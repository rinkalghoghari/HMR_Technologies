import { Badge } from '@/components/ui/badge';
import React from 'react'
import { ArrowRight } from 'lucide-react';

import { Button } from "@/components/ui/button";

import AerlLogo from "../images/SuccessStories/Aerlcloud/aerllogo.webp"
import BeachedLogo from "../images/SuccessStories/beachedlogo.svg"
import DesignedLogo from "../images/SuccessStories/Designed/designedlogo.svg"
import NaldaLogo from "../images/SuccessStories/nalda-logo.webp"
import RoarstrLogo from "../images/SuccessStories/Roadstr/roadstrlogo.png"
import WorktokLogo from "../images/SuccessStories/Worktok/worktoklogo.png"
import SpainHeritageLogo from "../images/SuccessStories/Spainheritagenetwork/spainheritageLogo.png"
import CoachVantageLogo from "../images/SuccessStories/Coachvantage/coachvantagLogo.png"
import QuantexLogo from "../images/SuccessStories/Quantex/quantexLogo.png"
import miuuLogo from "../images/SuccessStories/Miuu/miuuLogo.png"
import MyDoorWalletLogo from "../images/SuccessStories/Mydoorwallet/mydoorwalletLogo.png"
import TradlifeLogo from "../images/SuccessStories/Tradlife/tradlifeLogo.png"

import CoachVantageMockup from "../images/SuccessStories/Coachvantage/coachvantageMockups.png";
import AerlclodMockup from "../images/SuccessStories/Aerlcloud/aerlcloudMockups.png";
import TradelifeMockup from "../images/SuccessStories/Tradlife/tradelifeMockups.png"
import WorktokMockup from "../images/SuccessStories/Worktok/worktokMockups.png"
import QuantexMockup from "../images/SuccessStories/Quantex/quantexMockups.png"
import MiuuMockup from "../images/SuccessStories/Miuu/miuuMockups.png"
import SpainHeritageMockup from "../images/SuccessStories/Spainheritagenetwork/spainheritageMockups.png"
import DesignedMockup from "../images/SuccessStories/Designed/designedMockups.png"
import RoadstrMockups from "../images/SuccessStories/Roadstr/roadstrMockups.png"
import DoorMockups from "../images/SuccessStories/Mydoorwallet/doorMockups.png"
import { Link } from 'react-router-dom';

type SuccessStory = {
  project?: string;
  logo?: string;
  image?: string;
  logoStyle?: string;
};

const successStories: SuccessStory[] = [
  {
    project: "RoadStr.io",
    image: RoadstrMockups,
    logo: RoarstrLogo,
  },
  {
    project: "Spain Heritage Network",
    image: SpainHeritageMockup,
    logo: SpainHeritageLogo,
  },
  {
    project: "Aerl.Cloud",
    image: AerlclodMockup,
    logo: AerlLogo,
  },

  {
    project: "My Quantex",
    image: QuantexMockup,
    logo: QuantexLogo,
  },
  {
    project: "My Door Wallet",
    image: DoorMockups,
    logo: MyDoorWalletLogo,
  },
  {
    project: "Coachvantage",
    image: CoachVantageMockup,
    logo: CoachVantageLogo,
  },
  {
    project: "Designed",
    image: DesignedMockup,
    logo: DesignedLogo,
  },
  {
    project: "TradeLife",
    image: TradelifeMockup,
    logo: TradlifeLogo,
    logoStyle : '!h-6'
  },
  {
    project: "WorkTok",
    image: WorktokMockup,
    logo: WorktokLogo,
  },
  {
    project: "Miuu",
    image: MiuuMockup,
    logo: miuuLogo,
  },
]
const overallMetrics = [
  { label: "Client Success Rate", value: "98%", description: "of clients achieve their goals within 6 months" },
  { label: "Average ROI", value: "340%", description: "return on investment within first year" },
  { label: "Customer Satisfaction", value: "4.9/5", description: "based on 500+ reviews" },
  { label: "Projects Delivered", value: "1,200+", description: "successful implementations" }
];

const companyLogos = [
  { name: "Aerl", logo: AerlLogo, style: "h-10", link: "https://www.aerl.com.au/" },
  { name: "Live Beach Network", logo: BeachedLogo, style: "h-12", link: "https://beached.app/" },
  { name: "Designed", logo: DesignedLogo, style: "h-12", link: "https://designed.org/" },
  { name: "Nalda", logo: NaldaLogo, link: "https://nalda.ch/" },
  { name: "ROADSTR", logo: RoarstrLogo, link: "https://roadstr.io/" },
  { name: "WorkTok", logo: WorktokLogo, style: "h-12", link: "https://worktok.org/" }
];


const SuccessStories = () => {
  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium bg-emerald-100 text-emerald-700 border-emerald-200">
            Success Stories
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Real Results from
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Real Customers
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            See how leading companies across industries have transformed their businesses and achieved
            remarkable growth with our solutions.
          </p>

          {/* Overall Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {overallMetrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 h-full">
            {successStories?.map((item, index) => {
              return (
                <div key={index}>
                  <div className="pb-4 sm:pb-6 border-b-2">
                    <div className="rounded-2xl overflow-hidden">
                      <img src={item?.image} alt={item?.project}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-row justify-between sm:items-center gap-3 pt-3 sm:pt-4">
                    <img src={item?.logo} alt={item?.project}
                      className={`${item?.logoStyle} h-6 sm:h-8 md:h-10 object-contain sm:mx-0`}/>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold font-serif">{item?.project}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-14">
            Trusted by Leading Companies
          </h2>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center ">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center group"
              >
                {/* Logo Container */}
                <a href={`${company.link}`} target="_blank">
                  <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-xl group-hover:scale-[1.07] transition-transform duration-500 ease-in-out">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className={`max-h-20 mx-auto object-contain ${company.style}`}
                    />
                  </div>
                  {/* Company Name */}
                  <p className="text-sm font-medium text-gray-600">
                    {company.name}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join the ranks of successful companies that have transformed their business with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-gray-100">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SuccessStories
