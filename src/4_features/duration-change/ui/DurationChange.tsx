import React from 'react';
import { formatTimeTrack } from '@shared/lib/utils/ui/formatTimeTrack.ts';
import type { DurationChangeProps } from '@features/duration-change/types.ts';
import { useInitDurationChange } from '@features/duration-change/model/useInitDurationChange.ts';
import Duration from '@shared/ui/duration/Duration.tsx';

const DurationChange: React.FC<DurationChangeProps> = ({ trackId, duration }) => {
  const { isCurrent, currentTime, isPlaying } = useInitDurationChange(trackId);

  return <Duration>{isCurrent && isPlaying ? formatTimeTrack(currentTime) : formatTimeTrack(duration)}</Duration>;
};

export default DurationChange;
