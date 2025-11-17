import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  border: 1px solid rgb(32, 137, 207);
  font-weight: 800;
  line-height: 1;
  background:rgb(32, 137, 207);
  color: #ffffff;
  border-radius: 15px;
  padding: 1.1rem 1.9rem;
  font-size: 1.5rem;
`;

export const Label = styled.span`
  letter-spacing: 0.02em;
`;

export const DefaultGlyph = styled.svg.attrs({ viewBox: '0 0 24 24', width: 16, height: 16, 'aria-hidden': true })`
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const Trailing = styled(DefaultGlyph).attrs({ width: 14, height: 14 })``;



