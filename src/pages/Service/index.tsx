import styled from 'styled-components';
import SectionTitle from '../../components/molecules/SectionTitle';

const Page = styled.main`
  max-width: 1140px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const ServicePage = () => {
  return (
    <Page>
      <SectionTitle title="서비스 소개 (준비중)" align="center" />
    </Page>
  );
};

export default ServicePage;

