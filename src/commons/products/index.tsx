import { FC } from 'react'
import styles from "./index.module.scss";
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

const PRODUCTS: FC = () => {
    return (
        <div className={styles.products}>
            <div className={styles.container}>
                <div className={styles.products_cart_control}>
                    {[1, 2, 3, 4,5,6,7,8].map(() => {
                        return (
                            <div className={styles.products_cart}>

                                <div className={styles.products_scooter}>
                                    <div className={styles.products_not} >
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
                                    <h2 className={styles.products_cart_title}>Kugoo Kirin M4</h2>

                                    <div className={styles.products_cart_char}>
                                        <div className={styles.product_cart_container}><img src={ACC} /><p className={styles.product_cart_char_title}>2000 mAh</p></div>
                                        <div className={styles.product_cart_container}><img src={MOL} /><p className={styles.product_cart_char_title}>1,2 л.с.</p></div>
                                        <div className={styles.product_cart_container}><img src={SPEED} /><p className={styles.product_cart_char_title}>60 км/ч</p></div>
                                        <div className={styles.product_cart_container}><img src={TIMER} /><p className={styles.product_cart_char_title}>5 часов</p></div>
                                    </div>

                                    <div className={styles.products_cart_container}>
                                        <div className={styles.products_cart_price_container}>
                                            <p className={styles.products_cart_price_lined}>39 900 ₽</p>
                                            <p className={styles.products_cart_price}>29 900 ₽</p>
                                        </div>
                                        <div className={styles.products_cart_actions} >
                                            <div className={styles.products_cart_actions_container}><img className={styles.products_cart_action_img} src={TRASH} alt="" /></div>
                                            <div className={styles.products_cart_actions_container}><img className={styles.products_cart_action_img} src={LIKE} alt="" /></div>
                                        </div>
                                    </div>

                                    <div className={styles.product_cart_btn}>Купить в 1 клик</div>
                                </div>

                            </div>
                        )
                    })

                    }
                </div>
                    <div className={styles.products_btn_see_all}>Смотреть все</div>
            </div>
        </div>
    )
}

export default PRODUCTS; 