import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import type { ButtonLoudnessProps } from '@entities/player/types.ts';
import classes from '@entities/player/ui/button-loudness/ButtonLoudness.module.scss';
import { getIconVolume } from '@entities/player/lib/utils/getIconVolume.tsx';
import clsx from 'clsx';

const ButtonLoudness: React.FC<ButtonLoudnessProps> = ({ className, volume, isMuted, onClick }) => {
  const IconVolume = getIconVolume(volume, isMuted);

  return (
    <Button className={clsx(className, classes.buttonLoudness)} onClick={onClick} aria-label="toggle volume">
      {IconVolume}
    </Button>
  );
};

export default ButtonLoudness;
