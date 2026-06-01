import React from 'react';
import classes from '@features/toggle-app-history/ui/move-story-forward/MoveStoryForward.module.scss';
import IconArrowRight from '@shared/assets/icons/arrow-right.svg?react';
import { useToggleAppHistory } from '@features/toggle-app-history/model/useToggleAppHistory.ts';

const MoveStoryForward: React.FC = () => {
  const { canGoForward, goForward } = useToggleAppHistory();

  return (
    <button
      className={classes.moveStoryForward}
      onClick={goForward}
      disabled={!canGoForward}
      aria-label="move story forward"
      lang="en"
    >
      <IconArrowRight aria-hidden />
    </button>
  );
};

export default MoveStoryForward;
