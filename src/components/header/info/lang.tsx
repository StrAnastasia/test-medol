import { FC, useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import rusFlag from '../../styles/images/Flag_of_Russia.png';
import ArrowDown from './icons/arrow-down';

const Lang: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <WhiteButton>
        <div>
          <Image alt={'lang'} src={rusFlag} width={31} height={31} />
          <p style={{ marginRight: '12px' }}>Русский</p>
          <span className='rotate'>
          <ArrowDown />
          </span>
        </div>
        <div className='showOptions'>
          <div>
            <Image alt={'lang'} src={rusFlag} width={31} height={31} />
            <p style={{ marginRight: '12px' }}>Русский</p>
          </div>
          <div>
            <Image alt={'lang'} src={rusFlag} width={31} height={31} />
            <p style={{ marginRight: '12px' }}>Русский</p>
          </div>
        </div>
      </WhiteButton>
    </>
  );
};

export default Lang;

const WhiteButton = styled.button`
  position: relative;
  border: none;
  outline: none;
  background: #ffffff;
  border-radius: 25px;
  padding: 0px 14px;
  height: 50px;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    background: #ffffff;
  }

  div > img {
    border-radius: 25px;
  }
  div > p {
    margin: 0px;
    margin-left: 16px;
  }
  .showOptions {
    display: none;
    z-index: 10;
    position: absolute;
    padding: 0px 14px 14px;
    left: 0px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 0px 0px 25px 25px;
    > div {
      margin-top: 12px;
    }
  }
  :hover {
    border-radius: 25px 25px 0px 0px;
  }
  :hover .rotate {
    transform: rotate(180deg);
  }
  :hover .showOptions {
    display: block;
  }
`;
