import styled from '@emotion/styled';
import { FC, ReactNode, useEffect, useState } from 'react';

const Carousel: FC<{
  tabs: ReactNode[];
  height: number;
}> = ({ tabs, height }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const slidesWrapper = document.getElementById('SlidesWrapper');
    if (slidesWrapper) {
      // @ts-ignore
      setWidth(slidesWrapper?.firstChild?.clientWidth);
    }
  }, []);
  return (
    <>
      <CarouselContainer>
        <CarouselWrapper height={height}>
          <SlidesWrapper id={'SlidesWrapper'} height={height} left={width * slideNumber}>
            {tabs?.map((el, key) => el)}
          </SlidesWrapper>
        </CarouselWrapper>
      </CarouselContainer>
      <DotsWrapper>
        {tabs?.map((el, key) => (
          <div onClick={() => setSlideNumber(key)} key={key}>
            {slideNumber === key ? <ChosenDot /> : <Dot />}{' '}
          </div>
        ))}
      </DotsWrapper>
    </>
  );
};

export default Carousel;

const CarouselContainer = styled.div`
  position: relative;
  > svg {
    position: absolute;
    top: 50%;
    left: -25px;
    z-index: 2;
    cursor: pointer;
  }
  > svg:last-child {
    left: calc(100% + 25px);
  }
  > div {
    width: 100%;
  }
`;

const CarouselWrapper = styled.div<{ height: number }>`
  width: 100%;
  height: ${({ height }) => height + 'px'};
  max-height: ${({ height }) => height + 'px'};
  overflow: hidden;
  position: relative;
`;

const SlidesWrapper = styled.div<{ height: number; left: number }>`
  display: flex;
  width: max-content;
  height: ${({ height }) => height + 'px'};
  max-height: ${({ height }) => height + 'px'};
  position: absolute;
  left: ${({ left }) => '-' + left + 'px'};
  transition: 0.7s ease-out;
`;

const DotsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 36px;
  div {
    margin-right: 16px;
    cursor: pointer;
  }
  > div:last-child {
    margin-right: 0px;
  }
`;

const Dot = () => (
  <svg
    width='25'
    height='25'
    viewBox='0 0 25 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12.5' cy='12.5' r='12' fill='white' stroke='#00C9C9' />
  </svg>
);

const ChosenDot = () => (
  <svg
    width='25'
    height='25'
    viewBox='0 0 25 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12.5' cy='12.5' r='12.5' fill='#00C9C9' />
  </svg>
);
