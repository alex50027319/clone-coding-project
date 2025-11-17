import type { MouseEventHandler, ReactNode } from 'react';
import * as S from './style';

export type ActionButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ActionButtonProps {
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: ActionButtonVariant;
  icon?: ReactNode;
}

const ActionButton = ({
  label,
  href,
  onClick,
  variant = 'primary',
  icon,
}: ActionButtonProps) => {
  if (href) {
    return (
      <S.Button as="a" href={href} target="_blank" rel="noreferrer" $variant={variant}>
        <span>{label}</span>
        {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      </S.Button>
    );
  }

  return (
    <S.Button type="button" onClick={onClick} $variant={variant}>
      <span>{label}</span>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
    </S.Button>
  );
};

export default ActionButton;


