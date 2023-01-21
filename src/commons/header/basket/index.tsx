import { FC, Fragment } from 'react';
// styles, scss
import styles from "./index.module.scss";
// images
import TRASH1 from "../../../assets/icons/trash1.png";
import SCOOTER from "../../../assets/images/scooter.png";
// utils
import FETCH from '../../../utils/fetch';

interface basketTypes {
    id: number,
    basket_products: Array<{ id: number, product: { id: number, title: string, price: number } }>
}

const BASKET: FC = () => {
    const data: Array<basketTypes> = FETCH.GET(`${import.meta.env.VITE_URL}/basket`);

    const productLength: number = data[0]?.basket_products.length;
    const productPrice: number = data[0]?.basket_products
        .reduce((accumulator, currentValue) => accumulator + currentValue.product.price, 0);


    return (
        <div className={styles.basket}>
            <div className={styles.basket_info}>
                <p className={styles.basket_info_title}>В вашей корзине</p>
                <p className={styles.basket_amount}>{productLength != 1 ? `${productLength} товара` : `${productLength} товар`}</p>
            </div>

            <div className={styles.basket_products_container}>
                {data && data.map(v1 => {
                    return (
                        <Fragment key={v1.id}>
                            {v1.basket_products && v1.basket_products.map(v2 => {
                                return (
                                    <div key={v2.id} className={styles.basket_product}>
                                        <div className={styles.basket_product_infos}>
                                            <div className={styles.basket_product_img_container}><img className={styles.basket_product_img} src={SCOOTER} alt="" /></div>

                                            <div className={styles.basket_product_info}>
                                                <h4 className={styles.basket_product_title}>{v2.product.title}</h4>
                                                <div className={styles.basket_product_des}>
                                                    <p className={styles.basket_product_price}>{v2.product.price} ₽</p>
                                                    <p className={styles.basket_product_amount}>1 шт.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <img className={styles.basket_product_trash} src={TRASH1} alt="" />
                                    </div>
                                )
                            })}
                        </Fragment>
                    )
                })

                }
            </div>

            <div className={styles.basket_buy}>
                <div className={styles.basket_buy_price}>
                    <p className={styles.basket_buy_title}>Сумма: </p>
                    <h3 className={styles.basket_buy_price}>{productPrice} ₽</h3>
                </div>

                <div className={styles.basket_buy_btn}>
                    Оформить заказ
                </div>
            </div>
        </div>
    )
}

export default BASKET; 