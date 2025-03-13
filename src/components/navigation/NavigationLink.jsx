import styles from './NavigationLink.module.css'

export default function NavigationLink({name, path, className}){
    //console.log(styles[className])
    return (
        <li className="nav-item">
        <a className={`nav-link ${styles[className]}`} href={path}>{name}</a>
    </li>
    )
}