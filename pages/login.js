import Layout from "../components/layout/layout";
import formsCSS from '../styles/forms.module.css';

import Auth from '../components/auth/auth';

function Login() {
    return (
        <Layout>
            <section className="login">
                <div className="u-spacing-3">
                    <p className="text-primary">
                        Login 
                    </p>
                </div>
                <form className={`${formsCSS.form__auth} u-spacing-3`}>
                    <div className={formsCSS.form__auth_item}>
                        <div className={formsCSS.form__auth_item__icon}>
                            <img src="/images/mail.svg" alt="email" />
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className={formsCSS.form__auth_email}
                            required
                        />
                    </div>
                    <div className={formsCSS.form__auth_item}>
                        <div className={formsCSS.form__auth_item__icon}>
                            <img src="/images/password.svg" alt="password" />
                        </div>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            autoComplete="on"
                            className={formsCSS.form__auth_password}
                            required
                        />
                    </div>
                    <input
                        type="submit"
                        value="Login"
                        className={`btn ${formsCSS.form__auth_submit}`}
                    />
                </form>
                <Auth paragraph="Don’t have an account yet?" link="/signup" nameLink="Register" />
            </section>
        </Layout>
    )
}

export default Login;