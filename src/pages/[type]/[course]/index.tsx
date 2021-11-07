import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next'
import {MenuItem, PageType, ProductType} from 'types'
import {TopLevelCategory, TopMenuItem} from 'helpers'
import axios from 'axios'
import {memo} from 'react'
import {ParsedUrlQuery} from 'querystring'
import {useRouter} from 'next/dist/client/router'
import {withLayout} from 'Layout/AppLayout'

type CourseProps = {
  menu: MenuItem[]
  page: PageType
  products: ProductType[]
  firstCategory: TopLevelCategory
}

export const Course = memo(function Course(props: CourseProps) {
  const {query} = useRouter()

  return <div>
    <div><b>{query.course}</b></div>
    {props.products.map(product => <div key={product._id}>{product.title}  </div>)}
  </div>
})

export default withLayout(Course)

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if(!params?.course || !params?.type){
    return {
      notFound: true,
    }
  }

  const menuItem = TopMenuItem.find(item => item.route === `/${params.type}`)

  const {data: menu} = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find',
    {firstCategory: menuItem?.id},
  )

  const {data: page} = await axios.get<PageType>(
    process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/byAlias/' + params.course,
  )

  const {data: products} = await axios.post<ProductType[]>(
    process.env.NEXT_PUBLIC_DOMAIN + 'api/product/find',
    {category: page.category, limit: 10},
  )

  return {
    props: {
      menu,
      page,
      products,
      firstCategory: menuItem?.id,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {

  let paths: Array<string> = []

  /* eslint-disable fp/no-loops */
  for (const menuItem of TopMenuItem) {
    const {data: menu} = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find',
      {firstCategory: menuItem.id},
    )

    paths = paths.concat(menu.flatMap(m => m.pages.map(page => `${menuItem.route}/${page.alias}`)))
  }

  return {
    paths   : paths,
    fallback: true,
  }
}
