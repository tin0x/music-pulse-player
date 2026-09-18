import { useLogoutMutation } from '@features/logout/api/authApi';
import type { ApiError } from '@features/logout/types';

const useLogout = () => {
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      const errorInfo = error as ApiError;
      console.error(`${errorInfo.status} : ${errorInfo.data.message}`);
    }
  };

  return { isLoading, handleLogout };
};

export default useLogout;
