import { NavLink } from 'react-router';
import styles from './NavigationLink.module.css'

export default function NavigationLink({name, path, className}){
    return (
        <li className="nav-item">
        <NavLink 
        to={path}
        className={ ({isActive}) =>
            `nav-link ${styles.navLink} ${styles[className]} ${isActive ? styles.active : ''}`
        }

        >{name}</NavLink>

    </li>
    )
}