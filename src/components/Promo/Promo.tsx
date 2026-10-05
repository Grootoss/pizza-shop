import styles from './Promo.module.css'
import { MobilePromo } from './Promo.mobile'

export function Promo() {
  return (
    <>
      <section className={styles.promo}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>
              The Fastest
              <img
                className={styles.arrow}
                src="/images/arrow-right.png"
                alt=""
              />
            </span>
            <span>
              Pizza{' '}
              <img
                className={styles.bolt}
                src="/images/lighting-mobile.svg"
                alt=""
              />{' '}
              Delivery
            </span>
          </h1>
          <p className={styles.text}>
            We will deliver juicy pizza for your family in 30 minutes, if the
            courier is late - pizza is free!
          </p>
          <p className={styles.caption}>Cooking process:</p>
          <div className={styles.video}>
            <img
              className={styles.poster}
              src="/images/promo-product-mobile.png"
              alt=""
            />
            <button className={styles.play} type="button" aria-label="Play">
              <img src="/images/play-mobile.png" alt="" />
            </button>
          </div>
          <div className={styles.actions}>
            <button className={styles.order} type="button">
              To order
            </button>
            <button className={styles.menuButton} type="button">
              Pizza-Menu
            </button>
          </div>
        </div>
        <img className={styles.hero} src="/images/promo-desktop.png" alt="" />
        <img className={styles.guide} src="/images/arrow-down.png" alt="" />
      </section>
      <MobilePromo />
    </>
  )
}
