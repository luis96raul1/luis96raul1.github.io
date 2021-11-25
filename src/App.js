import Header from './components/header';
import Title from './pages/title';
import Work from './pages/work';
// import { GlobalStyle } from './styles/global';
import { TimelineMax, TweenMax } from "gsap"
import ScrollMagic from "scrollmagic"
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

function App() {
  ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
  return (
    <div>
        <Header />
        <Title/>
        <Work/>
    </div>
  );
}

export default App;
