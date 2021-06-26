import { useState } from 'react';
import { useRouter } from 'next/router';
import headerCSS from '../../styles/_header.module.css';
import Link from 'next/link';
import useAuth from '../hooks/useAuth';

function Header() {
    const [ menuOPtions, setMenuOptions ] = useState(false);
    const { handleloginLogout, auth : { user } } = useAuth();
    const router = useRouter();
    const routerPath = router.asPath === '/login' || router.asPath === '/signup' ? false : true;
    const onClickToggleOptions = function() {
        setMenuOptions(!menuOPtions);
    }

    const handleClickLogout = function() {
        handleloginLogout();
        router.push('/login');
    };

    return (
        <>
            <header className={headerCSS.header}>
                <Link href="/">
                    <a>
                        <div className={headerCSS.header__logo_box}>
                            <img
                                src="/images/devchallenges.svg"
                                alt="logo"
                                className={headerCSS.header__logo}
                            />
                        </div>
                    </a>
                </Link>
                {
                    routerPath ?
                        (
                            <>
                                <button 
                                    className={`btn ${headerCSS.btn_user}`}
                                    onClick={onClickToggleOptions}
                                >
                                    <img 
                                        src="/images/19-test1@correo.com.jpeg" 
                                        alt="user" 
                                        className={headerCSS.img_user}
                                    />
                                    <p className={`text-primary-sm ${headerCSS.name_user}`}>{user?.name}</p>
                                </button>
                                <div className={`${headerCSS.header__options} ${menuOPtions ? headerCSS.hideOptions : ''}`}>
                                   <div className={headerCSS.options__item}>
                                        <img 
                                            src="/images/account.svg" 
                                            alt="account" 
                                            className={headerCSS.options__item_img}
                                        />
                                        <Link href="/editProfile">
                                            <a className={`text-primary-fm ${headerCSS.header__options_link}`}>Edit profile</a>
                                        </Link>
                                   </div>
                                   <div className={headerCSS.options__item}>
                                        <img 
                                            src="/images/group.svg" 
                                            alt="account" 
                                            className={headerCSS.options__item_img}
                                        />
                                        <Link href="/editProfile">
                                            <a className={`text-primary-fm ${headerCSS.header__options_link}`}>Group Chat</a>
                                        </Link>
                                   </div>
                                   <div  className={headerCSS.options__item}>
                                        <img 
                                            src="/images/logout.svg" 
                                            alt="account" 
                                            className={headerCSS.options__item_img}
                                        />
                                            <button 
                                                className={`btn text-primary-fm ${headerCSS.header__options_link}`}
                                                onClick={ handleClickLogout }
                                            >Logout</button>
                                   </div>
                                </div>
                            </>
                        ) : null
                }
            </header>
        </>
    )
}
export default Header;