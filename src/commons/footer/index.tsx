import { FC } from 'react'
import styles from "./index.module.scss";
import MEDIA from "./media";
import PAY from "./pay"; 

const FOOTER: FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer_info_container} >
                    <div className={styles.footer_links_container}>
                        <h2 className={styles.footer_title}>Каталог товаров</h2>
                        <ul className={styles.footer_links_container}>
                            <li className={styles.footer_link}>Электросамокаты</li>
                            <li className={styles.footer_link}>Электроскутеры</li>
                            <li className={styles.footer_link}>Электровелосипеды</li>
                            <li className={styles.footer_link}>Электровелосипеды</li>
                        </ul>
                    </div>

                    <div className={styles.footer_links_container} >
                        <h2 className={styles.footer_title}>Покупателям</h2>
                        <div className={styles.footer_links_controll} >
                            <ul className={styles.footer_links_container}>
                                <li className={styles.footer_link}>Сервисный центр</li>
                                <li className={styles.footer_link}>Доставка и оплата</li>
                                <li className={styles.footer_link}>Рассрочка</li>
                                <li className={styles.footer_link}>Тест-драйв</li>
                            </ul>
                            <ul className={styles.footer_links_container} id={styles.move}>
                                <li className={styles.footer_link}>Блог</li>
                                <li className={styles.footer_link}>Сотрудничество</li>
                                <li className={styles.footer_link}>Контакты</li>
                                <li className={styles.footer_link}>Акции</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.footer_links_container}>
                        <div className={styles.footer_contact_title_container}><h2 className={styles.footer_title}>Контакты</h2> <h2 className={styles.footer_contact_n_call} >Заказать звонок</h2></div>

                        <div className={styles.footer_contact_call}>

                            <div className={styles.footer_contact_info} >
                                <h3 className={styles.footer_contact_title} >Call-центр</h3>
                                <p className={styles.footer_contact_number} >+7 (800) 505-54-61</p>
                                <p className={styles.footer_contact_schedule} >Пн-Вс 10:00 - 20:00</p>
                            </div>

                            <div className={styles.footer_contact_info} >
                                <h3 className={styles.footer_contact_title}>Сервисный центр</h3>
                                <p className={styles.footer_contact_number}>+7 (499) 350-76-92</p>
                                <p className={styles.footer_contact_schedule}>Пн-Вс 10:00 - 20:00</p>
                            </div>

                        </div>

                        <div className={styles.footer_contact_add_container}>
                            <div className={styles.footer_contact_add}>
                                <p className={styles.footer_contact_info_add} >Магазин в Москв ул. Ткацкая, 5 стр. 16</p>
                                <p className={styles.footer_contact_phone}>+7 (499) 406 15 87</p>
                            </div>

                            <div className={styles.footer_contact_add}>
                                <p className={styles.footer_contact_info_add} >Магазин в Санкт-Петербурге ул. Фрунзе, 2</p>
                                <p className={styles.footer_contact_phone}>+7 (499) 406 15 87</p>
                            </div>

                            <div className={styles.footer_contact_add}>
                                <p className={styles.footer_contact_info_add} >Магазин в Краснодаре ул. Восточно-Кругликовская, 86</p>
                                <p className={styles.footer_contact_phone}>+ 7 (800) 505 54 61</p>
                            </div>
                        </div>

                    </div>
                </div>
                <MEDIA/> 
                <PAY/> 
            </div>
        </div>
    )
}

export default FOOTER; 