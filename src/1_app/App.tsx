import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import DashboardPage from '@pages/dashboard-page/ui/DashboardPage.tsx';
import Layout from '@app/layout/ui/Layout.tsx';
import AuthPage from '@pages/auth-page/ui/AuthPage.tsx';
import TracksListPage from '@pages/tracks-list-page/ui/TracksListPage.tsx';
import AlbumPage from '@pages/album-page/ui/AlbumPage.tsx';
import ArtistPage from '@pages/artist-page/ui/ArtistPage.tsx';
import TrackPage from '@pages/track-page/ui/TrackPage.tsx';
import FavoritePage from '@pages/favorite-page/ui/FavoritePage.tsx';
import NotFoundPage from '@pages/not-found-page/ui/NotFoundPage.tsx';
import ProfilePage from '@pages/profile-page/ui/ProfilePage.tsx';
import SettingsPage from '@pages/settings-page/ui/SettingsPage.tsx';
import ErrorBoundaryPage from '@pages/error-boundary-page/ui/ErrorBoundaryPage.tsx';
import ProtectedRoute from '@features/auth/ui/ProtectedRoute.tsx';
import { useAppDispatch } from '@shared/lib/hooks/redux/useAppDispatch.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getToken } from '@features/auth/model/selectors.ts';
import { useEffect } from 'react';
import { clearToken } from '@features/auth/model/authSlice.ts';
import { clearPlayer } from '@entities/player/model/playerSlice.ts';

const App = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(getToken);

  useEffect(() => {
    if (!token || !token.validityPeriod) return;

    const timeLeft = token.validityPeriod - Date.now();

    if (timeLeft <= 0) {
      dispatch(clearToken());
      return;
    }

    const timerId = setTimeout(() => {
      dispatch(clearToken());
      dispatch(clearPlayer());
      console.log('Your session has expired! Please log in again.');
    }, timeLeft);

    return () => clearTimeout(timerId);
  }, [token, dispatch]);

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="/dashboard" replace />,
        },
        {
          path: 'auth',
          element: <AuthPage />,
        },
        {
          path: '*',
          element: <NotFoundPage />,
        },
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: 'profile',
              element: <ProfilePage />,
              errorElement: <ErrorBoundaryPage />,
            },
            {
              path: 'dashboard',
              element: <DashboardPage />,
              errorElement: <ErrorBoundaryPage />,
            },
            {
              path: 'settings',
              element: <SettingsPage />,
              errorElement: <ErrorBoundaryPage />,
            },
            {
              path: 'album',
              element: <AlbumPage />,
              errorElement: <ErrorBoundaryPage />,
            },
            {
              path: 'favorite',
              element: <FavoritePage />,
              errorElement: <ErrorBoundaryPage />,
            },
            {
              path: 'favorite/:type',
              element: <FavoritePage />,
              errorElement: <ErrorBoundaryPage />,
            },
            {
              path: 'tracks/:type',
              element: <TracksListPage />,
              errorElement: <ErrorBoundaryPage />,
            },
            {
              path: 'track/:id',
              element: <TrackPage />,
              errorElement: <ErrorBoundaryPage />,
            },
            {
              path: 'artist/:id',
              element: <ArtistPage />,
              errorElement: <ErrorBoundaryPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
