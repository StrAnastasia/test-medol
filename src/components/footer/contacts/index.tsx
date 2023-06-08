import { FC } from 'react';
import AdressIcon from './icons/adress-icon';
import PhoneIcon from './icons/phone-icon';
import styled from '@emotion/styled';
import Image from 'next/image';
import logo from '../../styles/images/logo.png';
import EmailIcon from './icons/email-icon';
import GradButton from 'components/shared/gradient-button';

const ContactsBlock: FC = () => {
  return (
    <Container>
      <div>
        <Title>Контакты</Title>
        <TotalWrapper>
          <FlexBlock margin={'0px 0px 30px'}>
            <AdressIcon />
            <div>
              <p>г.Ташкент, Чиланзар</p>
              <p>10 квартал, дом 3/1</p>
            </div>
          </FlexBlock>
          <FlexBlock margin={'0px 0px 30px'}>
            <PhoneIcon />
            <div>
              <p>+998 71 276-62-53</p>
              <p>+998 71 276-62-54</p>
            </div>
          </FlexBlock>
          <FlexBlock margin={'0px 0px 46px'}>
            <EmailIcon />
            <div>
              <p>info@medol.uz </p>
            </div>
          </FlexBlock>
          <FlexBlock margin={'0px 0px 46px'}>
            <GradButton>Оставить заявку</GradButton>
          </FlexBlock>
        </TotalWrapper>
      </div>

      <Description>
        <Image alt={'logo'} src={logo} width={200} height={58} />
        <p>
          Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу
          населению, путем решения глобальных вопросов. Внедряя инновационные технологии
          на рынок Узбекистана.
        </p>
      </Description>
    </Container>
  );
};

export default ContactsBlock;

const Container = styled.div`
  width: 50%;
  > div {
    display: flex;
  }
`;

const Description = styled.div`
  align-items: center;

  > p {
    margin: 0px 0px 0px 48px;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #585858;
  }
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 28px;
  letter-spacing: 0.04em;
  color: #595959;
  margin: 0px;
`;

const TotalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 46px;
`;

const FlexBlock = styled.div<{ margin?: string; justifyCenter?: boolean }>`
  width: 50%;
  display: flex;
  align-items: center;
  margin: ${({ margin }) => margin};
  justify-content: ${({ justifyCenter }) => (justifyCenter ? 'center' : '')};

  p {
    margin: 0px;
    line-height: 19px;
    letter-spacing: 0.025em;
    color: #5a5a5a;
  }
  > svg {
    margin-right: 20px;
  }
  > button {
    margin: 0px;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #ffffff;
    width: 229px;
    height: 50px;
  }
`;

const WhiteButton = styled.button`
  border: none;
  outline: none;
  background: #ffffff;
  border-radius: 25px;
  padding: 0px 14px;
  height: 50px;
  display: flex;
  align-items: center;
  > img {
    border-radius: 25px;
  }
  > p {
    margin: 0px;
    margin-left: 16px;
  }
`;
