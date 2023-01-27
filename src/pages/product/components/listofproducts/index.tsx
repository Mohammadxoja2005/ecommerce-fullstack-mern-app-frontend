import { FC } from 'react'
// styles 
import styles from "./index.module.scss";
// components  
import SORT from './sort';
import FILTER from './filter';
import ANNOUNCEMENT from './announcement';

const LISTOFPRODUCTS: FC = () => {
    return (
        <div className={styles.listofproducts}>
            <div className={styles.container}>
                <SORT />

                <div className={styles.listofproducts_products_container}>
                    <div className={styles.listofproducts_fa}>
                        <FILTER />
                        <ANNOUNCEMENT />
                    </div>
                    <div className={styles.listofproducts_product}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LISTOFPRODUCTS;