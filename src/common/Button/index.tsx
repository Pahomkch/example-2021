import {ButtonHTMLAttributes, DetailedHTMLProps, memo} from 'react'
import ArrowIcon from './arrow.svg'
import cn from 'classnames'
import styles from './index.module.css'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  appearance: 'primary' | 'ghost'
  arrow?: 'right' | 'down'
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = memo(function Button({appearance, children, className, ...props}: ButtonProps) {
  return <button
    className={cn(
      styles.button,
      className,

    {
      [styles.primary]: appearance === 'primary',
      [styles.ghost]  : appearance === 'ghost',
    },
    )}

    {...props}
  >
    {children}
    {props.arrow && <ArrowIcon className={cn(styles.arrow, {[styles.down]: props.arrow === 'down'})} />}
  </button>
})
