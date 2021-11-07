import BookIcon from './assets/icon/books.svg'
import CourseIcon from './assets/icon/hat.svg'
import ProductIcon from './assets/icon/product.svg'
import ServiceIcon from './assets/icon/services.svg'

export enum TopLevelCategory {
  Courses,
  Books,
  Products,
  Services,
}

export const TopMenuItem = [
  {icon: <CourseIcon />, id: TopLevelCategory.Courses, route: '/courses', title: 'Курсы'},
  {icon: <BookIcon />, id: TopLevelCategory.Books, route: '/books', title: 'Книги'},
  {icon: <ProductIcon />, id: TopLevelCategory.Products, route: '/products', title: 'Продукты'},
  {icon: <ServiceIcon />, id: TopLevelCategory.Services, route: '/services', title: 'Сервисы'},
]
