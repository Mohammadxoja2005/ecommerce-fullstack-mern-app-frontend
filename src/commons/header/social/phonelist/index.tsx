import { FC } from 'react'
import styles from "./index.module.scss";

const PHONELIST: FC = () => {
    const data = [
        {
            id: 1,
            title: "Сервисный центр",
            phone: "+ 7 (499) 350 76 92",
            schedule: ""
        },
        {
            id: 2,
            title: "Оптовый отдел",
            phone: "+ 7 (499) 350 76 92",
            schedule: "пн-сб 10:00 - 19:00"
        },
        {
            id: 3,
            title: "Отдел рекламаций и претензий",
            phone: "+ 7 (499) 350 76 92",
            schedule: "пн-сб 10:00 - 19:00"
        }
    ]

    return (
        <div className={styles.phone_list}>
            {data.map((value: any) => {
                return (
                    <div className={styles.phone_list_container} key={value.id}>
                        <p className={styles.phone_list_title}>{value.title}</p>
                        <h3 className={styles.phone_list_phone}>{value.phone}</h3>
                        <p className={styles.phone_list_schedule}>{value.schedule}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PHONELIST; 