import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Petrov Blog</h1>
            <div className="linkovi">
                <Link to="/">Pocetna</Link>
                <Link to="/create">Novi blog</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;