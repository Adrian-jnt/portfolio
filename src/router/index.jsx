import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';  
import Contacts from '../pages/contacts';  
import Work from '../pages/work';  
import About from '../pages/about';    

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <Home/> }/>
    <Route path='/contacts' element={ <Contacts/> }/>
    <Route path='/work' element={ <Work/> }/>
    <Route path='/about' element={ <About/> }/>
    </Routes>
    </BrowserRouter>
  )
}
export default Router;