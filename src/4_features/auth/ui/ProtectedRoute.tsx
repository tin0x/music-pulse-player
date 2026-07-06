import React from 'react';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getIsAuth } from '@features/auth/model/selectors.ts';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const isAuth = useAppSelector(getIsAuth);

  if (!isAuth) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
