import React from 'react';
import classes from '@widgets/filtered-tracks-widget/ui/FilteredTracksWidget.module.scss';
import { useFetchTracksByGenre } from '@widgets/filtered-tracks-widget/model/useFetchTracksByGenre.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import type { TopGenreWidgetProps } from '@widgets/filtered-tracks-widget/types.ts';
import TrackList from '@entities/track/ui/tracks/track-list/TrackList.tsx';
import PageSwitcher from '@features/pagination-controls/ui/page-switcher/PageSwitcher.tsx';
import { useInitFilteredTracksWidget } from '@widgets/filtered-tracks-widget/model/useInitFilteredTracksWidget.tsx';
import { usePagination } from '@features/pagination-controls/model/usePagination.ts';
import SortingSelect from '@features/sorting-select/ui/SortingSelect.tsx';
import FilteredTracksSkeleton from '@shared/ui/skeletons/filtered-tracks-skeleton/FilteredTracksSkeleton.tsx';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const FilteredTracksWidget: React.FC<TopGenreWidgetProps> = ({
  genre,
  tracksLimitPerPage,
  currentPage,
  totalTracks,
}) => {
  const {
    offset,
    maxPages,
    isFirstPage,
    isLastPage,
    startPage,
    endPage,
    slicedPages,
    handleNextPage,
    handlePreviousPage,
    handleTargetPage,
  } = usePagination(totalTracks);

  const { isPlaying, currentTrackId, isBuffering, sortParam, moodParam, renderAction, renderDurationChange } =
    useInitFilteredTracksWidget(tracksLimitPerPage, genre, offset);

  const { data, isLoading, error, refetch, isFetching } = useFetchTracksByGenre({
    genre,
    tracksLimitPerPage,
    offset,
    sortParam,
    moodParam,
  });

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  if (isLoading || isFetching) {
    return <FilteredTracksSkeleton />;
  }

  if (data?.length === 0) {
    return <QueryPlaceholder lang={lang} variant="empty" />;
  }

  if (error) {
    return <QueryPlaceholder lang={lang} variant="queryError" onClick={refetch} />;
  }

  return (
    <div className={classes.filteredTracks}>
      <SortingSelect />
      <TrackList
        className={classes.filteredTracksList}
        subtitle={`${t.str.titleListAlbum} ${t.str[genre as keyof typeof t.str]}`}
        tracks={data || []}
        renderAction={renderAction}
        isPlaying={isPlaying}
        isBuffering={isBuffering}
        currentTrackId={currentTrackId || ''}
        renderDuration={renderDurationChange}
        currentPage={currentPage}
        tracksLimitPerPage={tracksLimitPerPage}
        lang={lang}
      />
      <PageSwitcher
        className={classes.filteredTracksPageSwitcher}
        maxPages={maxPages}
        currentPage={currentPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        startPage={startPage}
        endPage={endPage}
        slicedPages={slicedPages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handleTargetPage={handleTargetPage}
      />
    </div>
  );
};

export default FilteredTracksWidget;
