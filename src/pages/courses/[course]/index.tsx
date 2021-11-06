import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next'
import axios from 'axios'
import {memo} from 'react'
import {ParsedUrlQuery} from 'querystring'
import {TopLevelCategory} from 'common/context/AppContext'
import {useRouter} from 'next/dist/client/router'
import {withLayout} from 'Layout/AppLayout'

type MenuItem = {
  _id: {secondCategory: string}
  pages: [{
    alias: string
    title: string
    _id: string
    category: string
  }]
}

type Advantage = {
  _id: string
  title: string
  description: string
}

type hhData = {
  _id: string
  count: number
  juniorSalary: number
  middleSalary: number
  seniorSalary: number
  updatedAt: Date
}

type PageType = {
  tags: string[]
  _id: string
  secondCategory: string
  alias: string
  title: string
  category: string
  seoText: string
  tagsTitle: string
  metaTitle: string
  metaDescription: string
  firstCategory: TopLevelCategory
  advantages: Advantage[]
  createdAt: Date
  updatedAt: Date
  __v: number
  hh: hhData
  qas: [{
      question: string,
      answer: string
  }]
}

type ProductType = {
  _id: string
  categories: string[]
  tags: string[]
  title: string
  image: string
  description: string
  link: string
  price: number
  credit: number
  oldPrice: number
  characteristics: [{
    value: string
    name: string
  }]
  advantages: string
  initialRating: number
  createdAt: Date
  updatedAt: Date
  __v: number
  html: string
  reviews: ReviewType[]
  reviewCount: number
  reviewAvg?: number
}

type ReviewType = {
  _id: string
  name: string
  title: string
  description: string
  rating: number
  createdAt: Date
}

type CourseProps = {
  menu: MenuItem[]
  page: PageType
  products: ProductType[]
  firstCategory: number



}

export const Course = memo(function Course(props: CourseProps) {
  const {query} = useRouter()
  return <div>
        <b>{query.course}</b>
        Count: {props.products.map(product => <div key={product._id}>{product.title}  </div>)}
      </div>
})

export default withLayout(Course)


export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const firstCategory = 0

  if(!params){
    return {
      notFound: true,
    }
  }

  const {data: menu} = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find',
    {firstCategory: firstCategory},
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
      firstCategory,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const firstCategory = 0

  const {data: menu} = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find',
    {firstCategory: firstCategory},
  )

  return {
    paths   : menu.flatMap(m => m.pages.map(page => '/courses/' + page.alias)),
    fallback: true,
  }
}
