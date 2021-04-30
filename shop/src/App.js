import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Home from './Home';
import Gallery from './Gallery';
import  Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import Login from './Login';
import Topoffer from './Topoffer';
import {Button } from 'react-bootstrap';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom';
import Appliance from './Appliance';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
      <Header />
          
      
                    <Route  exact path="/"><Home /></Route>
                    <Route   path="/Gallery"><Gallery /></Route>
                    <Route   path="/Contact"><Contact /></Route>
                    <Route   path="/Topoffer"><Topoffer /></Route>
                    <Route   path="/Login"><Login /></Route>
                    <Route   path="/Appliance"><Appliance /></Route>
        
      </Router>
     
      <Footer />
    </div>
   
  );
}

export default App;
