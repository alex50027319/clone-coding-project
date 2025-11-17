import styled from 'styled-components';

export const Section = styled.section`
  padding: 4rem 0;
`;

export const StatGrid = styled.div`
  margin-top: 2.8rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.6rem;
`;

export const Highlight = styled.p`
  margin: 1.2rem 0 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

export const HighlightStrong = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

export const InfoPanel = styled.div`
  margin-top: 3rem;
  padding: 2.6rem;
  border-radius: 2rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

export const TextStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const PartnerGrid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.2rem;
`;

export const PromiseGrid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.6rem;
`;

export const CTAWrapper = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`;


