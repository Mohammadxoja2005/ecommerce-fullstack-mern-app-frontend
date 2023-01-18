import { FC } from 'react';
// styles
import styles from "./index.module.scss";
// components 
import LIST from './list';
// features
import { data } from "../../../features/catalog";
// react-redux, toolkit 
import { post } from '../../../features/catalog';
import { useDispatch } from 'react-redux';

const CATALOG: FC = () => {
    const dispatch = useDispatch();

    return (
        <div className={styles.catalog}>
            <div className={styles.catalog_container_title}>
                {data && data.map(value => {
                    return (
                        <div className={styles.catalog_title} key={value.id}>
                            <img className={styles.catalog_image} src={value.image} />
                            <p className={styles.catalog_name} onMouseOut={() => console.log("hello world")}
                                onMouseOver={() => {dispatch(post(value.category)) }}>{value.title}</p>
                        </div>
                    )
                })}
            </div>
            <LIST />
        </div>
    )
}

export default CATALOG;