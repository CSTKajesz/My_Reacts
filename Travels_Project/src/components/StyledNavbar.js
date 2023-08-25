import { NavLink } from 'react-router-dom';

// propsban átadjuk a classnamet
const StyledNavbar = ({ className }, props) => {
  return (
    //                          propsban átadott a classnamet felhasználjuk (footer)
    <nav className={'navbar ' + (className ? className : '')}>
      <div className={'nav-center ' + (className ? className : '')}>
        <NavLink
          to='/'
          //                                                    itt is propsban átadott a classnamet felhasználjuk (footer)
          className={({ isActive }) => `${isActive ? 'link active' : 'link'} nav-link ` + (className ? className : '')}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => `${isActive ? 'link active' : 'link'} nav-link ` + (className ? className : '')}
          //props-ba megkapja a MobileNavigation oldalról az isMobile-t és a closeM...
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          About
        </NavLink>
        <NavLink
          to='/services'
          className={({ isActive }) => `${isActive ? 'link active' : 'link'} nav-link ` + (className ? className : '')}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Services
        </NavLink>
        <NavLink
          to='/tours'
          className={({ isActive }) => `${isActive ? 'link active' : 'link'} nav-link ` + (className ? className : '')}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Tours
        </NavLink>
      </div>
    </nav >
  );
};
export default StyledNavbar;
