import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
function About()
{
    return(
    <div className="bg-dark text-light py-5 px-4 min-vh-100">
        <div className="container">

            <div className="mb-5 text-center">
                <h2 className="fw-bold mb-3">🌌 About the Project</h2>
                <p className="fs-5">
                    This planetary exploration project offers an interactive 3D view of planets in our solar system using React and Three.js (Three Fiber).
                    Each planet features a rotating 3D model along with informative content, helping users learn more about the universe in a visually engaging way.
                </p>
            </div>


        </div>
    </div>
    );
};
export default About;