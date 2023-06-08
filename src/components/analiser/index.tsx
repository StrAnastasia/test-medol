import styled from '@emotion/styled';
import { FC } from 'react';
import AniliserImg from '../styles/images/slide.png';
import Image from 'next/image';
import GradButton from 'components/shared/gradient-button';

const Aniliser: FC = () => {
  return (
    <BigWrapper>
      <div>
        <Title>Анализатор<br/>ABL800 FLEX</Title>
        <Description>
          Ориентированный на среднюю или высокую производительность тестов, анализатор
          ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови,
          электролиты, метаболиты и показатели оксиметрии
        </Description>
        <GradButton>Подробнее</GradButton>
      </div>
      <Image alt={'AniliserImg'} src={AniliserImg.src} width={724} height={544} />
    </BigWrapper>
  );
};

export default Aniliser;

const BigWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 50px;
  line-height: 59px;
  letter-spacing: 0.09em;
  color: #0d4c93;
  margin: 0px;
  margin-bottom: 31px;
`;

const Description = styled.p`
  margin: 0px;
  width: 680px;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
`;