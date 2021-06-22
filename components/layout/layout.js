import Head from 'next/head';
import PropTypes from 'prop-types';
import _Header from './_header';
import _Footer from './_footer';

import { useRouter } from 'next/router';

function Layout({ children }) {
    const router = useRouter();
    const background__auth = router.asPath === "/login" || router.asPath === "/signup" ? "background__auth" : ""; 
    return (
        <>
            <Head>
                <title>Authentication App</title>
                <meta name="Description" content="Authentication App by Yarol Abraham." />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
            </Head>
           <section className={background__auth}>
                <_Header />
                <main>{children}</main>
           </section>
            <_Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.element.isRequired
}

export default Layout;