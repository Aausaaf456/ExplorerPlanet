import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Stars,OrbitControls} from "@react-three/drei";
import Uranus from './Uranus';
import 'bootstrap/dist/css/bootstrap.min.css';


function UranusMain()
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
                    <Uranus />
                    <OrbitControls enableZoom={true} />
                </Canvas>
            </div>


            <div className="d-flex flex-column gap-3 p-4 shadow rounded bg-light" style={{ maxWidth: '600px' }}>
                <div className="text-center">
                    <h1 className="fs-3 fw-bold">Uranus</h1>
                </div>

                <div>
                    <p className="fs-5 text-start">
                        Uranus is the seventh planet from the Sun and the third-largest in our solar system by diameter. It is classified as an ice giant due to its composition, which includes large amounts of water, ammonia, and methane ices, in addition to hydrogen and helium. Uranus has a pale blue-green color caused by methane gas in its atmosphere, which absorbs red light and reflects blue. One of the most unusual features of Uranus is its extreme axial tilt of about 98 degrees, causing the planet to rotate almost on its side. This results in extreme seasons, with each pole getting 42 years of continuous sunlight followed by 42 years of darkness. A day on Uranus lasts about 17 Earth hours, and it takes approximately 84 Earth years to complete one orbit around the Sun. The planet has a faint ring system and at least 27 known moons, with the largest ones being Titania, Oberon, Umbriel, Ariel, and Miranda. Uranus is also one of the coldest planets in the solar system, with atmospheric temperatures dropping as low as -224°C (-371°F). Studying Uranus provides insights into the dynamics of ice giants, magnetic fields, and the diversity of planetary systems.
                    </p>
                </div>


            </div>

        </div>
    )
};
export default UranusMain;