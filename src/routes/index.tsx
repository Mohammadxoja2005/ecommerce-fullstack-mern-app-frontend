import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MAIN from '../pages/main';
import PRODUCT from '../pages/product';

const ROUTES = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MAIN />} />
        <Route path='/products' element={<PRODUCT />} />
      </Routes>
    </Router>
  )
}

export default ROUTES; 