import styled from 'styled-components';

export const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 0;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavButton = styled.button`
  background: transparent;
  border: 0;
  padding: 0.6rem 0.4rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  cursor: pointer;
`;


