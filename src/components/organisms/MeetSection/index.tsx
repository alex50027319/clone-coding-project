import ActionButton from '../../molecules/ActionButton';
import IconButton from '../../molecules/IconButton';
import * as S from './style';

const MeetSection = () => (
  <S.Section>
    <S.Divider />
    <S.Title>
      아올다, 이제 한번
      <br />
      만나볼까요?
    </S.Title>

    <S.Grid>
      <S.Col>
        <S.Caption>아올다로 <br /> 꿈을 담아내고고 싶다면?</S.Caption>
        <IconButton label="콘솔로 이동" href="https://console.aoldacloud.com/" size="lg" withArrow />
      </S.Col>
      <S.Col>
        <S.Caption>아올다를 <br /> 함께 만들어가고 싶다면?</S.Caption>
        <ActionButton
          label="팀 아올다 합류하기"
          href="https://www.notion.so/aolda-workspace/AHP-Aolda-Homepage-Project-2-27e808f2c44e80cfb59ef2276bae2e47?p=285808f2c44e80eb9af0e505159ac97e&pm=s"
          variant="secondary"
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h12" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          }
        />
      </S.Col>
    </S.Grid>
  </S.Section>
);

export default MeetSection;


