import { useAuthUser } from '../Hooks/useAuthUser';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuthUser();

  const redirectToRather = !isLoggedIn && !isRefreshing;

  return redirectToRather ? <Navigate to={redirectTo} /> : Component;
};