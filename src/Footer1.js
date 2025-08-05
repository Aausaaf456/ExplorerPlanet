import 'bootstrap/dist/css/bootstrap.min.css';
function Footer1()
{
    return(
        <footer className="bg-dark text-light py-4 mt-5">
            <div className="container text-center">
                <p className="mb-1 fs-5">🌌 Planets Explorer</p>
                <p className="mb-1">© {new Date().getFullYear()} Ausaaf Khan. All rights reserved.</p>
                <p className="mb-0">
                    Contact: <a href="mailto:ausaafkhan@example.com" className="text-info">ausaafkhan@example.com</a>
                </p>
            </div>
        </footer>
    )
};
export default Footer1;