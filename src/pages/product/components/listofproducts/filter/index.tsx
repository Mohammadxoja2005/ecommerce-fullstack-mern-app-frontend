import { FC, useEffect } from 'react';
// styles
import styles from "./index.module.scss";
// images 
import CHECK from "../../../../../assets/icons/check.png";
// fetch 
import FETCH from '../../../../../utils/fetch';

const FILTER: FC = (): any => {
    const data: any = FETCH.GET(`${import.meta.env.VITE_URL}/operations/operations`);

    const filterData: Array<{ id: number, name: string, arrOfCategory: Array<any> }> = [
        {
            id: 1,
            name: "Тип",
            arrOfCategory: data.getAllTypes
        },
        {
            id: 2,
            name: "Для кого",
            arrOfCategory: data.getAllForWhos
        },
        {
            id: 3,
            name: "Вес",
            arrOfCategory: data.getAllWeights
        }
    ]

    useEffect(() => {
        const checkBox: any = document.querySelectorAll('[data-name="checkbox"]');
        const img: any = document.querySelectorAll('[data-img="img"]');
        const length: number = checkBox.length;

        for (let i = 0; i < length; ++i) {
            img[i].style.display = "none";

            checkBox[i].addEventListener('click', () => {
                if (img[i].style.display == "none") {
                    img[i].style.display = "block";
                } else if (img[i].style.display == "block") {
                    img[i].style.display = "none";
                }
            })
        }

    }, [data])

    return (
        <div className={styles.filter}>
            <div className={styles.filter_price}>
                <h3 className={styles.filter_name}>Цена</h3>

                <div>
                    <input type="range" min="0" max="300" value="100" />
                </div>

                <div className={styles.filter_input_container}>
                    <input type="number" placeholder="0" className={styles.filter_input_price} />
                    <div className={styles.filter_line}></div>
                    <input type="number" placeholder="55000" className={styles.filter_input_price} />
                </div>
            </div>

            {filterData && filterData.map(v1 => {
                return (
                    <div key={v1.id} className={styles.filter_category}>
                        <h4 className={styles.filter_name}>{v1.name}</h4>

                        {v1.arrOfCategory && v1.arrOfCategory.map(v2 => {
                            return (
                                <div key={v2.id} className={styles.filter_category_container}>
                                    <div data-name="checkbox" className={styles.filter_category_checkbox}>
                                        <img data-img="img" className={styles.filter_img} src={CHECK} alt="" />
                                    </div>

                                    <div className={styles.filter_category_title}>{v2.title}</div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default FILTER;