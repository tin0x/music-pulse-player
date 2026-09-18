import useLogout from '@features/logout/model/useLogout';
import type { LogoutProps } from '@features/logout/types';
import classes from '@features/logout/ui/Logout.module.scss';
import Button from '@shared/ui/button/Button';

const Logout: React.FC<LogoutProps> = ({ children, ariaLabel, lang, isDisabled }) => {
  const { isLoading, handleLogout } = useLogout();

  return (
    <Button
      className={classes.logout}
      onClick={handleLogout}
      disabled={isDisabled || isLoading}
      ariaLabel={ariaLabel}
      lang={lang}
    >
      {children}
    </Button>
  );
};

export default Logout;
