import useLanguage from '@app/providers/language/useLanguage';
import { clearPlayer } from '@entities/player/model/playerSlice.ts';
import { getFavoriteList } from '@entities/player/model/selectors.ts';
import { getUser } from '@entities/user/model/selectors.ts';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useInitProfileInfoWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { currentLanguage } = useLanguage();

  const { tracks, artists } = useAppSelector(getFavoriteList);

  const quantityTracks = tracks.length;
  const quantityArtists = artists.length;

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleLogout = () => {
    dispatch(clearPlayer());
    setIsOpen(false);
    navigate('/dashboard', { replace: true });
  };

  const message =
    currentLanguage === 'en'
      ? 'Are you sure you want to log out of your account?'
      : 'Ви впевнені, що хочете вийти зі свого облікового запису?';
  const messageForProfile =
    currentLanguage === 'en'
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
    lang: currentLanguage,
    handleOpenModal,
    handleCloseModal,
    handleLogout,
    navigate,
  };
};
