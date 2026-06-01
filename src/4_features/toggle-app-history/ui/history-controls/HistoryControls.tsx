import React from 'react';
import classes from '@features/toggle-app-history/ui/history-controls/HistoryControls.module.scss';
import MoveStoryBackward from '@features/toggle-app-history/ui/move-story-backward/MoveStoryBackward.tsx';
import MoveStoryForward from '@features/toggle-app-history/ui/move-story-forward/MoveStoryForward.tsx';
import clsx from 'clsx';

const HistoryControls: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={clsx(className, classes.historyControls)}>
      <MoveStoryBackward />
      <MoveStoryForward />
    </div>
  );
};

export default HistoryControls;
