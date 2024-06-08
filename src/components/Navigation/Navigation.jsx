import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../Redux/Auth/actions";
import { useAuthUser } from "../../Hooks/useAuthUser";
import { Button } from '@mui/material';
import css from './Navigation.css'

export const Navigation = () => {
    const { isLoggedIn } = useAuthUser();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOut());
    };
    return (
        <nav className={css.header}>
            <div>
                <NavLink className={css.nav} to='/'>Home</NavLink>
            </div>
            {isLoggedIn ? (
                <>
                    <NavLink className={css.nav} to="/contacts">Contacts</NavLink>
                    <Button variant="contained" size="small" onClick={handleLogout}>Log out</Button>
                </>
            ) : (
                <>
                    <div className={css.next}>
                        <NavLink className={css.nav} to='/login'>Log in</NavLink>
                        <NavLink className={css.nav} to='/register'>Register</NavLink>
                    </div>
                </>
            )}
        </nav>
    );
};