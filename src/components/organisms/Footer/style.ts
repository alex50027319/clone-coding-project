import styled from 'styled-components';

export const Footer = styled.footer`
  margin-top: 4rem;
  background: #0f2a3a;
  color: rgba(255, 255, 255, 0.9);
`;

export const FooterInner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 2.4rem 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  font-size: 1.3rem;
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const FooterBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 700;
  font-size: 1.8rem;
  color: #ffffff;

  img {
    height: 30px;
    width: auto;
    display: block;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-align: right;
  color: rgba(255, 255, 255, 0.8);
`;

export const FooterLinkRow = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: flex-end;
  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
  }
`;


