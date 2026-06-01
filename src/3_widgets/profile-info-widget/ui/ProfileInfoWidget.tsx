import React from 'react';
import classes from '@widgets/profile-info-widget/ui/ProfileInfoWidget.module.scss';
import Avatar from '@shared/ui/avatar/Avatar.tsx';
import { useInitProfileInfoWidget } from '@widgets/profile-info-widget/model/useInitProfileInfoWidget.ts';
import ButtonProfile from '@entities/user/ui/button-profile/ButtonProfile.tsx';
import Popup from '@shared/ui/popup/Popup.tsx';
import ChangeAvatar from '@features/change-avatar/ui/ChangeAvatar.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const ProfileInfoWidget: React.FC = () => {
  const {
    currentUser,
    quantityTracks,
    quantityArtists,
    message,
    messageForProfile,
    isOpen,
    lang,
    handleOpenModal,
    handleCloseModal,
    handleLogout,
    navigate,
  } = useInitProfileInfoWidget();

  if (!currentUser) {
    return (
      <QueryPlaceholder
        lang={lang}
        variant="clientError"
        alternativeMessage={messageForProfile}
        onClick={() => navigate('/dashboard', { replace: true })}
      />
    );
  }

  const { avatar, username, email, statusUser, subscriptionType } = currentUser;

  const t = getTranslate(lang);

  return (
    <div className={classes.profileInfo}>
      <div className={classes.profileInfoTopSection}>
        <Avatar className={classes.profileInfoAvatar} alt="profile avatar" type="user" src={avatar || ''} isActive />
        <ul className={classes.profileInfoList}>
          <li className={classes.profileInfoItem}>
            {t.str.usernameProfile}
            <span className={classes.profileInfoValue}>{username}</span>
          </li>
          <li className={classes.profileInfoItem}>
            {t.str.emailProfile}
            <span className={classes.profileInfoValue}>{email}</span>
          </li>
          <li className={classes.profileInfoItem}>
            {t.str.statusUserProfile}
            <span className={classes.profileInfoValue}>{t.str[statusUser]}</span>
          </li>
          <li className={classes.profileInfoItem}>
            {t.str.subscriptionProfile}
            <span className={classes.profileInfoValue}>{t.str[subscriptionType].toLowerCase()}</span>
          </li>
        </ul>
      </div>
      <div className={classes.profileInfoBottomSection}>
        <div className={classes.profileInfoButtons}>
          <ChangeAvatar>{t.str.buttonChangeAvatarProfile}</ChangeAvatar>
          <ButtonProfile onClick={handleOpenModal} ariaLabel="logout" lang="en">
            {t.str.buttonLogoutProfile}
          </ButtonProfile>
        </div>
        <ul className={classes.profileInfoList}>
          <li className={classes.profileInfoItem}>
            {t.str.favoriteArtistsProfile}
            <span className={classes.profileInfoValue}>{quantityArtists}</span>
          </li>
          <li className={classes.profileInfoItem}>
            {t.str.favoriteTracksProfile}
            <span className={classes.profileInfoValue}>{quantityTracks}</span>
          </li>
        </ul>
      </div>
      {isOpen && <Popup onConfirm={handleLogout} onCancel={handleCloseModal} message={message} lang={lang} />}
    </div>
  );
};

export default ProfileInfoWidget;
