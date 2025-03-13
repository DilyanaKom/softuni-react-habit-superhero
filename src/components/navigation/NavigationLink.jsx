import { Link } from 'react-router-dom';
import styles from './NavigationLink.module.css'

export default function NavigationLink({name, path, className}){
    return (
        <li className="nav-item">
        <Link to={path} className={`nav-link ${styles.navLink} ${styles[`navLink${className}`]}`}  >{name}</Link>
    </li>
    )
}