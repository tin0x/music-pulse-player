import React from 'react';
import InputSearch from '@entities/search/ui/input-search/InputSearch.tsx';
import SearchKeyword from '@features/search-keyword/ui/SearchKeyword.tsx';
import { useInitSearchKeywordWidget } from '@widgets/search-keyword-widget/model/useInitSearchKeywordWidget.ts';

const SearchKeywordWidget: React.FC = () => {
  const { value, setValue, mixedArray, isLoading, lang } = useInitSearchKeywordWidget();

  return (
    <InputSearch
      actionSlot={<SearchKeyword value={value} isLoading={isLoading} setValue={setValue} />}
      response={mixedArray}
      isLoading={isLoading}
      lang={lang}
    />
  );
};

export default SearchKeywordWidget;
