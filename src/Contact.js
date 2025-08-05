import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Contact()
{
    return(

    <div className="text-center min-vh-100 bg-dark">
        <h2 className="fw-bold mb-3 text-center">📬 Contact</h2>
        <p className="fs-5 mb-2">
            Have questions, feedback, or want to collaborate?
        </p>
        <p className="fs-5 mb-3">
            Email: <a href="mailto:aausaafkhan@gmail.com" className="text-info">aausaafkhan@gmail.com</a>
        </p>

        {/* Social or GitHub Link */}
        <a
            href="https://github.com/yourusername/your-planet-project"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
        >
            🌐 View on GitHub
        </a>
    </div>

    )
}
export default Contact;