import React from 'react';
import classes from '@pages/auth-page/ui/AuthPage.module.scss';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';
import { RegisterForm } from '@features/auth';

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
