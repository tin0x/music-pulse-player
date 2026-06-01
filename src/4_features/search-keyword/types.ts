import { type Dispatch, type SetStateAction } from 'react';

export type SearchKeywordProps = {
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
  isLoading: boolean;
};
