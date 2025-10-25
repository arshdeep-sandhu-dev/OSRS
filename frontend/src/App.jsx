import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import ErrorContainer from './containers/ErrorContainer';
import AlchContainer from './containers/AlchContainer';
import HomeState from './context/home/HomeState';
import ErrorState from './context/error/ErrorState';
import AlchState from './context/alchs/AlchState';
import FlippingState from './context/flipping/FlippingState';
import Navbar from './componants/Navbar';
import { AuthProvider } from './context/auth/AuthState';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import FlippingContainer from './containers/FlippingContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <ErrorState>
            <HomeState>
              <AlchState>
                <FlippingState>
                  <Routes>
                    <Route path="/" element={<HomeContainer />} />
                    <Route path="/alchs" element={<AlchContainer />} />
                    <Route path="/flipping" element={<FlippingContainer />} />
                    <Route path="*" element={<ErrorContainer />} />
                    <Route path="/login" element={<LoginContainer />} />
                    <Route path="/register" element={<RegisterContainer />} />
                  </Routes>
                </FlippingState>
              </AlchState>
            </HomeState>
          </ErrorState>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}


export default App;
