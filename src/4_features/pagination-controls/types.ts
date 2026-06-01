import React from 'react';

export type SwitchNextPageProps = {
  onNext: () => void;
  isDisabled: boolean;
};

export type SwitchPreviousPageProps = {
  onPrev: () => void;
  isDisabled: boolean;
};

export type NumberedSwitchProps = {
  className?: string;
  switchPage: () => void;
  children: React.ReactNode;
  isActive: boolean;
};

export type PageSwitcherProps = {
  className?: string;
  maxPages: number;
  currentPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  startPage: number;
  endPage: number;
  slicedPages: number[];
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handleTargetPage: (targetPage: number) => void;
};
