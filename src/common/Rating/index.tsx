import {HTMLAttributes, memo, useEffect, useState} from 'react'
import cn from 'classnames'
import {Star} from './Star'
import styles from './index.module.css'

type RatingProps = {
  className?: string
  rating: number
  isEditable?: boolean
  setRaiting?: (newRaiting: number) => void
} & HTMLAttributes<HTMLDivElement>

export const Rating = memo(function Rating(props: RatingProps) {
  const [currentRaiting, setCurrentRaiting] = useState(props.rating)

  useEffect(() => {
    setCurrentRaiting(props.rating)
  }, [props.rating])

  return <div
    onMouseLeave={() => props.isEditable && setCurrentRaiting(props.rating)}
    className={cn(props.className, styles.grid, {[styles.editable]: props.isEditable})}
  >
    {new Array(5).fill(null).map((_, idx) => <Star
      isFilledStar={Boolean(idx < currentRaiting)}
      key={idx}
      onClick={() => props.isEditable && props.setRaiting?.(idx + 1)}
      onMouseEnter={() => props.isEditable && setCurrentRaiting(idx + 1)}
      tabIndex={props.isEditable ? 0 : -1}
      onKeyDown={e => props.setRaiting && props.isEditable && e.code === 'Space' && props.setRaiting(idx + 1)}
    />)}
  </div>
})
