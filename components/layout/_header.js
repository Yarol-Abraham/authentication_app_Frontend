import { useState } from 'react';
import { useRouter } from 'next/router';
import headerCSS from '../../styles/_header.module.css';
import Link from 'next/link';

function Header() {
    const [ menuOPtions, setMenuOptions ] = useState(false);
    const router = useRouter();
    const routerPath = router.asPath === '/login' || router.asPath === '/signup' ? false : true;
    const onClickToggleOptions = function() {
        setMenuOptions(!menuOPtions);
    }
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
                                    <p className={`text-primary-sm ${headerCSS.name_user}`}>Yarol Abraham</p>
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
                                        <Link href="/editProfile">
                                            <a className={`text-primary-fm ${headerCSS.header__options_link}`}>Logout</a>
                                        </Link>
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