import useLanguage from '@app/providers/language/useLanguage';
import { ClearHistory } from '@features/clear-history';
import { ToggleLang } from '@features/toggle-lang';
import classes from '@pages/settings-page/ui/SettingsPage.module.scss';
import { useCleaningURL } from '@shared/lib/hooks/router/useCleaningURL.ts';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import React from 'react';

const SettingsPage: React.FC = () => {
  useToggleTitle('Music Pulse | Settings');
  useCleaningURL();

  const { currentLanguage } = useLanguage();
  const t = getTranslate(currentLanguage);

  return (
    <section className={classes.setting}>
      <div className={classes.settingWrapper}>
        <h1 className={classes.settingTitle}>{t.str.titleSettings}</h1>
        <div className={classes.settingBlock}>
          <div className={classes.settingSection}>
            <h3 className={classes.settingSubtitle}>{t.str.subtitleLangSettings}</h3>
            <ToggleLang lang={currentLanguage} />
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
