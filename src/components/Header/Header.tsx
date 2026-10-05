import styles from './Header.module.css'
import { MobileHeader } from './Header.mobile'

const links = [
  { label: 'Home', href: '/', active: true },
  { label: 'Menu', href: '#' },
  { label: 'Events', href: '#' },
  { label: 'About us', href: '#' },
]

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <a className={styles.logo} href="/">
          pizzashop
        </a>
        <nav className={styles.nav}>
          {links.map((link) => (
            <a
              className={link.active ? styles.linkActive : styles.link}
              href={link.href}
              key={link.label}
            >
              {link.label}
              {link.active ? <span className={styles.dot} /> : null}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <button className={styles.login} type="button">
            Log in
          </button>
          <button className={styles.cart} type="button" aria-label="Корзина">
            <img src="/images/pocket-mobile.svg" alt="" />
          </button>
        </div>
      </header>
      <MobileHeader />
    </>
  )
}
