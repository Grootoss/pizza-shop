import styles from './Footer.mobile.module.css'

const groups = [
  [
    {
      title: 'Home',
      links: ['To Order', 'About us', 'Events', 'Menu'],
    },
    {
      title: 'Events',
      links: ['3 Pizza 1 Free Coffee', '2 Pizza for 1 Price', 'Kitchen Tour'],
    },
  ],
  [
    {
      title: 'Menu',
      links: ['Show All', 'Seaproducts', 'Vegan', 'Meat'],
    },
    {
      title: 'About Us',
      links: ['Our History', 'Why We?'],
    },
  ],
]

const socials = [
  { label: 'Instagram', src: '/images/social-insta.svg' },
  { label: 'Twitter', src: '/images/social-twitter.svg' },
  { label: 'Facebook', src: '/images/social-facebook.svg' },
]

export function MobileFooter() {
  return (
    <footer className={styles.footer}>
      <a className={styles.logo} href="/">
        pizzashop
      </a>
      {groups.map((group) => (
        <div className={styles.columns} key={group[0].title}>
          {group.map((column) => (
            <div className={styles.column} key={column.title}>
              <a className={styles.columnTitle} href="#">
                {column.title}
              </a>
              {column.links.map((link) => (
                <a className={styles.link} href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      ))}
      <div className={styles.bottom}>
        <a className={styles.phone} href="tel:+70000000000">
          +7 (000) 000-00-00
        </a>
        <div className={styles.social}>
          {socials.map((item) => (
            <a href="#" key={item.label} aria-label={item.label}>
              <img src={item.src} alt="" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
