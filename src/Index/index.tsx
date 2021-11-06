import axios from "axios"
import {useEffect} from "react"

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
  firstCategory: number
}

export function Index(props: IndexProps): JSX.Element {



  useEffect(() => {
    async function getMenu() {
      const {data: menu} = await axios.get<Array<MenuItem>>(
        String(process.env.NEXT_PUBLIC_LOCAL_DOMAIN) + 'api/courses',
      )

      console.log(menu);
    }

    getMenu()

  }, [])


  return <div>
      there place for list all links
    </div>
}
