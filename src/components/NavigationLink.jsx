export default function NavigationLink({name, path}){
    return (
        <li className="nav-item">
        <a className="nav-link nav-link-1 active" aria-current="page" href={path}>{name}</a>
    </li>
    )
}