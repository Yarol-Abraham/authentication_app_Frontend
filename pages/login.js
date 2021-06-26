import { useEffect, useState } from 'react';

import Layout from "../components/layout/layout";
import formsCSS from '../styles/forms.module.css';
import Auth from '../components/auth/auth';
import useAuth from '../components/hooks/useAuth';
import { useRouter } from 'next/router';
import { showAlert } from '../components/utils/alert';
function Login() {

    const [ data, setData ] = useState({});
    const router = useRouter();
    const { handleLogin, auth } = useAuth(); 
    const handleData = function (e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async function(e) {
        e.preventDefault();
        handleLogin(data);
    }
    
    useEffect(()=>{
        if(auth.user && auth.success) return router.push("/");
        if(auth.fail && auth.message) showAlert("Fail", auth.message);
    },[auth]);

    return (
        <Layout>
            <section className="section">
               
                <form 
                    onSubmit={handleSubmit}
                    className={`${formsCSS.form__auth} u-spacing-1 html_app`}
                >
                     <div className="u-spacing-1">
                        <p className="text-primary">
                            Login 
                        </p>
                    </div>
                    <div className={formsCSS.form__auth_item}>
                        <div className={formsCSS.form__auth_item__icon}>
                            <img src="/images/mail.svg" alt="email" />
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className={formsCSS.form__auth_email}
                            onChange={handleData}
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
                            onChange={handleData}
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