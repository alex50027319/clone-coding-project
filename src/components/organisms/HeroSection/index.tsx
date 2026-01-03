import type { ReactNode } from 'react';
import SectionTitle from '../../molecules/SectionTitle';
import Breadcrumb from '../../molecules/Breadcrumb';
import Search from '../../molecules/Search';
import * as S from './style';

export type HeroVariant = 'dark' | 'light' | 'product';

export interface HeroSectionProps {
  /** 히어로 섹션 제목 */
  title: string;
  /** 히어로 섹션 설명 (선택사항) */
  description?: string;
  /** 히어로 섹션 스타일 변형 */
  variant?: HeroVariant;
  /** Breadcrumb 아이템 (선택사항) */
  breadcrumbItems?: Array<{ label: string; href?: string }>;
  /** 검색 기능 표시 여부 */
  showSearch?: boolean;
  /** 검색 플레이스홀더 텍스트 */
  searchPlaceholder?: string;
  /** 검색어 */
  searchTerm?: string;
  /** 검색어 변경 핸들러 */
  onSearchChange?: (value: string) => void;
  /** 검색 실행 핸들러 */
  onSearch?: (value: string) => void;
  /** 추가 자식 요소 (선택사항) */
  children?: ReactNode;
}

/**
 * 통합 히어로 섹션 컴포넌트
 * 
 * FAQ, Notice, Product 페이지의 히어로 섹션을 통합한 재사용 가능한 컴포넌트입니다.
 * variant prop을 통해 다양한 스타일을 지원합니다.
 * 
 * @param {HeroSectionProps} props - 히어로 섹션 props
 * 
 * @example
 * // FAQ 페이지
 * <HeroSection
 *   variant="dark"
 *   title="아올다 FAQ"
 *   breadcrumbItems={[{ label: '홈', href: '/' }, { label: 'FAQ' }]}
 *   showSearch
 *   searchPlaceholder="FAQ를 검색해 보세요."
 * />
 * 
 * @example
 * // Notice 페이지
 * <HeroSection
 *   variant="light"
 *   title="아올다에서 공지사항을 확인해 보세요"
 *   showSearch
 *   searchPlaceholder="공지사항을 검색해 보세요"
 * />
 * 
 * @example
 * // Product 페이지
 * <HeroSection
 *   variant="product"
 *   title="아울다 Service"
 *   description="아울다에서 제품은 기획서에 따라 진행된 각 프로젝트의 최종 성과물을 의미합니다."
 * />
 * 
 * @returns {JSX.Element} 히어로 섹션 요소
 */
const HeroSection = ({
  title,
  description,
  variant = 'dark',
  breadcrumbItems,
  showSearch = false,
  searchPlaceholder = '검색해 보세요',
  searchTerm = '',
  onSearchChange,
  onSearch,
  children,
}: HeroSectionProps) => {
  const titleColor = variant === 'light' ? undefined : '#ffffff';

  return (
    <S.HeroSection $variant={variant}>
      <S.HeroContent>
        {breadcrumbItems && (
          <S.BreadcrumbWrapper $variant={variant}>
            <Breadcrumb items={breadcrumbItems} />
          </S.BreadcrumbWrapper>
        )}
        
        {variant === 'dark' && breadcrumbItems ? (
          <S.Title>{title}</S.Title>
        ) : (
          <SectionTitle
            title={title}
            description={description}
            titleColor={titleColor}
            align="left"
          />
        )}

        {showSearch && (
          <S.SearchWrapper>
            <Search
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={onSearchChange}
              onSearch={onSearch}
            />
          </S.SearchWrapper>
        )}

        {children}
      </S.HeroContent>
    </S.HeroSection>
  );
};

export default HeroSection;

