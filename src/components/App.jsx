import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ContactsPage } from '../Pages/ContactsPage';
import { Home } from '../Pages/Home/home';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import { RegisterPage } from '../Pages/RegisterPage/RegisterPage';
import { Layout } from './Layout/Layout.jsx';
import { refreshUser } from '../Redux/Auth/actions';
import { RestrictRoute } from '../Routes/RestrictRoute';
import { PrivateRoute } from '../Routes/PrivateRoute';
// import { useAuthUser } from 'Hooks/useAuthUser';

export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuthUser();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RestrictRoute redirectTo="/contacts" component={<RegisterPage />} />} />
        <Route path="/login" element={<RestrictRoute redirectTo="/" component={<LoginPage />} />} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
      </Route>
    </Routes>
  );
};