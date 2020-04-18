import React from 'react'
import { connect } from 'react-redux'
import { getAllTodosCount, getUncheckedTodosCount } from '../redux/selectors'

const TodoHeader = ({ totalCount, uncheckedCount }) => {
  return (
    <div className="flow-right controls">
      <span>Item count: { totalCount }</span>
      <span>unchecked count: { uncheckedCount }</span>
    </div>
  )
}

const mapStateToProps = state => {
    return { 
        totalCount: getAllTodosCount(state), 
        uncheckedCount: getUncheckedTodosCount(state)
    }
}

export default connect(mapStateToProps)(TodoHeader)