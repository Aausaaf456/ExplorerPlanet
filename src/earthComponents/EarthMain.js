import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Stars,OrbitControls} from "@react-three/drei";
import Earth from './Earth';
import 'bootstrap/dist/css/bootstrap.min.css';

function EarthMain()
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
                    <Earth />
                    <OrbitControls enableZoom={true} />
                </Canvas>
            </div>


            <div className="d-flex flex-column gap-3 p-4 shadow rounded bg-light" style={{ maxWidth: '600px' }}>
                <div className="text-center">
                    <h1 className="fs-3 fw-bold">Earth</h1>
                </div>

                <div>
                    <p className="fs-5 text-start">
                        Earth is the third planet from the Sun and the only known place in the universe that supports life.
                        It is a terrestrial planet with a solid surface, mostly covered by water—about 71% oceans and 29% land.
                        Earth has a diameter of approximately 12,742 kilometers and is around 4.54 billion years old.
                        Its atmosphere is mainly composed of nitrogen (78%) and oxygen (21%), making it breathable for humans and animals.
                        Earth takes 24 hours to complete a rotation (creating day and night) and 365.25 days to revolve around the Sun, forming a year.
                        It has one natural satellite—the Moon. With its moderate temperatures, magnetic field, and protective atmosphere,
                        Earth provides the perfect environment for life to thrive.
                    </p>
                </div>


            </div>

        </div>
    )
};
export default EarthMain;