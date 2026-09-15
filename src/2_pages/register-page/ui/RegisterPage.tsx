import { RegisterForm } from '@features/register';
import classes from '@pages/register-page/ui/RegisterPage.module.scss';

const RegisterPage: React.FC = () => {
  return (
    <section className={classes.registerPage}>
      <div className={classes.registerPageWrapper}>
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;
