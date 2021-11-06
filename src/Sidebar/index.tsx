import {memo, MouseEventHandler, useContext, useState} from 'react'
import {AppContext} from 'common/context/AppContext'
import BookIcon from './assets/icon/books.svg'
import cn from 'classnames'
import CourseIcon from './assets/icon/hat.svg'
import Link from 'next/link'
import ProductIcon from './assets/icon/product.svg'
import ServiceIcon from './assets/icon/services.svg'
import styles from './index.module.css'
import {useRouter} from 'next/dist/client/router'

const TopMenuItem = [
  {route: '/courses', title: 'Курсы', icon: <CourseIcon />},
  {route: '/books', title: 'Книги', icon: <BookIcon />},
  {route: '/products', title: 'Продукты', icon: <ProductIcon />},
  {route: '/services', title: 'Сервисы', icon: <ServiceIcon />},
]

export const Sidebar = memo(function Sidebar() {
  const {menu, firstCategory} = useContext(AppContext)
  const router = useRouter()
  const [openCategory, setOpenCategory] = useState<Array<string>>([])

  return <div className={styles.sidebar}>

    {/* First level */}
    {TopMenuItem.map((item, topIndex) => <div key={item.route} className={styles.topMenuItem}>
      <div className={cn(styles.topMenuItem, {[styles.active]: router.pathname.includes(item.route)})}>
        {item.icon}

        <Link href={item.route}>
          <a className={cn(styles.title, {[styles.active]: router.pathname.includes(item.route)})}>{item.title}</a>
        </Link>
      </div>

      {/* TODO Fix menu item when i take data for books, products and services */}
      {/* Second level */}
      {(router.pathname.includes(item.route) && menu) && menu.map(menuItem => <div
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
