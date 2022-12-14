import React from "react"
import classes from "./Paginator.module.css"

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={classes.pageList}>
        {
            pages.map(page => <span key={page} className={props.currentPage === page && classes.selectPage}
                onClick={() => { props.onPageChanged (page) }}>{page}-</span>)
        }

    </div>

}

export default Paginator;