import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Stars,OrbitControls} from "@react-three/drei";
import Jupiter from './Jupiter';
import 'bootstrap/dist/css/bootstrap.min.css';


function JupiterMain()
{
    return(
        <div className="d-flex flex-wrap gap-4 justify-content-center align-items-start bg-dark">

            <div
                className="mt-4 mb-4"
                style={{ height: '100vh', width: '100vw', maxWidth: '600px' }}
            >
                <Canvas camera={{ position: [5, 0, 10], fov: 45 }}>
                    <Stars />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <Jupiter />
                    <OrbitControls enableZoom={true} />
                </Canvas>
            </div>


            <div className="d-flex flex-column gap-3 p-4 shadow rounded bg-light" style={{ maxWidth: '600px' }}>
                <div className="text-center">
                    <h1 className="fs-3 fw-bold">Jupiter</h1>
                </div>

                <div>
                    <p className="fs-5 text-start">
                        Jupiter is the largest planet in our solar system, more than 11 times the diameter of Earth and over 300 times its mass. It is a gas giant, primarily composed of hydrogen and helium, with no solid surface like Earth. Jupiter is well known for its distinctive appearance, featuring colorful bands and swirling clouds caused by strong atmospheric storms and jet streams. Its most famous feature is the Great Red Spot, a giant storm larger than Earth that has been raging for centuries. Jupiter has a very strong magnetic field and a powerful radiation belt, making its environment extremely harsh. It completes one rotation in just about 10 hours, making it the fastest-spinning planet, which causes it to bulge at the equator. Despite its size, it takes about 12 Earth years to complete one orbit around the Sun. Jupiter has at least 95 known moons, including four large ones called the Galilean moons—Io, Europa, Ganymede, and Callisto—some of which may contain subsurface oceans that could potentially harbor life. Studying Jupiter helps scientists understand the early formation of the solar system, as it's believed to be the first planet that formed after the Sun.
                    </p>
                </div>


            </div>

        </div>
    )
};
export default JupiterMain;