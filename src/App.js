import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { StatesGame } from './components/50StatesTask/StatesGame';
import { Header } from './components/Header';
import { HiddenX } from './components/hiddenXTask/HiddenX';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/loginTask/LogInPage';
import { LoginSuccessPage } from './components/loginTask/LoginSuccessPage';
import { SignUpSuccessPage } from './components/loginTask/SignUpSuccessPage';
import { Menu } from './components/menuTask/Menu';
import { Messenger } from './components/messagingTask/Messenger';
import { MovieList } from './components/movieListTask/MovieList';
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

        {/* Login task */}
        <Route
          path="/login"
          element={<LoginPage userData={userData} setUserData={setUserData} />}
        />
        <Route path="/loginSuccess" element={<LoginSuccessPage />} />
        <Route path="/signUpSuccess" element={<SignUpSuccessPage />} />

        {/* Movie list task */}
        <Route path="/movies" element={<MovieList />} />

        {/* 50 US states game task */}
        <Route path="/states" element={<StatesGame />} />

        {/* Menu task */}
        <Route path="/menu" element={<Menu />} />

        {/* Hidden X task */}
        {/* <Route path="/hiddenX" element={<HiddenX />} /> */}

        {/* Messaging task */}
        {/* <Route path="/messaging" element={<Messenger />} /> */}
      </Routes>
    </div>
  );
}

export default App;
