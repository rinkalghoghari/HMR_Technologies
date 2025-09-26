import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import { InferType } from "yup";

import { supabase } from "@/supabase/supabaseClient";
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "@/schema/contect.schema";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Breadcrumb from "@/components/Breadcrumb";


declare global {
    interface Window {
        grecaptcha: any;
        calendar?: {
            schedulingButton: {
                load: (options: {
                    url: string;
                    color?: string;
                    label?: string;
                    target: any;
                }) => void;
            };
        };

    }
}

type InsertContactSubmission = InferType<typeof contactSchema>;

const ContactForm = ({ showBreadcrumb, showButton }: any) => {
    const { toast } = useToast();
    const recaptchaRef = useRef<HTMLDivElement>(null);
    const [recaptchaToken, setRecaptchaToken] = useState<string>("");
    const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);

    const form = useForm<InsertContactSubmission>({
        resolver: yupResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            projectType: "",
            budget: "",
            details: "",
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
                    'expired-callback': () => {
                        setRecaptchaToken("");
                    }
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


    const contactMutation = useMutation({
        mutationFn: async (data: InsertContactSubmission & { recaptchaToken: string }) => {
            const { data: response, error } = await supabase.functions.invoke("leads", {
                body: data,
            });
            if (error) {
                throw new Error(error.message || 'Failed to submit lead');
            }
            return response
        },
        onSuccess: () => {
            toast({
                title: "Message sent!",
                description: "We'll get back to you within 24 hours.",
            });
            form.reset({
                name: "",
                email: "",
                phone: "",
                company: "",
                projectType: "",
                budget: "",
                details: "",
            });
            setRecaptchaToken("");
            if (window.grecaptcha && isRecaptchaLoaded) {
                window.grecaptcha.reset();
            }
        },
        onError: (error: any) => {
            toast({
                title: "Failed to send message",
                description: error.message || "Please try again later.",
                variant: "destructive",
            });
            if (window.grecaptcha && isRecaptchaLoaded) {
                window.grecaptcha.reset();
            }
            setRecaptchaToken("");
        },
    });

    const onSubmit = (data: InsertContactSubmission) => {


        if (!recaptchaToken) {
            toast({
                title: "reCAPTCHA required",
                description: "Please complete the reCAPTCHA verification.",
                variant: "destructive",
            });
            return;
        }

        contactMutation.mutate({
            ...data,
            recaptchaToken: recaptchaToken,
        });
    };

    const handleChatClick = () => {
        const Tawk = window.Tawk_API;
        if (!Tawk) return;
        if (typeof Tawk.isChatMaximized === "function") {
            if (Tawk.isChatMaximized()) {
                Tawk.minimize();
            } else {
                Tawk.maximize();
            }
        } else {
            Tawk.maximize();
        }
    };


    return (
        <section className="bg-gradient-to-br from-gray-50 to-white lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        {
                            showBreadcrumb && (
                                <div className="mb-4">
                                    <Breadcrumb
                                        items={[
                                            { label: "Home", href: "/" },
                                            { label: "Contact Us" },
                                        ]}
                                    />
                                </div>
                            )
                        }
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
                                <span className="text-blue-600 font-medium text-sm">
                                    ✨ Get In Touch
                                </span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 mb-6">
                                Let's Build Something
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                    Amazing Together
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-600 sm:mb-8 mb-4 leading-relaxed">
                                Have a project in mind? We'd love to hear about it. Share your
                                vision with us and let's turn your ideas into reality with
                                cutting-edge technology and innovative solutions.
                            </p>

                            {
                                showButton && (
                                    <div className="flex flex-wrap gap-4 sm:gap-5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="px-6 sm:px-8 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary transform hover:scale-105 transition-all"
                                            onClick={handleChatClick}
                                        >
                                            <Link to="/contact">Start Chat →</Link>
                                        </Button>
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="lg"
                                            className="px-6 sm:px-8 border-2 hover:bg-gradient-to-r hover:from-primary/10 hover:to-blue-600/10 transform hover:scale-105 transition-all"
                                        >
                                            <Link to="/calendar">Book Call →</Link>
                                        </Button>
                                    </div>
                                )
                            }
                            <div className="grid grid-cols-1 sm:grid-cols-3 xl:gap-6 gap-3 pt-4">
                                <div className="text-center p-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">⚡</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">
                                        Fast Response
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        We'll get back to you within 24 hours
                                    </p>
                                </div>
                                <div className="text-center p-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">🎯</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">
                                        Tailored Solutions
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Custom solutions for your specific needs
                                    </p>
                                </div>
                                <div className="text-center p-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-2xl">🚀</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">
                                        Expert Team
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Experienced developers and designers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="contact-form"
                        className="bg-white rounded-2xl shadow-xl sm:p-8 p-4 border border-gray-100"
                    >
                        <div className="mb-8 text-center">
                            <p className="text-gray-600 text-left text-[16px] font-normal">
                                Fill out the form below and we'll get back to you with a
                                personalized proposal for your project.
                            </p>
                        </div>
                        <form
                            onSubmit={form.handleSubmit(onSubmit, (errors: any) => {
                                // console.log("Validation errors", errors);
                            })} className="space-y-6"
                        >

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name*
                                    </label>
                                    <Input
                                        placeholder="Enter Your Name"
                                        {...form.register("name")}
                                        className="focus-ring h-12"
                                    />
                                    {form.formState.errors.name && (
                                        <p className="text-red-600 text-sm mt-1">
                                            {form.formState.errors.name.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address*
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="Enter Your Email Address"
                                        {...form.register("email")}
                                        className="focus-ring h-12"
                                    />
                                    {form.formState.errors.email && (
                                        <p className="text-red-600 text-sm mt-1">
                                            {form.formState.errors.email.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number*
                                </label>

                                <PhoneInput
                                    country={'in'}
                                    value={form.watch("phone")}

                                    containerClass="w-full"
                                    inputStyle={{
                                        width: "100%",
                                        height: '3rem',
                                    }}
                                    inputClass="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400
                    focus-visible:!outline-blue-200 focus-visible:!outline focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2
                    disabled:cursor-not-allowed disabled:opacity-50"
                                    onChange={(phone) => form.setValue('phone', phone, { shouldValidate: true })}

                                />

                                {form.formState.errors.phone && (
                                    <p className="text-red-600 text-sm mt-1">
                                        {form.formState.errors.phone.message}
                                    </p>
                                )}
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Category
                                    </label>
                                    <Select
                                        value={form.watch("projectType") as string}
                                        onValueChange={(value) =>
                                            form.setValue("projectType", value, { shouldValidate: true })
                                        }
                                    >
                                        <SelectTrigger className="focus-ring h-12" aria-labelledby="projectType">
                                            <SelectValue placeholder="Select Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Web Development">
                                                Web Development
                                            </SelectItem>
                                            <SelectItem value="Mobile App Development">
                                                Mobile App Development
                                            </SelectItem>
                                            <SelectItem value="UI/UX Design">
                                                UI/UX Design
                                            </SelectItem>
                                            <SelectItem value="Custom Software">
                                                Custom Software
                                            </SelectItem>
                                            <SelectItem value="QA Testing">QA Testing</SelectItem>
                                            <SelectItem value="Talent Solutions">
                                                Talent Solutions
                                            </SelectItem>
                                            <SelectItem value="AI Integration">
                                                AI Integration
                                            </SelectItem>
                                            <SelectItem value="Consulting">Consulting</SelectItem>
                                            <SelectItem value="Other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {form.formState.errors.projectType && (
                                        <p className="text-red-600 text-sm mt-1">
                                            {form.formState.errors.projectType.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Budget
                                    </label>
                                    <Select
                                        value={form.watch("budget") as string || ""}
                                        onValueChange={(value) => form.setValue("budget", value, { shouldValidate: true })}
                                    >
                                        <SelectTrigger className="focus-ring h-12" aria-labelledby="budget">
                                            <SelectValue placeholder="Select Budget" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="under-10k">Under $10,000</SelectItem>
                                            <SelectItem value="10k-25k">
                                                $10,000 - $25,000
                                            </SelectItem>
                                            <SelectItem value="25k-50k">
                                                $25,000 - $50,000
                                            </SelectItem>
                                            <SelectItem value="50k-100k">
                                                $50,000 - $100,000
                                            </SelectItem>
                                            <SelectItem value="100k-250k">
                                                $100,000 - $250,000
                                            </SelectItem>
                                            <SelectItem value="250k-plus">$250,000+</SelectItem>
                                            <SelectItem value="discuss">Let's Discuss</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {form.formState.errors.budget && (
                                        <p className="text-red-600 text-sm mt-1">
                                            {form.formState.errors.budget.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <Textarea
                                    rows={5}
                                    placeholder="Enter Your Message"
                                    {...form.register("details")}
                                    className="focus-ring resize-none"
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
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors duration-200"
                                disabled={contactMutation.isPending || !isRecaptchaLoaded || !recaptchaToken}
                            >
                                {contactMutation.isPending ? "Submitting..." : "Submit"}
                            </Button>
                        </form>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
