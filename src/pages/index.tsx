import {Index, MenuItem} from 'Index'
import axios from 'axios'
import {GetStaticProps} from 'next'
import {withLayout} from 'Layout/AppLayout'
export default withLayout(Index)

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0

  // const {data: menu} = await axios.post<MenuItem[]>(
  //   process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find',
  //   {firstCategory: firstCategory},
  // )

  const {data: menu} = await axios.get<Array<MenuItem>>(
    String(process.env.NEXT_PUBLIC_LOCAL_DOMAIN) + 'api/courses/',
  )

  return {
    props: {
      menu,
      firstCategory,
    },
  }
}
