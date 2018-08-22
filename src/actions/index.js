/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：index actions
 */

import { hashHistory } from 'react-router'
// import $ from 'jquery'
import Cookies from 'js-cookie'
import { axiosAjax, deleteCookies } from '../public/index'
import { message } from 'antd'

import {
    GAMELIST,
    BREADCRUMB,
    NAVIGATION,
    CHANNELLIST
} from '../constants/index'
// 登录
export const login = (sendData, fn) => {
    return (dispatch) => {
        // Cookies.set('loginStatus', true)
        // hashHistory.push('/')
        axiosAjax('post', '/account/editor/login', sendData, function (data) {
            // console.log(data)
            if (fn) {
                fn(data)
            }
            if (data.code === 1) {
                for (let key in data.obj) {
                    Cookies.set(`hx_${key}`, data.obj[key], {
                        expires: 30
                    })
                }
                Cookies.set('loginStatus', true)
                if (data.obj.role === 5) {
                    hashHistory.push('/marsTrip-list')
                } else {
                    hashHistory.push('/post-list')
                }
                message.success('登陆成功!')
            } else {
                message.error(data.msg)
            }
        })
    }
}

// 注销
export const logout = (sendData) => {
    return (dispatch) => {
        // Cookies.set('loginStatus', false)
        // message.success('已注销!')
        // hashHistory.push('/login')
        axiosAjax('post', '/account/editor/logout', sendData, function (data) {
            deleteCookies()
            Cookies.set('loginStatus', false)
            hashHistory.push('/login')
            if (data.code === 1) {
                message.success('已成功注销!')
            } else {
                message.success('已强制注销!')
            }
        })
    }
}

// 首页游戏列表
export const gameList = () => {
    return (dispatch) => {
        axiosAjax('GET', '/sysinfo/gamelist', {}, function (data) {
            if (data.status === 200) {
                const actionData = data.data
                dispatch({
                    type: GAMELIST,
                    actionData
                })
            } else {
                message.error(data.msg)
            }
        })
    }
}

export const breadcrumb = (arr) => {
    return {
        type: BREADCRUMB,
        arr
    }
}

export const navigation = (selectkey, openkey) => {
    return {
        type: NAVIGATION,
        selectkey,
        openkey
    }
}

// 获取频道列表
export const getChannelList = (fn) => {
    return (dispatch) => {
        axiosAjax('post', '/news/channel/list', {}, function (data) {
            if (data.code === 1) {
                const actionData = data.obj
                let channelIdOptions = []
                actionData.map((item) => {
                    channelIdOptions.push({
                        label: item.channelName,
                        value: `${item.channelId}`
                    })
                })
                dispatch({
                    type: CHANNELLIST,
                    channelIdOptions
                })
                if (fn) {
                    fn(actionData)
                }
            } else {
                message.error(data.msg)
            }
        })
    }
}
