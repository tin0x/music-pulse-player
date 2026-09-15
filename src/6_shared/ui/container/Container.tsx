import classes from '@shared/ui/container/Container.module.scss';
import type { ContainerProps } from '@shared/ui/container/types';
import clsx from 'clsx';

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return <div className={clsx(classes.container, className)}>{children}</div>;
};

export default Container;
