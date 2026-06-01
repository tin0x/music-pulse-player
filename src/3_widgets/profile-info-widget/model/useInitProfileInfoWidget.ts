import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage, getUser } from '@entities/user/model/selectors.ts';
import { getFavoriteList } from '@entities/player/model/selectors.ts';
import { useState } from 'react';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { clearUser } from '@entities/user/model/userSlice.ts';
import { clearToken } from '@features/auth/model/authSlice.ts';
import { useNavigate } from 'react-router-dom';
import { clearPlayer } from '@entities/player/model/playerSlice.ts';

export const useInitProfileInfoWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const lang = useAppSelector(getCurrentLanguage);

  const { tracks, artists } = useAppSelector(getFavoriteList);

  const quantityTracks = tracks.length;
  const quantityArtists = artists.length;

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleLogout = () => {
    dispatch(clearToken());
    dispatch(clearUser());
    dispatch(clearPlayer());
    setIsOpen(false);
    navigate('/dashboard', { replace: true });
  };

  const message =
    lang === 'en'
      ? 'Are you sure you want to log out of your account?'
      : 'Ви впевнені, що хочете вийти зі свого облікового запису?';
  const messageForProfile =
    lang === 'en'
      ? 'There is no access to the account, please login!'
      : 'Немає доступу до облікового запису, будь ласка, увійдіть!';

  const currentUser = useAppSelector(getUser);

  return {
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
  };
};
