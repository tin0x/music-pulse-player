import React from 'react';
import { useClearHistory } from '@features/clear-history/model/useClearHistory.ts';
import type { ClearHistoryProps } from '@features/clear-history/types.ts';
import { ButtonProfile } from '@entities/user';

const ClearHistory: React.FC<ClearHistoryProps> = ({ type, children }) => {
  const { handleClearHistory, isEmpty } = useClearHistory(type);

  return (
    <ButtonProfile onClick={handleClearHistory} isDisabled={isEmpty} ariaLabel={`clear history ${type}`} lang="en">
      {children}
    </ButtonProfile>
  );
};

export default ClearHistory;
