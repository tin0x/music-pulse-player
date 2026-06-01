import React from 'react';
import classes from '@features/sorting-select/ui/SortingSelect.module.scss';
import clsx from 'clsx';
import type { SortingSelectProps } from '@features/sorting-select/types.ts';
import { useFilterTracks } from '@features/sorting-select/model/useFilterTracks.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const SortingSelect: React.FC<SortingSelectProps> = ({ className }) => {
  const { handleUpdateFilter, currentSort, currentMood } = useFilterTracks();

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  return (
    <form className={clsx(className, classes.sortingSelect)}>
      <fieldset className={classes.sortingSelectBlock}>
        <legend className={classes.sortingSelectTitle}>{t.str.titleSortingAlbum}</legend>

        <div className={classes.sortingSelectBlockRadio}>
          <label
            className={clsx(classes.sortingSelectLabel, {
              [classes.sortingSelectLabelActive]: currentSort === 'relevant',
            })}
            htmlFor="sortRelevant"
          >
            <input
              className={classes.sortingSelectRadio}
              value="relevant"
              name="sort"
              id="sortRelevant"
              type="radio"
              checked={currentSort === 'relevant'}
              onChange={(e) => handleUpdateFilter(e)}
            />
          </label>
          <span className={classes.sortingSelectText}>{t.str.relevantAlbum}</span>
        </div>

        <div className={classes.sortingSelectBlockRadio}>
          <label
            className={clsx(classes.sortingSelectLabel, {
              [classes.sortingSelectLabelActive]: currentSort === 'popular',
            })}
            htmlFor="sortPopular"
          >
            <input
              className={classes.sortingSelectRadio}
              value="popular"
              name="sort"
              id="sortPopular"
              type="radio"
              checked={currentSort === 'popular'}
              onChange={(e) => handleUpdateFilter(e)}
            />
          </label>
          <span className={classes.sortingSelectText}>{t.str.popularAlbum}</span>
        </div>

        <div className={classes.sortingSelectBlockRadio}>
          <label
            className={clsx(classes.sortingSelectLabel, {
              [classes.sortingSelectLabelActive]: currentSort === 'recent',
            })}
            htmlFor="sortNewest"
          >
            <input
              className={classes.sortingSelectRadio}
              value="recent"
              name="sort"
              id="sortNewest"
              type="radio"
              checked={currentSort === 'recent'}
              onChange={(e) => handleUpdateFilter(e)}
            />
          </label>
          <span className={classes.sortingSelectText}>{t.str.newestAlbum}</span>
        </div>
      </fieldset>

      <fieldset className={classes.sortingSelectBlock}>
        <legend className={classes.sortingSelectTitle}>{t.str.titleMoodAlbum}</legend>

        <div className={classes.sortingSelectBlockRadio}>
          <label
            className={clsx(classes.sortingSelectLabel, {
              [classes.sortingSelectLabelActive]: currentMood === 'other',
            })}
            htmlFor="moodAll"
          >
            <input
              className={classes.sortingSelectRadio}
              value="other"
              name="mood"
              id="moodAll"
              type="radio"
              checked={currentMood === 'other'}
              onChange={(e) => handleUpdateFilter(e)}
            />
          </label>
          <span className={classes.sortingSelectText}>{t.str.allAlbum}</span>
        </div>

        <div className={classes.sortingSelectBlockRadio}>
          <label
            className={clsx(classes.sortingSelectLabel, {
              [classes.sortingSelectLabelActive]: currentMood === 'peaceful',
            })}
            htmlFor="moodPeaceful"
          >
            <input
              className={classes.sortingSelectRadio}
              value="peaceful"
              name="mood"
              id="moodPeaceful"
              type="radio"
              checked={currentMood === 'peaceful'}
              onChange={(e) => handleUpdateFilter(e)}
            />
          </label>
          <span className={classes.sortingSelectText}>{t.str.peacefulAlbum}</span>
        </div>

        <div className={classes.sortingSelectBlockRadio}>
          <label
            className={clsx(classes.sortingSelectLabel, {
              [classes.sortingSelectLabelActive]: currentMood === 'fiery',
            })}
            htmlFor="moodFiery"
          >
            <input
              className={classes.sortingSelectRadio}
              value="fiery"
              name="mood"
              id="moodFiery"
              type="radio"
              checked={currentMood === 'fiery'}
              onChange={(e) => handleUpdateFilter(e)}
            />
          </label>
          <span className={classes.sortingSelectText}>{t.str.fieryAlbum}</span>
        </div>

        <div className={classes.sortingSelectBlockRadio}>
          <label
            className={clsx(classes.sortingSelectLabel, {
              [classes.sortingSelectLabelActive]: currentMood === 'romantic',
            })}
            htmlFor="moodRomantic"
          >
            <input
              className={classes.sortingSelectRadio}
              value="romantic"
              name="mood"
              id="moodRomantic"
              type="radio"
              checked={currentMood === 'romantic'}
              onChange={(e) => handleUpdateFilter(e)}
            />
          </label>
          <span className={classes.sortingSelectText}>{t.str.romanticAlbum}</span>
        </div>
      </fieldset>
    </form>
  );
};

export default SortingSelect;
