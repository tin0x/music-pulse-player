import AuthContext from '@app/providers/auth/AuthContext';
import supabase from '@shared/api/supabase/client';
import type { Session } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setSession(session);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch the current session', error);
        setIsLoading(false);
      }
    };

    void fetchSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ session, isAuth: !!session, isLoading }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
