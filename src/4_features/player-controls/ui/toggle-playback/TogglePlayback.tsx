import React from 'react';
import { useTogglePlayback } from '@features/player-controls/model/useTogglePlayback.ts';
import type { TogglePlaybackProps } from '@features/player-controls/types.ts';
import { ButtonTogglePlayback } from '@entities/player';

const TogglePlayback: React.FC<TogglePlaybackProps> = React.memo(({ className, track, playerContext }) => {
  const { handleTogglePlayback, isPlaying, isBuffering, currentTrackId } = useTogglePlayback(track, playerContext);

  const id = track?.id;

  const isThisTrackActive = isPlaying && currentTrackId === id;
  const isThisTrackPlaying = isPlaying && isThisTrackActive && !isBuffering;
  const isThisTrackBuffering = isPlaying && isThisTrackActive && isBuffering;

  return (
    <ButtonTogglePlayback
      className={className}
      onClick={handleTogglePlayback}
      isPlaying={isThisTrackPlaying}
      isBuffering={isThisTrackBuffering}
    />
  );
});

export default TogglePlayback;
