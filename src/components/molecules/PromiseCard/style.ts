import styled, { css } from 'styled-components';

export const Card = styled.div<{ $variant: 'positive' | 'alert' }>`
  padding: 2.4rem;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-height: 200px;
  box-shadow: ${({ theme }) => theme.shadows.soft};

  ${({ $variant, theme }) =>
    $variant === 'positive'
      ? css`
          border-color: rgba(14, 99, 255, 0.2);
          background: ${theme.colors.surfaceAlt};
        `
      : css`
          border-color: rgba(255, 90, 95, 0.3);
          background: #fff7f6;
        `}
`;

export const Icon = styled.span`
  font-size: 2.4rem;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  margin: 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
`;


