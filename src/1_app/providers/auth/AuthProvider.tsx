import AuthContext from '@app/providers/auth/AuthContext';
import useLanguage from '@app/providers/language/useLanguage';
import supabase from '@shared/api/supabase/client';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch';
import { showToast } from '@shared/lib/slices/toast/model/toastSlice';
import type { Session } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';

const errorMessages = {
  en: 'Failed to fetch the current session',
  ua: 'Не вдалося отримати поточну сесію',
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setSession(session);
        setIsLoading(false);
      } catch (error) {
        dispatch(showToast({ eventType: 'error', customMessage: errorMessages[currentLanguage] }));
        console.error(errorMessages[currentLanguage], error);
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
  }, [currentLanguage, dispatch]);

  return <AuthContext.Provider value={{ session, isAuth: !!session, isLoading }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
