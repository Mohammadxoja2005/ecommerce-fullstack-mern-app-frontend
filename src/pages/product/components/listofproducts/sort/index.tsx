import { FC } from 'react'
// styles 
import styles from "./index.module.scss";
// images 
import DOWNARROW from "../../../../../assets/icons/downarrow.png";

const SORT: FC = () => {
    return (
        <div className={styles.sort}>
            <h3 className={styles.sort_title}>Фильтр</h3> 

            <div className={styles.sort_name_container}>
                <p className={styles.sort_name_title}>Сортировать:</p>
                <div className={styles.sort_name}>По цене <img className={styles.sort_img} src={DOWNARROW} alt="" /></div>
                <div className={styles.sort_name}>По дальности хода <img className={styles.sort_img} src={DOWNARROW} alt="" /></div>
            </div>
        </div>
    )
}

export default SORT;