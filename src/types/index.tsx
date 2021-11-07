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

type ReviewType = {
  _id: string
  name: string
  title: string
  description: string
  rating: number
  createdAt: Date
}

export type PageType = {
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

export type ProductType = {
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
