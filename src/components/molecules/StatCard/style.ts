import styled from 'styled-components';

export const StatCard = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-width: 220px;
  align-items: center;
`;

export const StatValue = styled.span`
  font-size: 2.8rem;
  font-weight: 700;
  color: rgb(61, 144, 212);
`;

export const StatLabel = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;


