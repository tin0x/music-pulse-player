import useAuth from '@app/providers/auth/useAuth';
import GlobalLoader from '@shared/ui/global-loader/GlobalLoader';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) {
    return <GlobalLoader />;
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
