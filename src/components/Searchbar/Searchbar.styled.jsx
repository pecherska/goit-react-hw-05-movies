import styled from 'styled-components';
import { Form, Field } from 'formik';
export const FormikForm = styled(Form)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 10px 10px 10px;
`;
export const FormButton = styled.button`
  padding: 20px;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://images.freeimages.com/fic/images/icons/989/ivista_2/256/search.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;

export const FormikInput = styled(Field)`
  display: inline-block;

  font-size: 20px;
  padding-left: 5px;
  padding-right: 5px;
`;
