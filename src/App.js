import logo from './logo.svg';
import './App.css';
import Login from './pages/auth/login';
import Header from './components/layout/header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import GlobalStyles from './styles/Global.styled';
import GlobalTheme from './styles/Theme-elements/Theme.styled';


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <GlobalTheme />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
