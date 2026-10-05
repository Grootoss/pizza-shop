import styles from './Header.mobile.module.css'

export function MobileHeader() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        pizzashop
      </a>
      <div className={styles.actions}>
        <button className={styles.cart} type="button" aria-label="Корзина">
          <img src="/images/pocket-mobile.svg" alt="" width={30} height={30} />
        </button>
        <button className={styles.menu} type="button" aria-label="Меню">
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
        </button>
      </div>
    </header>
  )
}
