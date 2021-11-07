import {TopLevelCategory} from 'helpers'

export type MenuItem = {
  _id: {secondCategory: string}
  pages: [{
    alias: string
    title: string
    _id: string
    category: string
  }]
}

type IndexProps = {
  menu: MenuItem[]
  firstCategory: TopLevelCategory
}

export function Index(props: IndexProps): JSX.Element {
  return <div>
      Select one of sidebar category
    </div>
}
