import React from 'react';
import Input from '@shared/ui/input/Input.tsx';
import IconSearch from '@shared/assets/icons/search.svg?react';
import IconLoader from '@shared/assets/icons/loader.svg?react';
import { useSearchKeyword } from '@features/search-keyword/model/useSearchKeyword.ts';
import type { SearchKeywordProps } from '@features/search-keyword/types.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const SearchKeyword: React.FC<SearchKeywordProps> = ({ setValue, value, isLoading }) => {
  const { handleSearchKeyword } = useSearchKeyword(setValue);

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  return (
    <Input
      value={value}
      onChange={handleSearchKeyword}
      placeholder={t.str.searchPlaceholderDashboard}
      Icon={isLoading ? IconLoader : IconSearch}
      isLoading={isLoading}
      aria-label="search track or artist"
      lang="en"
    />
  );
};

export default SearchKeyword;
