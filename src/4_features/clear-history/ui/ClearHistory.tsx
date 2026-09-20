import { useClearHistory } from '@features/clear-history/model/useClearHistory.ts';
import type { ClearHistoryProps } from '@features/clear-history/types.ts';
import classes from '@features/clear-history/ui/ClearHistory.module.scss';
import Button from '@shared/ui/button/Button';
import Popup from '@shared/ui/popup/Popup';
import React, { useState } from 'react';

const ClearHistory: React.FC<ClearHistoryProps> = ({ type, children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { handleClearHistory, message, currentLanguage, isLoading, isEmpty, isError } = useClearHistory(type);

  return (
    <>
      <Button
        className={classes.clearHistoryButton}
        onClick={() => setIsOpenModal(true)}
        disabled={isLoading || isEmpty || isError}
        ariaLabel={`clear history ${type}`}
        lang="en"
      >
        {children}
      </Button>
      {isOpenModal && (
        <Popup
          onConfirm={() => {
            handleClearHistory();
            setIsOpenModal(false);
          }}
          onCancel={() => setIsOpenModal(false)}
          message={message}
          isLoading={isLoading}
          lang={currentLanguage}
        />
      )}
    </>
  );
};

export default ClearHistory;
