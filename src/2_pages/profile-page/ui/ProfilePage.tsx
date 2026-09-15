import classes from '@pages/profile-page/ui/ProfilePage.module.scss';
import { useCleaningURL } from '@shared/lib/hooks/router/useCleaningURL.ts';
import { useToggleTitle } from '@shared/lib/hooks/ui/useToggleTitle.ts';
import { BackgroundSectionWidget } from '@widgets/background-section-widget';
import { ProfileInfoWidget } from '@widgets/profile-info-widget';
import React from 'react';

const ProfilePage: React.FC = () => {
  useToggleTitle('Profile');
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
