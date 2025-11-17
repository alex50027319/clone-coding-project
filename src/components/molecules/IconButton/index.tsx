import * as S from './style';


type IconButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  size?: 'md' | 'lg';
  variant?: 'primary' | 'outline' | 'ghost';
  withArrow?: boolean;
};

const IconButton = ({
  label,
  href,
  onClick,
  withArrow = false,
}: IconButtonProps) => {
  const content = (
    <>
      <S.Label>{label}</S.Label>
      {withArrow && (
        <S.Trailing>
          <path d="M5 12h12" />
          <path d="M13 6l6 6-6 6" />
        </S.Trailing>
      )}
    </>
  );

  
  if (href) {
    return (
      <S.Button
        as="a"
        href={href}
        target="_blank"
        aria-label={label}
      >
        {content}
      </S.Button>
    );
  }

  return (
    <S.Button
      type="button"
      onClick={onClick}
      aria-label={label}
    >
      {content}
    </S.Button>
  );

 
};

export default IconButton;



