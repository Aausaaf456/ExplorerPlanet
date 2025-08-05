import React ,{useRef,useEffect} from 'react';
import {useFrame,useLoader} from '@react-three/fiber';
import {TextureLoader} from 'three';
import earthTexture from "../assets/earth4.jpg";
import * as THREE from 'three';
function Earth() {
    const meshRef = useRef();
    const texture = useLoader(TextureLoader, earthTexture);

    useEffect(() => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
    }, [texture]);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[2, 64, 64]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
}
export default Earth
