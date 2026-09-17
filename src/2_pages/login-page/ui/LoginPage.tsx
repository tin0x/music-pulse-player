import { LoginForm } from '@features/login';
import classes from '@pages/register-page/ui/RegisterPage.module.scss';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle';

const LoginPage: React.FC = () => {
  useToggleTitle('Login');

  return (
    <section className={classes.registerPage}>
      <div className={classes.registerPageWrapper}>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
