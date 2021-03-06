import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/amazon-clone/checkout">
            <Checkout />
          </Route>
          <Route path="/amazon-clone">
            <Home />
          </Route>
        </Switch>
        <img src={logo} className="app-logo" alt="React logo" />
      </div>
    </Router>
  );
}

export default App;
