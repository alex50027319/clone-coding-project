import SectionTitle from '../../molecules/SectionTitle';
import PartnerLogo from '../../molecules/PartnerLogo';
import * as S from './style';

const partners = ['AHP','APIA','ARISE','AMMS','AMDB'];

const PartnersSection = () => (
  <>
    <SectionTitle
      eyebrow="Partners"
      richTitle={
        <span style={{ color: '#000' }}>
          이미 <span style={{ color: 'rgb(61, 144, 212)' }}>많은 곳에서 사용</span>되고 있는
          {'\n'}아올다 클라우드
        </span>
      }
      description="아올다 클라우드는 아주대학교 대/내외적으로 사용되는 다양한 서비스를 안정적으로 운영하기 위해 이곳저곳에서 사용되고 있어요"
    />
    <S.Grid>
      {partners.map((p) => (
        <PartnerLogo key={p} name={p} />
      ))}
    </S.Grid>
  </>
);

export default PartnersSection;


