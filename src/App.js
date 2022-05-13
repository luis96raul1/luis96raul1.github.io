import Header from './components/header';
import { Title } from './pages/Title';
import { Work } from './pages/Work';
import { Skills } from './pages/Skills';
import { LanguageProvider } from './components/contexts/languageContext';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <div id="home">
        <Title />
        <Work />
        <Skills />
      </div>
    </LanguageProvider>
  );
}

export default App;
