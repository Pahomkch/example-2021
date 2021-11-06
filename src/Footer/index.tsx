import dayjs from 'dayjs'
import {memo} from 'react'
import styles from './index.module.css'

export const Footer = memo(function Footer() {
  return <div className={styles.footer}>
    <p>Courselocator © 2020-{dayjs().format('YYYY')} Все права защищены</p>
    <a href="#">Пользовательское соглашение</a>
    <a href="#">Политика конфиденциальности</a>
  </div>
})
