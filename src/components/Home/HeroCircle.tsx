'use client'

import { useEffect } from 'react';
import gsap from 'gsap';

function HeroCircle() {
    useEffect(() => {
        gsap.to("#rotating-text-group", {
            rotation: 360,
            duration: 40,
            repeat: -1,
            ease: "linear",
            transformOrigin: "center center"
        });
    }, []);

    return (
        <svg width="400" height="400" viewBox="0 0 400 400">
            <defs>
                <path d="M200,200 m-160,0 a160,160 0 1,1 320,0 a160,160 0 1,1 -320,0" id="textPath"></path>
            </defs>
            
            <g id="rotating-text-group">
                <text fontSize="15">
                    <textPath href="#textPath" startOffset="5%">MongoDB MongoDB MongoDB MongoDB</textPath>
                </text>
                <text fontSize="15">
                    <textPath href="#textPath" startOffset="25%">Express JS Express JS Express JS Express JS</textPath>
                </text>
                <text fontSize="15">
                    <textPath href="#textPath" startOffset="50%">React JS React JS React JS React JS</textPath>
                </text>
                <text fontSize="15">
                    <textPath href="#textPath" startOffset="75%">Node.js Node.js Node.js Node.js</textPath>
                </text>
            </g>
        </svg>
    );
}

export default HeroCircle;
