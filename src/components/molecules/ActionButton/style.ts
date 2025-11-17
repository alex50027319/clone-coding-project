import styled from 'styled-components';
import type { ActionButtonVariant } from './index';

export const Button = styled.button<{ $variant: ActionButtonVariant }>`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.9rem;
  border-radius: 15px;
  font-weight: 800;
  font-size: 1.5rem;
  color:rgb(29, 109, 184);
  border-color:rgb(29, 109, 184);
  border: 1px solid;
  background:rgb(255, 255, 255);
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
`;



