import { FC } from 'react';
import ContactsBlock from './contacts';
import styled from '@emotion/styled';
import OtherInfoBlock from './other-half';

const Footer: FC = () => {
  return (
    <>
      <FooterWrapper>
        <ContactsBlock />
        <OtherInfoBlock />
      </FooterWrapper>
      <DopInfo>
        <span>© 2021 ООО «Medical Online Services»</span>
        <span>
          Дизайн сделан: <Colored>damingues92@gmail.com</Colored>
        </span>
      </DopInfo>
    </>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const DopInfo = styled.div`
  margin-top: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > span {
    display: inline-block;
  }
`;

const Colored = styled.p`
display: inline-block;
  color: #00c9c9;
`;
