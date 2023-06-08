import styled from '@emotion/styled';
import { FC } from 'react';

import item1img from '../styles/images/servic1.png';
import item2img from '../styles/images/servic2.png';
import item3img from '../styles/images/servic3.png';
import Image from 'next/image';
import GradButton from 'components/shared/gradient-button';

const items = [
  {
    title: 'СЕРВИС ОБОРУДОВАНИЯ',
    description:
      'Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......',
    img: item1img.src,
  },
  {
    title: 'РЕГИСТРАЦИИ',
    description:
      'Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению....',
    img: item2img.src,
  },
  {
    title: 'УСЛУГИ ЛОГИСТИКИ',
    description:
      'Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей.....',
    img: item3img.src,
  },
];

const Services: FC = () => {
  return (
    <div>
      <Wrapper>
        {items?.map(({ title, description, img }) => (
          <Item key={title}>
            <Image alt={title} src={img} width={500} height={500} />
            <div>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <GradButton>Подробнее</GradButton>
            </div>
          </Item>
        ))}
      </Wrapper>
    </div>
  );
};

export default Services;

const Wrapper = styled.div`
  background-size: 100% 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Item = styled.div`
  width: calc((100% / 3) - 40px);
  height: 490px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  > img {
    width: 100%;
    height: auto;
    border-radius: 50px 50px 0px 0px;
    margin-bottom: 28px;
  }
  > div {
    padding: 0px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > button {
      margin-top: 35px;
    }
  }
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.065em;
  color: #0d4c93;
  text-align: center;
  margin: 0px;
`;

const Description = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin: 0px;
  width: 350px;
  height: 120px;
`;
