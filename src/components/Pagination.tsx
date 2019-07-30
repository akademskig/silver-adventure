

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
            this.setMaxItems(ev.target.innerWidth, ev.target.innerHeight, currentPage)
        })
        this.setMaxItems(window.innerWidth, window.innerHeight, 1)
    }

    componentWillUnmount = () => {
        const { currentPage } = this.props
        window.removeEventListener("resize", (ev: any) => {
            this.setMaxItems(ev.target.innerWidth, ev.target.innerHeight, currentPage)
        })
    }
    initPagination = () => {
        const { users, maxItems, currentPage, dispatch } = this.props
        const newUsers = this.paginate(users, maxItems, currentPage)
        const maxP = Math.ceil(users.length / maxItems) || 1
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
        this.setMaxItems(window.innerWidth, window.innerHeight, currentPage + 1)

    }

    pageDown = () => {
        const { users, maxItems, currentPage, dispatch } = this.props
        dispatch(page(currentPage - 1))
        dispatch(paginate(this.paginate(users, maxItems, currentPage)))
        this.setMaxItems(window.innerWidth, window.innerHeight, currentPage - 1)
    }

    /**
     * @memberof Pagination
     * @param width - screen width
     * @param height - screen height
     * @param page - page number
     * @returns void
     *  - calculates the number of cards displayed based on screen height and width
     */
    setMaxItems = (width: number, height: number, page: number) => {
        const { dispatch, maxItems } = this.props
        const modPage = page === 1 ? 1 : 0
        let modGrid = 0
        let modCardHeight = 160
        let topHeight = 340
        let bottomMargin = 50
        let mobileCardHeight = 60
        let desktopCardHeight = 150

        const getMaxItems = () => {
            return Math.floor((height - topHeight - bottomMargin) / modCardHeight) * modGrid - modPage
        }

        if (width < 676) {
            topHeight = 215
            modGrid = 1
            modCardHeight = mobileCardHeight + 10
        }
        else if (width > 676 && width < 1000) {
            modCardHeight = desktopCardHeight + (width * 0.015)
            modGrid = 2
        }
        else if (width > 1000 && width < 1325) {
            modCardHeight = desktopCardHeight + (width * 0.015)
            modGrid = 3
        }
        else if (width > 1325) {
            modCardHeight = desktopCardHeight + (width * 0.015)
            modGrid = 4
        }
        if (maxItems !== getMaxItems())
            dispatch(setMaxItems(getMaxItems()))
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