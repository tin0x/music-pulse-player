import useLanguage from '@app/providers/language/useLanguage';
import { useSearchKeyword } from '@features/search-keyword/model/useSearchKeyword.ts';
import type { SearchKeywordProps } from '@features/search-keyword/types.ts';
import IconLoader from '@shared/assets/icons/loader.svg?react';
import IconSearch from '@shared/assets/icons/search.svg?react';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import Input from '@shared/ui/input/Input.tsx';
import React from 'react';

const SearchKeyword: React.FC<SearchKeywordProps> = ({ setValue, value, isLoading }) => {
  const { handleSearchKeyword } = useSearchKeyword(setValue);

  const { currentLanguage } = useLanguage();
  const t = getTranslate(currentLanguage);

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
