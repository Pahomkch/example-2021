import {memo} from 'react'

export const Search = memo(function Search() {
  return <div>
    <input placeholder="search" readOnly />
  </div>
})
