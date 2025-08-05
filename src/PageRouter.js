import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EarthMain from './earthComponents/EarthMain';
import MarsMain from './marsComponents/MarsMain'
import Header1 from './Header1';
import VenusMain from './venusComponents/VenusMain';
import MercuryMain from './mercuryComponents/MercuryMain';
import JupiterMain from './jupiterComponents/JupiterMain';
import SaturnMain from './saturnComponents/SaturnMain';

import UranusMain from "./uranusComponents/UranusMain";
import NeptuneMain from './neptuneComponents/NeptuneMain';
function PageRouter() {

    return (

        <>
            <Router>
                <Header1/>

                <Routes>

                    <Route path="/earthMain" element={<EarthMain/>}/>
                    <Route path="/marsMain" element={<MarsMain/>}/>
                    <Route path="/venusMain" element={<VenusMain />}/>
                    <Route path="/mercuryMain" element={<MercuryMain />}/>
                    <Route path="/jupiterMain" element={<JupiterMain />}/>
                    <Route path="/saturnMain" element={<SaturnMain />}/>
                    <Route path="/uranusMain" element={<UranusMain />}/>
                    <Route path="/neptuneMain" element={<NeptuneMain />}/>
                </Routes>
            </Router>
        </>
    )
};
export default PageRouter;