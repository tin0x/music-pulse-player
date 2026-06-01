import { useLocation, useNavigate } from 'react-router-dom';

export const useToggleAppHistory = () => {
  useLocation(); // trigger for the renderer
  const navigate = useNavigate();

  const history = window.history;
  const currentIdx = history.state?.idx ?? 0;

  const canGoBack = currentIdx > 0;
  const canGoForward = currentIdx < history.length - 2;

  const goBack = () => canGoBack && navigate(-1);
  const goForward = () => canGoForward && navigate(1);

  return { canGoBack, canGoForward, goBack, goForward };
};
