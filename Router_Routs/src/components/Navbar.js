import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='navbar'>
            {/* // ezek a linkek jelennek meg az Outlet-ban */}
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>
        </nav>
    );
};
export default Navbar;