import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Register from './components/Register'
import FAQ from './components/faq'
import Contact from './components/Contact'
import Support from './components/Support'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Support />
      <Footer />
    </Router>
  );
}

export default App;
