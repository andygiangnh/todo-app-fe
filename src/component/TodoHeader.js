import React from 'react'

export default function TodoHeader({header}) {
  return (
    <div class="flow-right controls">
      <span>Item count: {header.totalCount}</span>
      <span>unchecked count: {header.uncheckedCount}</span>
    </div>
  )
}