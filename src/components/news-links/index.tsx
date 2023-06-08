import styled from '@emotion/styled';
import { FC } from 'react';

import ArrowRightIcon from './arrow-right-icon';

const NewsLinks: FC = () => {
  return (
    <Wrapper>
      <Button light>
        <p>Посмотреть все новости</p>
        <ArrowRightIcon fill={"#00C9C9"} />
      </Button>

      <Button>
        <p>Подписаться на новости</p>
        <ArrowRightIcon />
      </Button>
    </Wrapper>
  );
};

export default NewsLinks;

const Wrapper = styled.div`
  display: flex;
  margin: 70px 0px 58px;
`;

const Button = styled.div<{ light?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  > p {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: ${({ light }) => (light ? '#00C9C9' : '#0d4c93')};
    margin: 0px 6px 0px 0px;
  }
`;
