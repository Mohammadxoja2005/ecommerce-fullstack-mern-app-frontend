import { FC } from 'react'
// styles 
import styles from "./index.module.scss";
// images
import HOME from "../../assets/icons/home.png";
// react-router-dom
import { Link } from 'react-router-dom';

const PATH: FC = () => {
    const path_names = [
        {
            id: 1,
            name: 'Главная',
            link: "/"
        },
        {
            id: 2,
            name: "Продукты",
            link: "/product"
        }
    ]

    return (
        <div className={styles.path}>
            <div className={styles.container}>
                <img src={HOME} alt="" />
                <div className={styles.path_names_containers}>
                    {path_names && path_names.map(value => {
                        return (
                            <Link key={value.id} to={value.link} className={styles.path_names}>{value.name} /</Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PATH;