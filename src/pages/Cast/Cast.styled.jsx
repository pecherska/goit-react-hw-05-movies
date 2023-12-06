import styled from 'styled-components';

export const ContainerList = styled.ul`
  display: grid;
  gap: 20px;
  padding: 20px;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: auto;
`;

export const ImageListItems = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const NamaStyle = styled.h3`
  padding-left: 16px;
  color: black;
`;

export const TextStyle = styled.p`
  padding: 16px;
  font-weight: 500;
  color: black;
`;
