import { FC } from 'react'
// styles
import styles from "./index.module.scss";
// images
import FIRE from "../../../../../assets/icons/fire.png";
import SCOOTER from "../../../../../assets/images/scooter_product.png";

const ANNOUNCEMENT: FC = () => {
  return (
    <div className={styles.announcement}>

      <div className={styles.announcement_item}>
        <img className={styles.announce_item_img} src={FIRE} alt="" />
        <h3 className={styles.announcement_name}>Товар месяца</h3>
      </div>

      <div className={styles.announcement_character}>
        <div className={styles.announcement_img_container}>
          <img className={styles.announcement_img} src={SCOOTER} alt="" />
        </div>

        <div className={styles.announcement_info}>
          <h4 className={styles.announcement_info_name}>Kugoo Kirin M4</h4>
          <p className={styles.announcement_info_des} >29 900 ₽</p>
        </div>
      </div>
    </div>
  )
}

export default ANNOUNCEMENT;