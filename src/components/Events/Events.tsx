import styles from './Events.module.css'

const cards = [
  {
    title: 'HOW WE\nCOOKING',
    image: '/images/events-desktop-1.jpg',
    className: styles.cooking,
  },
  {
    title: 'OUR BLOG',
    image: '/images/events-desktop-2.jpg',
    className: styles.blog,
  },
  {
    title: 'TWO PIZZA\nFOR 1 PRICE',
    image: '/images/events-desktop-3.jpg',
    className: styles.two,
  },
  {
    title: 'KITCHEN\nTOUR',
    image: '/images/events-desktop-4.jpg',
    className: styles.kitchen,
  },
  {
    title: 'FREE COFFEE\nFOR 3 PIZZA',
    image: '/images/events-desktop-5.jpg',
    className: styles.coffeeCard,
  },
  {
    title: 'OUR\nINSTAGRAM',
    image: '/images/events-desktop-6.jpg',
    className: styles.instagram,
  },
  {
    title: 'WHERE ARE\nYOU CHOOSE\nUS?',
    image: '/images/events-desktop-7.jpg',
    className: styles.where,
  },
]

function Card({
  title,
  image,
  className,
}: {
  title: string
  image: string
  className: string
}) {
  return (
    <article className={`${styles.card} ${className}`}>
      <img src={image} alt="" />
      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <button className={styles.more} type="button">
          More
        </button>
      </div>
    </article>
  )
}

export function Events() {
  return (
    <section className={styles.events}>
      <div className={styles.top}>
        <Card {...cards[0]} />
        <Card {...cards[1]} />
        <div className={styles.intro}>
          <h2 className={styles.title}>Events</h2>
          <p className={styles.text}>
            There are regular events in our pizzeria that will allow you to eat
            delicious food for a lower price!
          </p>
        </div>
      </div>
      <div className={styles.pair}>
        <Card {...cards[2]} />
        <Card {...cards[3]} />
      </div>
      <div className={styles.bottom}>
        <Card {...cards[4]} />
        <Card {...cards[5]} />
        <Card {...cards[6]} />
      </div>
      <img className={styles.eggs} src="/images/eggs-bekon.png" alt="" />
      <img className={styles.burrito} src="/images/burito.png" alt="" />
      <img className={styles.cup} src="/images/cofee.png" alt="" />
    </section>
  )
}
