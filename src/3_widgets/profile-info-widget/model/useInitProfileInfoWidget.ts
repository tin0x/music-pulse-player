import useAuth from '@app/providers/auth/useAuth';
import useLanguage from '@app/providers/language/useLanguage';
import { clearPlayer } from '@entities/player/model/playerSlice.ts';
import { getFavoriteList } from '@entities/player/model/selectors.ts';
import { useGetUserInfoQuery } from '@entities/user';
import { skipToken } from '@reduxjs/toolkit/query';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useInitProfileInfoWidget = () => {
  const { session } = useAuth();
  const userId = session?.user?.id;
  const email = session?.user?.email;
  const { data, isLoading, isError } = useGetUserInfoQuery(userId ? { userId } : skipToken);

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
    navigate('/', { replace: true });
  };

  const message =
    currentLanguage === 'en'
      ? 'Are you sure you want to log out of your account?'
      : 'Ви впевнені, що хочете вийти зі свого облікового запису?';
  const messageForProfile =
    currentLanguage === 'en'
      ? 'There is no access to the account, please login!'
      : 'Немає доступу до облікового запису, будь ласка, увійдіть!';

  return {
    currentUser: data,
    isLoading,
    isError,
    email,
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
