import classes from '@shared/ui/global-loader/GlobalLoader.module.scss';
import Loader from '@shared/ui/loader/Loader';

const GlobalLoader = () => {
  return (
    <div className={classes.globalLoader}>
      <Loader className={classes.globalLoaderCircle} />
    </div>
  );
};

export default GlobalLoader;
