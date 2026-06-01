import React from 'react';
import classes from '@features/toggle-app-history/ui/move-story-backward/MoveStoryBackward.module.scss';
import IconArrowLeft from '@shared/assets/icons/arrow-left.svg?react';
import { useToggleAppHistory } from '@features/toggle-app-history/model/useToggleAppHistory.ts';

const MoveStoryBackward: React.FC = () => {
  const { canGoBack, goBack } = useToggleAppHistory();

  return (
    <button
      className={classes.moveStoryBackward}
      onClick={goBack}
      disabled={!canGoBack}
      aria-label="move story backward"
      lang="en"
    >
      <IconArrowLeft aria-hidden />
    </button>
  );
};

export default MoveStoryBackward;
