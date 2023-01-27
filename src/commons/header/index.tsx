import { FC, Fragment, useRef } from 'react'
// icons
import SEARCH from "../../assets/icons/search.png";
import LOGO from "../../assets/icons/logo.png";
import LIKE from "../../assets/icons/like.png";
import COMPARE from "../../assets/icons/compare.png";
import TRASH from "../../assets/icons/trash.png";
import DOWN from "../../assets/icons/down.png";
// components
import SOCIAL from './social';
import NAVBAR from './navbar';
import BASKET from './basket';
import CATALOG from './catalog';
// styles
import styles from "./index.module.scss";
// helpers
import USETOGGLE from '../../utils/useToggle';
import USEOUTSIDETOGGLE from '../../utils/useOutsideClick';

const HEADER: FC = () => {
  const [toggleBasket, setToggleBasket, onCloseBasket] = USETOGGLE();
  const [toggleCatalog, setToggleCatalog, onCloseCatalog] = USETOGGLE();
  const headerRef = useRef<HTMLDivElement>(null);

  USEOUTSIDETOGGLE(headerRef, onCloseBasket);
  USEOUTSIDETOGGLE(headerRef, onCloseCatalog);

  return (
    <Fragment>
      <SOCIAL />
      <div ref={headerRef} className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header_searchbar}>

            <img className={styles.header_logo} src={LOGO} alt="" />

            <div onClick={setToggleCatalog} className={styles.header_catalog}>
              <div className={styles.header_catalog_lines}></div>
              <p className={styles.header_catalog_title}>Каталог</p>
            </div>

            {toggleCatalog ? <CATALOG /> : null}

            <div className={styles.header_search_container}>
              <div className={styles.header_search_container_options}>

                <div className={styles.header_search_options_element} >
                  <p className={styles.header_option_main} >Везде</p>
                  <img className={styles.header_option_img} src={DOWN} alt="" />
                </div>

              </div>

              <input type="text" placeholder='Искать самокат KUGO' className={styles.header_search} />

              <div className={styles.header_searchbtn}>
                <img className={styles.header_seatchbtn_img} src={SEARCH} alt="" />
              </div>
            </div>

          </div>

          <div className={styles.header_navigations}>
            <div className={styles.header_navigation_container}><img className={styles.header_navigators} src={COMPARE} alt="" /></div>
            <div className={styles.header_navigation_container}><img className={styles.header_navigators} src={LIKE} alt="" /></div>
            <div onClick={setToggleBasket} className={styles.header_navigation_container}><img className={styles.header_navigators} src={TRASH} alt="" /> <p className={styles.header_navigators_title} >Корзина</p></div>
          </div>

          {toggleBasket ? <BASKET /> : null}

        </div>
      </div>
      <NAVBAR />
    </Fragment>
  )
}

export default HEADER; 