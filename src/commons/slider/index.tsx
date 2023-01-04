import { FC, useRef, useState } from 'react'
import styles from "./index.module.scss";
import SCOOTER from "../../assets/images/scooter.png";
import ZEVS from "../../assets/icons/zevs.png";
import NEXT from "../../assets/icons/next.png";
import PREV from "../../assets/icons/prev.png";
import Carousel from 'nuka-carousel';

const SLIDER: FC = () => {
  let [current, setCurrent] = useState<number>(0);
  let [transformNumber, setTransformNumber] = useState<number>(0);
  // () => setCurrent(current == 0 ? current = 0 : current - 1) 
  // () => setCurrent(current == 2 ? current = 0 : current + 1)
  const container = useRef<HTMLDivElement>(null);
  // if(container.current != null) {
  //   console.log(container.current.clientWidth);  
  // }
  return (
    <div className={styles.slider}>
      <div className={styles.newclass}>
        {[1, 2, 3].slice(current, current + 1).map(value => {
          return (
            <div className={styles.slider_img_back} key={value} ref={container} style={{ transform: `translate3d(${transformNumber}px, 0, 0)` }}>
              <div className={styles.container}>

                <div className={styles.slider_info}>

                  <p className={styles.slider_info_not} >Новинка</p>
                  <h1 className={styles.slider_info_title} >Электросамокаты Kugoo Kirin от официального дилера</h1>
                  <p className={styles.slider_info_des} >с бесплатной доставкой по РФ от 1 дня</p>
                  <p className={styles.slider_info_btn} >Перейти в католог</p>

                  <div className={styles.slider_info_btn1}>
                    <div className={styles.slider_info_btn_container} onClick={() => setCurrent(current == 0 ? current = 0 : current - 1)}><img src={PREV} alt="" /></div>

                    <div className={styles.slider_info_pagination} >
                      <p className={styles.slider_info_pagination_num}>{value}</p>
                      <div className={styles.slider_info_pagination_line} ></div>
                      <p className={styles.slider_info_pagination_num}>3</p>
                    </div>

                    <div className={styles.slider_info_btn_container} onClick={() => setCurrent(current == 2 ? current = 0 : current + 1)}><img src={NEXT} alt="" /></div>
                  </div>

                </div>

                <div className={styles.slider_test_container}>

                  <div className={styles.slider_test_info}>
                    <img className={styles.slider_test_info_img} src={ZEVS} alt="" />
                    <p className={styles.slider_test_info_title} >Тест-драйв и обучение</p>
                  </div>

                  <div className={styles.slider_test_free}>Бесплатно</div>
                </div>

                <img className={styles.slider_img_img} src={SCOOTER} alt="" />

              </div>

            </div>
          )
        })

        }
      </div>
    </div>
  )
}

export default SLIDER; 