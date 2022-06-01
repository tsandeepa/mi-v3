import logo from './logo.svg';
import './App.css';
import Login from './pages/auth/login';
import Header from './components/layout/header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import GlobalStyles from './styles/Global.styled';
import GlobalTheme from './styles/Theme-elements/Theme.styled';
import Employees from './pages/employess/employees';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/Theme-elements/DarkLight.styled';
import { useState } from 'react';


function App() {

  const [theme, setTheme] = useState(lightTheme);
  const [logged, setLogged] = useState(false);

  const handleTheme = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <GlobalTheme />
        {logged ? <Header handleTheme={handleTheme} setLogged={setLogged} /> : ''}
        <Routes>
          <Route path="/login" element={<Login setLogged={setLogged} />} />
          <Route path="/" element={<Dashboard setLogged={setLogged} />} />
          <Route path="/emplyees" element={<Employees setLogged={setLogged} />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
