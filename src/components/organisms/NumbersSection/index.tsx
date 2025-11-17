import SectionTitle from '../../molecules/SectionTitle';
import StatCard from '../../molecules/StatCard';
import * as S from './style';

export type StatItem = { label: string; value: string;};

type NumbersSectionProps = {
  stats?: StatItem[];
};

const defaultStats: StatItem[] = [
  { label: '누적 사용자', value: '30+ 명' },
  { label: '누적 프로젝트 수', value: '10+ 개' },
  { label: '누적 블로깅', value: '200+ 개' },
];

const NumbersSection = ({ stats = defaultStats }: NumbersSectionProps) => (
  <>
    <SectionTitle title="숫자로 보는 아올다" align="center" titleColor="rgb(61, 144, 212)"/>
    <S.Grid>
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </S.Grid>
  </>
);

export default NumbersSection;


