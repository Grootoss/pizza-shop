import { useState } from 'react'
import styles from './Menu.module.css'

const filling =
  'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat.'

const sizes = [25, 30, 35]

type Pizza = {
  name: string
  price: string
  image: string
}

const pizzasBeforePopular: Pizza[] = [
  {
    name: 'Italian',
    price: '8,35 $',
    image: '/images/pizza-italian-desktop.jpg',
  },
  {
    name: 'Venecia',
    price: '7,35 $',
    image: '/images/pizza-venecia-desktop.jpg',
  },
  { name: 'Meat', price: '9,35 $', image: '/images/pizza-meat-desktop.jpg' },
  {
    name: 'Cheese',
    price: '8,35 $',
    image: '/images/pizza-cheese-desktop.jpg',
  },
]

const pizzasAfterPopular: Pizza[] = [
  {
    name: 'Argentina',
    price: '7,35 $',
    image: '/images/pizza-argentina-desktop.jpg',
  },
  {
    name: 'Gribnaya',
    price: '6,35 $',
    image: '/images/pizza-gribnaya-desktop.jpg',
  },
  {
    name: 'Tomato',
    price: '7,35 $',
    image: '/images/pizza-tomato-desktop.jpg',
  },
  {
    name: 'Italian x2',
    price: '8,35 $',
    image: '/images/pizza-italianx2-desktop.jpg',
  },
]

function PizzaCard({ pizza }: { pizza: Pizza }) {
  const [size, setSize] = useState(30)
  const [quantity, setQuantity] = useState(1)

  return (
    <article className={styles.card}>
      <div className={styles.photo}>
        <img src={pizza.image} alt="" />
      </div>
      <h3 className={styles.name}>{pizza.name}</h3>
      <p className={styles.filling}>{filling}</p>
      <div className={styles.sizes}>
        {sizes.map((item) => (
          <button
            key={item}
            className={item === size ? styles.sizeActive : styles.size}
            type="button"
            onClick={() => setSize(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <button className={styles.ingredients} type="button">
        + Ingredients
      </button>
      <div className={styles.purchase}>
        <p className={styles.price}>{pizza.price}</p>
        <div className={styles.quantity}>
          <button
            className={styles.minus}
            type="button"
            aria-label="Decrease"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
          >
            −
          </button>
          <span className={styles.count}>{quantity}</span>
          <button
            className={styles.plus}
            type="button"
            aria-label="Increase"
            onClick={() => setQuantity((value) => value + 1)}
          >
            +
          </button>
        </div>
      </div>
      <button className={styles.order} type="button">
        Order Now
      </button>
    </article>
  )
}

function PizzaGrid({ pizzas }: { pizzas: Pizza[] }) {
  return (
    <div className={styles.grid}>
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.name} pizza={pizza} />
      ))}
    </div>
  )
}

export function Menu() {
  return (
    <section className={styles.menu}>
      <h2 className={styles.title}>Menu</h2>
      <div className={styles.filters}>
        <button className={styles.filterActive} type="button">
          Show All
        </button>
        <button className={styles.filter} type="button">
          Meat
        </button>
        <button className={styles.filter} type="button">
          Vegetarian
        </button>
      </div>
      <div className={styles.categories}>
        <button className={styles.categoryActive} type="button">
          Sea products
        </button>
        <button className={styles.category} type="button">
          Mushroom
        </button>
      </div>
      <PizzaGrid pizzas={pizzasBeforePopular} />
      <div className={styles.popular}>
        <div className={styles.banner}>
          <p className={styles.popularTitle}>MOST POPULAR PIZZA</p>
        </div>
      </div>
      <PizzaGrid pizzas={pizzasAfterPopular} />
    </section>
  )
}
