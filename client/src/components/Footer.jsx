export default function Footer() {

    return (
        <footer className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
            <div className="container-fluid tm-container-small">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-12 px-5 mb-5">
                        <h3 className="tm-text-primary mb-4 tm-footer-title">About HabitSuperhero</h3>
                        <p>HabitSuperhero is a platform where users can create, join, and complete healthy lifestyle challenges. Join our community to track your progress, participate in official challenges, or create your own community challenges. Powered by a custom practice server.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 px-5 mb-5 d-flex flex-column align-items-end">
                        <a href="https://github.com/DilyanaKom/softuni-react-habit-superhero.git" title="GitHub Repository" target="_blank" className="mb-4">
                            <i className="fab fa-github tm-text-primary" style={{ fontSize: '2rem' }}></i>
                        </a>
                        <a href="#" className="tm-text-primary font-weight-bold" style={{ fontSize: '1.2rem' }} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                            Back to Top ↑
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-7 col-12 px-5 mb-3">
                        Copyright 2025 HabitSuperhero. All rights reserved.
                    </div>
                    <div className="col-lg-4 col-md-5 col-12 px-5 text-right">
                        Developed for SoftUni React Project
                    </div>
                </div>
            </div>
        </footer>
    )
}


