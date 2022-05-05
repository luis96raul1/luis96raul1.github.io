import Header from './components/header';
import Title from './pages/title';
import Work from './pages/work';
import Skill from './pages/skill';
import { LanguageProvider } from './components/contexts/languageContext';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <div id="home">
        <Title />
        <Work />
        <Skill />
      </div>
    </LanguageProvider>
  );
}

export default App;
