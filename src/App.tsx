import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import IntroductionPage from './pages/Introduction';



const App = () => {
  const PageComponent = IntroductionPage;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageComponent />
    </ThemeProvider>
  );
};

export default App;




