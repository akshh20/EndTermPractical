import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "red" : "purple" })}>About</NavLink>
            <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? "red" : "lightblue" })}>Contact</NavLink>
            <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? "red" : "pink" })}>Home</NavLink>
        </nav>
    )
}
export default Navbar;