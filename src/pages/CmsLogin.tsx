import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { cmsLoginSchema, type CmsLogin } from "@shared/schema";
import { Shield } from "lucide-react";
import { supabase } from "../supabase/supabaseClient";

export default function CmsLogin() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const form = useForm<CmsLogin>({
    resolver: zodResolver(cmsLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    // Check Supabase session instead of localStorage
    const checkSupabaseAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate("/dashboard");
      } else {
        setIsAuthenticated(true);
      }
    };
    
    checkSupabaseAuth();
  }, [navigate]);

  if (!isAuthenticated) return null;

  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/dashboard` ,
        },
      });

      if (error) {
        console.error("Google login error:", error.message);
        toast({
          title: "Login Failed",
          description: error.message || "Google sign-in failed",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Google login error:", error);
      toast({
        title: "Login Failed", 
        description: "An unexpected error occurred during Google sign-in",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            HMR Technologies CMS
          </h1>
          <p className="text-gray-600">Content Management System</p>
        </div>

        {/* Login Form */}
        <Card className="shadow-xl border-0">
          {/* <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-xl text-center">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter your email"
                          disabled={loginMutation.isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="Enter your password"
                          disabled={loginMutation.isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary"
                  disabled={loginMutation.isPending}
                >
                  {loginMutation.isPending ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Signing In...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>Sign In</span>
                    </div>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent> */}
          <button
            onClick={signInWithGoogle}
            className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition duration-200 ease-in-out"
          >
            <img
              className="w-5 h-5 mr-2"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google logo"
            />
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Authorized personnel only</p>
        </div>
      </div>
    </div>
  );
}
