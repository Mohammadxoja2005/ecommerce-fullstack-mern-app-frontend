import { FC } from 'react';
import styles from "./index.module.scss";
// images 
import COMPARE from "../../assets/icons/compare.png";
import SCOOTER_PRODUCT from "../../assets/images/scooter_product.png"
import PREV_PRODUCT from "../../assets/icons/prev_product.png";
import NEXT_PRODUCT from "../../assets/icons/next_product.png";
import ACC from "../../assets/icons/acc.png";
import SPEED from "../../assets/icons/speed.png";
import TIMER from "../../assets/icons/timer.png";
import MOL from "../../assets/icons/mol.png";
import TRASH from "../../assets/icons/trash.png";
import LIKE from "../../assets/icons/like.png";
// utils 
import FETCH from '../../utils/fetch';

interface props {
    object: {
        id: number,
        title: string,
        power: string,
        addpower: string,
        speed: string,
        time: string,
        price: number
    }
}

const SINGLEPRODUCT: FC<props> = (props) => {
    const { object } = props;
    const { id, title, power, addpower, speed, time, price } = object;

    const createBasketProduct = (productId: number): void => {
        FETCH.POST(`${import.meta.env.VITE_URL}/basket`, { basket_id: 1, product_id: productId });
    }

    return (
        <div key={id} className={styles.products_cart}>
            <div className={styles.products_scooter}>
                <div className={styles.products_not}>
                    <div className={styles.products_hot}>ХИТ</div>
                    <div className={styles.products_compare}><img src={COMPARE} /></div>
                </div>

                <div className={styles.products_image_container}>
                    <img className={styles.products_image} src={SCOOTER_PRODUCT} />
                    <div className={styles.products_btn} id={styles.products_prev} ><img src={PREV_PRODUCT} /></div>
                    <div className={styles.products_btn} id={styles.products_next} ><img src={NEXT_PRODUCT} /></div>
                </div>
            </div>

            <div className={styles.products_cart_des}>
                <h2 className={styles.products_cart_title}>{title}</h2>

                <div className={styles.products_cart_char}>
                    <div className={styles.product_cart_container}><img src={ACC} /><p className={styles.product_cart_char_title}>{power}</p></div>
                    <div className={styles.product_cart_container}><img src={MOL} /><p className={styles.product_cart_char_title}>{addpower}</p></div>
                    <div className={styles.product_cart_container}><img src={SPEED} /><p className={styles.product_cart_char_title}>{speed}</p></div>
                    <div className={styles.product_cart_container}><img src={TIMER} /><p className={styles.product_cart_char_title}>{time}</p></div>
                </div>

                <div className={styles.products_cart_container}>
                    <div className={styles.products_cart_price_container}>
                        <p className={styles.products_cart_price_lined}>39 900 ₽</p>
                        <p className={styles.products_cart_price}>{price} ₽</p>
                    </div>
                    <div className={styles.products_cart_actions} >
                        <div onClick={() => createBasketProduct(id)} className={styles.products_cart_actions_container}><img className={styles.products_cart_action_img} src={TRASH} alt="" /></div>
                        <div className={styles.products_cart_actions_container}><img className={styles.products_cart_action_img} src={LIKE} alt="" /></div>
                    </div>
                </div>

                <div className={styles.product_cart_btn}>Купить в 1 клик</div>
            </div>
        </div>
    )
}

export default SINGLEPRODUCT;