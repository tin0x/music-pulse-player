import React from 'react';
import { useSwitchNextTrack } from '@features/player-controls/model/useSwitchNextTrack.ts';
import { ButtonNextTrack } from '@entities/player';

const SwitchNextTrack: React.FC = () => {
  const { handleSwitchNextTrack } = useSwitchNextTrack();

  return <ButtonNextTrack onClick={handleSwitchNextTrack} />;
};

export default SwitchNextTrack;
