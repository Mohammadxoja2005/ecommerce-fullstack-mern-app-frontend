import {} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import MAIN from '../pages/main';

const ROUTES = () =>  {
  return (
    <Router> 
        <Routes> 
            <Route path='/' element={<MAIN/>}/>
        </Routes>
    </Router>
  )
}

export default ROUTES; 