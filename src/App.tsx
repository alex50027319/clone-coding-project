import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import IntroductionPage from './pages/Introduction';
import ProductPage from './pages/Product';
import NoticePage from './pages/Notice';
import NoticeDetailPage from './pages/NoticeDetail';
import FAQPage from './pages/FAQ';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroductionPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/notice/:id" element={<NoticeDetailPage />} />
          <Route path="/FAQ" element={<FAQPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;








