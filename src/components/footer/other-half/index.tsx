import { FC } from 'react';
import styled from '@emotion/styled';

const OtherBlock: FC = () => {
  return (
    <Container>
      <Column>
        <Title>О компании</Title>
        <ListEl>История</ListEl>
        <ListEl>Партнеры</ListEl>
        <ListEl>Вакансии</ListEl>
      </Column>
      <Column>
        <Title>О Продукция</Title>
        <ListEl>Эндоваскулярная хирургия</ListEl>
        <ListEl>Аритмология</ListEl>
        <ListEl link>Кардиохирургия</ListEl>
        <ListEl>Лабораторная диагностика</ListEl>
        <ListEl>Хирургия</ListEl>
        <ListEl>Эндоурология</ListEl>
        <ListEl>Нейрохирургия</ListEl>
        <ListEl>Анестезиология и реанимация</ListEl>
        <ListEl>Диабет</ListEl>
      </Column>
      <Column>
        <Title>Услуги</Title>
        <ListEl>Сервис</ListEl>
        <ListEl>Регистрации</ListEl>
        <ListEl>Услуги логистики</ListEl>
      </Column>
    </Container>
  );
};

export default OtherBlock;

const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 26px;
  line-height: 28px;
  letter-spacing: 0.04em;
  color: #595959;
  margin: 0px;
`;

const ListEl = styled.p<{ link?: boolean }>`
  margin: 0px;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 4%;
  color: ${({ link }) => (link ? '#00C9C9' : '#595959')};
  text-decoration: ${({ link }) => (link ? 'underline' : 'none')};
  cursor: ${({ link }) => (link ? 'pointer' : '')};
`;
