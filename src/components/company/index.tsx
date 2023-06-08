import styled from '@emotion/styled';
import { FC } from 'react';

import bg from '../styles/images/company-bg.png';
import GradButton from 'components/shared/gradient-button';

const Company: FC = () => {
  return (
    <div>
      <Wrapper url={bg.src}>
        <Description>
          {`Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере
          медицины, инженерии и экономики, за плечами которых значительный опыт на рынке
          высоких медицинских технологий, которая имеет свои представительства в разных
          уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical
          Online Services". Цель компании построить прозрачный долгосрочный бизнес,
          принести пользу обществу путем развития и внедрения передовых технологий в
          систему здравоохранения Республики Узбекистан.`}
        </Description>
        <GradButton>Узнать больше</GradButton>
      </Wrapper>
    </div>
  );
};

export default Company;

const Wrapper = styled.div<{ url: string }>`
  background-image: ${({ url }) => `url(${url})`};
  background-size: 100% auto;
  background-repeat: no-repeat;
  padding: 80px 40px 80px 620px;
  width: 100%;
  box-sizing: border-box;
  min-height: 540px;
`;

const Description = styled.div`
  font-weight: 300;
  font-size: 20px;
  line-height: 35px;
  letter-spacing: 0.06em;
  margin: 0px;
`;
