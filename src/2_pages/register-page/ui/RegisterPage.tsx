import { RegisterForm } from '@features/register';
import classes from '@pages/register-page/ui/RegisterPage.module.scss';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle';

const RegisterPage: React.FC = () => {
  useToggleTitle('Register');

  return (
    <section className={classes.registerPage}>
      <div className={classes.registerPageWrapper}>
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;
