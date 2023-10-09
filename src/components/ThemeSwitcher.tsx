'use client'

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from "react";

const ThemeSwicher = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            className="theme-switcher"
            onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
        >
            {currentTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};

export default ThemeSwicher;
