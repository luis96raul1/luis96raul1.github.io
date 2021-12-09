import Header from './components/header';
import Title from './pages/title';
import Work from './pages/work';
import Skill from './pages/skill';
// import Footer from './components/footer';
import { LanguageProvider } from './components/contexts/languageContext';

function App() {
  return (
    <LanguageProvider>
    <Header/>
    <div id="home">
        <Title/>
        <Work/>
        <Skill/>
        {/* <Footer/> */}
    </div>
    </LanguageProvider>
  );
}

export default App;
