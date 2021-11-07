import {createContext, PropsWithChildren, useState} from 'react'
import {MenuItem} from 'types'
import {TopLevelCategory} from 'helpers'

export type AppContextType = {
  firstCategory: TopLevelCategory
  menu: MenuItem[]
  setMenu?: (newMenu: MenuItem[]) => void
}

export const AppContext = createContext<AppContextType>({
  firstCategory: TopLevelCategory.Courses,
  menu         : [],
})

export const AppContextProvider = ({children, menu, firstCategory}: PropsWithChildren<AppContextType>) => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu)

  //TODO What is different between setMenuState and function below. May be its mistake and pass just setMenuState
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu)
  }

  return <AppContext.Provider value={{firstCategory, menu: menuState, setMenu}}>
    {children}
  </AppContext.Provider>
}
