import { FC } from 'react';
import InfoHeaderBlock from './info';
import styled from '@emotion/styled';
import Tabs from './tabs';

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <InfoHeaderBlock />
      <Tabs />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;

`