import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormButton = styled.button`
  /* display: flex; */
  margin: 10px;
  background-color: #0030dd63;
  padding: 10px;
  /* width: 70px;
  height: 20px;
  justify-content: center; */
  border-radius: 20px;
  font-size: 18px;
  border: 0;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  color: black;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const TextStyle = styled.p`
  padding: 16px;
  font-weight: 500;
  color: black;
`;

export const ListDetails = styled.li`
  justify-content: center;
  padding-left: 20px;
  position: relative;
  background-color: #0030dd1b;
  color: black;
  margin: 10px;
  border-radius: 50px;
  line-height: 25px;
  border: none;
`;
export const ListItemDetails = styled(Link)`
  color: black;
`;
