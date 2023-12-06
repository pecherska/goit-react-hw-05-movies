// import { NavLink } from 'react-router-dom';
import { NavLinkStyle, NavList } from './Header.styled';

const Header = () => {
  return (
    <nav>
      <NavList>
        <NavLinkStyle to="/">Home</NavLinkStyle>
        <NavLinkStyle to="movies">Movies</NavLinkStyle>
      </NavList>
    </nav>
  );
};

export default Header;
