import React from 'react';
import ButtonPreviousTrack from '@entities/player/ui/button-previous-track/ButtonPreviousTrack.tsx';
import { useSwitchPreviousTrack } from '@features/player-controls/model/useSwitchPreviousTrack.ts';

const SwitchPreviousTrack: React.FC = () => {
  const { handleSwitchPreviousTrack } = useSwitchPreviousTrack();

  return <ButtonPreviousTrack onClick={handleSwitchPreviousTrack} />;
};

export default SwitchPreviousTrack;
