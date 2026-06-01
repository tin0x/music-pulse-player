import React from 'react';
import classes from '@pages/auth-page/ui/AuthPage.module.scss';
import RegisterForm from '@features/auth/ui/RegisterForm.tsx';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';

const AuthPage: React.FC = () => {
  useToggleTitle('Music Pulse | Authorization');

  return (
    <section className={classes.auth}>
      <div className={classes.authWrapper}>
        <RegisterForm />
      </div>
    </section>
  );
};

export default AuthPage;
