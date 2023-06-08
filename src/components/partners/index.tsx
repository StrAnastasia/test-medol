import styled from '@emotion/styled';
import { FC } from 'react';

import item1img from '../styles/images/partners1.png';
import item2img from '../styles/images/partners2.png';
import item3img from '../styles/images/partners3.png';
import item4img from '../styles/images/partners4.png';
import item5img from '../styles/images/partners5.png';
import item6img from '../styles/images/partners6.png';
import item7img from '../styles/images/partners7.png';
import item8img from '../styles/images/partners8.png';
import ThreeBlockCarousel from 'components/shared/three-block-carousel';
import Image from 'next/image';

const Partners: FC = () => {
  return (
    <Margin>
    <ThreeBlockCarousel
      height={288}
      margin={-50}
      tabs={[
        <Containter key={1}>
          <Border>
            <Image src={item1img.src} alt={'item1img'} width={300} height={300} />
          </Border>
          <Border>
            <Image src={item2img.src} alt={'item2img'} width={300} height={300} />
          </Border>
        </Containter>,
        <Containter key={2}>
          <Border>
            <Image src={item3img.src} alt={'item3img'} width={300} height={300} />
          </Border>
          <Border>
            <Image src={item4img.src} alt={'item4img'} width={300} height={300} />
          </Border>
        </Containter>,
        <Containter key={3}>
          <Border>
            <Image src={item5img.src} alt={'item5img'} width={300} height={300} />
          </Border>
          <Border>
            <Image src={item6img.src} alt={'item6img'} width={300} height={300} />
          </Border>
        </Containter>,
        <Containter noMarg key={4}>
          <Border>
            <Image src={item7img.src} alt={'item7img'} width={300} height={300} />
          </Border>
          <Border>
            <Image src={item8img.src} alt={'item8img'} width={300} height={300} />
          </Border>
        </Containter>,
      ]}
    />
    </Margin>

  );
};

export default Partners;

const Margin = styled.div`
  margin-bottom: 148px;
`

const Containter = styled.div<{noMarg?: boolean}>`
  width: calc((100% / 4) - 40px);
  margin: 0px 40px;
  > div:first-child {
    margin-bottom: 30px;
  }
`;

const Border = styled.div`
  background: #ffffff;
  border: 1px solid #ececec;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: 126px;
    width: auto;
  }
`;