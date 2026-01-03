import Filter, { type FilterItem } from '../../molecules/Filter';
import * as S from './style';

export interface SideNavigationProps {
  /** 카테고리 목록 */
  categories: FilterItem[];
  /** 선택된 카테고리 ID 목록 */
  selectedCategories?: string[];
  /** 카테고리 선택 변경 핸들러 */
  onCategoryChange?: (selectedIds: string | string[]) => void;
}

/**
 * 사이드 메뉴 컴포넌트
 * 
 * 서브 화면 내에서의 이동을 위해 사용하는 메뉴입니다.
 * 일반적으로 본문 영역의 좌측에 사이드바 형태로 제공됩니다.
 * 메인 메뉴보다 훨씬 좁고 깊은 페이지 구조 탐색에 사용되기 때문에 링크의 개수가 많고 복잡하게 표현되기 쉽습니다.
 * 
 * @param {SideNavigationProps} props - 사이드 메뉴 props
 * @param {FilterItem[]} props.categories - 카테고리 목록
 * @param {string[]} [props.selectedCategories] - 선택된 카테고리 ID 목록
 * @param {Function} [props.onCategoryChange] - 카테고리 선택 변경 핸들러
 * 
 * @example
 * <SideNavigation
 *   categories={[
 *     { id: 'favorites', label: '즐겨찾기' },
 *     { id: 'server', label: '서버' },
 *   ]}
 *   selectedCategories={['favorites']}
 *   onCategoryChange={(ids) => console.log(ids)}
 * />
 * 
 * @returns {JSX.Element} 사이드 메뉴 요소
 */
const SideNavigation = ({
  categories,
  selectedCategories = [],
  onCategoryChange,
}: SideNavigationProps) => {
  const handleChange = (selectedIds: string | string[]) => {
    if (onCategoryChange) {
      // checkbox 모드에서는 항상 string[]이 전달됨
      const ids = Array.isArray(selectedIds) ? selectedIds : [selectedIds];
      onCategoryChange(ids);
    }
  };

  return (
    <S.Sidebar>
      <S.SidebarTitle>제품 카테고리</S.SidebarTitle>
      <Filter
        mode="checkbox"
        items={categories}
        selectedIds={selectedCategories}
        onChange={handleChange}
      />
    </S.Sidebar>
  );
};

export default SideNavigation;

