import Link from 'next/link';

import authCSS from '../../styles/auth.module.css';

function Auth({ paragraph, link, nameLink }) {
    
    return (
        <>
            <div className={authCSS.auth}>    
                <p className="text-tertiary">or continue with these social profile</p>
                <div className={authCSS.auth__box}>
                    <button
                        className="btn"
                    >
                        <img src="/images/Google.svg" alt="Google" />
                    </button>
                    <button
                        className="btn"
                    >
                        <img src="/images/Facebook.svg" alt="Facebook" />
                    </button>
                    <button
                        className="btn"
                    >
                        <img src="/images/Twitter.svg" alt="Twitter" />
                    </button>
                    <button
                        className="btn"
                    >
                        <img src="/images/Gihub.svg" alt="Gihub" />
                    </button>
                </div>
                <div className={authCSS.auth__link}>
                    <p className="text-tertiary">{paragraph}</p>
                    <Link href={link}>
                        <a className={`${authCSS.auth__link_name} text-tertiary`}>{nameLink}</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Auth;