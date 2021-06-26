import { useEffect, useState } from 'react';

import Layout from "../components/layout/layout";
import formsCSS from '../styles/forms.module.css';
import Auth from '../components/auth/auth';

import { useRouter } from 'next/router';
import useAuth from '../components/hooks/useAuth';
function Signup() {

    const [ data, setData ] = useState({});
    const router = useRouter();
    const { handleSignup, auth } = useAuth(); 

    const handleData = function (e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async function(e) {
        e.preventDefault();
        handleSignup(data);
    }
    
    useEffect(()=>{
        if(auth.user && auth.success) return router.push("/");
        if(auth.fail && auth.message) showAlert("Fail", auth.message);
    },[auth]);

    return (
        <Layout>
            <section className="section">
                
                <form 
                    className={`${formsCSS.form__auth} u-spacing-1 html_app`}
                    onSubmit={handleSubmit}
                >
                    <div className="u-spacing-1">
                        <p className="text-primary">
                            Join thousands of learners from around the world 
                        </p>
                        <p className="text-secondary">Master web development by making real-life projects. There are multiple paths for you to choose</p>
                    </div>
                    <div className={formsCSS.form__auth_item}>
                        <div className={formsCSS.form__auth_item__icon}>
                            <img src="/images/user.svg" alt="name" />
                        </div>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            className={formsCSS.form__auth_email}
                            onChange={handleData}
                            required
                        />
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
                    <div className={formsCSS.form__auth_item}>
                        <div className={formsCSS.form__auth_item__icon}>
                            <img src="/images/password.svg" alt="Confirm Password" />
                        </div>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="passwordConfirm"
                            autoComplete="on"
                            className={formsCSS.form__auth_password}
                            onChange={handleData}
                            required
                        />
                    </div>
                    <input
                        type="submit"
                        value="Start coding now"
                        className={`btn ${formsCSS.form__auth_submit}`}
                    />
                </form>
                <Auth paragraph="Adready a member?" link="/login" nameLink="Login" />
            </section>
        </Layout>
    )
}

export default Signup;