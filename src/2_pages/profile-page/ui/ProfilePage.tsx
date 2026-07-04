import React from 'react';
import classes from '@pages/profile-page/ui/ProfilePage.module.scss';
import ProfileInfoWidget from '@widgets/profile-info-widget/ui/ProfileInfoWidget.tsx';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';
import BackgroundSectionWidget from '@widgets/background-section-widget/ui/BackgroundSectionWidget.tsx';
import { useCleaningURL } from '@shared/lib/hooks/router/useCleaningURL.ts';

const ProfilePage: React.FC = () => {
  useToggleTitle('Music Pulse | Profile');
  useCleaningURL();

  return (
    <section className={classes.profile}>
      <div className={classes.profileWrapper}>
        <ProfileInfoWidget />
        <BackgroundSectionWidget type="profile" />
      </div>
    </section>
  );
};

export default ProfilePage;
