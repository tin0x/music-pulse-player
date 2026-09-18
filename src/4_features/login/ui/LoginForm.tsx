import useLanguage from '@app/providers/language/useLanguage';
import useLogin from '@features/login/model/useLogin';
import { LoginSchema } from '@features/login/schemas/LoginSchema';
import classes from '@features/login/ui/LoginForm.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate';
import Button from '@shared/ui/button/Button';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const {
    setError,
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(LoginSchema),
  });

  const { currentLanguage } = useLanguage();
  const t = getTranslate(currentLanguage);

  const { onSubmit, formError, isLoading } = useLogin({ setError });

  return (
    <form className={classes.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={classes.loginFormBlock}>
        <h1 className={classes.loginFormTitle}>{t.str.titleFormLogin}</h1>

        <div className={classes.loginFormInputs}>
          <div className={classes.loginFormInputBlock}>
            <label className={classes.loginFormLabel} htmlFor="email">
              {t.str.emailForm}
            </label>
            <input
              className={classes.loginFormInput}
              type="email"
              id="email"
              autoComplete="email"
              placeholder={t.str.emailPlaceholder}
              {...register('email')}
            />
          </div>

          <div className={classes.loginFormInputBlock}>
            <label className={classes.loginFormLabel} htmlFor="password">
              {t.str.passwordForm}
            </label>
            <input
              className={classes.loginFormInput}
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder={t.str.passwordPlaceholder}
              {...register('password')}
            />
          </div>

          <small
            className={clsx(classes.loginFormInfo, {
              [classes.loginFormInfoActive]: errors.root?.serverError?.message,
            })}
          >
            {formError[currentLanguage]}
          </small>
        </div>
      </fieldset>
      <Button className={classes.loginFormButton} disabled={!isValid || isLoading} type="submit">
        {t.str.buttonLoginForm}
      </Button>
      <p className={classes.loginFormTextLink}>
        <span>Don't have an account?</span>
        <Link to="/register">Register</Link>
      </p>{' '}
    </form>
  );
};

export default LoginForm;
