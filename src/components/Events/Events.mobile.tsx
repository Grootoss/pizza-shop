import { useEffect, useRef } from 'react'
import styles from './Events.mobile.module.css'

const events = [
  { title: 'HOW WE\nCOOKING', image: '/images/events-mobile-1.jpg' },
  { title: 'OUR BLOG', image: '/images/events-mobile-2.jpg' },
  { title: 'TWO PIZZA\nFOR 1 PRICE', image: '/images/events-mobile-3.jpg' },
  { title: 'FREE COFFEE\nFOR 3 PIZZA', image: '/images/events-mobile-4.jpg' },
  { title: 'OUR\nINSTAGRAM', image: '/images/events-mobile-5.jpg' },
]

const rows = [
  [events[0], events[1], events[0], events[1]],
  [events[2], events[2]],
  [events[3], events[4], events[3], events[4]],
]

export function MobileEvents() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const drag = useRef({
    pointerId: -1,
    x: 0,
    scroll: 0,
    moved: false,
  })

  useEffect(() => {
    const node = scrollerRef.current
    if (!node) return

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
      event.preventDefault()
      node.scrollLeft += event.deltaY
    }

    node.addEventListener('wheel', onWheel, { passive: false })
    return () => node.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <section className={styles.events}>
      <h2 className={styles.title}>Events</h2>
      <p className={styles.text}>
        There are regular events in our pizzeria that will allow you to eat
        delicious food for a lower price!
      </p>
      <div
        className={styles.scroller}
        ref={scrollerRef}
        onPointerDown={(event) => {
          if (event.pointerType === 'touch' || event.button !== 0) return
          drag.current = {
            pointerId: event.pointerId,
            x: event.clientX,
            scroll: event.currentTarget.scrollLeft,
            moved: false,
          }
        }}
        onPointerMove={(event) => {
          const state = drag.current
          if (state.pointerId !== event.pointerId) return
          const distance = event.clientX - state.x
          if (!state.moved && Math.abs(distance) <= 4) return
          if (!state.moved) {
            state.moved = true
            event.currentTarget.setPointerCapture(event.pointerId)
          }
          event.currentTarget.scrollLeft = state.scroll - distance
        }}
        onPointerUp={(event) => {
          if (drag.current.pointerId !== event.pointerId) return
          drag.current.pointerId = -1
        }}
        onClickCapture={(event) => {
          if (!drag.current.moved) return
          event.preventDefault()
          event.stopPropagation()
          drag.current.moved = false
        }}
      >
        <div className={styles.track}>
          {rows.map((row, rowIndex) => (
            <div className={styles.row} key={rowIndex}>
              {row.map((event, index) => (
                <article
                  className={
                    rowIndex === 1
                      ? `${styles.card} ${styles.wide}`
                      : styles.card
                  }
                  key={`${event.image}-${index}`}
                >
                  <img src={event.image} alt="" />
                  <div className={styles.content}>
                    <h3 className={styles.cardTitle}>{event.title}</h3>
                    <button className={styles.more} type="button">
                      More
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
