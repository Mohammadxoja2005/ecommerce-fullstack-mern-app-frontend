import { FC } from 'react';
// styles
import styles from "./index.module.scss";
// react-redux
import { useSelector } from "react-redux";
// commons
import SINGLEPRODUCT from '../../../../commons/singleproduct';

interface productTypes {
    id: number,
    title: string,
    power: string,
    addpower: string,
    speed: string,
    time: string,
    price: number
}

const PRODUCTS: FC = () => {
    const data: Array<productTypes> = useSelector((state: any) => state.category.value);

    return (
        <div className={styles.products}>
            <div className={styles.container}>
                <div className={styles.products_cart_control}>
                    {data && data.map(object => {
                        return (
                            <SINGLEPRODUCT object={object} />
                        )
                    })}
                </div>
                <div className={styles.products_btn_see_all}>Смотреть все</div>
            </div>
        </div>
    )
}

export default PRODUCTS; 