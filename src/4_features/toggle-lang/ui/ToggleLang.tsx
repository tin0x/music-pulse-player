import React from 'react';
import classes from '@features/toggle-lang/ui/ToggleLang.module.scss';
import clsx from 'clsx';
import type { ToggleLangProps } from '@features/toggle-lang/types.ts';
import { useToggleLang } from '@features/toggle-lang/model/useToggleLang.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const ToggleLang: React.FC<ToggleLangProps> = ({ lang }) => {
  const { handleToggleLang } = useToggleLang();
  const t = getTranslate(lang);

  return (
    <fieldset className={classes.toggleLangWrapper}>
      <legend className={classes.toggleLangLegendHidden}>Select application language</legend>
      <label
        className={clsx(classes.toggleLangLabel, {
          [classes.toggleLangLabelActive]: lang === 'en',
        })}
        htmlFor="en"
      >
        {t.str.valueEnSetting}
        <input
          className={classes.toggleLangInput}
          type="radio"
          id="en"
          name="toggleLang"
          value="en"
          checked={lang === 'en'}
          onChange={handleToggleLang}
        />
      </label>
      <label
        className={clsx(classes.toggleLangLabel, {
          [classes.toggleLangLabelActive]: lang === 'ua',
        })}
        htmlFor="ua"
      >
        {t.str.valueUaSetting}
        <input
          className={classes.toggleLangInput}
          type="radio"
          id="ua"
          name="toggleLang"
          value="ua"
          checked={lang === 'ua'}
          onChange={handleToggleLang}
        />
      </label>
    </fieldset>
  );
};

export default ToggleLang;
