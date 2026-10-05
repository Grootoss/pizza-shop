import styles from './About.module.css'
import { MobileAbout } from './About.mobile'

export function About() {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.copy}>
          <h2 className={styles.title}>About us</h2>
          <p className={styles.text}>
            In just a couple of years, we have opened 6 outlets in different
            cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future
            we plan to develop the network in other major cities of Russia.
          </p>
          <img
            className={styles.pizzas}
            src="/images/about-five-pizza-desktop.png"
            alt=""
          />
          <p className={styles.note}>
            The kitchen of each point is at least: 400-500 sq. m. meters,
            hundreds of employees, smoothly performing work in order to receive
            / prepare / form / deliver customer orders on time.
          </p>
        </div>
        <img className={styles.arrow} src="/images/arrow-right.png" alt="" />
        <img
          className={styles.hero}
          src="/images/about-pizza-desktop.png"
          alt=""
        />
      </section>
      <MobileAbout />
    </>
  )
}
