import {MenuItem} from 'types'
import {TopLevelCategory} from 'helpers'

type IndexProps = {
  menu: MenuItem[]
  firstCategory: TopLevelCategory
}

export function Index(props: IndexProps): JSX.Element {
  return <div>
      Select one of sidebar category
    </div>
}
