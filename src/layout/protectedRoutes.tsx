// ProtectedRoute.tsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient";

interface ProtectedProps {
  children: JSX.Element;
  redirectTo: string;
}

function ProtectedRoute({ children, redirectTo }: ProtectedProps) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Session check error:', error);
          setSession(null);
          setLoading(false);
          return;
        }

        const currentSession = data.session;
        
        // Check if session exists and is not expired
        if (!currentSession || (currentSession?.expires_at && currentSession.expires_at * 1000 < Date.now())) {
          setSession(null);
          setLoading(false);
          return;
        }

        setSession(currentSession);
        setLoading(false);
      } catch (error) {
        console.error('Session check error:', error);
        setSession(null);
        setLoading(false);
      }
    };

    checkSession();

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        
        if (event === 'SIGNED_OUT' || !session) {
          setSession(null);
          setLoading(false);
        } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
          setSession(session);
          setLoading(false);
        }
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    console.log('No session found, redirecting to:', redirectTo);
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}

export default ProtectedRoute;
