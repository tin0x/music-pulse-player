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

const App = () => {
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
          path: '*',
          element: <NotFoundPage />,
        },
        {
          path: '/profile',
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
          path: 'auth',
          element: <AuthPage />,
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
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
