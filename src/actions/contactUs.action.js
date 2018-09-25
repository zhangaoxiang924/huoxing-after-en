/**
 * Author：tantingting
 * Time：2017/9/26
 * Description：Description
 */

import {axiosAjax} from '../public/index'
import {CONTACTUS, SELECTEDDATA} from '../constants/index'
import { message } from 'antd'

// 帖子列表
export const getContactUsList = (type, sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/contact/list', !sendData ? {} : sendData, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addContactUsData({'list': actionData.inforList}))
                dispatch(setPageData({'totalCount': actionData.recordCount, 'pageSize': actionData.pageSize || 20, 'currPage': actionData.currentPage}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

// 选中数据
export const selectedData = (data) => {
    return {type: SELECTEDDATA, data}
}

// 帖子详情
export const getContactUsItemInfo = (sendData, fn) => {
    return (dispatch) => {
        axiosAjax('post', '/ad/getbyid', {...sendData}, function (res) {
            if (res.code === 1) {
                const actionData = res.obj
                dispatch(addContactUsData({'info': actionData}))
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(res.msg)
            }
        })
    }
}

export const addContactUsData = (data) => {
    return {type: CONTACTUS.ADD_DATA, data}
}

export const addContactUsQuery = (data) => {
    return {type: CONTACTUS.ADD_QUERY, data}
}

export const delContactUsData = (index) => {
    return {type: CONTACTUS.DEL_LIST_ITEM, index}
}

export const delReplyList = (index) => {
    return {type: CONTACTUS.DEL_REPLY_LIST, index}
}

export const setSearchQuery = (data) => {
    return {type: CONTACTUS.SET_SEARCH_QUERY, data}
}

export const setFilterData = (data) => {
    return {type: CONTACTUS.SET_FILTER_DATA, data}
}

export const setPageData = (data) => {
    return {type: CONTACTUS.SET_PAGE_DATA, data}
}
