import { BrowserRouter as Router, Routes, Route, HashRouter} from "react-router-dom";
import MAIN from '../pages/main';
import PRODUCT from '../pages/product';

const ROUTES = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MAIN />} />
        <Route path='/products' element={<PRODUCT />} />
      </Routes>
    </HashRouter>
  )
}

export default ROUTES; 