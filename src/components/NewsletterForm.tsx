import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import type { InsertNewsletterSubscription } from "@shared/schema";
import { supabase } from "@/supabase/supabaseClient";

export default function NewsletterForm() {
  const { toast } = useToast();

  const form = useForm<InsertNewsletterSubscription>({
    defaultValues: {
      email: "",
    },
  });

  const subscribeMutation = useMutation({
    mutationFn: async (data: InsertNewsletterSubscription) => {
      const { data: response, error } = await supabase.functions.invoke("newsletters", {
        body: data,
      });
      if (error) {
        throw new Error(error.message || "Failed to subscribe to newsletter");
      }
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You've been successfully subscribed to our newsletter.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Failed to subscribe to newsletter. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Form submit handler
  const onSubmit = (data: InsertNewsletterSubscription) => {
    subscribeMutation.mutate(data);
  };


  return (
    <section
      id="newsletter"
      className="lg:py-16 sm:py-12 py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-cyan-500 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-spin-slow"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-slide-up">
          Stay Updated with AI Development Insights
        </h2>
        <p
          className="text-xl text-blue-100 mb-8 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Get the latest tips, tools, and trends in AI-powered development
          delivered to your inbox.
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 animate-scale-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 text-gray-900 placeholder-gray-500 hover:shadow-lg transition-shadow duration-300"
            {...form.register("email")}
            required
          />
          <Button
            type="submit"
            variant="secondary"
            disabled={subscribeMutation.isPending}
            className="bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
          >
            {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>

        {form.formState.errors.email && (
          <p className="text-red-200 text-sm mt-2">
            {form.formState.errors.email.message}
          </p>
        )}

        <p className="text-blue-100 text-sm mt-4">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
