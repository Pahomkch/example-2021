import {memo} from 'react'
import styles from './index.module.css'

type PropsType = {
  children: React.ReactNode
  tag?: 'h2' | 'h3'
}

export const Title = memo(function Title(props: PropsType) {

  if(props.tag === 'h2') {
    return <h2 className={styles.h2}>{props.children}</h2>
  }

  if(props.tag === 'h3') {
    return <h3 className={styles.h3}>{props.children}</h3>
  }

  return <h1 className={styles.h1}>{props.children}</h1>
})
