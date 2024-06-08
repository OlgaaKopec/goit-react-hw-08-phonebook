import { LoginForm } from "components/LoginForm/LoginForm";
import css from "./LoginPage.css"

export const LoginPage = () => {
    return (
        <div className={css.container}>
            <LoginForm />
        </div>
    );
};