import * as S from './style';

type PartnerLogoProps = {
  name: string;
  logoSrc?: string;
};

const PartnerLogo = ({ name }: PartnerLogoProps) => (
  <S.Card>
    <S.Name>{name}</S.Name>
  </S.Card>
);

export default PartnerLogo;




