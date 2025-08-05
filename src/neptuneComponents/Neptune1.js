import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Stars,OrbitControls}  from "@react-three/drei";
import Neptune from './Neptune';

function Neptune1()
{
    return(
        <div className="d-flex flex-column gap-4 bg-dark min-vh-100 p-4 text-white align-items-center">

            <div className="text-center">
                <h3 className="fs-4 fw-light">Planet</h3>
            </div>

            <div className="text-center">
                <h1 className="fs-4 fw-bold link-underline">Neptune</h1>
                <p>
                    Neptune is the eighth and farthest planet from the Sun in our solar system. It is a gas giant, known for its striking deep blue color caused by the presence of methane in its atmosphere.
                </p>
            </div>

            <div className="text-center">
                <a href="/neptuneMain" className="text-white fs-5 text-decoration-none">
                    <h4>🌐 Explore More</h4>
                </a>
            </div>

            <div style={{ height: '100vh', width: '100%' }} className="d-flex gap-3 align-items-center">
                <div className="text-center">
                    <a href="#uranus" className="text-white fs-5 text-decoration-none rounded">
                        ⬅️
                    </a>
                </div>

                <Canvas camera={{ position: [5, 0, 10], fov: 45 }}>
                    <Stars />
                    <ambientLight intensity={0.5} />
                    <directionalLight intensity={1} position={[5, 5, 5]} />
                    <Neptune />
                    <OrbitControls enableZoom={true} />
                </Canvas>

            </div>



        </div>

    )
};
export default Neptune1;