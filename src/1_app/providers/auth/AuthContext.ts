import type { Session } from '@supabase/supabase-js';
import { createContext } from 'react';

type AuthContextType = {
  session: Session | null;
  isAuth: boolean;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
