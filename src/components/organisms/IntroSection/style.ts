import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.45fr;
  gap: 1.6rem;
  padding: 2rem 0 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Visual = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 240px;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 76%;
  border-radius: 10px;
  object-fit: cover;
  display: block;
`;

export const OverlayText = styled.div`
  position: absolute;
  left: 24px;
  top: 20px;
  z-index: 2;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
`;


