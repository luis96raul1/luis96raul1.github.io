import Title from './pages/title';
import Work from './pages/work';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import * as ScrollMagic from "scrollmagic";
import { TimelineMax, TweenMax } from "gsap";
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
// There you can use setTween() in ScrollMagic Scene with no problems

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Title/>}/>
          <Route path="work" element={<Work/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
