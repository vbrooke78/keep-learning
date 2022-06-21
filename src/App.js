import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/loginTask/LogInPage';
import { LoginSuccessPage } from './components/loginTask/LoginSuccessPage';
import { SignUpSuccessPage } from './components/loginTask/SignUpSuccessPage';
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
        {/* login task */}
        <Route
          path="/login"
          element={<LoginPage userData={userData} setUserData={setUserData} />}
        />
        <Route path="/loginSuccess" element={<LoginSuccessPage />} />
        <Route path="/signUpSuccess" element={<SignUpSuccessPage />} />
        {/* movie list task */}
        <Route path="/movies" element={<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;
