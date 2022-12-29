import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Exchanges from './Components/Exchanges';
import Header from './Components/Header';
import Home from './Components/Home'
import Coins from './Components/Coins'
import CoinsDetails from './Components/CoinsDetails'
import Weather from './Components/Weather'
function App() {
  return (

    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/exchanges' element={<Exchanges/>} /> 
        <Route path='/coins' element={<Coins/>} /> 
        <Route path='/coins/:id' element={<CoinsDetails/>} /> 
        <Route path='/weather' element={<Weather/>} /> 
        
      </Routes>
    </Router>


  );
}

export default App;
