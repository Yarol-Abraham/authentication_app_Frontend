import { useRouter } from 'next/router';
import headerCSS from '../../styles/_header.module.css';

function Header() {
    const router = useRouter();
    const routerPath = router.asPath === '/login' || router.asPath === '/signup' ? false : true;
    return (
        <>
            <header className={headerCSS.header}>
                <div className={headerCSS.header__logo_box}>
                    <img
                        src="/images/devchallenges.svg"
                        alt="logo"
                        className={headerCSS.header__logo}
                    />
                </div>
                {
                    routerPath ?
                        (
                            <div>
                                <a href="#">
                                    user
                                </a>
                            </div>
                        ) : null
                }
            </header>
        </>
    )
}
export default Header;