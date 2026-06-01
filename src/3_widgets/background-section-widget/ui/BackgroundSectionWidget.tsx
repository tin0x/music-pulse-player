import React from 'react';
import classes from '@widgets/background-section-widget/ui/BackgroundSectionWidget.module.scss';
import type { BackgroundSectionWidgetProps } from '@widgets/background-section-widget/types.ts';
import { useInitBackgroundSectionWidget } from '@widgets/background-section-widget/model/useInitBackgroundSectionWidget.ts';

const BackgroundSectionWidget: React.FC<BackgroundSectionWidgetProps> = ({ idParam, type }) => {
  const { backgroundUrl, isLoading } = useInitBackgroundSectionWidget(idParam, type);

  if (isLoading || !backgroundUrl || backgroundUrl === '') {
    return <div className={classes.backgroundSection} style={{ background: 'var(--color-bg-main)' }}></div>;
  }

  return <div className={classes.backgroundSection} style={{ backgroundImage: `url(${backgroundUrl})` }}></div>;
};

export default BackgroundSectionWidget;
