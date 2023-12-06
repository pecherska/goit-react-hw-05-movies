import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  /* justify-content: center; */
`;
export const NavLinkStyle = styled(NavLink)`
  display: flex;
  margin: 10px;
  background-color: #0030dd63;
  padding: 20px;
  width: 70px;
  height: 20px;
  justify-content: center;
  border-radius: 20px;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  color: black;
`;
