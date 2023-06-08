import styled from '@emotion/styled';
import { FC, ReactNode, useEffect, useState } from 'react';
import CarouselButtonIcon from './carousel-button-arrow';

const ThreeBlockCarousel: FC<{
  tabs: ReactNode[];
  height: number;
  margin: number;
}> = ({ tabs, height, margin }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const threeBlockSlidesWrapper = document.getElementById('threeBlockSlidesWrapper');
    if (threeBlockSlidesWrapper) {
      // @ts-ignore
      setWidth(threeBlockSlidesWrapper?.firstChild?.clientWidth + margin);
    }
  }, []);
  return (
    <>
      <CarouselContainer>
        <CarouselButtonIcon
          onClick={() => setSlideNumber((prev) => (prev !== 0 ? prev - 1 : prev))}
          left
        />
        <CarouselWrapper height={height}>
          <ThreeBlockSlidesWrapper
            id={'threeBlockSlidesWrapper'}
            height={height}
            left={width * slideNumber}
          >
            {tabs?.map((el, key) => el)}
          </ThreeBlockSlidesWrapper>
        </CarouselWrapper>
        <CarouselButtonIcon
          onClick={() =>
            setSlideNumber((prev) => (prev !== tabs?.length - 1 ? prev + 1 : prev))
          }
        />
      </CarouselContainer>
    </>
  );
};

export default ThreeBlockCarousel;

const CarouselContainer = styled.div`
  position: relative;
  > svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -25px;
    z-index: 2;
  cursor: pointer;
  }
  > svg:last-child {
    left: calc(100% - 25px);
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

const ThreeBlockSlidesWrapper = styled.div<{ height: number; left: number }>`
  display: flex;
  min-width: max-content;
  width: 100%;
  height: ${({ height }) => height + 'px'};
  max-height: ${({ height }) => height + 'px'};
  position: absolute;
  left: ${({ left }) => '-' + left + 'px'};
  transition: 0.7s ease-out;
`;
