import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LogInPage';
import { Nav } from './components/Nav';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<LoginPage userData={userData} setUserData={setUserData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
