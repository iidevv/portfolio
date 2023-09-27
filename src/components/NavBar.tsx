'use client'

import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar = () => {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/#about">About</Link></li>
                    <li><Link href="/#projects">Projects</Link></li>
                    <li><Link href="/#contacts">Contact</Link></li>
                </ul>
                <button onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                }
                }>
                    {theme === 'dark' ? 'light' : 'dark'}
                </button>
            </nav>
        </header>
    )
}

export default NavBar;