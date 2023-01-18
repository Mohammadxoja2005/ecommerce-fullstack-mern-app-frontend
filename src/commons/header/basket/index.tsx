import { FC } from 'react';
// styles, scss
import styles from "./index.module.scss";
// images
import TRASH1 from "../../../assets/icons/trash1.png";
import SCOOTER from "../../../assets/images/scooter.png";

const BASKET: FC = () => {
    return (
        <div id='node' className={styles.basket}>

            <div className={styles.basket_info}>
                <p className={styles.basket_info_title}>В вашей корзине</p>
                <p className={styles.basket_amount}>2 товара</p>
            </div>

            <div className={styles.basket_products_container}>
                {[1, 2, 3, 4].map((value) => {
                    return (
                        <div key={value} className={styles.basket_product}>
                            <div className={styles.basket_product_infos}>
                                <div className={styles.basket_product_img_container}><img className={styles.basket_product_img} src={SCOOTER} alt="" /></div>

                                <div className={styles.basket_product_info}>
                                    <h4 className={styles.basket_product_title}>Kugoo Kirin M4</h4>

                                    <div className={styles.basket_product_des}>
                                        <p className={styles.basket_product_price}>29 900 ₽</p>
                                        <p className={styles.basket_product_amount}>1 шт.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <img className={styles.basket_product_trash} src={TRASH1} alt="" />
                        </div>
                    )
                })

                }
            </div>

            <div className={styles.basket_buy}>
                <div className={styles.basket_buy_price}>
                    <p className={styles.basket_buy_title}>Сумма: </p>
                    <h3 className={styles.basket_buy_price}>59 800 ₽</h3>
                </div>

                <div className={styles.basket_buy_btn}>
                    Оформить заказ
                </div>
            </div>
        </div>
    )
}

export default BASKET; 