import { User } from "../../types/user";

export const PAGINATE = "PAGINATE"
export const PAGE = "PAGE"
export const SET_MAX_PAGE = "SET_MAX_PAGE"
export const SET_MAX_ITEMS = "SET_MAX_ITEMS"

export const page = (currentPage: number) =>
    ({
        type: PAGE,
        payload: { currentPage: currentPage }
    })

export const paginate = (pageUser: User[]) =>
    ({
        type: PAGINATE,
        payload: { page_users: pageUser }
    })

export const setMaxPage = (maxPage: number) =>
    ({
        type: SET_MAX_PAGE,
        payload: { maxPage: maxPage }
    })
export const setMaxItems = (maxItems: number) =>
    ({
        type: SET_MAX_ITEMS,
        payload: { maxItems: maxItems }
    })
