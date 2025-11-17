import styled from 'styled-components';

export const Card = styled.div`
  padding: 1.8rem;
  border-radius: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  min-height: 150px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

export const Logo = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
`;

export const Initial = styled.span`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const Name = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  text-align: center;
`;




