import SectionTitle from '../../molecules/SectionTitle';
import PromiseCard from '../../molecules/PromiseCard';
import type { ValueIconVariant } from '../../molecules/ValueIcon';
import * as S from './style';

export type ValueItem = {
  title: string;
  description: string;
  icon?: string;
  iconType?: ValueIconVariant;
};

type ValueItemsSectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  items: ValueItem[];
  variant?: 'positive' | 'alert';
  titleColor?: string;
  richTitle?: React.ReactNode;
};

const ValueItemsSection = ({
  eyebrow,
  title,
  richTitle,
  description,
  items,
  variant = 'positive',
  titleColor,
}: ValueItemsSectionProps) => (
  <>
    <SectionTitle
      eyebrow={eyebrow}
      title={title}
      richTitle={richTitle}
      description={description}
      align="left"
      titleColor={titleColor}
    />
    <S.PromiseGrid>
      {items.map((item) => (
        <PromiseCard key={item.title} variant={variant} icon={item.icon ?? ''} iconType={item.iconType} title={item.title} description={item.description} />
      ))}
    </S.PromiseGrid>
  </>
);

export default ValueItemsSection;


