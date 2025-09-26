import { useState, useEffect, useRef } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Building } from "lucide-react";
import type { InsertJobApplication, JobListing } from "@shared/schema";
import PageHero from "@/components/PageHero";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "react-router-dom";
import { supabase } from "@/supabase/supabaseClient";
import { CareerFormValues, careerSchema } from "@/schema/career.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

declare global {
  interface Window {
    grecaptcha: any;
  }
}


export default function Careers() {
  usePageTitle(
    "Careers at HMR Technologies | Join Our Expert Team",
    "Explore careers at HMR Technologies. Join our expert IT, web, and mobile team to grow your skills, build your future, and achieve success today!",
  );


  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const { data: jobs = [] } = useQuery({
    queryKey: ["job-listings"],
    queryFn: async () => {
      const { data: res, error } = await supabase.functions.invoke("job-listings", {
        method: "GET",
      });
      if (error) {
        throw new Error("Failed to fetch job listings");
      }
      const data = await res;
      return data?.jobs ?? []
    },
  });

  const form = useForm<CareerFormValues>({
    resolver: yupResolver(careerSchema),
    defaultValues: {
      name: "",
      email: "",
      position: "",
      coverLetter: "",
      resumeUrl: "",
    },
  });

  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha && recaptchaRef.current) {
        window.grecaptcha.render(recaptchaRef.current, {
          sitekey: "6LcEvXQrAAAAAAnfpPtr8uO8o1OBY0i4jFY-NPqk",
          // sitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
          callback: (token: string) => {
            setRecaptchaToken(token);
          },
          "expired-callback": () => {
            setRecaptchaToken("");
          },
        });
        setIsRecaptchaLoaded(true);
      }
    };

    if (window.grecaptcha) {
      loadRecaptcha();
    } else {
      const checkRecaptcha = setInterval(() => {
        if (window.grecaptcha) {
          loadRecaptcha();
          clearInterval(checkRecaptcha);
        }
      }, 100);
    }
  }, []);


  const applicationMutation = useMutation<any, any, FormData>({
    mutationFn: async (formData) => {
      const { data: response, error } = await supabase.functions.invoke("careers", {
        method: "POST",
        body: formData,
      });
      if (error) {
        throw new Error(`Failed to create career: ${error.message}`);
      }
      return response
    },
    onSuccess: () => {
      toast({
        title: "Application submitted!",
        description: "We'll review your application and get back to you soon.",
      });
      form.reset();
      setSelectedJob(null);
      setRecaptchaToken("");
      setIsUploaded(false);

      // Reset reCAPTCHA
      if (window.grecaptcha && isRecaptchaLoaded) {
        window.grecaptcha.reset();
      }
    },
    onError: (error: any) => {
      toast({
        title: "Application failed",
        description:
          error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
      setRecaptchaToken("");
    },
  });

  const onSubmit = async (data: InsertJobApplication) => {
    if (!recaptchaToken) {
      toast({
        title: "reCAPTCHA required",
        description: "Please complete the reCAPTCHA verification.",
        variant: "destructive",
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", data.name as string);
      formData.append("email", data.email as string);
      formData.append("mobile", data.mobile as string);
      formData.append("city", data.city as string);
      formData.append("position", data.position as string);
      formData.append("coverLetter", data.coverLetter as string);

      if (selectedFile) {
        formData.append("resume", selectedFile);
      }

      await applicationMutation.mutateAsync(formData);

      form.reset();
      setSelectedJob(null);
      setRecaptchaToken("");
      setSelectedFile(null);

      if (window.grecaptcha) window.grecaptcha.reset();
    } catch (err: any) {
      toast({
        title: "Application failed",
        description: err.message || "Something went wrong.",
        variant: "destructive",
      });
    }
  };

  const handleApply = (job: JobListing) => {
    setSelectedJob(job);
    form.setValue("position", job.title);

    // Reset form and prefill with job data
    form.reset({
      name: "",
      email: "",
      mobile: "",
      city: "",
      position: job.title,
      coverLetter: `I am interested in applying for the ${job.title} position. I believe my skills and experience align well with the requirements for this role.`,
      resumeUrl: "",
    });

    document
      .getElementById("application-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        variant="careers"
        subtitle="Join Our Team"
        title="Shape the Future of Development"
        description="Help us pioneer the next generation of AI-powered development. Join a team that's pushing the boundaries of what's possible with technology."
        rightContent="testimonial"
        breadItems={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      >
        <Button asChild size="lg">
          <Link to="#open-positions">View Open Positions</Link>
        </Button>
      </PageHero>

      {/* Why Work With Us Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:mb-12 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us to make a real impact and advance your career in a
              dynamic, inclusive environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First Row */}
            <Card className="sm:p-6 p-3 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Friendly environment
                </h3>
                <p className="text-gray-600 text-sm">
                  We foster a collaborative and supportive work atmosphere,
                  where every team member feels valued and empowered to succeed.
                </p>
              </div>
            </Card>

            <Card className="sm:p-6 p-3 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Flexible timing
                </h3>
                <p className="text-gray-600 text-sm">
                  Enjoy flexible working hours that let you balance your
                  professional and personal life effectively.
                </p>
              </div>
            </Card>

            <Card className="sm:p-6 p-3 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Flexible leave policy
                </h3>
                <p className="text-gray-600 text-sm">
                  Our leave policy is designed to accommodate your needs,
                  offering you the flexibility to take time off when needed.
                </p>
              </div>
            </Card>

            {/* Second Row */}
            <Card className="sm:p-6 p-3 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Overtime allowance
                </h3>
                <p className="text-gray-600 text-sm">
                  We recognize and reward the extra effort with a fair overtime
                  allowance to compensate for your hard work.
                </p>
              </div>
            </Card>

            <Card className="sm:p-6 p-3 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Celebration and activity
                </h3>
                <p className="text-gray-600 text-sm">
                  We believe in working hard and celebrating together with
                  regular team activities, events and celebrations throughout
                  the year.
                </p>
              </div>
            </Card>

            <Card className="sm:p-6 p-3 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Annual trip
                </h3>
                <p className="text-gray-600 text-sm">
                  Join us for exciting annual trips, a perfect way to unwind and
                  strengthen team bonds in a fun and relaxed setting.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Build Your Career With HMR Section */}
      <section className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:mb-12 mb-6">
            <p className="text-sm font-medium text-blue-600 mb-2 tracking-wide uppercase">
              Why HMR Technologies
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Build Your Career With HMR Technologies?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Be part of a team that is not just a family but a tech powerhouse
              pushing your growth, value your ideas, and achieve your career
              goals.
            </p>
          </div>

          {/* Hero Card */}
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl sm:p-8 p-4 mb-8 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Team That Values Innovation, Growth & Well-Being
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize the growth, well-being, and success of our people.
                Our supportive culture ensures you have the resources and
                opportunities to achieve both personal and professional goals.
                Our mission is to enable every individual to reach their full
                potential through cutting-edge technology solutions.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/Careers/Careers.jpeg"
                alt="Team collaboration at HMR Technologies"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 sm:gap-8 gap-4">
            <div className="bg-blue-50 rounded-2xl sm:p-8 p-4">
              <div className="flex items-start justify-between sm:mb-6 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Skill Development
                  </h3>
                  <p className="text-gray-600">
                    Benefit from our skill-development resources and thrive in a
                    culture that supports your growth.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-500">
                    Learning Resources
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-2xl sm:p-8 p-4">
              <div className="flex items-start justify-between sm:mb-6 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Leadership Support
                  </h3>
                  <p className="text-gray-600">
                    Receive guidance and mentorship from experienced leaders
                    dedicated to your success.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-600">5+</div>
                  <div className="text-sm text-gray-500">
                    Years of Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section
        id="open-positions"
        className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="sm:mb-12 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Open Positions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
              We're always on the lookout for talented individuals passionate
              about technology. Explore our open positions and be part of a team
              that's driving innovation and delivering excellence.
            </p>
          </div>

          <div className="space-y-4">
            {jobs?.map((job: any) => (
              <div
                key={job.id}
                className="bg-white rounded-xl sm:p-6 p-3 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-center justify-between flex-wrap">
                  <div className="flex items-center gap-4">
                    {/* Job Icon */}
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{job.icon || "💼"}</span>
                    </div>

                    {/* Job Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex items-center sm:gap-6 gap-3 text-sm text-gray-600 flex-wrap">
                        <span>
                          <strong>Experience:</strong> {job.experienceMin} -{" "}
                          {job.experienceMax} Years
                        </span>
                        <span>
                          <strong>Vacancies:</strong> {job.vacancies}
                        </span>
                        <span>
                          <strong>Work time:</strong> {job.workType}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <Button
                    onClick={() => handleApply(job)}
                    className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-medium ms-auto sm:mt-0 mt-2"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {jobs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Open Positions
              </h3>
              <p className="text-gray-600">
                We don't have any open positions at the moment. Please check
                back later or reach out to us directly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section
        id="application-form"
        className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 sm:gap-16 gap-8 items-start">
            {/* Left Side - Company Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Join Our Innovation Journey
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  At HMR Technologies, we're building the future of development
                  with cutting-edge AI tools and methodologies. Join our team of
                  passionate innovators and be part of something extraordinary.
                </p>
              </div>

              {/* Company Achievements */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    55+
                  </div>
                  <div className="text-sm text-gray-600">
                    Projects Delivered
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    25+
                  </div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    5+
                  </div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    85%
                  </div>
                  <div className="text-sm text-gray-600">Client Retantion</div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Choose HMR Technologies?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600">
                      Competitive salary and benefits package
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600">
                      Remote-first work culture with flexible timing
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600">
                      Latest AI development tools and technologies
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600">
                      Continuous learning and skill development
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600">
                      Collaborative and innovative team environment
                    </span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Get in Touch
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>📧 hr@hmrtechnologies.com</p>
                  <p>📱 +91 94086 52165</p>
                  <p>🌐 www.hmrtechnologies.com</p>
                </div>
              </div>
            </div>

            {/* Right Side - Application Form */}
            <div className="bg-white rounded-2xl sm:p-8 p-4 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Apply Now</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </Button>
              </div>

              {selectedJob && (
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {selectedJob.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    {selectedJob.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Requirements:</strong> {selectedJob.requirements}
                  </p>
                </div>
              )}

              <form
                onSubmit={form.handleSubmit(onSubmit, (errors) => {
                  // console.log("Validation errors", errors);
                })}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="sm:mb-0 mb-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name*
                    </label>
                    <Input
                      placeholder="Name"
                      {...form.register("name")}
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-600 text-sm mt-1">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email*
                    </label>
                    <Input
                      type="email"
                      placeholder="Email"
                      {...form.register("email")}
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-600 text-sm mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="sm:mb-0 mb-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number*
                    </label>

                    <PhoneInput
                      country={'in'}
                      containerClass="w-full"
                      inputStyle={{
                        width: "100%",
                        height: '3rem',
                      }}
                      inputClass="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      value={form.watch('mobile')}
                      onChange={(value) => form.setValue('mobile', value, { shouldValidate: true })}
                      onBlur={() => form.trigger('mobile')}
                      inputProps={{
                        name: 'mobile',
                        required: true,
                      }}
                    />
                    {form.formState.errors.mobile && (
                      <p className="text-red-600 text-sm mt-1">
                        {form.formState.errors.mobile.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City*
                    </label>
                    <Input
                      placeholder="City"
                      {...form.register("city")}
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                    {form.formState.errors.city && (
                      <p className="text-red-600 text-sm mt-1">
                        {form.formState.errors.city.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position*
                  </label>
                  <Select
                    value={form.watch("position")}
                    onValueChange={(value) => form.setValue("position", value, { shouldValidate: true })}
                  >
                    <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select Position" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobs.map((job: any) => (
                        <SelectItem key={job.id} value={job.title}>
                          {job.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.position && (
                    <p className="text-red-600 text-sm mt-1">
                      {form.formState.errors.position.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload*
                  </label>

                  <div
                    className={`border-2 border-dashed ${isUploaded ? "border-green-400" : "border-blue-300"
                      } rounded-lg p-5 text-center`}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>

                      <p className="text-sm text-gray-600 mb-2">
                        Upload or drop a file right here
                      </p>

                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        id="cv-upload"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setSelectedFile(file);
                            setIsUploaded(true);
                          } else {
                            setSelectedFile(null);
                            setIsUploaded(false);
                          }
                        }}

                      />
                      <label
                        htmlFor="cv-upload"
                        className={`cursor-pointer text-blue-600 hover:text-blue-700 text-sm underline ${isUploaded ? "pointer-events-none opacity-50" : ""
                          }`}
                      >
                        {isUploaded ? "Uploaded" : "Browse files"}
                      </label>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                  {/* {form.formState.errors.resumeUrl && (
                    <p className="text-red-600 text-sm mt-1">
                      {form.formState.errors.resumeUrl.message}
                    </p>
                  )} */}

                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter (Optional)
                  </label>
                  <Textarea
                    rows={4}
                    placeholder="Tell us why you're interested in this position..."
                    {...form.register("coverLetter")}
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <div ref={recaptchaRef} className="mb-4 captcha"></div>
                  {!recaptchaToken && (
                    <p className="text-sm text-gray-500 mb-2">
                      Please complete the reCAPTCHA verification
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg mt-6"
                  disabled={
                    applicationMutation.isPending ||
                    !isRecaptchaLoaded ||
                    !recaptchaToken
                  }
                >
                  {applicationMutation.isPending
                    ? "Submitting..."
                    : "Submit Application"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
