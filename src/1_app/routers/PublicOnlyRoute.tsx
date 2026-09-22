import useAuth from '@app/providers/auth/useAuth';
import GlobalLoader from '@shared/ui/global-loader/GlobalLoader';
import { Navigate, Outlet } from 'react-router-dom';

const PublicOnlyRoute = () => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) return <GlobalLoader />;

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicOnlyRoute;
