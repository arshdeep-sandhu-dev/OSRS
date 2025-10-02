import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import ErrorContainer from './containers/ErrorContainer';
import AlchContainer from './containers/AlchContainer';
import HomeState from './context/home/HomeState';
import ErrorState from './context/error/ErrorState';
import AlchState from './context/alchs/AlchState';
import Navbar from './componants/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ErrorState>
          <HomeState>
            <AlchState>
              <Routes>
                <Route path="/" element={<HomeContainer />} />
                <Route path="/alchs" element={<AlchContainer />} />
                <Route path="/flipping" element={<HomeContainer />} />
                <Route path="*" element={<ErrorContainer />} />
              </Routes>
            </AlchState>
          </HomeState>
        </ErrorState>
      </BrowserRouter>
    </div>
  );
}


export default App;
