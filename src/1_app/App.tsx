import routes from '@app/routers/routes';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
