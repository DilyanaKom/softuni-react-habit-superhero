import { useNavigation } from "./NavigationContext";
import NavigationLink from "./NavigationLink";

export default function Navigation() {

    const navLinks = useNavigation();

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
                        {navLinks.map((link) => (<NavigationLink key={link.id} name={link.name} path={link.path} className={link.className}/>))}
                    </ul>
                </div>
            </div>
        </nav>


    )
}