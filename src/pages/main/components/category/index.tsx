import { DOMElement, FC, useEffect, useRef} from 'react'
import styles from "./index.module.scss";
// utils
import FETCH from '../../../../utils/fetch';

const CATEGORY: FC = () => { 
    const data: Array<{id: number, title: string}> = FETCH.GET(`${import.meta.env.VITE_URL}operations/types`); 
    const li = useRef<Array<any>>([]);

    useEffect(() => { 
        li.current.forEach((value, id) => {
            value.addEventListener('click', () => {
                value.classList.add(styles.category_link_choose);

                li.current.forEach((value, index) => {
                    if (index != id) {
                        value.classList.remove(styles.category_link_choose);
                    }
                })
            })
        })

    }, [data])

    return (
        <div className={styles.category}>
            <div className={styles.container}>
                <h2 className={styles.category_title} >Электросамокаты</h2>
                <ul className={styles.category_links_container} >
                    {data && data.map((value, index) => {
                        return (
                          <li ref={(element) => li.current[index] = element} id="li" className={styles.category_link} key={value.id}>{value.title}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default CATEGORY; 