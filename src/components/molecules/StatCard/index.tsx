import * as S from './style';

type StatCardProps = {
  label: string;
  value: string;
  caption?: string;
};

const StatCard = ({ label, value, caption }: StatCardProps) => (
  <S.Card>
    <S.Label>{label}</S.Label>
    <S.Value>{value}</S.Value>
    {caption && <S.Caption>{caption}</S.Caption>}
  </S.Card>
);

export default StatCard;


