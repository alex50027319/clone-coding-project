import { useState, useMemo } from 'react';
import styled from 'styled-components';
import Header from '../../components/organisms/Header';
import Footer from '../../components/organisms/Footer';
import HeroSection from '../../components/organisms/HeroSection';
import NoticeList from '../../components/organisms/NoticeList';
import type { NoticeItemProps } from '../../components/molecules/NoticeItem';
import * as S from './style';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Page = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;
  flex: 1;
  box-sizing: border-box;
`;

const MainContent = styled.main`
  flex: 1;
`;

const ITEMS_PER_PAGE = 10;

// 예시 공지사항 데이터
const exampleNotices: NoticeItemProps[] = [
  { number: 24, category: '문의요청', title: '문의요청과 관련된 공지사항 타이틀이에요', date: '2001.01.28', href: '/notice/24' },
  { number: 23, category: '금지', title: '금지와 관련된 공지사항 타이틀이에요', date: '2001.01.27', href: '/notice/23' },
  { number: 22, category: '모델', title: '모델과 관련된 공지사항 타이틀이에요', date: '2001.01.26', href: '/notice/22' },
  { number: 21, category: '문의요청', title: '문의요청과 관련된 공지사항 타이틀이에요', date: '2001.01.25', href: '/notice/21' },
  { number: 20, category: '금지', title: '금지와 관련된 공지사항 타이틀이에요', date: '2001.01.24', href: '/notice/20' },
  { number: 19, category: '모델', title: '모델과 관련된 공지사항 타이틀이에요', date: '2001.01.23', href: '/notice/19' },
  { number: 18, category: '문의요청', title: '문의요청과 관련된 공지사항 타이틀이에요', date: '2001.01.22', href: '/notice/18' },
  { number: 17, category: '금지', title: '금지와 관련된 공지사항 타이틀이에요', date: '2001.01.21', href: '/notice/17' },
  { number: 16, category: '모델', title: '모델과 관련된 공지사항 타이틀이에요', date: '2001.01.20', href: '/notice/16' },
  { number: 15, category: '문의요청', title: '문의요청과 관련된 공지사항 타이틀이에요', date: '2001.01.19', href: '/notice/15' },
  { number: 14, category: '금지', title: '금지와 관련된 공지사항 타이틀이에요', date: '2001.01.18', href: '/notice/14' },
  { number: 13, category: '모델', title: '모델과 관련된 공지사항 타이틀이에요', date: '2001.01.17', href: '/notice/13' },
  { number: 12, category: '문의요청', title: '문의요청과 관련된 공지사항 타이틀이에요', date: '2001.01.16', href: '/notice/12' },
  { number: 11, category: '금지', title: '금지와 관련된 공지사항 타이틀이에요', date: '2001.01.15', href: '/notice/11' },
  { number: 10, category: '모델', title: '모델과 관련된 공지사항 타이틀이에요', date: '2001.01.14', href: '/notice/10' },
  { number: 9, category: '문의요청', title: '문의요청과 관련된 공지사항 타이틀이에요', date: '2001.01.13', href: '/notice/9' },
  { number: 8, category: '금지', title: '금지와 관련된 공지사항 타이틀이에요', date: '2001.01.12', href: '/notice/8' },
  { number: 7, category: '모델', title: '모델과 관련된 공지사항 타이틀이에요', date: '2001.01.11', href: '/notice/7' },
  { number: 6, category: '문의요청', title: '문의요청과 관련된 공지사항 타이틀이에요', date: '2001.01.10', href: '/notice/6' },
  { number: 5, category: '금지', title: '금지와 관련된 공지사항 타이틀이에요', date: '2001.01.09', href: '/notice/5' },
  { number: 4, category: '모델', title: '모델과 관련된 공지사항 타이틀이에요', date: '2001.01.08', href: '/notice/4' },
  { number: 3, category: '문의요청', title: '문의요청과 관련된 공지사항 타이틀이에요', date: '2001.01.07', href: '/notice/3' },
  { number: 2, category: '금지', title: '금지와 관련된 공지사항 타이틀이에요', date: '2001.01.06', href: '/notice/2' },
  { number: 1, category: '모델', title: '모델과 관련된 공지사항 타이틀이에요', date: '2001.01.05', href: '/notice/1' },
];

/**
 * 공지사항 페이지
 * 
 * 아울다의 공지사항을 확인할 수 있는 페이지입니다.
 * 검색, 필터링, 페이지네이션 기능을 제공합니다.
 */
const NoticePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // 필터 옵션
  const filterOptions = [
    { id: 'all', label: '전체' },
    { id: 'prohibition', label: '금지' },
    { id: 'inquiry', label: '문의요청' },
    { id: 'model', label: '모델' },
  ];

  // 필터링 및 검색된 공지사항 목록
  const filteredNotices = useMemo(() => {
    let filtered = [...exampleNotices];

    // 카테고리 필터링
    if (selectedFilter !== 'all') {
      const categoryMap: Record<string, string> = {
        prohibition: '금지',
        inquiry: '문의요청',
        model: '모델',
      };
      const category = categoryMap[selectedFilter];
      filtered = filtered.filter((notice) => notice.category === category);
    }

    // 검색어 필터링
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (notice) =>
          notice.title.toLowerCase().includes(searchLower) ||
          notice.category.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [selectedFilter, searchTerm]);

  // 페이지네이션 계산
  const totalCount = filteredNotices.length;
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNotices = filteredNotices.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // 필터나 검색어가 변경되면 첫 페이지로 이동
  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
    setCurrentPage(1);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleWriteClick = () => {
    console.log('작성하기 클릭');
    // 작성 페이지로 이동
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageWrapper>
      <Page>
        <Header />
        <MainContent>
          <HeroSection
            variant="light"
            title="아올다에서 공지사항을 확인해 보세요"
            showSearch
            searchPlaceholder="공지사항을 검색해 보세요"
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onSearch={handleSearch}
          />
          <S.ContentSection>
            <NoticeList
              totalCount={totalCount}
              onWriteClick={handleWriteClick}
              filterOptions={filterOptions}
              selectedFilter={selectedFilter}
              onFilterChange={handleFilterChange}
              notices={paginatedNotices}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </S.ContentSection>
        </MainContent>
      </Page>
      <Footer />
    </PageWrapper>
  );
};

export default NoticePage;

