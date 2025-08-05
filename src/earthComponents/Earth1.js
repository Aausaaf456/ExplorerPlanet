import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Stars,OrbitControls}  from "@react-three/drei";
import Earth from './Earth';

function Earth1()
{
    return(
        <div className="d-flex flex-column gap-4 bg-dark min-vh-100 p-4 text-white align-items-center">

            <div className="text-center">
                <h3 className="fs-4 fw-light">Planet</h3>
            </div>

            <div className="text-center">
                <h1 className="fs-4 fw-bold link-underline">Earth</h1>
                <p>
                    Earth is the third planet from the Sun and the only known place in the universe that supports life.
                </p>
            </div>

            <div className="text-center">
                <a href="/earthMain" className="text-white fs-5 text-decoration-none">
                    <h3>🌐 Explore More</h3>
                </a>
            </div>

            <div style={{ height: '100vh', width: '100%' }} className="d-flex gap-3 align-items-center">
                <Canvas camera={{ position: [5, 0, 10], fov: 45 }}>
                    <Stars />
                    <ambientLight intensity={0.5} />
                    <directionalLight intensity={1} position={[5, 5, 5]} />
                    <Earth />
                    <OrbitControls enableZoom={true} />
                </Canvas>
                <div className="text-center">
                    <a href="#mars" className="text-white fs-5 text-decoration-none rounded">
                        ➡️
                    </a>
                </div>
            </div>



        </div>

    )
};
export default Earth1;
