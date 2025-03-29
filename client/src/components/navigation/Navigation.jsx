import { useContext } from "react";
import { Link } from "react-router";

import { NavigationContext } from "./NavigationContext";
import NavigationLink from "./NavigationLink";
import { UserContext } from "../user/UserContext";

import styles from './NavigationLink.module.css'


export default function Navigation() {

    const navLinks = useContext(NavigationContext);
    const {username} = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"> 
                <i class="fa-solid fa-spa"></i>
                    Habit SuperHero
                </Link>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        {username &&         <li className={styles.greeting}>Hello, {username}!</li>}
                        {navLinks.map((link) => (<NavigationLink key={link.id} name={link.name} path={link.path} className={link.className}/>))}
                    </ul>
                </div>
            </div>
        </nav>


    )
}

<a class="nav-link _navLink_1ev2k_1 _navLink1_1ev2k_41 _active_1ev2k_53" href="/" data-discover="true" aria-current="page">Home</a>