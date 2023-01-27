import { FC } from 'react'
// styles 
import styles from "./index.module.scss";
// images
import DRONE from "../../../../assets/images/drone.png";

const SCOOTERBACK: FC = () => {
    return (
        <div className={styles.scooter_back}>
            <div className={styles.container}>
                <div className={styles.drone_image_container}>
                    <img className={styles.scooter_back_catalog_img} src={DRONE} alt="" />
                </div>
                <div className={styles.scooter_back_info}>
                    <div className={styles.scooter_back_notification} >Акция</div>
                    <h3 className={styles.scooter_back_title}>До 01.09 бесплатная доставка самокатов по всей России</h3>
                    <div className={styles.scooter_back_more}>Подробнее</div>
                </div>
            </div>
        </div>
    )
}

export default SCOOTERBACK;