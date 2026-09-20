import useAuth from '@app/providers/auth/useAuth';
import useLanguage from '@app/providers/language/useLanguage';
import { useFetchFavoritesQuery } from '@entities/favorite';
import { useGetUserInfoQuery } from '@entities/user';
import { skipToken } from '@reduxjs/toolkit/query';
import { useState } from 'react';

export const useInitProfileInfoWidget = () => {
  const { session } = useAuth();
  const userId = session?.user?.id;
  const email = session?.user?.email;
  const {
    data: userInfo,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useGetUserInfoQuery(userId ? { userId } : skipToken);
  const { data: favorite, isLoading: isFavoriteLoading, isError: isFavoriteError } = useFetchFavoritesQuery();

  const [isOpen, setIsOpen] = useState(false);

  const { currentLanguage } = useLanguage();

  const quantityTracks = favorite?.tracks.length;
  const quantityArtists = favorite?.artists.length;

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
    currentUser: userInfo,
    isLoadingProfile: isUserLoading || isFavoriteLoading,
    isError: isUserError || isFavoriteError,
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
