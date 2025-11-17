import * as S from './style';

interface SectionTitleProps {
  title?: string;
  description?: string;
  align?: 'left' | 'center';
  highlight?: string;
  eyebrow?: string;
  backgroundSrc?: string;
  titleColor?: string;
  richTitle?: React.ReactNode;
}

const SectionTitle = ({
  title,
  description,
  align = 'left',
  highlight,
  backgroundSrc,
  titleColor,
  richTitle,
}: SectionTitleProps) => (
  backgroundSrc ? (
    <S.ImageContainer>
      <S.BgImage src={backgroundSrc} alt="" aria-hidden />
      <S.Overlay>
        <S.Title $color={titleColor}>
          {richTitle ?? title}
        </S.Title>
      </S.Overlay>
    </S.ImageContainer>
  ) : (
    <S.Container $align={align}>
      <S.Title $color={titleColor}>
        {richTitle ?? title}
        {highlight && <S.Highlight> {highlight}</S.Highlight>}
      </S.Title>
      {description && <S.Description>{description}</S.Description>}
    </S.Container>
  )
);

export default SectionTitle;



