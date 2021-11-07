import {GetStaticPaths, GetStaticProps} from 'next'
import axios from 'axios'
import {memo} from 'react'
import {MenuItem} from 'types'
import {TopMenuItem} from 'helpers'
import {withLayout} from 'Layout/AppLayout'

type TypeProps = {
  menu: MenuItem[]
  firstCategory: number
  type: string
}

const Type = memo(function Type(props: TypeProps) {

  return <div className="grid">
    Select some {props.type}
  </div>
})

export default withLayout(Type)

export const getStaticProps: GetStaticProps = async ({params}) => {

  if(!params?.type) {
    return {notFound: true}
  }

  const menuItem = TopMenuItem.find(item => item.route === `/${params.type}`)

  const {data: menu} = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find',
    {firstCategory: menuItem?.id},
  )

  return {
    props: {
      firstCategory: menuItem?.id,
      menu,
      type         : params?.type,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: true,
    paths   : TopMenuItem.map(menu => menu.route),
  }
}
