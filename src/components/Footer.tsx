"use client"
const Footer = () => {
    const date = new Date();
    return (
        <footer className="footer">
            <div className="site-container">
                <p className="footer__text">&copy; {date.getFullYear()}. Crafted with ❤️ using Next.js.</p>
            </div>
        </footer>
    )
}
export default Footer;