import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import About from '../About/About'
import Articles from '../Articles/Articles'
import Home from '../Home/Home'

const items = [
  { to: '/', label: 'Главная' },
  { to: '/about', label: 'О нас' },
]

function App() {
  const [year] = useState(new Date().getFullYear());
  return (
       <Router>
         <nav>
            <div className="nav-wrapper px10">
              <a href="/" className="brand-logo">Свит-кэнди</a>
              <div className='mobile-box'>
                <ul id="nav-mobile" className="right">
                  {items.map(({ to, label }) => (
                    <li key={to}>
                      <Link key={to} to={to}>
                        {label}
                      </Link>
                    </li>
                  ))}
                  </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <footer className="page-footer">
          <div className="container">
            <div className="row">
              <h5>Свит-кэнди</h5>
              <div className=''>
                <ul id="" className="">
                  {items.map(({ to, label }) => (
                    <li key={to}>
                      <Link className="grey-text text-lighten-3" key={to} to={to}>
                        {label}
                      </Link>
                    </li>
                  ))}
                  </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © {year} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
      </Router>
  );
}

export default App;
