import { FC } from 'react';
import styles from "./index.module.scss";
import LOGO from "../../../assets/icons/logo.png";
import PLAYMARKET from "../../../assets/icons/playmarket.png";
import APPSTORE from "../../../assets/icons/appstore.png";
import VK from "../../../assets/icons/vk.png";
import INSTAGRAM from "../../../assets/icons/instagram.png";
import YOUTUBE from "../../../assets/icons/youtube.png";
import TELEGRAM from "../../../assets/icons/tg.png";

const MEDIA: FC = () => {
    const socialData = [
        {
            id: 1, 
            title: "Вконтакте",
            amount: "3 300",
            img: <img src={VK} />,
        },
        {
            id: 2, 
            title: "Instagram",
            amount: "10 602",
            img: <img src={INSTAGRAM} />,
        },
        { 
            id: 3, 
            title: "YouTube",
            amount: "3 603",
            img: <img src={YOUTUBE} />,
        },
        {
            id: 4, 
            title: "Telegram",
            amount: "432",
            img: <img src={TELEGRAM} />,
        },
    ]

    return (
        <div className={styles.footer_media} >
            <div className={styles.footer_apps_overall}>
                <img src={LOGO} />

                <div className={styles.footer_media_markets} >
                    <img className={styles.footer_media_stores} src={PLAYMARKET} alt="" />
                    <img className={styles.footer_media_stores} src={APPSTORE} alt="" />
                </div>
            </div>

            <div className={styles.footer_social_media}>
                {socialData && socialData.map(value => {
                    return (
                        <div key={value.id} className={styles.footer_social_info_container}>
                            {value.img}

                            <div className={styles.footer_social_info} >
                                <h3 className={styles.footer_social_info_title}>{value.title}</h3>
                                <p className={styles.footer_social_info_num}>{value.amount}</p>
                            </div>

                        </div>
                    )
                })

                }
            </div>


        </div>
    )
}

export default MEDIA; 