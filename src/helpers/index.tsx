import BookIcon from './assets/icon/books.svg'
import CourseIcon from './assets/icon/hat.svg'
import ProductIcon from './assets/icon/product.svg'
import ServiceIcon from './assets/icon/services.svg'

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products
}

export const TopMenuItem = [
  {route: '/courses', title: 'Курсы', icon: <CourseIcon />, id: TopLevelCategory.Courses},
  {route: '/books', title: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books},
  {route: '/products', title: 'Продукты', icon: <ProductIcon />, id: TopLevelCategory.Products},
  {route: '/services', title: 'Сервисы', icon: <ServiceIcon />, id: TopLevelCategory.Services},
]
