

import React from "react"
import { connect } from "react-redux";
import { User } from "../types/user";
import { paginate, page, setMaxPage, setMaxItems } from "../redux/actions/pagination";
import arrowLeft from "../assets/icons/back.svg"
import arrowRight from "../assets/icons/right-arrow.svg"

class Pagination extends React.Component<any> {

    componentDidMount = () => {
        const { currentPage } = this.props
        window.addEventListener("resize", (ev: any) => {
            this.setMaxItems(ev.target.innerWidth, currentPage)
        })
        this.setMaxItems(window.innerWidth, 1)
    }
    initPagination = () => {
        const {  users, maxItems, currentPage, dispatch } = this.props
        const newUsers = this.paginate(users, maxItems, currentPage)
        const maxP = Math.ceil(users.length / maxItems) || 2
        if (currentPage > maxP) {
            this.pageDown()
            return
        }
        dispatch(setMaxPage(maxP))
        dispatch(paginate(newUsers))
    }
    paginate = (users: User[], maxItems: number, currentPage: number) => {
        if (users.length === 0)
            return []
        const start = currentPage === 1 ? 0 : (currentPage - 1) * maxItems
        const end = start + maxItems > users.length ? users.length : start + maxItems
        return users.slice(start, end)
    }
    pageUp = () => {
        const { users, maxItems, currentPage, dispatch } = this.props
        dispatch(page(currentPage + 1))
        dispatch(paginate(this.paginate(users, maxItems, currentPage)))
        this.setMaxItems(window.innerWidth, currentPage + 1)

    }
    pageDown = () => {
        const { users, maxItems, currentPage, dispatch } = this.props
        dispatch(page(currentPage - 1))
        dispatch(paginate(this.paginate(users, maxItems, currentPage)))
        this.setMaxItems(window.innerWidth, currentPage - 1)
    }

    setMaxItems = (width: number, page: number) => {
        const { dispatch, maxItems } = this.props
        if (width > 1325) {
            if (maxItems !== 11 && page === 1)
                dispatch(setMaxItems(11))
            else if (maxItems !== 12 && page !== 1)
                dispatch(setMaxItems(12))
        }
        else if (width < 1325 && width > 1000) {
            if (maxItems !== 8 && page === 1)
                dispatch(setMaxItems(8))
            else if (maxItems !== 9 && page !== 1)
                dispatch(setMaxItems(9))
        }
        else if (width > 676 && width < 1000) {
            if (maxItems !== 5 && page === 1)
                dispatch(setMaxItems(5))
            else if (maxItems !== 6 && page !== 1)
                dispatch(setMaxItems(6))
        }
        else if (width < 676 && maxItems !== 7) {
            if (maxItems !== 7 && page === 1)
                dispatch(setMaxItems(7))
            else if (maxItems !== 8 && page !== 1)
                dispatch(setMaxItems(8))
        }
    }
    render() {
        const { currentPage, maxPage } = this.props
        this.initPagination()
        return (
            <div className="pagination">
                <span className="arrow arrow-left">
                    <button className="btn arrow-left__button" disabled={currentPage == 1} onClick={() => this.pageDown()}><img src={arrowLeft} alt="Arrow left"></img></button>
                </span>
                <span className="arrow arrow-right">
                    <button className="btn arrow-right__button" disabled={currentPage === maxPage} onClick={() => this.pageUp()}><img src={arrowRight} alt="Arrow right"></img></button>
                </span>
            </div>
        )
    }

}

const mapStateToProps = (state: any) => {
    return {
        currentPage: state.pagination.currentPage,
        maxItems: state.pagination.maxItems,
        maxPage: state.pagination.maxPage,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatch: dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)