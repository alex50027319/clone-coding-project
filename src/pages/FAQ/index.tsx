import { useState, useMemo } from 'react';
import styled from 'styled-components';
import Header from '../../components/organisms/Header';
import Footer from '../../components/organisms/Footer';
import HeroSection from '../../components/organisms/HeroSection';
import FAQList from '../../components/organisms/FAQList';
import type { AccordionProps } from '../../components/molecules/Accordion';
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

// 예시 FAQ 데이터
const exampleFAQs: AccordionProps[] = [
  {
    title: 'FAQ Question',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `,
    defaultExpanded: true,
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
  {
    title: 'FAQ Question',
    content: 'This is another FAQ answer.',
  },
];

/**
 * FAQ 페이지
 * 
 * 아울다의 자주 묻는 질문을 확인할 수 있는 페이지입니다.
 * 검색, 카테고리 필터링, 페이지네이션 기능을 제공합니다.
 */
const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // 카테고리 옵션
  const categoryOptions = [
    { id: 'all', label: '카테고리' },
    { id: 'account', label: '카테고리' },
    { id: 'billing', label: '카테고리' },
    { id: 'technical', label: '카테고리' },
    { id: 'other', label: '카테고리' },
  ];

  // 필터링 및 검색된 FAQ 목록
  const filteredFAQs = useMemo(() => {
    let filtered = [...exampleFAQs];

    // 카테고리 필터링 (현재는 모든 카테고리가 동일하므로 실제로는 필터링하지 않음)
    // 실제 데이터에 category 필드가 있다면 여기서 필터링

    // 검색어 필터링
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (faq) =>
          faq.title.toLowerCase().includes(searchLower) ||
          faq.content.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  // 페이지네이션 계산
  const totalCount = filteredFAQs.length;
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedFAQs = filteredFAQs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // 필터나 검색어가 변경되면 첫 페이지로 이동
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
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
            variant="dark"
            title="아올다 FAQ"
            breadcrumbItems={[{ label: '홈', href: '/' }, { label: 'FAQ' }]}
            showSearch
            searchPlaceholder="FAQ를 검색해 보세요."
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onSearch={handleSearch}
          />
          <S.ContentSection>
            <FAQList
              faqs={paginatedFAQs}
              categoryOptions={categoryOptions}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
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

export default FAQPage;

