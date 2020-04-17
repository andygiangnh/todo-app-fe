import React from 'react'
import cx from "classnames";
import { VISIBILITY_FILTERS } from '../constants'

export default function VisibilityFilter({activeFilter, onFilter}) {
    return (
        <div>
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey]
                return (
                <>
                    <span className={cx("filter", currentFilter === activeFilter && "filter--active")} 
                        onClick={() => {onFilter(currentFilter)}}>{currentFilter}</span>&nbsp;
                </>
                )
            })}
        </div>
    )
}
