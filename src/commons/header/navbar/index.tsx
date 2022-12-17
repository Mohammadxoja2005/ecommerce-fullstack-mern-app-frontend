import {FC} from 'react'
import styles from "./index.module.scss"; 

const NAVBAR: FC = () =>  {
  return (
    <div className={styles.navbar} >
        <div className={styles.container} >
            <p className={styles.navbar_links}>О магазине</p>
            <p className={styles.navbar_links}>Доставка и оплата <span className={styles.navbar_links_span} >Доступна рассрочка</span></p>
            <p className={styles.navbar_links}>Тест-драйв </p>
            <p className={styles.navbar_links}>Блог</p>
            <p className={styles.navbar_links}>Контакты</p>
            <p className={styles.navbar_links}>Акции <span className={styles.navbar_links_span}>%</span></p>
        </div>
    </div>
  )
}

export default NAVBAR; 