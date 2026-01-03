import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/organisms/Header';
import Footer from '../../components/organisms/Footer';
import HeroSection from '../../components/organisms/HeroSection';
import SideNavigation from '../../components/organisms/SideNavigation';
import ProductList from '../../components/organisms/ProductList';
import type { ServiceCardProps } from '../../components/molecules/ServiceCard';
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

/**
 * 제품 소개 페이지
 * 
 * 아울다의 제품/서비스를 소개하는 페이지입니다.
 * 카테고리 필터와 검색 기능을 제공하며, 서비스 카드 그리드로 제품을 표시합니다.
 */
const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // 카테고리 목록
  const categories = [
    { id: 'favorites', label: '즐겨찾기' },
    { id: 'server', label: '서버' },
    { id: 'database', label: '데이터베이스' },
    { id: 'storage', label: '스토리지' },
    { id: 'network', label: '네트워크' },
  ];

  // 서비스 목록 (예시 데이터)
  const services: ServiceCardProps[] = [
    {
      icon: '/icon.png',
      title: 'AMDB',
      description:
        'AMDB는 10년 이상의 운영 노하우와 서비스를 제공하며, 안정적인 서비스 환경을 구축하고 효율적인 데이터 관리를 지원합니다.',
      href: '/service/amdb',
    },
    {
      icon: '/icon.png',
      title: 'AMDB',
      description: '1일 단위',
      href: '/service/amdb-1d',
    },
    {
      icon: '/icon.png',
      title: 'AMDB',
      description: '2일 단위',
      href: '/service/amdb-2d',
    },
    {
      icon: '/icon.png',
      title: 'AMDB',
      description: '3일 단위',
      href: '/service/amdb-3d',
    },
    {
      icon: '/icon.png',
      title: 'AMDB',
      description: '4일 단위',
      href: '/service/amdb-4d',
    },
    {
      icon: '/icon.png',
      title: 'AMDB',
      description: '5일 단위',
      href: '/service/amdb-5d',
    },
  ];

  const handleSearch = (value: string) => {
    console.log('검색:', value);
    // 검색 로직 구현
  };

  const handleCategoryChange = (selectedIds: string | string[]) => {
    const ids = Array.isArray(selectedIds) ? selectedIds : [selectedIds];
    setSelectedCategories(ids);
  };

  return (
    <PageWrapper>
      <Page>
        <Header />
        <MainContent>
          <HeroSection
            variant="product"
            title="아울다 Service"
            description="아울다에서 제품은 기획서에 따라 진행된 각 프로젝트의 최종 성과물을 의미합니다. 이는 사용자에게 제공되는 외부 서비스뿐 아니라, 클라우드 환경 내에서 사용되는 모든 서비스 단위를 포괄합니다."
          />
          <S.ContentSection>
            <SideNavigation
              categories={categories}
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
            />
            <ProductList
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onSearch={handleSearch}
              services={services}
              sectionTitle="즐겨찾기"
            />
          </S.ContentSection>
        </MainContent>
      </Page>
      <Footer />
    </PageWrapper>
  );
};

export default ProductPage;

