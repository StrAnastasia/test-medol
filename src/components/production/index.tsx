import styled from '@emotion/styled';
import { FC } from 'react';

import item1img from '../styles/images/endeavor-large.png';
import item2img from '../styles/images/img6.png';
import item3img from '../styles/images/gallery_cs300_1.png';
import item4img from '../styles/images/754-1.png';
import item5img from '../styles/images/img5.png';
import item6img from '../styles/images/pacemaker-advisa-mrishtsh222.png';
import Image from 'next/image';
import GradButton from 'components/shared/gradient-button';
import ArrowRightIcon from './arrow-right-icon';

const items = [
  {
    label: 'Эндоваскулярная хирургия',
    img: item1img.src,
    width: 180,
    height: 180,
  },
  {
    label: 'Лабораторная диагностика',
    img: item2img.src,
    width: 200,
    height: 157,
  },
  {
    label: 'Кардиохирургия',
    img: item3img.src,
    width: 205,
    height: 205,
  },
  {
    label: 'ДИАБЕТ',
    img: item4img.src,
    width: 350,
    height: 192,
  },
  {
    label: 'ЭНДОУРОЛОГИЯ',
    img: item5img.src,
    width: 154,
    height: 105,
  },
  {
    label: 'АРИТМОЛОГИЯ',
    img: item6img.src,
    width: 154,
    height: 154,
  },
];

const Production: FC = () => {
  return (
    <div>
      <Wrapper>
        {items?.map(({ label, img, width, height }) => (
          <Item key={label}>
            <ImageWrapper>
              <Image alt={label} src={img} width={width} height={height} />
            </ImageWrapper>
            <div>
              <Title>{label}</Title>
              <GradButton>Подробнее</GradButton>
            </div>
          </Item>
        ))}
      </Wrapper>
      <Link>
        <p>Перейти в каталог нашей продукции </p>
        <ArrowRightIcon />
      </Link>
    </div>
  );
};

export default Production;

const Wrapper = styled.div`
  background-size: 100% 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const ImageWrapper = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  width: calc((100% / 3) - 40px);
  height: 439px;
  background: linear-gradient(180deg, #f8f8f8 0%, rgba(248, 248, 248, 0) 100%);
  opacity: 0.9;
  border-radius: 35px;
  padding: 42px 70px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 55px;
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin: 0px;
`;

const Link = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  > p {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #0d4c93;
    margin: 0px 6px 0px 0px;
  }
`;
