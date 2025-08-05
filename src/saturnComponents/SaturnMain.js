import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Stars,OrbitControls} from "@react-three/drei";
import Saturn from './Saturn';
import 'bootstrap/dist/css/bootstrap.min.css';


function SaturnMain()
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
                    <Saturn />
                    <OrbitControls enableZoom={true} />
                </Canvas>
            </div>


            <div className="d-flex flex-column gap-3 p-4 shadow rounded bg-light" style={{ maxWidth: '600px' }}>
                <div className="text-center">
                    <h1 className="fs-3 fw-bold">Saturn</h1>
                </div>

                <div>
                    <p className="fs-5 text-start">
                        Saturn is the sixth planet from the Sun and the second-largest in our solar system, known for its stunning and complex ring system. It is a gas giant composed mainly of hydrogen and helium, with no solid surface. Saturn’s most distinctive feature is its bright rings, made of countless ice particles, rock fragments, and dust, stretching thousands of kilometers wide but only about 10 meters thick. The planet is massive—over nine times wider than Earth—and has a strong magnetic field, as well as extreme weather, including powerful storms and high-speed winds reaching up to 1,800 km/h (1,100 mph). Saturn takes about 29.5 Earth years to complete one orbit around the Sun and rotates rapidly, with one day lasting just about 10.7 hours. It has at least 146 confirmed moons, including Titan, the second-largest moon in the solar system and the only one known to have a thick atmosphere and stable surface liquids. Scientists study Saturn to learn more about planetary formation, atmospheric dynamics, and the potential for life in its moons’ subsurface oceans.
                    </p>
                </div>


            </div>

        </div>
    )
};
export default SaturnMain;