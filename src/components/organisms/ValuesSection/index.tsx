import ValueItemsSection from '../ValueItemsSection';
import * as S from './style';

const inconveniences = [
  { title: '유료과금 없음', description: '서비스 내 결제가 필요한 부가서비스가 없어요',  iconType: 'free' as const },
  { title: '인스턴스 개수제한 없음', description: '기본 10개, 추가 인스턴스가 필요한 경우 요청에 따라 원하는 만큼 가용량을 설정해드려요', iconType: 'instances' as const },
  { title: '협업계정 수 제한 없음', description: '프로젝트 당 협업을 위해 등록할 수 있는 계정의 개수제한이 없어요',  iconType: 'members' as const },
];

const promises = [
  { title: '상업적 사용 금지', description: '아주대학교 SW사업단 정책에 따라, 아올다 클라우드를 이용해 상업적 성격의 서비스를 운용할 수 없어요', iconType: 'ban' as const },
  { title: '계정대여 금지', description: '아주대학교 SW사업단 정책에 따라, 아주대학교 구성원이 아닌 외부인은 아올다 클라우드를 사용할 수 없어요',  iconType: 'account' as const },
  { title: '인프라 무단조작 금지', description: '아올다 클라우드는 팔달관 334호에서 실제 물리서버를 볼 수 있지만, 보다 안정적인 운영을 위해 조작행위는 금지해요',  iconType: 'wrench' as const },
];

const ValuesSection = () => (
  <>
    <ValueItemsSection
      eyebrow="Values"
      title="자유롭게 꿈을 펼치기 위해 아올다가 없앤 불편함 3가지"
      richTitle={
        <span style={{ color: '#000' }}>
          자유롭게 꿈을 펼치기 위해 아올다가 없앤{' '}
          <span style={{ color: 'rgb(61, 144, 212)' }}>불편함 3가지</span>
        </span>
      }
      description="아주인 모두가 자유롭게 꿈을 펼칠 수 있도록 아래 3가지를 없앴어요"
      items={inconveniences}
      variant="positive"
    />

    <S.SectionSpacer />

    <ValueItemsSection
      eyebrow="Commitment"
      title="자유롭게 꿈을 펼치기 위해 함께 만들어가는 약속 3가지"
      richTitle={
        <span style={{ color: '#000' }}>
          자유롭게 꿈을 펼치기 위해 함께 만들어가는{' '}
          <span style={{ color: '#EF4444' }}>약속 3가지</span>
        </span>
      }
      description="아주인 모두가 자유롭게 꿈을 펼칠 수 있도록 아래 3가지를 약속해요"
      items={promises}
      variant="alert"
    />
  </>
);

export default ValuesSection;


