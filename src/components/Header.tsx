'use client'

import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher"
const Header = () => {

    const [menuActive, setMenuActive] = useState(false);
    const menuItems = [
        {
            name: "About",
            link: "/#about"
        },
        {
            name: "Projects",
            link: "/#projects"
        },
        {
            name: "Contact",
            link: "/#contact"
        },
    ]
    return (
        <header className="header">
            <div className="site-container">
                <div className="header__inner">
                    <Link className="logo" href="/">
                        <svg width="137" height="28" viewBox="0 0 137 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="logo__object" d="M1 21.9707V25.4667C1.00194 25.873 1.25499 26.2622 1.70387 26.5495C2.15276 26.8368 2.76102 26.9988 3.39583 27H22.5625C23.1973 26.9988 23.8056 26.8368 24.2545 26.5495C24.7033 26.2622 24.9564 25.873 24.9583 25.4667V5.53333C24.9564 5.12705 24.7033 4.73776 24.2545 4.45048C23.8056 4.16319 23.1973 4.00124 22.5625 4H3.39583C2.76102 4.00124 2.15276 4.16319 1.70387 4.45048C1.25499 4.73776 1.00194 5.12705 1 5.53333V9.02933" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path className="logo__object" d="M2.77478 20.1867L10.0977 15.5L2.77478 10.8133M10.0977 20.1867H18.2592" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <rect className="logo__text" x="93" y="14" width="8.2" height="2" />
                            <path className="logo__text" d="M33.24 28V2.8H40.008V28H33.24ZM46.4588 28V2.8H53.2268V28H46.4588ZM59.6775 28V2.8H68.3535C71.1855 2.8 73.6695 3.316 75.8055 4.348C77.9415 5.38 79.5975 6.856 80.7735 8.776C81.9495 10.672 82.5375 12.88 82.5375 15.4C82.5375 17.896 81.9495 20.104 80.7735 22.024C79.5975 23.92 77.9415 25.396 75.8055 26.452C73.6695 27.484 71.1855 28 68.3535 28H59.6775ZM68.3895 21.88C69.9015 21.88 71.1855 21.628 72.2415 21.124C73.3215 20.62 74.1375 19.888 74.6895 18.928C75.2415 17.944 75.5175 16.768 75.5175 15.4C75.5175 14.032 75.2415 12.868 74.6895 11.908C74.1375 10.924 73.3215 10.18 72.2415 9.676C71.1855 9.172 69.9015 8.92 68.3895 8.92H66.4455V21.88H68.3895ZM86.783 28V2.8H104.963V8.668H93.407V15.04H101.111V15.76H93.407V22.132H105.863V28H86.783ZM117.427 28L107.959 2.8H115.267L121.891 22.132H122.035L128.659 2.8H135.787L126.319 28H117.427Z" />
                        </svg>
                    </Link>
                    <nav className="nav">
                        <button className={menuActive ? 'menu-button menu-button--active' : 'menu-button'}
                            role="button"
                            aria-label="Menu"
                            onClick={() => setMenuActive(!menuActive)}
                        >
                            <span></span>
                            <span></span>
                        </button>
                        <div className={menuActive ? 'menu menu--active' : 'menu'}>
                            <ul className="menu__list">
                                {menuItems.map((item, i) => (
                                    <li key={i} className="menu__item"><Link className="menu__link" href={item.link}>{item.name}</Link></li>
                                ))}
                            </ul>
                            <ThemeSwitcher />
                        </div>
                    </nav>
                </div>
            </div >
        </header >
    )
}

export default Header;