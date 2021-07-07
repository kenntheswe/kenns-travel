import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import About from './components/pages/About'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/services" component={Services}/>
          <Route path="/about" component={About}/>
          <Route path="/sign-up" component={SignUp}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
