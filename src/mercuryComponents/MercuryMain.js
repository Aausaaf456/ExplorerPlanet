import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Stars,OrbitControls} from "@react-three/drei";
import Mercury from './Mercury';
import 'bootstrap/dist/css/bootstrap.min.css';


function MercuryMain()
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
                    <Mercury />
                    <OrbitControls enableZoom={true} />
                </Canvas>
            </div>


            <div className="d-flex flex-column gap-3 p-4 shadow rounded bg-light" style={{ maxWidth: '600px' }}>
                <div className="text-center">
                    <h1 className="fs-3 fw-bold">Mercury</h1>
                </div>

                <div>
                    <p className="fs-5 text-start">
                        Mercury is the smallest planet in our solar system and the one closest to the Sun. Despite being so near to the Sun, it is not the hottest planet—Venus holds that title due to its thick atmosphere. Mercury has no atmosphere to trap heat, so temperatures fluctuate drastically, ranging from around 430°C (800°F) during the day to -180°C (-290°F) at night. It has a rocky, cratered surface, similar in appearance to Earth's Moon, and no moons or rings. Mercury orbits the Sun very quickly, completing one revolution in just 88 Earth days, but it rotates slowly, taking about 59 Earth days to complete one rotation. A single day on Mercury (from one sunrise to the next) lasts about 176 Earth days. Because of its thin exosphere (a very minimal atmosphere made of oxygen, sodium, hydrogen, helium, and potassium), Mercury cannot support life as we know it. Its core is unusually large compared to its size, suggesting that Mercury may have lost much of its outer crust in a past collision. Studying Mercury helps scientists understand the formation of rocky planets and the effects of extreme solar radiation on planetary surfaces.
                    </p>
                    </div>



            </div>

        </div>
    );
};
export default MercuryMain;