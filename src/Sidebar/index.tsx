import Logo from 'common/assets/logo.svg'
import {memo} from 'react'
import {Menu} from 'Menu'
import {Search} from 'Search'
import styles from './index.module.css'

export const Sidebar = memo(function Sidebar() {

  return <div className={styles.sidebar}>
    <Logo />
    <Search />
    <Menu />


  </div>
})
