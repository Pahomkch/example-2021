import axios from 'axios'
import {GetStaticProps} from 'next'
import {memo} from 'react'
import {MenuItem} from 'Index'
import {withLayout} from 'Layout/AppLayout'

const BooksIndex = memo(function BooksIndex() {

  return <div className="grid">
    Select book
  </div>
})

export default withLayout(BooksIndex)


export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0

  const {data: menu} = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find',
    {firstCategory: firstCategory},
  )

  return {
    props: {
      menu,
      firstCategory,
    },
  }

}
