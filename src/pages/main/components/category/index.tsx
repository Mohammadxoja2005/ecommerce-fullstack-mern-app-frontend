import { FC, useEffect} from 'react'
import styles from "./index.module.scss";

const CATEGORY: FC = () => {
    const data = [
        {
            id: 1,
            title: "Хиты продаж"
        },
        {
            id: 2,
            title: "Для города"
        },
        {
            id: 3,
            title: "Для взрослых"
        },
        {
            id: 4,
            title: "Для детей"
        },
    ] 

    useEffect(() => {
        const li = document.querySelectorAll('#li'); 
        li[0].classList.add(styles.category_link_choose) 
        
        li.forEach((value, id) => {
            value.addEventListener('click', () => {
                value.classList.add(styles.category_link_choose);   

                li.forEach((value, index) => {
                    if(index != id) {
                        value.classList.remove(styles.category_link_choose); 
                    }
                })
            })
        })
        
    }, [])

    return (
        <div className={styles.category}>
            <div className={styles.container}>
                <h2 className={styles.category_title} >Электросамокаты</h2>
                <ul className={styles.category_links_container} >
                    {data && data.map(value => {
                        return (
                            <li id="li" className={styles.category_link} key={value.id}>{value.title}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default CATEGORY; 