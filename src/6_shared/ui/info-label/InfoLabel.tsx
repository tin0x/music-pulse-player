import React from 'react';
import clsx from 'clsx';
import classes from '@shared/ui/info-label/InfoLabel.module.scss';
import type { InfoLabelProps } from '@shared/ui/info-label/types.ts';

const InfoLabel: React.FC<InfoLabelProps> = ({ text, isBorder }) => {
  return (
    <div className={clsx(classes.infoLabel, { [classes.infoLabelBorder]: isBorder })}>
      <span>{text}</span>
    </div>
  );
};

export default InfoLabel;
