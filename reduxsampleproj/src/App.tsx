/*
Redux packages to install:
1. npm install @reduxjs/toolkit react-redux
2. 
 */
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Contact from './pages/Contact';
import NavBar from './pages/NavBar';

import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Router>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </Router>
        </Provider>

      </header>
    </div>
  );
}

export default App;
