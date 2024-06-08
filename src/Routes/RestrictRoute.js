import { useAuthUser } from '../Hooks/useAuthUser';
import { Navigate } from 'react-router-dom';

export const RestrictRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuthUser();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};