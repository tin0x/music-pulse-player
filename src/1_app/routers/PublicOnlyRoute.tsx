import useAuth from '@app/providers/auth/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const PublicOnlyRoute = () => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) return <p>Loading...</p>;

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicOnlyRoute;
