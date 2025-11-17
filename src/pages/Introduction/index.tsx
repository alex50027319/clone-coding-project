import Header from '../../components/organisms/Header';
import NumbersSection from '../../components/organisms/NumbersSection';
import ServiceInfoSection from '../../components/organisms/ServiceInfoSection';
import PartnersSection from '../../components/organisms/PartnersSection';
import ValuesSection from '../../components/organisms/ValuesSection';
import MeetSection from '../../components/organisms/MeetSection';
import * as S from './style';
import Footer from '../../components/organisms/Footer';
import styled from 'styled-components';
import IntroSection from '../../components/organisms/IntroSection';

const Page = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const IntroductionPage = () => {
  const sections = [
    {
      id: 'intro',
      content: (
        <S.Section>
          <IntroSection />
        </S.Section>
      ),
    },

    {
      id: 'numbers',
      content: (
        <S.Section>
          <NumbersSection />
        </S.Section>
      ),
    },
    {
      id: 'service',
      content: (
        <S.Section>
          <ServiceInfoSection />
        </S.Section>
      ),
    },
    {
      id: 'partners',
      content: (
        <S.Section>
          <PartnersSection />
        </S.Section>
      ),
    },
    {
      id: 'promise',
      content: (
        <S.Section>
          <ValuesSection />
        </S.Section>
      ),
    },
    {
      id: 'Meet',
      content: (
        <S.Section>
          <MeetSection />
        </S.Section>
      ),
    },
  ];

  return (
    <>
      <Page>
        <Header />
        <main>
          {sections.map((section) => (
            <S.Section id={section.id} key={section.id}>
              {section.content}
            </S.Section>
          ))}
        </main>
      </Page>

      <Footer />
    </>
  );
};

export default IntroductionPage;
