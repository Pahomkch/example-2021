import {AppContextProvider, AppContextType} from 'common/context/AppContext'
import {FunctionComponent, memo} from 'react'
import {Footer} from 'Footer'
import {Sidebar} from 'Sidebar'
import styles from './index.module.css'

const AppLayout = memo(function AppLayout(props: {
  children: React.ReactNode
}) {
  return <div className={styles.layout}>
    <header className={styles.header}>{<div
      style={{
        display       : 'grid',
        gridAutoFlow  : 'column',
        justifyContent: 'start',
        alignItems    : 'end',
        columnGap     : '10px',
        background    : '#656352',
      }}
    >
      Header feature!
      </div>}
    </header>

    <aside className={styles.sidebar}>
      <Sidebar />
    </aside>

    <main className={styles.main}>{props.children}</main>

    <footer className={styles.footer}>
      <Footer />
    </footer>
  </div>
})


export const withLayout =<T extends Record<string, unknown> & AppContextType>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T) {
    return <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
      <AppLayout>
        <Component {...props} />
      </AppLayout>
    </AppContextProvider>
  }
}
