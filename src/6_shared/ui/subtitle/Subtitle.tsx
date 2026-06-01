import React from 'react';
import classes from '@shared/ui/subtitle/Subtitle.module.scss';
import type { SubtitleProps } from '@shared/ui/subtitle/types.ts';

const Subtitle: React.FC<SubtitleProps> = ({ Icon, text }) => {
  return (
    <div className={classes.subtitle}>
      {Icon && <Icon className={classes.subtitleIcon} aria-hidden />}
      {text && <h4 className={classes.subtitleText}>{text}</h4>}
    </div>
  );
};

export default Subtitle;
