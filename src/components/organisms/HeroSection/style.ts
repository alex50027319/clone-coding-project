import styled, { css } from 'styled-components';
import type { HeroVariant } from './index';

interface HeroSectionStyledProps {
  $variant: HeroVariant;
}

const darkVariantStyles = css`
  background: linear-gradient(135deg, #1a3a5c 0%, #2d5a8a 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 T100 50' stroke='rgba(255,255,255,0.1)' fill='none' stroke-width='2'/%3E%3C/svg%3E");
    opacity: 0.3;
    z-index: 0;
  }
`;

const lightVariantStyles = css`
  background: linear-gradient(135deg, #e8f4ff 0%, #d0e8ff 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 T100 50' stroke='rgba(14,99,255,0.1)' fill='none' stroke-width='2'/%3E%3C/svg%3E");
    opacity: 0.3;
    z-index: 0;
  }
`;

const productVariantStyles = css`
  background: linear-gradient(135deg, #2d5a8a 0%, #3d6a9a 100%);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background-image: url('/product_back_img.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: translate(-50%, -50%) rotate(180deg);
    opacity: 0.4;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(26, 58, 92, 0.5) 0%, rgba(45, 90, 138, 0.4) 100%);
    z-index: 1;
  }
`;

export const HeroSection = styled.section<HeroSectionStyledProps>`
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;

  ${({ $variant }) => {
    switch ($variant) {
      case 'light':
        return lightVariantStyles;
      case 'product':
        return productVariantStyles;
      case 'dark':
      default:
        return darkVariantStyles;
    }
  }}
`;

export const HeroContent = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

interface BreadcrumbWrapperProps {
  $variant: HeroVariant;
}

export const BreadcrumbWrapper = styled.div<BreadcrumbWrapperProps>`
  ${({ $variant }) =>
    $variant === 'dark' &&
    css`
      a, span {
        color: rgba(255, 255, 255, 0.9) !important;
      }
    `}
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
`;

export const SearchWrapper = styled.div`
  max-width: 600px;
`;

