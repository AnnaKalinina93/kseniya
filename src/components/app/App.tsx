import { Routes, Route } from 'react-router-dom';
import Header from '../header/header';
import Main from '../../pages/main/main';
import Footer from '../footer/footer';
import About from '../about/about';
import Research from '../../pages/research/research';
import CV from '../../pages/cv/cv';
import Teaching from '../../pages/teaching/teaching';
import NotFoundScreen from '../../pages/no-found-screen/no-found-screen';
function App(): JSX.Element {
  return (
    <>
      <Header />
      <div className="container pages-wrapper">
        <About />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/research" element={<Research />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;