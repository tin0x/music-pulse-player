import React from 'react';
import classes from '@pages/settings-page/ui/SettingsPage.module.scss';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import ToggleLang from '@features/toggle-lang/ui/ToggleLang.tsx';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';
import ClearHistory from '@features/clear-history/ui/ClearHistory.tsx';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import { useCleaningURL } from '@shared/lib/hooks/router/useCleaningURL.ts';

const SettingsPage: React.FC = () => {
  useToggleTitle('Music Pulse | Settings');
  useCleaningURL();

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  return (
    <section className={classes.setting}>
      <div className={classes.settingWrapper}>
        <h1 className={classes.settingTitle}>{t.str.titleSettings}</h1>
        <div className={classes.settingBlock}>
          <div className={classes.settingSection}>
            <h3 className={classes.settingSubtitle}>{t.str.subtitleLangSettings}</h3>
            <ToggleLang lang={lang} />
          </div>
          <div className={classes.settingSection}>
            <h3 className={classes.settingSubtitle}>{t.str.subtitleHistorySettings}</h3>
            <div className={classes.settingButtons}>
              <ClearHistory type="artists">{t.str.valueDeleteArtists}</ClearHistory>
              <ClearHistory type="tracks">{t.str.valueDeleteTracks}</ClearHistory>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsPage;

// реалізувати через пропси переклад
