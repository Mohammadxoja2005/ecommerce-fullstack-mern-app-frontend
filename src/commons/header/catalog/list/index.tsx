import { FC } from 'react'
import styles from "./index.module.scss";
// react-redux 
import { useSelector } from "react-redux";

const LIST: FC = () => {
  const category:
    Array<{ title: string, names: Array<string> }> = useSelector((state: any) => state.catalog.value);

  return (
    <div className={styles.list}>
      {category && category.map((v1, index) => {
        return (
          <div className={styles.list_category} key={index}>
            <h3 className={styles.list_category_title}>{v1.title}</h3>

            <div className={styles.list_category_names_container}>
              {v1.names && v1.names.map((v2, index) => {
                return (
                  <p key={index} className={styles.list_category_name}>{v2}</p>
                )
              })}
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default LIST; 