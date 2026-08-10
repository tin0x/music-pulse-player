import React from 'react';
import { useInitSearchKeywordWidget } from '@widgets/search-keyword-widget/model/useInitSearchKeywordWidget.ts';
import { InputSearch } from '@entities/search';
import { SearchKeyword } from '@features/search-keyword';

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
