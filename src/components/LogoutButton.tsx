import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/supabase/supabaseClient';
import { useToast } from "@/hooks/use-toast";
import { LogOut } from 'lucide-react';

interface LogoutButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export default function LogoutButton({ 
  variant = "outline", 
  size = "default",
  className = ""
}: LogoutButtonProps) {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('Logout error:', error);
        toast({
          title: "Logout Failed",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      // Clear any localStorage tokens from old auth system
      localStorage.removeItem("cms_token");
      localStorage.removeItem("cms_user");
      
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
      
      navigate("/login");
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        title: "Logout Failed",
        description: "An unexpected error occurred during logout.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button 
      variant={variant} 
      size={size} 
      onClick={handleLogout}
      className={`flex items-center gap-2 ${className}`}
    >
      <LogOut className="w-4 h-4" />
      Logout
    </Button>
  );
}