import {memo, useContext, useState} from 'react'
import {AppContext} from 'common/context/AppContext'
import cn from 'classnames'
import Link from 'next/link'
import styles from './index.module.css'
import {TopMenuItem} from 'helpers'
import {useRouter} from 'next/dist/client/router'

export const Sidebar = memo(function Sidebar() {
  const {menu} = useContext(AppContext)
  const router = useRouter()
  const [openCategory, setOpenCategory] = useState<Array<string>>([])

  return <div className={styles.sidebar}>

    {/* First level */}
    {TopMenuItem.map(item => <div key={item.route} className={styles.topMenuItem}>
      <div className={cn(styles.topMenuItem, {[styles.active]: router.asPath.includes(item.route)})}>
        {item.icon}

        <Link href={item.route}>
          <a className={cn(styles.title, {[styles.active]: router.asPath.includes(item.route)})}>{item.title}</a>
        </Link>
      </div>

      {/* TODO Fix menu item when i take data for books, products and services */}
      {/* Second level */}
      {(router.asPath.includes(item.route) && menu) && menu.map(menuItem => <div
          className={styles.secondMenuItem}
          key={menuItem._id.secondCategory}
        >
        <button
          className={cn(styles.subtitle, styles.btn)}

          onClick={() => setOpenCategory(
            prev => prev.includes(menuItem._id.secondCategory) ?
            prev.filter(item => item !== menuItem._id.secondCategory) :
            [...prev, menuItem._id.secondCategory],
          )}
        >
          {menuItem._id.secondCategory}
        </button>

        <div
          className={cn(
            styles.listCategoryCourses,
            {[styles.openCategoryCourses]: openCategory.includes(menuItem._id.secondCategory)},
          )}
        >

          {/* Third level */}
          {menuItem.pages.map(page => <Link
            key={page.alias}
            href={'/courses/' + page.alias}
          >
            <a className={styles.thirdMenuItem} >
              {page.title}
            </a>
          </Link>)}
        </div>
      </div>)}
    </div>)}

  </div>
})
