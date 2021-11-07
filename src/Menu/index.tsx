import React, {memo, useContext, useState} from 'react'
import {TopLevelCategory, TopMenuItem} from 'helpers'
import {AppContext} from 'common/context/AppContext'
import cn from 'classnames'
import Link from 'next/link'
import {MenuItem} from 'Index'
import styles from './index.module.css'
import {useRouter} from 'next/dist/client/router'

export const Menu = memo(function Menu() {
  const router = useRouter()
  const {menu, firstCategory} = useContext(AppContext)
  const [openCategory, setOpenCategory] = useState<Array<string>>([])

  function renderFirstLevelMenu() {
    return <React.Fragment>
      {TopMenuItem.map(item => <div key={item.route} className={styles.topMenuItem}>
        <div className={cn(styles.topMenuItem, {[styles.active]: router.asPath.includes(item.route)})}>
          {item.icon}

          <Link href={item.route}>
            <a className={cn(styles.title, {[styles.active]: router.asPath.includes(item.route)})}>{item.title}</a>
          </Link>
        </div>
         {renderSecondLevelMenu(item.id)}
      </div>)}
    </React.Fragment>
  }

  function renderSecondLevelMenu(sectionId: number) {
    return <React.Fragment>
      {firstCategory === TopLevelCategory.Courses && menu.map(menuItem => <div
        className={cn(styles.secondMenuItem, {[styles.secondMenuItemOpen]: sectionId === firstCategory})}
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
      {renderThirdLevelMenu(menuItem)}
    </div>)}
    </React.Fragment>
  }

  function renderThirdLevelMenu(menuItem: MenuItem) {
    return <div
      className={cn(
        styles.listCategoryCourses,
        {[styles.openCategoryCourses]: openCategory.includes(menuItem._id.secondCategory)},
      )}
    >
    {menuItem.pages.map(page => <Link
      key={page.alias}
      href={'/courses/' + page.alias}
    >
      <a className={styles.thirdMenuItem} >
        {page.title}
      </a>
    </Link>)}
    </div>
  }

  return <React.Fragment>
    {renderFirstLevelMenu()}
  </React.Fragment>
})
