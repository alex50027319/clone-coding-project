import * as S from './style';

const Footer = () => (
  <S.Footer>
    <S.FooterInner>
      <S.FooterLeft>
        <S.FooterBrand>
          <img src="/Logo_white.svg" alt="" aria-hidden />
        </S.FooterBrand>
        <span style={{ color: 'rgba(255,255,255,0.7)' }}>교내 클라우드 인프라 개발/운영 소학회</span>
      </S.FooterLeft>
      <S.FooterRight>
        <div>경기도 수원시 영통구 원천동 월드컵로 206 아주대학교</div>
        <S.FooterLinkRow>
          <div>제작자: 김경은</div>
        </S.FooterLinkRow>
      </S.FooterRight>
    </S.FooterInner>
  </S.Footer>
);

export default Footer;


