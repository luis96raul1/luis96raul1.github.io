import { Header } from './components/Header';
import { Title } from './pages/Title';
import { Work } from './pages/Work';
import { Skills } from './pages/Skills';

import { WrapperContext } from './components/contexts/WrapperContext';
import { Modal } from './components/Modal';

function App() {
  return (
    <WrapperContext>
      <Modal />
      <Header />
      <Title />
      <Work />
      <Skills />
    </WrapperContext>
  );
}

export default App;
