import { useSelector } from 'react-redux';
import {
    selectUser,
    selectIsLoggedIn,
    selectIsRefreshing,
} from '../Redux/Auth/selectors';

export const useAuthUser = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);

    return {
        isLoggedIn,
        isRefreshing,
        user,
    };
};