import styles from './Promo.mobile.module.css'

export function MobilePromo() {
  return (
    <section className={styles.promo}>
      <img className={styles.hero} src="/images/promo-mobile.png" alt="" />
      <h1 className={styles.title}>
        The Fastest
        <br />
        Pizza{' '}
        <img
          className={styles.bolt}
          src="/images/lighting-mobile.svg"
          alt=""
        />{' '}
        Delivery
      </h1>
      <p className={styles.text}>
        We will deliver juicy pizza for your family in 30 minutes, if the
        courier is late - pizza is free!
      </p>
      <div className={styles.actions}>
        <button className={styles.order} type="button">
          To order
        </button>
        <button className={styles.menuButton} type="button">
          Pizza-Menu
        </button>
      </div>
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
    </section>
  )
}
