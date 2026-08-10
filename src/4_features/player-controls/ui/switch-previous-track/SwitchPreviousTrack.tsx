import React from 'react';
import { useSwitchPreviousTrack } from '@features/player-controls/model/useSwitchPreviousTrack.ts';
import { ButtonPreviousTrack } from '@entities/player';

const SwitchPreviousTrack: React.FC = () => {
  const { handleSwitchPreviousTrack } = useSwitchPreviousTrack();

  return <ButtonPreviousTrack onClick={handleSwitchPreviousTrack} />;
};

export default SwitchPreviousTrack;
