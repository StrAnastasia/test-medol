import styled from '@emotion/styled';
import { FC } from 'react';

import item1img from '../styles/images/news.png';
import Image from 'next/image';
import GradButton from 'components/shared/gradient-button';

const NewsArticle: FC = () => {
  return (
    <Item key={'Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича'}>
      <Image
        alt={'Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича'}
        src={item1img.src}
        width={500}
        height={500}
      />
      <div>
        <Title>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</Title>
        <Title style={{ margin: '18px 0px 12px' }}>26.07.2021</Title>
        <Description>
          С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный
          Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon
          Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен
          мастер-класс в исполнении...
        </Description>
        <GradButton>Подробнее</GradButton>
      </div>
    </Item>
  );
};

export default NewsArticle;

const Item = styled.div`
  width: calc((100% / 9) - 50px);
  margin-right: 83px;
  margin-top: 125px;
  height: 520px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  padding: 0px 26px 53px;
  position: relative;
  > img {
    width: 335px;
    height: 251px;
    margin-top: -125px;
    border-radius: 35px;
    margin-bottom: 28px;
  }
  > div {
    padding: 0px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > button {
      position: absolute;
      margin: 0px;
      bottom: -35px;
    }
  }
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #0d4c93;
  margin: 0px;
`;

const Description = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin: 0px;
  width: 350px;
`;
