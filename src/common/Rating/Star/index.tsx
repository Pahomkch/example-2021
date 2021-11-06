import {HTMLAttributes, memo} from 'react'
import cn from 'classnames'
import StarIcon from './start.svg'
import styles from './index.module.css'

type StarProps = {
  className?: string
  isFilledStar?: boolean
} & HTMLAttributes<HTMLOrSVGElement>

export const Star = memo(function Rating(props: StarProps) {
  return <StarIcon
    className={cn(
      props.className,

      {
        [styles.filled]: props.isFilledStar,
      },
    )}

    {...props}
  />
})
