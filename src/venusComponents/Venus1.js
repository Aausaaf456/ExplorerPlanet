import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Stars,OrbitControls}  from "@react-three/drei";
import Venus from './Venus';

function Venus1()
{
    return(
        <div className="d-flex flex-column gap-4 bg-dark min-vh-100 p-4 text-white align-items-center">

            <div className="text-center">
                <h3 className="fs-4 fw-light">Planet</h3>
            </div>

            <div className="text-center">
                <h1 className="fs-4 fw-bold link-underline">Venus</h1>
                <p>
                    Venus is the second planet from the Sun and is often called Earth's "sister planet" due to its similar size and composition.
                </p>
            </div>

            <div className="text-center">
                <a href="/venusMain" className="text-white fs-5 text-decoration-none">
                    <h4>🌐 Explore More</h4>
                </a>
            </div>

            <div style={{ height: '100vh', width: '100%' }} className="d-flex gap-3 align-items-center">
                <div className="text-center">
                    <a href="#mars" className="text-white fs-5 text-decoration-none rounded">
                        ⬅️
                    </a>
                </div>

                <Canvas camera={{ position: [5, 0, 10], fov: 45 }}>
                    <Stars />
                    <ambientLight intensity={0.5} />
                    <directionalLight intensity={1} position={[5, 5, 5]} />
                    <Venus />
                    <OrbitControls enableZoom={true} />
                </Canvas>
                <div className="text-center">
                    <a href="#mercury" className="text-white fs-5 text-decoration-none rounded">
                        ➡️
                    </a>
                </div>
            </div>



        </div>

    )
};
export default Venus1;