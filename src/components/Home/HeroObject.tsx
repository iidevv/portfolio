'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Line, Sphere } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'


function HeroObject() {
    return (
        <div className="hero-canvas">
            <Canvas camera={{ position: [0, 0, 8] }}>
                <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                    <Atom />
                </Float>
                <EffectComposer>
                    <Bloom mipmapBlur luminanceThreshold={1} radius={0.05} />
                </EffectComposer>
            </Canvas>
        </div >
    );
}

function Atom() {
    const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])
    return (
        <group>
            <Line worldUnits points={points} color="#149eca" lineWidth={0.3} />
            <Line worldUnits points={points} color="#149eca" lineWidth={0.3} rotation={[0, 0, 1]} />
            <Line worldUnits points={points} color="#149eca" lineWidth={0.3} rotation={[0, 0, -1]} />
            <Electron position={[0, 0, 0.5]} speed={2} />
            <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={2.5} />
            <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={3} />
            <Sphere args={[0.55, 64, 64]}>
                <meshBasicMaterial color="#149eca" toneMapped={false} />
            </Sphere>
        </group>
    )
}

function Electron({ radius = 2.75, speed = 6, ...props }) {
    const ref = useRef<any>();
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed
        ref.current.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0)
    })
    return (
        <group {...props}>
            <mesh ref={ref}>
                <sphereGeometry args={[0.25]} />
                <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
            </mesh>
        </group>
    )
}

export default HeroObject;
