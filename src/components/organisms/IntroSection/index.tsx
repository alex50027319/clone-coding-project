import * as S from './style';

const quickLinks = [
  {
    title: '아올다, 처음이신가요?',
    actionLabel: '사용 설명서 >',
    href: '#guide',
  },
  {
    title: '저희의 활동을 모아봤어요!',
    actionLabel: '테크 블로그 >',
    href: '#archive',
  },
];

const IntroSection = () => (
  <S.Section>
    <S.Visual>
      <S.OverlayText>
        <h1>
          아주인의 꿈을 펼칠
          <br />
          파란하늘 속 작은구름
        </h1>
      </S.OverlayText>
      <S.HeroImage src="/day1.png" alt="" aria-hidden />
    </S.Visual>
  </S.Section>
);

export default IntroSection;


