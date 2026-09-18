import { useClearHistory } from '@features/clear-history/model/useClearHistory.ts';
import type { ClearHistoryProps } from '@features/clear-history/types.ts';
import Button from '@shared/ui/button/Button';
import React from 'react';

const ClearHistory: React.FC<ClearHistoryProps> = ({ type, children }) => {
  const { handleClearHistory, isEmpty } = useClearHistory(type);

  return (
    <Button onClick={handleClearHistory} disabled={isEmpty} ariaLabel={`clear history ${type}`} lang="en">
      {children}
    </Button>
  );
};

export default ClearHistory;
