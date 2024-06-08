import { useDispatch } from "react-redux";
import { logIn } from "../../Redux/Auth/actions";
import css from "./LoginForm.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <form
            className={css.form}
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            {/* <label>
                Username
                <input type="text" name="name" />
            </label> */}
            <label className={css.label}>
                <TextField id="filled-basic" label="Email" variant="filled" type="email" name="email" />
            </label>
            <label className={css.label}>
                <TextField id="filled-basic" label="Password" variant="filled" type="password" name="password" />
            </label>
            <Button variant="contained" type="submit">Log in</Button>
        </form>
    );
};