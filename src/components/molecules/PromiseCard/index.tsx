import * as S from './style';
import ValueIcon, { type ValueIconVariant } from '../ValueIcon';

type PromiseVariant = 'positive' | 'alert';

type PromiseCardProps = {
  title: string;
  description: string;
  icon: string;
  iconType?: ValueIconVariant;
  variant?: PromiseVariant;
};

const PromiseCard = ({
  title,
  description,
  icon,
  iconType,
  variant = 'positive',
}: PromiseCardProps) => (
  <S.Card $variant={variant}>
    <S.Icon>
      {iconType ? <ValueIcon variant={iconType} tone={variant === 'positive' ? 'blue' : 'red'} /> : icon}
    </S.Icon>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Card>
);

export default PromiseCard;


