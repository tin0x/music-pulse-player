import useAuth from '@app/providers/auth/useAuth';
import useLanguage from '@app/providers/language/useLanguage';
import { getFavoriteList } from '@entities/player/model/selectors.ts';
import { useGetUserInfoQuery } from '@entities/user';
import { skipToken } from '@reduxjs/toolkit/query';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { useState } from 'react';

export const useInitProfileInfoWidget = () => {
  const { session } = useAuth();
  const userId = session?.user?.id;
  const email = session?.user?.email;
  const { data, isLoading, isError } = useGetUserInfoQuery(userId ? { userId } : skipToken);

  const [isOpen, setIsOpen] = useState(false);

  const { currentLanguage } = useLanguage();

  const { tracks, artists } = useAppSelector(getFavoriteList);

  const quantityTracks = tracks.length;
  const quantityArtists = artists.length;

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

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
    isLoadingUserInfo: isLoading,
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
  };
};
