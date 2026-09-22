import classes from '@app/layouts/auth-layout/AuthLayout.module.scss';
import useScrollToTop from '@shared/lib/hooks/ui/useScrollToTop';
import Container from '@shared/ui/container/Container';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  useScrollToTop();

  return (
    <div className={classes.authLayout}>
      <main className={classes.authLayoutMain}>
        <Container className={classes.authLayoutContainer}>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};

export default AuthLayout;
