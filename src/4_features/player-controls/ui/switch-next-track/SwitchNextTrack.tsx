import React from 'react';
import ButtonNextTrack from '@entities/player/ui/button-next-track/ButtonNextTrack.tsx';
import { useSwitchNextTrack } from '@features/player-controls/model/useSwitchNextTrack.ts';

const SwitchNextTrack: React.FC = () => {
  const { handleSwitchNextTrack } = useSwitchNextTrack();

  return <ButtonNextTrack onClick={handleSwitchNextTrack} />;
};

export default SwitchNextTrack;
