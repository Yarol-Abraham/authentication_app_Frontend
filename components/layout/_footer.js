import footerCSS from '../../styles/_footer.module.css';

export default function Footer() {
    return (
        <footer className={footerCSS.footer}>
            <p className="text-tertiary">created by Yarol Abraham</p>
            <p className="text-tertiary">devchallenges.io</p>
        </footer>
    )
}
