import { FC } from 'react'
import styles from "./index.module.scss";

import APPLEPAY from "../../../assets/icons/applepay.png";
import GOOGLEPAY from "../../../assets/icons/googlepay.png";
import VISA from "../../../assets/icons/visa.png";
import MASTERCARD from "../../../assets/icons/mastercard.png";
import MASTERCARD2 from "../../../assets/icons/mastercard2.png";
import WEBMONEY from "../../../assets/icons/webmoney.png";
import QIWI from "../../../assets/icons/qiwi.png";

import VIBER from "../../../assets/icons/viber.png";
import WHATSAPP from "../../../assets/icons/whatsapp.png";
import TELEGRAM from "../../../assets/icons/telegram.png";

const PAY: FC = () => {

    const paymentData = [
        {
            id: 1,
            img: GOOGLEPAY
        },
        {
            id: 2,
            img: APPLEPAY
        }, {
            id: 3,
            img: VISA
        },
        {
            id: 4,
            img: MASTERCARD
        },
        {
            id: 5,
            img: MASTERCARD2
        },
        {
            id: 6,
            img: WEBMONEY
        },
        {
            id: 7,
            img: QIWI
        },
    ]

    return (
        <div className={styles.footer_pay}>

            <div className={styles.footer_pay_documents}>
                <p className={styles.footer_documents_names}>Реквизиты</p>
                <p className={styles.footer_documents_names}>Политика конфиденциальности</p>
            </div>

            <div className={styles.footer_talk} >
                <div className={styles.footer_payments} >
                    {paymentData && paymentData.map(value => {
                        return (
                            <img key={value.id} className={styles.footer_payment_method} src={value.img} />
                        )
                    })}

                </div>

                <div className={styles.footer_chat_container}>
                    <p className={styles.footer_chat_title}>Online чат:</p>

                    <div className={styles.footer_chat} >
                        <img className={styles.footer_chat_img} src={VIBER} alt="" />
                        <img className={styles.footer_chat_img} src={WHATSAPP} alt="" />
                        <img className={styles.footer_chat_img} src={TELEGRAM} alt="" />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PAY