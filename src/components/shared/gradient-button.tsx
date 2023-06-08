import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';

const GradButton: FC<{ children: ReactNode }> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default GradButton;

const Button = styled.button`
  background: linear-gradient(90deg, #0d4c93 0%, #00c9c9 100%);
  width: 270px;
  height: 70px;
  border-radius: 35px;
  margin-top: 42px;
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
`;
