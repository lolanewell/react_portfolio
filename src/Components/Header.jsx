

function Header () {
    return <ul className="nav nav-tabs">
        <li className="nav-item">
            {}
            <NavLink to="/" end>Home</NavLink>
        </li>
        <li className="nav-item">
            {}
            <NavLink to="/Pages/Projects" end>Projects</NavLink>
        </li>
        <li className="nav-item">
            {}
            <NavLink to="/Pages/Contact" end>Contact</NavLink>
        </li>
    </ul>
}

export default Header;