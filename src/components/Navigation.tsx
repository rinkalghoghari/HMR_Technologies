import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Code,
  Palette,
  Globe,
  Smartphone,
  TestTube,
  Users,
  MessageSquare,
  Heart,
  ShoppingCart,
  Plane,
  Calendar,
  BarChart3,
  Layers,
  Trophy,
  Building2,
  InfoIcon,
  Briefcase,
  HelpCircle,
  BookOpen,
  Phone,
  CalendarDays,
} from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const location = useLocation();
  // for dropdown accordian
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const isMobileDropdownOpen = (name: string) => openDropdown === name;

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      dropdown: true,
      items: [
        {
          name: "Custom Software Development",
          path: "/services/custom-software",
          icon: Code,
          description: "Tailored software solutions for your business",
        },
        {
          name: "UI/UX Design",
          path: "/services/ui-ux-design",
          icon: Palette,
          description: "Beautiful and intuitive user experiences",
        },
        {
          name: "Web Development",
          path: "/services/web-development",
          icon: Globe,
          description: "Modern web applications and websites",
        },
        {
          name: "Mobile App Development",
          path: "/services/mobile-app",
          icon: Smartphone,
          description: "Native and cross-platform mobile apps",
        },
        {
          name: "QA & Testing",
          path: "/services/qa-testing",
          icon: TestTube,
          description: "Comprehensive quality assurance services",
        },
        {
          name: "Talent Solutions & IT Staff Augmentation",
          path: "/services/talent-solutions",
          icon: Users,
          description: "Expert developers and IT professionals",
        },
      ],
    },
    {
      name: "Solutions",
      dropdown: true,
      sections: [
        {
          title: "Platform Solutions",
          items: [
            {
              name: "Digital Community Platform",
              path: "/solutions/digital-community",
              icon: MessageSquare,
              description: "Build engaging online communities",
            },
            {
              name: "Dating Apps",
              path: "/solutions/dating-apps",
              icon: Heart,
              description: "Modern matchmaking platforms",
            },
            {
              name: "E-commerce Marketplaces",
              path: "/solutions/ecommerce-marketplaces",
              icon: ShoppingCart,
              description: "Scalable online marketplaces",
            },
            {
              name: "Travel & Hospitality",
              path: "/solutions/travel-hospitality",
              icon: Plane,
              description: "Travel booking and management systems",
            },
            {
              name: "Booking Platforms",
              path: "/solutions/booking-platforms",
              icon: Calendar,
              description: "Appointment and reservation systems",
            },
            {
              name: "SaaS Platforms",
              path: "/solutions/saas-platforms",
              icon: BarChart3,
              description: "Software as a Service solutions",
            },
            {
              name: "Marketplace Platforms",
              path: "/solutions/marketplace-platforms",
              icon: Layers,
              description: "Multi-vendor marketplace solutions",
            },
          ],
        },
      ],
    },
    {
      name: "Company",
      dropdown: true,
      items: [
        {
          name: "About Us",
          path: "/about",
          icon: InfoIcon,
          description: "Learn about our company and mission",
        },
        {
          name: "Careers",
          path: "/careers",
          icon: Briefcase,
          description: "Join our growing team",
        },
        {
          name: "FAQs",
          path: "/faq",
          icon: HelpCircle,
          description: "Frequently asked questions",
        },
        {
          name: "Blog",
          path: "/blog",
          icon: BookOpen,
          description: "Blogs",
        },
      ],
    },
    { name: "Success Stories", path: "/success-stories", icon: Trophy },
  ];

  const isActive = (path: string) => {
    if (path === "/services") {
      return (
        location.pathname === path || location.pathname.startsWith("/services/")
      );
    }
    return location.pathname === path;
  };

  const isDropdownActive = (item: any) => {
    if (item.items) {
      return item.items.some((subItem: any) => isActive(subItem.path));
    }
    if (item.sections) {
      return item.sections.some((section: any) =>
        section.items.some((subItem: any) => isActive(subItem.path)),
      );
    }
    return false;
  };

  useEffect(() => {
    const scriptUrl =
      "https://calendar.google.com/calendar/scheduling-button-script.js";

    const isScriptLoaded = () =>
      typeof window !== "undefined" && !!window.calendar;

    const loadCalendarButton = () => {
      // Find the current navigation's script tag specifically
      const currentScriptTag = document.querySelector(
        ".navigation-calendar-script[data-gcal-scheduling]",
      );

      // Check if button already exists for this script tag
      if (currentScriptTag?.hasAttribute('data-button-loaded')) {
        return; // Button already loaded for this instance
      }

      if (currentScriptTag && window.calendar && window.calendar.schedulingButton) {
        window.calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0p33jE1HcESBflV5jJu7bvb8ryT3HW5soW2JIAcu8qYSgzT5EblRdcZ92vQsfUeWsnTKqNH3p0?gv=true",
          color: "#039BE5",
          label: "Book A Meeting",
          target: currentScriptTag,
        });
        // Mark as loaded to prevent duplicates
        currentScriptTag.setAttribute('data-button-loaded', 'true');
      }
    };

    // If already loaded
    if (isScriptLoaded()) {
      loadCalendarButton();
    } else {
      // Check if global script already exists in DOM
      const existingScript = document.querySelector(
        `script[src="${scriptUrl}"]`,
      );

      if (!existingScript) {
        // Add the script to head (only once globally)
        const script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;
        document.head.appendChild(script);

        // Once script is loaded
        script.onload = () => {
          loadCalendarButton();
        };
      } else {
        // Wait for script to finish loading
        existingScript.addEventListener("load", loadCalendarButton);
      }
    }

    // Cleanup function to remove button when component unmounts
    return () => {
      const currentScriptTag = document.querySelector(
        ".navigation-calendar-script[data-gcal-scheduling]",
      );
      if (currentScriptTag) {
        currentScriptTag.removeAttribute('data-button-loaded');
      }
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <div className="transform transition-transform duration-300 group-hover:scale-105">
              <Logo className="h-12" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-12">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className={`flex items-center space-x-1 text-base xl:text-lg font-medium transition-all duration-300 hover:text-primary group ${isDropdownActive(item)
                        ? "text-primary font-semibold"
                        : "text-gray-700"
                        }`}
                      onMouseEnter={() => {
                        if (item.name === "Services") setServicesDropdown(true);
                        if (item.name === "Company") setCompanyDropdown(true);
                        if (item.name === "Solutions")
                          setSolutionsDropdown(true);
                      }}
                      onMouseLeave={() => {
                        if (item.name === "Services")
                          setTimeout(() => setServicesDropdown(false), 0);
                        if (item.name === "Company")
                          setTimeout(() => setCompanyDropdown(false), 0);
                        if (item.name === "Solutions")
                          setTimeout(() => setSolutionsDropdown(false), 0);
                      }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${(item.name === "Company" && companyDropdown) ||
                          (item.name === "Solutions" && solutionsDropdown)
                          ? "rotate-180"
                          : ""
                          }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 ${["Solutions", "Services"].includes(item?.name)
                        ? "w-[400px] max-w-[90vw]"
                        : "w-64"
                        } bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 ${(item.name === "Services" && servicesDropdown) ||
                          (item.name === "Company" && companyDropdown) ||
                          (item.name === "Solutions" && solutionsDropdown)
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-2 invisible"
                        }`}
                      onMouseEnter={() => {
                        if (item.name === "Services") setServicesDropdown(true);
                        if (item.name === "Company") setCompanyDropdown(true);
                        if (item.name === "Solutions")
                          setSolutionsDropdown(true);
                      }}
                      onMouseLeave={() => {
                        if (item.name === "Services") setServicesDropdown(false);
                        if (item.name === "Company") setCompanyDropdown(false);
                        if (item.name === "Solutions")
                          setSolutionsDropdown(false);
                      }}
                    >
                      {/* Solutions Multi-Section Dropdown */}
                      {item.name === "Solutions" ? (
                        <div className="p-6">
                          <div className="grid grid-cols-1 gap-8">
                            {(item as any).sections.map(
                              (section: any, sectionIndex: number) => (
                                <div key={section.title} className="space-y-4">
                                  <div className="mb-4">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                                      {section.title}
                                    </h4>
                                    {section.title === "Resources" && (
                                      <hr className="border-gray-200 mb-4" />
                                    )}
                                  </div>

                                  <div className="space-y-2">
                                    {section.items.map((subItem: any, index: number) => (
                                      <Link
                                        key={subItem.path}
                                        to={subItem.path}
                                        className={`group/nav flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 hover:bg-primary/5 ${isActive(subItem.path)
                                          ? "bg-primary/5 border-l-2 border-primary"
                                          : ""
                                          }`}
                                      >
                                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center">
                                          {React.createElement(subItem.icon, {
                                            className: "w-4 h-4 text-primary",
                                          })}
                                        </div>
                                        <div className="flex-1">
                                          <h5 className={`text-sm font-medium text-gray-700 ${isActive(subItem.path) ? "text-primary" : ""} group-hover/nav:text-primary transition-colors`}>
                                            {subItem.name}
                                          </h5>
                                          <p className="text-xs text-gray-600">
                                            {subItem.description}
                                          </p>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      ) : item.name === "Services" ? (
                        /* Services dropdown with icons and descriptions */
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-3">
                            {(item as any).items?.map(
                              (subItem: any, index: number) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className={`group/nav flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 hover:bg-primary/5 ${isActive(subItem.path)
                                    ? "bg-primary/5 border-l-2 border-primary"
                                    : ""
                                    }`}
                                >
                                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center">
                                    {React.createElement(subItem.icon, {
                                      className: "w-4 h-4 text-primary",
                                    })}
                                  </div>
                                  <div className="flex-1">
                                    <h5 className={`text-sm font-medium text-gray-700 ${isActive(subItem.path) ? "text-primary" : ""} group-hover/nav:text-primary transition-colors`}>
                                      {subItem.name}
                                    </h5>
                                    <p className="text-xs text-gray-600">
                                      {subItem.description}
                                    </p>
                                  </div>
                                </Link>
                              ),
                            )}
                          </div>
                        </div>
                      ) : (
                        /* Simple dropdown for Company */
                        <div className="py-2">
                          {(item as any).items?.map(
                            (subItem: any, index: number) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className={`group flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-primary/5 hover:text-primary ${isActive(subItem.path)
                                  ? "text-primary bg-primary/5 border-r-2 border-primary"
                                  : "text-gray-700"
                                  }`}
                              >
                                {subItem.icon && (
                                  <div className="flex-shrink-0 w-5 h-5 text-primary">
                                    {React.createElement(subItem.icon, {
                                      className: "w-5 h-5",
                                    })}
                                  </div>
                                )}
                                <span>{subItem.name}</span>
                              </Link>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item?.path ?? "#"}
                    className={`relative text-base lg:text-lg font-medium transition-all duration-300 hover:text-primary group ${item.path && isActive(item.path)
                      ? "text-primary font-semibold"
                      : "text-gray-700"
                      }`}
                  >
                    <span className="relative z-10 text-base xl:text-lg">{item.name}</span>
                    <div
                      className={`absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform transition-all duration-300 ${item.path && isActive(item.path)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-75"
                        }`}
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3 ms-0">
            <Button
              variant="outline"
              asChild
              className="px-6 py-2 text-sm font-medium border-2 hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-md"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            <script className="navigation-calendar-script" data-gcal-scheduling></script>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <div
                className={`absolute inset-0 transform transition-transform duration-300 ${isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                  }`}
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </div>
              <div
                className={`absolute inset-0 transform transition-transform duration-300 ${isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                  }`}
              >
                <X className="w-6 h-6 text-gray-700" />
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen
            ? "max-h-screen opacity-100 pb-6"
            : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="pt-4 space-y-2 overflow-auto max-h-screen hide-scrollbar">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.dropdown ? (
                  <div className="space-y-2">
                    <button
                      className={`flex items-center justify-between w-full px-4 py-3 text-left text-base font-medium rounded-lg transition-all duration-300 ${isMobileDropdownOpen(item.name)
                        ? "text-primary bg-primary/10"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                        }`}
                      onClick={() => {
                        setOpenDropdown(openDropdown === item.name ? null : item.name);
                      }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isMobileDropdownOpen(item.name) ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <div
                      className={`ml-4 space-y-1 transform transition-all duration-300 ${isMobileDropdownOpen(item.name)
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                    >

                      {/* Mobile dropdown content */}
                      {item.name === "Solutions" ? (
                        <div className="space-y-4">
                          {(item as any).sections.map(
                            (section: any, sectionIndex: number) => (
                              <div key={section.title} className="space-y-2">
                                <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-4">
                                  {section.title}
                                </h5>
                                {section.items.map(
                                  (subItem: any, subIndex: number) => (
                                    <Link
                                      key={subItem.path}
                                      to={subItem.path}
                                      className={`flex items-center space-x-3 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive(subItem.path)
                                        ? "text-primary bg-primary/10"
                                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                                        }`}
                                      style={{
                                        animationDelay: `${(sectionIndex * section.items.length + subIndex) * 30}ms`,
                                      }}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setServicesDropdown(false);
                                        setCompanyDropdown(false);
                                        setSolutionsDropdown(false);
                                      }}
                                    >
                                      <div className="w-6 h-6 bg-gradient-to-br from-primary/10 to-primary/20 rounded-md flex items-center justify-center">
                                        {React.createElement(subItem.icon, {
                                          className: "w-3 h-3 text-primary",
                                        })}
                                      </div>
                                      <span>{subItem.name}</span>
                                    </Link>
                                  ),
                                )}
                              </div>
                            ),
                          )}
                        </div>
                      ) : (
                        (item as any).items?.map(
                          (subItem: any, subIndex: number) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive(subItem.path)
                                ? "text-primary bg-primary/10"
                                : "text-gray-600 hover:text-primary hover:bg-gray-50"
                                }`}
                              style={{ animationDelay: `${subIndex * 50}ms` }}
                              onClick={() => {
                                setIsOpen(false);
                                setServicesDropdown(false);
                                setCompanyDropdown(false);
                                setSolutionsDropdown(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ),
                        )
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item?.path ?? "#"}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${item.path && isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3">
              <Button
                variant="outline"
                asChild
                className="w-full justify-center py-3 text-base font-medium border-2 hover:border-primary hover:text-primary"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
