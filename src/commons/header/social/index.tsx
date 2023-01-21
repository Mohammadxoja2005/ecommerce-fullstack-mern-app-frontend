import { FC } from 'react'
import styles from "./index.module.scss";
// images
import ADD from "../../../assets/icons/add.png";
import TELEGRAM from "../../../assets/icons/telegram.png";
import MSG from "../../../assets/icons/msg.png";
import WHATSAPP from "../../../assets/icons/whatsapp.png"
// components
import PHONELIST from './phonelist';
// helpers 
import USETOGGLE from '../../../utils/useToggle';

const SOCIAL: FC = () => {

  const [phoneListToggle, setPhoneListToggle] = USETOGGLE();

  return (
    <div className={styles.social}>
      <div className={styles.container}>
        <div className={styles.social_links}>
          <ul className={styles.social_links_container} >
            <li className={styles.social_links_container_element}>Сервис</li>
            <li className={styles.social_links_container_element}>Сотрудничество</li>
            <li className={styles.social_links_container_element}>Заказать звонок</li>
          </ul>
          <div className={styles.social_container}>
            <img className={styles.social_element} src={WHATSAPP} alt="" />
            <img className={styles.social_element} src={MSG} alt="" />
            <img className={styles.social_element} src={TELEGRAM} alt="" />
          </div>
        </div>

        <div className={styles.social_connection} >
          <p className={styles.social_phone} >+7 (800) 505-54-61</p>
          <img onClick={setPhoneListToggle} className={styles.social_connection_img} src={ADD} alt="" />
        </div>

        {phoneListToggle ? <PHONELIST /> : null}

      </div>
    </div>
  )
}

export default SOCIAL; 