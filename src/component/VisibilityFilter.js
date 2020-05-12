import React from 'react'
import cx from "classnames";
import { VISIBILITY_FILTERS } from '../constants'
import { setFilter } from '../redux/actions'
import { connect } from 'react-redux'

function VisibilityFilter({activeFilter, setFilter}) {
    return (
        <div>
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey]
                return (
                    <span key= {filterKey} className={cx("filter", currentFilter === activeFilter && "filter--active")} 
                        onClick={() => {setFilter(currentFilter)}}>{currentFilter}</span>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilter.filter }
}

export default connect(mapStateToProps, { setFilter })(VisibilityFilter)
