import { FC } from 'react'
import styles from "./index.module.scss";
import YANDEX from "../../../../assets/icons/yandex.png"; 
import STAR from "../../../../assets/icons/star.png"; 

const GUARANTEE: FC = () => {
    return (
        <div className={styles.gur} >
            <div className={styles.container}>
                <div className={styles.gur_info}><h2 className={styles.gur_title}>Гарантия 1 год</h2><p className={styles.gur_des} >на весь ассортимент</p></div>
                <div className={styles.gur_info}><h2 className={styles.gur_title}>рассрочка</h2><p className={styles.gur_des} >от 6 месяцев</p></div>
                <div className={styles.gur_info}><h2 className={styles.gur_title}>Подарки</h2><p className={styles.gur_des} >и бонусам к покупкам </p></div>
                
                <div className={styles.gur_reviews}>
                    <div className={styles.gur_logo}><img src={YANDEX} /></div>
                     <div className={styles.gur_com}>
                        <p className={styles.gur_com_title}>Яндекс отзывы</p>
                        <div className={styles.gur_review} > <img src={STAR} /> <span className={styles.gur_com_number} >4,9</span> </div>
                    </div>
                </div> 

            </div>
        </div>
    )
}

export default GUARANTEE; 