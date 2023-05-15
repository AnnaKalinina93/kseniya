import { Link, useLocation } from "react-router-dom";

const NavBarList = [
    {
        item: 'HOME',
        link: '/',
    },
    {
        item: 'RESEARCH',
        link: '/research',
    },
    {
        item: 'TEACHING',
        link: '/teaching',
    },

];

function Navbar(): JSX.Element {
    const location = useLocation();
    return (
        <nav className="main-nav">
            <ul className="nav-list">
                {NavBarList.map((item) =>
                (
                    <li key={item.item} className="nav-item">
                        <Link to={item.link} className={location.pathname === item.link ? "nav-link--activ" : "nav-link"}>{item.item}</Link>
                    </li>
                )
                )}
            </ul>
        </nav>
    );
}

export default Navbar;