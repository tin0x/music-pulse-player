import { Logout } from '@features/logout';
import useLogout from '@features/logout/model/useLogout';
import { ChangeAvatar } from '@features/update-user-info';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import Avatar from '@shared/ui/avatar/Avatar.tsx';
import Popup from '@shared/ui/popup/Popup.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { useInitProfileInfoWidget } from '@widgets/profile-info-widget/model/useInitProfileInfoWidget.ts';
import classes from '@widgets/profile-info-widget/ui/ProfileInfoWidget.module.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileInfoWidget: React.FC = () => {
  const {
    currentUser,
    isLoadingUserInfo,
    isError,
    email,
    quantityTracks,
    quantityArtists,
    message,
    messageForProfile,
    isOpen,
    lang,
    handleOpenModal,
    handleCloseModal,
  } = useInitProfileInfoWidget();

  const navigate = useNavigate();
  const { handleLogout, isLoading } = useLogout();

  if (isLoadingUserInfo) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <QueryPlaceholder
        lang={lang}
        variant="clientError"
        alternativeMessage={messageForProfile}
        onClick={() => navigate('/', { replace: true })}
      />
    );
  }

  const username = currentUser?.username;
  const avatar = currentUser?.avatar;
  const statusUser = 'listener';
  const subscriptionType = 'free';

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
          <Logout onClick={handleOpenModal} isLoading={isLoading} ariaLabel="logout" lang="en">
            {t.str.buttonLogoutProfile}
          </Logout>
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
      {isOpen && (
        <Popup
          onConfirm={handleLogout}
          onCancel={handleCloseModal}
          isLoading={isLoading}
          message={message}
          lang={lang}
        />
      )}
    </div>
  );
};

export default ProfileInfoWidget;
