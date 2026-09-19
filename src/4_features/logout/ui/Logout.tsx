import type { LogoutProps } from '@features/logout/types';
import classes from '@features/logout/ui/Logout.module.scss';
import Button from '@shared/ui/button/Button';

const Logout: React.FC<LogoutProps> = ({ children, onClick, ariaLabel, lang, isLoading, isDisabled }) => {
  return (
    <Button
      className={classes.logout}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      ariaLabel={ariaLabel}
      lang={lang}
    >
      {children}
    </Button>
  );
};

export default Logout;
