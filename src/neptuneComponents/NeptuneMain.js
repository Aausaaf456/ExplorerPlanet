import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Stars,OrbitControls} from "@react-three/drei";
import Neptune from './Neptune';
import 'bootstrap/dist/css/bootstrap.min.css';


function NeptuneMain()
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
                    <Neptune />
                    <OrbitControls enableZoom={true} />
                </Canvas>
            </div>


            <div className="d-flex flex-column gap-3 p-4 shadow rounded bg-light" style={{ maxWidth: '600px' }}>
                <div className="text-center">
                    <h1 className="fs-3 fw-bold">Neptune</h1>
                </div>

                <div>
                    <p className="fs-5 text-start">
                        Neptune is the eighth and farthest planet from the Sun in our solar system. It is a gas giant, known for its striking deep blue color caused by the presence of methane in its atmosphere. Discovered in 1846, Neptune is about four times wider than Earth, with a diameter of approximately 49,244 kilometers. Despite being so far from the Sun, it has powerful winds and storms, including the famous Great Dark Spot, similar to Jupiter’s storm systems. A day on Neptune lasts about 16 hours, while one orbit around the Sun takes nearly 165 Earth years. Neptune has 14 known moons, with Triton being the largest—an unusual moon that orbits backward, suggesting it may be a captured object. Due to its distance and extreme cold temperatures (as low as -214°C), Neptune remains a mysterious world, but it continues to fascinate astronomers and space enthusiasts alike.
                    </p>
                </div>


            </div>

        </div>
    )
};
export default NeptuneMain;