import cn from 'classnames'
import styles from './index.module.css'
import {memo} from 'react'

type TagProps = {
  children: React.ReactNode
  className?: string
  size?: 's'
  color?: 'green' | 'primary' | 'red'
  href?: string
} & React.HTMLAttributes<HTMLDivElement>

export const Tag = memo(function Tag({children, className, ...props}: TagProps) {
  return <div
    className={cn(
      styles.tag,
      className,

    {
      [styles.small]  : props.size === 's',
      [styles.green]  : props.color === 'green',
      [styles.primary]: props.color === 'primary',
      [styles.red]    : props.color === 'red',
    },
    )}

    {...props}
  >
    {props.href ? <a href={props.href}>{children}</a> : children}
  </div>
})
