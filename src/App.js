import React from 'react';
import Earth1 from './earthComponents/Earth1';
import Mars1 from './marsComponents/Mars1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from './Header1';
import PageRouter from './PageRouter';
import Venus from './venusComponents/Venus1';
import Mercury from './mercuryComponents/Mercury1';
import Jupiter from './jupiterComponents/Jupiter1';
import Saturn from './saturnComponents/Saturn1';
import Uranus from './uranusComponents/Uranus1';
import Neptune from './neptuneComponents/Neptune1';
import Contact from './Contact';
import About from './About';
import Footer1 from './Footer1';



function App()
{

    return(

        <>


            <PageRouter/>
            <div
                className="d-flex gap-3"
                style={{
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                    width: '100%',
                }}
            >
                <div style={{ minWidth: '100vw' }}>
                    <section id="earth">
                        <Earth1/>
                    </section>
                </div>
                <div style={{ minWidth: '100vw' }}>
                    <section id="mars">
                        <Mars1/>
                    </section>

                </div>
                <div style={{ minWidth: '100vw' }}>
                    <section id="venus">
                        <Venus />
                    </section>

                </div>

                <div style={{ minWidth: '100vw' }}>
                    <section id="mercury">
                        <Mercury />
                    </section>

                </div>

                <div style={{ minWidth: '100vw' }}>
                    <section id="jupiter">
                        <Jupiter />
                    </section>

                </div>
                <div style={{ minWidth: '100vw' }}>
                    <section id="saturn">
                        <Saturn />
                    </section>

                </div>
                <div style={{ minWidth: '100vw' }}>
                    <section id="uranus">
                        <Uranus />
                    </section>

                </div>

                <div style={{ minWidth: '100vw' }}>
                    <section id="neptune">
                        <Neptune />
                    </section>

                </div>
            </div>
            <div style={{ minWidth: '100vw' }}>
                <section id="about">
                    <About />
                </section>

            </div>
            <div style={{ minWidth: '100vw' }}>
                <section id="contact">
                    <Contact />
                </section>

            </div>
            <Footer1 />


        </>
    )
}

export default App;