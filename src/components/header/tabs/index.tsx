import { FC, useState } from 'react';
import styled from '@emotion/styled';

const tabs = [
  'МАГАЗИН',
  'О КОМПАНИИ',
  'ПРОДУКЦИЯ',
  'УСЛУГИ',
  'АКЦИИ И НОВОСТИ',
  'ОБРАТНАЯ СВЯЗЬ',
];

const Tabs: FC = () => {
  const [chosenTab, setChosenTab] = useState("О КОМПАНИИ")
  return (
    <TotalWrapper>
      {tabs.map((el) => (
        <Tab key={el} chosen={el === chosenTab}
        onClick={() => setChosenTab(el)}
        >
          {el === chosenTab && <Circle />}
          {el}
        </Tab>
      ))}
    </TotalWrapper>
  );
};

export default Tabs;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  margin-bottom: 46px;
  padding: 0px;
  border-radius: 35px;
  box-sizing: border-box;
  background: white;
  > div:last-child {
    border: none;
  }
`;

const Tab = styled.div<{ chosen: boolean }>`
  border-right: 2px solid #f2f2f2;
  height: 100%;
  padding: 0px 2.8%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 23px;
  color: ${({ chosen }) => (chosen ? '#00C9C9' : '#0D4C93')};
  position: relative;
  > svg {
    position: absolute;
    top: 11px;
    right: 11px;
  }
  cursor: pointer;
`;

const Circle: FC = () => (
  <svg
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='6' cy='6' r='6' fill='#00C9C9' />
  </svg>
);
