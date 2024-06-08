import { useDispatch } from "react-redux";
import { register } from "../../Redux/Auth/actions";
import css from "./RegisterForm.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value
            })
        );

        form.reset();
    };

    return (
        <form className={css.form}
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <label className={css.label}>
                <TextField id="filled-basic" label="Username" variant="filled" type="text" name="name" />
            </label>
            <label className={css.label}>
                <TextField id="filled-basic" label="Email" variant="filled" type="email" name="email" />
            </label>
            <label className={css.label}>
                <TextField id="filled-basic" label="Password" variant="filled" type="password" name="password" />
            </label>
            <Button variant="contained" type="submit">Register</Button>
        </form>
    );
};