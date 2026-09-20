import { useClearHistory } from '@features/clear-history/model/useClearHistory.ts';
import type { ClearHistoryProps } from '@features/clear-history/types.ts';
import classes from '@features/clear-history/ui/ClearHistory.module.scss';
import Button from '@shared/ui/button/Button';
import React from 'react';

const ClearHistory: React.FC<ClearHistoryProps> = ({ type, children }) => {
  const { handleClearHistory, isLoading, isEmpty, isError } = useClearHistory(type);

  return (
    <Button
      className={classes.clearHistoryButton}
      onClick={handleClearHistory}
      disabled={isLoading || isEmpty || isError}
      ariaLabel={`clear history ${type}`}
      lang="en"
    >
      {children}
    </Button>
  );
};

export default ClearHistory;
