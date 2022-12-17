import {FC, Fragment} from 'react'; 
import styles from "./index.module.scss"; 
import HEADER from '../../commons/header';
import SLIDER from '../../commons/slider';
import GUARANTEE from './components/guarantee';
import CATEGORY from './components/category';
import PRODUCTS from '../../commons/products';
import FOOTER from "../../commons/footer"; 

const MAIN: FC = () => {
  return (
    <Fragment>
        <HEADER/> 
        <SLIDER/>
        <GUARANTEE/>
        <CATEGORY/>
        <PRODUCTS/>
        <FOOTER/>
    </Fragment>
  )
}

export default MAIN; 