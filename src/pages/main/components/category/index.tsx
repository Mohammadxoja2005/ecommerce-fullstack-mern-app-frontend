import { FC, useEffect, useRef, useState } from 'react'
import styles from "./index.module.scss";
// utils
import FETCH from '../../../../utils/fetch';
// reac-redux
import { useDispatch } from "react-redux";
// features
import { post } from '../../../../features/category';

const CATEGORY: FC = () => {
    const dispatch = useDispatch();
    const [typeNumber, setTypeNumber] = useState<number>(1);
    const data: Array<{ id: number, title: string }> = FETCH.GET(`${import.meta.env.VITE_URL}/operations/types`);
    const li = useRef<Array<any>>([]);

    useEffect(() => {
        FETCH.POST(`${import.meta.env.VITE_URL}/product/category?category_id=1&type_id=${typeNumber}`)
            .then((data: any) => dispatch(post(data)));
    }, [typeNumber])

    useEffect(() => {
        li?.current[1]?.classList.add(styles.category_link_choose);

        li.current.forEach((v1, id1) => {
            v1.addEventListener('click', () => {
                v1.classList.add(styles.category_link_choose);

                li.current.forEach((v2, id2) => {
                    if (id1 != id2) {
                        v2.classList.remove(styles.category_link_choose);
                    }
                })
            })
        })

    }, [data])

    return (
        <div className={styles.category}>
            <div className={styles.container}>
                <h2 className={styles.category_title}>Электросамокаты</h2>
                <ul className={styles.category_links_container} >
                    {data && data.map(value => {
                        return (
                            <li onClick={() => setTypeNumber(value.id)} ref={(element) => li.current[value.id] = element} className={styles.category_link} key={value.id}>{value.title}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default CATEGORY; 