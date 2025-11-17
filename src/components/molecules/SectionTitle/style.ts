import styled, { css } from 'styled-components';

export const Container = styled.div<{ $align: 'left' | 'center' }>`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  text-align: ${({ $align }) => $align};

  ${({ $align }) =>
    $align === 'center' &&
    css`
      align-items: center;
    `}
`;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
`;

export const BgImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
  filter: saturate(0.95);
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
  background: linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.2));
`;

export const Title = styled.h2<{ $color?: string }>`
  margin: 0;
  font-size: 30px;
  line-height: 1.2;
  color: ${({ $color }) => $color ?? 'inherit'};
  white-space: pre-line;
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Description = styled.p`
  margin: 0;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 600px;
`;



