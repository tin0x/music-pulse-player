import React from 'react';
import classes from '@widgets/footer-widget/ui/FooterWIdget.module.scss';
import { useInitFooterWidget } from '@widgets/footer-widget/model/useInitFooterWidget.ts';
import clsx from 'clsx';

const FooterWidget: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentTrack } = useInitFooterWidget();

  return (
    <footer className={clsx(classes.footer, { [classes.footerHidden]: !currentTrack })}>
      <div className={classes.footerWrapper}>{children}</div>
    </footer>
  );
};

export default FooterWidget;
