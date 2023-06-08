import styled from '@emotion/styled';
import Header from 'components/header';
import { FC } from 'react';
import blur from '../styles/images/blur-hospital.png';
import Carousel from 'components/shared/carousel';
import Aniliser from 'components/analiser';
import Production from 'components/production';
import Services from 'components/services';
import Company from 'components/company';
import NewsArticle from 'components/news';
import ThreeBlockCarousel from 'components/shared/three-block-carousel';
import NewsLinks from 'components/news-links';
import Partners from 'components/partners';
import Footer from 'components/footer';

const Homepage: FC = () => {
  return (
    <>
      <ImageBlock url={blur.src}>
        <Header />
        <Carousel
          height={544}
          tabs={[<Aniliser key={1} />, <Aniliser key={2} />, <Aniliser key={3} />]}
        />
      </ImageBlock>
      <Title>ПРОДУКЦИЯ</Title>
      <WhiteBlock>
        <Production />
      </WhiteBlock>
      <Title>УСЛУГИ</Title>
      <ImageBlock style={{ padding: '78px 0px 112px' }} url={blur.src}>
        <Services />
      </ImageBlock>
      <Title>О КОМПАНИИ</Title>
      <WhiteBlock>
        <Company />
      </WhiteBlock>
      <Title>НОВОСТИ</Title>
      <WhiteBlock>
        <ThreeBlockCarousel
          height={680}
          margin={83}
          tabs={[
            <NewsArticle key={1} />,
            <NewsArticle key={2} />,
            <NewsArticle key={3} />,
            <NewsArticle key={4} />,
            <NewsArticle key={5} />,
          ]}
        />
        <NewsLinks />
      </WhiteBlock>
      <Title>ПАРТНЕРЫ</Title>
      <WhiteBlock>
        <Partners/>
      </WhiteBlock>
      <ImageBlock url={blur.src}>
        <Footer />
      </ImageBlock>
    </>
  );
};

export default Homepage;

const ImageBlock = styled.div<{
  url: string;
}>`
  background-image: ${({ url }) => `url(${url})`};
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0px;
  > div {
    max-width: 1360px;
    width: 100%;
  }
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 0.09em;
  color: #0d4c93;
  margin: 50px 0px 62px;
  margin-bottom: 31px;
  text-align: center;
`;

const WhiteBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0px 16px;
  > div {
    max-width: 1360px;
    width: 100%;
  }
`;
