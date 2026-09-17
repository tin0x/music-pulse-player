import AuthLayout from '@app/layouts/auth-layout/AuthLayout';
import Layout from '@app/layouts/layout/Layout';
import ProtectedRoute from '@app/routers/ProtectedRoute';
import PublicOnlyRoute from '@app/routers/PublicOnlyRoute';
import { AlbumPage } from '@pages/album-page';
import { ArtistPage } from '@pages/artist-page';
import { DashboardPage } from '@pages/dashboard-page';
import { ErrorBoundaryPage } from '@pages/error-boundary-page';
import { FavoritePage } from '@pages/favorite-page';
import { LoginPage } from '@pages/login-page';
import { NotFoundPage } from '@pages/not-found-page';
import { ProfilePage } from '@pages/profile-page';
import { RegisterPage } from '@pages/register-page';
import { SettingsPage } from '@pages/settings-page';
import { TrackPage } from '@pages/track-page';
import { TracksListPage } from '@pages/tracks-list-page';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <ProtectedRoute />,
        errorElement: <ErrorBoundaryPage />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: 'profile',
            element: <ProfilePage />,
          },
          {
            path: 'settings',
            element: <SettingsPage />,
          },
          {
            path: 'album',
            element: <AlbumPage />,
          },
          {
            path: 'favorite',
            element: <FavoritePage />,
          },
          {
            path: 'favorite/:type',
            element: <FavoritePage />,
          },
          {
            path: 'tracks/:type',
            element: <TracksListPage />,
          },
          {
            path: 'track/:id',
            element: <TrackPage />,
          },
          {
            path: 'artist/:id',
            element: <ArtistPage />,
          },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorBoundaryPage />,
    children: [
      {
        element: <PublicOnlyRoute />,
        children: [
          {
            path: '/register',
            element: <RegisterPage />,
          },
          {
            path: '/login',
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default routes;
