import Pagination from '@shared/ui/pagination/Pagination.tsx';
import SwitchNextPage from '@features/pagination-controls/ui/switch-next-page/SwitchNextPage.tsx';
import type { PageSwitcherProps } from '@features/pagination-controls/types.ts';
import React from 'react';
import SwitchPreviousPage from '@features/pagination-controls/ui/switch-previous-page/SwitchPreviousPage.tsx';
import NumberedSwitch from '@features/pagination-controls/ui/numbered-switch/NumberedSwitch.tsx';
import classes from '@features/pagination-controls/ui/page-switcher/PageSwitcher.module.scss';

const PageSwitcher: React.FC<PageSwitcherProps> = React.memo(
  ({
    className,
    maxPages,
    currentPage,
    isFirstPage,
    isLastPage,
    startPage,
    endPage,
    slicedPages,
    handleNextPage,
    handlePreviousPage,
    handleTargetPage,
  }) => {
    if (maxPages <= 1) return;

    return (
      <Pagination className={className}>
        <SwitchPreviousPage onPrev={handlePreviousPage} isDisabled={isFirstPage} />
        {startPage > 1 && (
          <div className={classes.pageSwitcherBlock}>
            <NumberedSwitch
              className={classes.pageSwitcherNumbered}
              isActive={1 === currentPage}
              switchPage={() => handleTargetPage(1)}
            >
              1
            </NumberedSwitch>
            {startPage > 2 && <span className={classes.pageSwitcherDots}>...</span>}
          </div>
        )}
        {slicedPages.map((p) => (
          <NumberedSwitch
            className={classes.pageSwitcherNumbered}
            key={p}
            switchPage={() => handleTargetPage(p)}
            isActive={currentPage === p}
          >
            {p}
          </NumberedSwitch>
        ))}
        {endPage < maxPages && (
          <div className={classes.pageSwitcherBlock}>
            {endPage < maxPages - 1 && <span className={classes.pageSwitcherDots}>...</span>}
            <NumberedSwitch
              className={classes.pageSwitcherNumbered}
              isActive={endPage === maxPages}
              switchPage={() => handleTargetPage(maxPages)}
            >
              {maxPages}
            </NumberedSwitch>
          </div>
        )}

        <SwitchNextPage onNext={handleNextPage} isDisabled={isLastPage} />
      </Pagination>
    );
  },
);
export default PageSwitcher;
