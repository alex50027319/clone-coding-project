import BrandLogo from '../../molecules/BrandLogo';
import IconButton from '../../molecules/IconButton';
import * as S from './style';

const Header = () => {
  const items = [
    { label: '소학회 소개', targetId: 'about' },
    { label: '서비스 소개', targetId: 'service' },
    { label: '사용안내', targetId: 'guide' },
    { label: '공지사항', targetId: 'notice' },
  ];

  return (
    <S.HeaderBar>
      <BrandLogo />
        <S.Nav>
          {items.map((i) => (
            <S.NavButton key={i.targetId}>
              {i.label}
            </S.NavButton>
          ))}
        </S.Nav>
        <IconButton label="콘솔로 이동" href="https://console.aoldacloud.com/" size="lg" withArrow />
    </S.HeaderBar>
  );
};

export default Header;


