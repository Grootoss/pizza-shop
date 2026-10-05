import styles from './About.mobile.module.css'

export function MobileAbout() {
  return (
    <section className={styles.about}>
      <img
        className={styles.hero}
        src="/images/about-pizza-mobile.png"
        alt=""
      />
      <h2 className={styles.title}>About us</h2>
      <p className={styles.text}>
        In just a couple of years, we have opened 6 outlets in different cities:
        Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we plan to
        develop the network in other major cities of Russia.
      </p>
      <img
        className={styles.pizzas}
        src="/images/abount-five-pizza-mobile.png"
        alt=""
      />
      <p className={styles.note}>
        The kitchen of each point is at least: 400-500 sq. m. meters, hundreds
        of employees, smoothly performing work in order to receive / prepare /
        form / deliver customer orders on time.
      </p>
    </section>
  )
}
