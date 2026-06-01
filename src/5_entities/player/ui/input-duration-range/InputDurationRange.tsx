import React from 'react';
import classes from '@entities/player/ui/input-duration-range/InputDurationRange.module.scss';
import type { InputRangeDurationProps } from '@entities/player/types.ts';
import { calculateProgress } from '@entities/player/lib/utils/calculateProgress.ts';
import { formatTimeTrack } from '@shared/lib/utils/ui/formatTimeTrack.ts';

const InputDurationRange: React.FC<InputRangeDurationProps> = ({ onChange, duration }) => {
  const progress = calculateProgress(duration.currentTime, duration.totalDuration);

  return (
    <div className={classes.inputDurationRangeWrapper}>
      <input
        className={classes.inputDurationRange}
        style={{
          background: `linear-gradient(to right, var(--color-accent) ${progress}%, var(--color-bg-surface) ${progress}%`,
        }}
        type="range"
        min={0}
        max={duration.totalDuration}
        onChange={onChange}
        value={duration.currentTime}
        aria-label="change the length of the track"
        lang="en"
      />
      <div className={classes.inputDurationRangeSubtext}>
        <span className={classes.inputDurationRangeStart}>{formatTimeTrack(duration.currentTime)}</span>
        <span className={classes.inputDurationRangeEnd}>{formatTimeTrack(duration.timeLeft)}</span>
      </div>
    </div>
  );
};

export default InputDurationRange;
