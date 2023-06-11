import './App.css';
import {Routes,Route} from "react-router-dom";
import  Footer from './components/public/Footer';
import Main from './components/public/Main';
import Navbar from './components/public/Navbar';
import Detail from './components/public/Detail';


function App() {
  return (
  
      <div>
   <Navbar/>
  <Routes>
    <Route  exact path='/' element={ <Main/> } ></Route>
    <Route  path='/details/:id' element={ <Detail/> } ></Route>
    
  </Routes>

 <Footer/>

</div>  
   
   
    
   
  );
}

export default App;
