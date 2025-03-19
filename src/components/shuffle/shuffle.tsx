import { useEffect, useRef } from 'react'
import styles from './index.module.css'
import ShuffleRandomText from './shuffle-text'
export default function ShuffleText () {
  const shuffleDOM = useRef(null)
  useEffect(() => {
    if (shuffleDOM.current) {
      const shuffle = new ShuffleRandomText(shuffleDOM.current)
      shuffle.start()
    }
  }, [])
  return <>
    <h2 className={styles.head} ref={shuffleDOM}>coding for fun!!!</h2>
  </>
}