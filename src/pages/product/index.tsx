import { FC, Fragment } from 'react';
// commons
import HEADER from '../../commons/header';
import PATH from '../../commons/path';
// components
import LISTOFPRODUCTS from './components/listofproducts';
import SCOOTERBACK from './components/scooterback';

const PRODUCT: FC = () => {
  return (
    <Fragment>
      <HEADER />
      <PATH />
      <SCOOTERBACK />
      <LISTOFPRODUCTS />
    </Fragment>
  )
}

export default PRODUCT;