import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/organisms/Header';
import Footer from '../../components/organisms/Footer';
import HeroSection from '../../components/organisms/HeroSection';
import NoticeDetailContent from '../../components/organisms/NoticeDetailContent';
import Breadcrumb from '../../components/molecules/Breadcrumb';
import type { NoticeDetailData } from '../../components/organisms/NoticeDetailContent';
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

// 예시 공지사항 상세 데이터
const exampleNoticeData: Record<string, NoticeDetailData> = {
  '24': {
    number: 24,
    title: '문의요청과 관련된 공지사항 타이틀이에요',
    author: '관리자',
    date: '2001.01.28',
    views: 128,
    attachments: [
      { name: '첨부파일1.pdf', url: '/files/attachment1.pdf' },
      { name: '첨부파일2.docx', url: '/files/attachment2.docx' },
    ],
    content: `
      <h1>공지사항 본문 내용</h1>
      <p>이것은 공지사항의 본문 내용입니다. 문의요청과 관련된 중요한 정보를 포함하고 있습니다.</p>
      <h2>세부 사항</h2>
      <p>공지사항의 세부 내용이 여기에 표시됩니다. 사용자들이 확인해야 할 중요한 정보를 제공합니다.</p>
      <ul>
        <li>첫 번째 항목</li>
        <li>두 번째 항목</li>
        <li>세 번째 항목</li>
      </ul>
    `,
    prevTitle: '금지와 관련된 공지사항 타이틀이에요',
    prevHref: '/notice/23',
    nextTitle: undefined,
    nextHref: undefined,
  },
  '23': {
    number: 23,
    title: '금지와 관련된 공지사항 타이틀이에요',
    author: '관리자',
    date: '2001.01.27',
    views: 95,
    content: `
      <h1>금지 관련 공지사항</h1>
      <p>이것은 금지와 관련된 공지사항의 본문 내용입니다.</p>
      <p>중요한 안내사항을 확인해주시기 바랍니다.</p>
    `,
    prevTitle: '모델과 관련된 공지사항 타이틀이에요',
    prevHref: '/notice/22',
    nextTitle: '문의요청과 관련된 공지사항 타이틀이에요',
    nextHref: '/notice/24',
  },
  '22': {
    number: 22,
    title: '모델과 관련된 공지사항 타이틀이에요',
    author: '관리자',
    date: '2001.01.26',
    views: 76,
    content: `
      <h1>모델 관련 공지사항</h1>
      <p>이것은 모델과 관련된 공지사항의 본문 내용입니다.</p>
    `,
    prevTitle: '문의요청과 관련된 공지사항 타이틀이에요',
    prevHref: '/notice/21',
    nextTitle: '금지와 관련된 공지사항 타이틀이에요',
    nextHref: '/notice/23',
  },
};

/**
 * 공지사항 상세 페이지
 * 
 * 공지사항의 상세 내용을 표시하는 페이지입니다.
 */
const NoticeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // 공지사항 데이터 가져오기
  const noticeData = id ? exampleNoticeData[id] : null;

  // 데이터가 없으면 404 페이지 표시
  if (!noticeData) {
    return (
      <PageWrapper>
        <Page>
          <Header />
          <MainContent>
            <S.NotFound>
              <h1>공지사항을 찾을 수 없습니다</h1>
              <p>요청하신 공지사항이 존재하지 않습니다.</p>
            </S.NotFound>
          </MainContent>
        </Page>
        <Footer />
      </PageWrapper>
    );
  }

  const handleListClick = () => {
    navigate('/notice');
  };

  return (
    <PageWrapper>
      <Page>
        <Header />
        <MainContent>
          <HeroSection
            variant="light"
            title="아올다에서 공지사항을 확인해 보세요"
          />
          <S.ContentSection>
            <Breadcrumb items={[{ label: '공지사항', href: '/notice' }]} />
            <NoticeDetailContent
              data={noticeData}
              onListClick={handleListClick}
            />
          </S.ContentSection>
        </MainContent>
      </Page>
      <Footer />
    </PageWrapper>
  );
};

export default NoticeDetailPage;

