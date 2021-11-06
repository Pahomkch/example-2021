import {memo} from 'react'
import cn from 'classnames'
import styles from './index.module.css'

type ParagraphProps = {
  children: React.ReactNode
  className?: string
  fontSize?: 's' | 'l'
} & React.HTMLAttributes<HTMLParagraphElement>

export const Paragraph = memo(function Paragraph({children, className, ...props}: ParagraphProps) {
  return <p
    className={cn(
      styles.paragraph,
      className,

    {
      [styles.medium]: !props.fontSize,
      [styles.small] : props.fontSize === 's',
      [styles.large] : props.fontSize === 'l',
    },
    )}

    {...props}
  >
    {children}
  </p>
})
