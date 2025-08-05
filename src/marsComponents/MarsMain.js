import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Stars,OrbitControls} from "@react-three/drei";
import Mars1 from './Mars';
import 'bootstrap/dist/css/bootstrap.min.css';


function MarsMain()
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
                    <Mars1 />
                    <OrbitControls enableZoom={true} />
                </Canvas>
            </div>


            <div className="d-flex flex-column gap-3 p-4 shadow rounded bg-light" style={{ maxWidth: '600px' }}>
                <div className="text-center">
                    <h1 className="fs-3 fw-bold">Mars</h1>
                </div>

                <div>
                    <p className="fs-5 text-start">
                        Mars, often called the "Red Planet," is the fourth planet from the Sun in our solar system.
                        It has a diameter of about 6,779 kilometers, making it roughly half the size of Earth.
                        A day on Mars lasts about 24.6 Earth hours, and a full year takes around 687 Earth days.
                        Mars has a thin atmosphere made mostly of carbon dioxide, and its surface is cold, rocky,
                        and covered in iron oxide, which gives it a reddish appearance. The planet has two small moons,
                        Phobos and Deimos. Mars is home to some of the solar system’s most extreme features,
                        including Olympus Mons, the tallest volcano, and Valles Marineris, a massive canyon system.
                        Though the surface is dry today, there is strong evidence that liquid water once flowed on Mars,
                        and frozen water still exists at its poles.
                        These features make Mars a key focus in the search for past or present extraterrestrial life
                    </p>
                </div>


            </div>

        </div>
    )
};
export default MarsMain;