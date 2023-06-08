import { FC } from 'react';
import AdressIcon from './icons/adress-icon';
import PhoneIcon from './icons/phone-icon';
import SearchIcon from './icons/search-icon';
import styled from '@emotion/styled';
import Image from 'next/image';
import logo from '../../styles/images/logo.png';
import rusFlag from '../../styles/images/Flag_of_Russia.png';
import FacebookIcon from './icons/facebook-icon';
import ArrowDown from './icons/arrow-down';
import Lang from './lang';

const InfoHeaderBlock: FC = () => {
  return (
    <TotalWrapper>
      <FlexBlock>
        <AdressIcon />
        <div>
          <p>г.Ташкент, Чиланзар</p>
          <p>10 квартал, дом 3/1</p>
        </div>
      </FlexBlock>
      <FlexBlock>
        <PhoneIcon />
        <div>
          <p>+998 71 276-62-53</p>
          <p>+998 71 276-62-54</p>
        </div>
      </FlexBlock>
      <div>
        <Image alt={'logo'} src={logo} width={200} height={58} />
      </div>
      <div style={{ cursor: 'pointer' }}>
        <SearchIcon />
      </div>
      <WhiteButton>
        <FacebookIcon />
        <p>Мы на Facebook</p>
      </WhiteButton>
      <Lang />
    </TotalWrapper>
  );
};

export default InfoHeaderBlock;

const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 46px;
`;

const FlexBlock = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0px;
    line-height: 19px;
    letter-spacing: 0.025em;
  }
  > svg {
    margin-right: 20px;
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
  cursor: pointer;
  > img {
    border-radius: 25px;
  }
  > p {
    margin: 0px;
    margin-left: 16px;
  }
`;
