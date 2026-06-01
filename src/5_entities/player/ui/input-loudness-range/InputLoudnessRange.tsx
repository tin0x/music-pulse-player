import React, { useState } from 'react';
import classes from '@entities/player/ui/input-loudness-range/InputLoudnessRange.module.scss';
import type { InputRangeLoudnessProps } from '@entities/player/types.ts';
import { calculateProgress } from '@entities/player/lib/utils/calculateProgress.ts';
import Dropdown from '@shared/ui/dropdown/Dropdown.tsx';
import ButtonLoudness from '@entities/player/ui/button-loudness/ButtonLoudness.tsx';

const InputLoudnessRange: React.FC<InputRangeLoudnessProps> = ({ volume, isMuted, actionSlot, onChange }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const progress = calculateProgress(volume, 1);

  const basicStyle = {
    background: `linear-gradient(to right, var(--color-accent) ${progress}%, var(--color-bg-surface) ${progress}%)`,
  };
  const adaptiveStyle = {
    background: `linear-gradient(to top, var(--color-accent) ${progress}%, var(--color-bg-surface) ${progress}%)`,
  };

  return (
    <>
      <div className={classes.inputLoudnessRangeWrapper}>
        {actionSlot}
        <input
          className={classes.inputLoudnessRange}
          style={isOpenDropdown ? adaptiveStyle : basicStyle}
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={onChange}
          type="range"
          aria-label="change volume"
          lang="en"
        />
      </div>
      <div className={classes.inputLoudnessRangeWrapperAdaptive}>
        <ButtonLoudness
          className={classes.inputLoudnessRangeButton}
          onClick={() => setIsOpenDropdown((prev) => !prev)}
          volume={volume}
          isMuted={isMuted!}
        />
        <Dropdown
          className={classes.inputLoudnessRangeDropdown}
          classNameWrapper={classes.inputLoudnessRangeDropdownWrapper}
          isOpen={isOpenDropdown}
        >
          {actionSlot}
          <input
            className={classes.inputLoudnessRange}
            style={isOpenDropdown ? adaptiveStyle : basicStyle}
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={onChange}
            type="range"
          />
        </Dropdown>
      </div>
    </>
  );
};

export default InputLoudnessRange;
