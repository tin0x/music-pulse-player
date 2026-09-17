import { useLoginMutation } from '@features/login/api/authApi';
import type { LoginForm } from '@features/login/schemas/LoginSchema';
import type { UseLoginArgs } from '@features/login/types';
import type { ApiError } from '@features/register/types';

const useLogin = ({ setError }: UseLoginArgs) => {
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async ({ email, password }: LoginForm) => {
    try {
      await login({ email, password }).unwrap();
    } catch (error) {
      const apiError = error as ApiError;
      setError('root.serverError', {
        type: 'server',
        message: apiError.data.message,
      });
      console.log(`Status: ${apiError.status}: ${apiError.data.code}`);
      return;
    }
  };

  const formError: Record<string, string> = {
    en: 'Incorrect login or password',
    ua: 'Неправильний логін або пароль',
  };

  return { onSubmit, formError, isLoading };
};

export default useLogin;
