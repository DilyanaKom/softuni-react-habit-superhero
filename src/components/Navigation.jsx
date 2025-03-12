import NavigationLink from "./NavigationLink";

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <i className="fas fa-film mr-2"></i>
                    Habit SuperHero
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <NavigationLink />
                            <li className="nav-item">
                                <a className="nav-link nav-link-2" href="videos.html">Videos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-3" href="about.html">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-4" href="contact.html">Contact</a>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}