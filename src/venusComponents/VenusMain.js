import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Stars,OrbitControls} from "@react-three/drei";
import Venus from './Venus';
import 'bootstrap/dist/css/bootstrap.min.css';


function VenusMain()
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
                    <Venus />
                    <OrbitControls enableZoom={true} />
                </Canvas>
            </div>


            <div className="d-flex flex-column gap-3 p-4 shadow rounded bg-light" style={{ maxWidth: '600px' }}>
                <div className="text-center">
                    <h1 className="fs-3 fw-bold">Venus</h1>
                </div>

                <div>
                    <p className="fs-5 text-start">
                        Venus is the second planet from the Sun and is often referred to as Earth’s “sister planet” because of its similar size, mass,
                        and rocky composition. Despite these similarities, Venus has an extremely hostile environment.
                        It has a thick atmosphere composed mainly of carbon dioxide, with clouds of sulfuric acid,
                        which traps heat through an intense greenhouse effect.
                        As a result, Venus is the hottest planet in our solar system,
                        with surface temperatures reaching around 465°C (869°F)—hot enough to melt lead.
                        The atmospheric pressure on Venus is over 90 times greater than Earth’s, equivalent to being nearly a kilometer underwater.
                        Unlike most planets, Venus rotates very slowly and in the opposite direction of its orbit (a retrograde rotation),
                        taking about 243 Earth days to complete one rotation, while its orbit around the Sun takes 225 Earth days—meaning a day on Venus is longer than its year.
                        The planet has no moons or rings. Its surface features include vast plains, volcanic regions, highland terrains, and thousands of volcanoes, some possibly still active.
                        Due to its dense cloud cover, the surface of Venus is not visible in visible light and must be studied using radar mapping. Though it's unlikely to support life as we know it, Venus remains a key target for planetary exploration due to its extreme conditions and similarities to early Earth, helping scientists understand climate change, geology, and planetary evolution.
                    </p>
                </div>


            </div>

        </div>
    )
};
export default VenusMain;