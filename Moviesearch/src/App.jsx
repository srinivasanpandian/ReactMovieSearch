
import './css/App.css'
import Favorite from './pages/Favourites';
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import NavBar from './components/navbar';
import { MovieProvider } from './Context/MovieContext';

function App  () {
  return (

      <MovieProvider>
      <NavBar/>
    
    <main className='main-content'>
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/Favourites' element={<Favorite/>}/>
       </Routes> 
       </main>
       </MovieProvider>
);
}

export default App;