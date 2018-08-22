/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Modal, message, Spin, Button, Input } from 'antd'
import './flash.scss'
import { Link, hashHistory } from 'react-router'
import {getFlashList, setSearchQuery, setPageData} from '../../actions/flash.action'
import {formatDate, axiosAjax, cutString, flashIdOptions, getTitle, getContent} from '../../public/index'
const confirm = Modal.confirm
let columns = []
class FlashIndex extends Component {
    constructor () {
        super()
        this.state = {
            loading: true
        }
    }

    channelName (id) {
        let name = ''
        flashIdOptions.map((item, index) => {
            if (parseInt(item.value) === id) {
                name = item.label
            }
        })
        return name
    }

    componentWillMount () {
        const {search} = this.props
        this.doSearch(!search.type ? 'init' : search.type)
        columns = [{
            title: '快讯标题',
            key: 'title',
            render: (text, record) => {
                return <div className="flash-info clearfix">
                    <div>
                        <h4>{!record.title ? getTitle(record.content) : `【${record.title}】`}</h4>
                    </div>
                </div>
            }
        }, {
            title: '内容',
            key: 'content',
            render: (text, record) => (<div className="flash-info clearfix">
                <div>
                    <h4 dangerouslySetInnerHTML={this.createMarkup(cutString(getContent(record.content), 70))} />
                </div>
            </div>)
        }, {
            title: '频道',
            dataIndex: 'channelId',
            key: 'channelId',
            render: (record) => (this.channelName(record))
        }, {
            title: '利好',
            dataIndex: 'upCounts',
            key: 'upCounts'
        }, {
            title: '利空 ',
            dataIndex: 'downCounts',
            key: 'downCounts'
        }, {
            title: '发表时间',
            key: 'createdTime',
            render: (record) => (formatDate(record.createdTime))
        }, {
            title: '操作',
            key: 'action',
            render: (item) => (<div>
                <Link className="mr10" to={{pathname: '/flash-detail', query: {id: item.id}}}>详情</Link>
                <Link className="mr10" to={{pathname: '/flash-edit', query: {id: item.id}}}>编辑</Link>
                {/* <a className="mr10" href="javascript:void(0)" onClick={() => this._isTop(item)}>{item.isTop === '1' ? '取消置顶' : '置顶'}</a> */}
                {/* <a className="mr10" href="javascript:void(0)" onClick={() => this._forbidcomment(item)}>{item.forbidComment === '1' ? '取消禁评' : '禁评'}</a> */}
                <a onClick={() => this.delFlash(item)} className="mr10" href="javascript:void(0)">删除</a>
            </div>)
        }]
    }

    createMarkup (str) { return {__html: str} }

    doSearch (type, data) {
        const {dispatch, pageData, search} = this.props
        let sendData = {
            'title': search.title,
            'currentPage': pageData.currPage
        }
        sendData = {...sendData, ...data}
        dispatch(getFlashList(type, sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }
    _search () {
        const {dispatch} = this.props
        this.doSearch('init', {'currentPage': 1})
        dispatch(setPageData({'currPage': 1}))
    }
    changePage (page) {
        this.setState({
            loading: true
        })
        const {dispatch, search} = this.props
        // this.setState({'currPage': page})
        dispatch(setPageData({'currPage': page}))
        this.doSearch(search.type, {'currentPage': page})
    }
    // 删除
    delFlash (item) {
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认要删除吗 ?`,
            onOk () {
                let sendData = {
                    // 'appId': $.cookie('gameId'),
                    id: item.id,
                    status: -1
                }
                axiosAjax('POST', '/lives/status', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success('删除成功')
                        _this.doSearch('init')
                        dispatch(setSearchQuery({'type': 'init'}))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 禁评、取消禁评
    _forbidcomment (item) {
        const {dispatch} = this.props
        let sendData = {
            // 'appId': $.cookie('gameId'),
            'id': item.id,
            'operate': !parseInt(item.forbidComment) ? '1' : '0'
        }
        axiosAjax('post', '/post/forbidcomment', sendData, (res) => {
            if (res.status === 200) {
                this.doSearch('init')
                dispatch(setSearchQuery({'type': 'init'}))
            } else {
                message.error(res.msg)
            }
        })
    }

    render () {
        const {list, pageData, search, dispatch} = this.props
        return <div className="flash-index">
            <span style={{marginLeft: 15}}>快讯标题/内容：</span>
            <Input
                onPressEnter={() => { this._search() }}
                value={search.title}
                style={{width: 150, marginRight: 15}}
                onChange={(e) => dispatch(setSearchQuery({title: e.target.value}))}
                placeholder="请输入要搜索的内容"
            />
            <Button type="primary" style={{marginRight: 15}} onClick={() => { this._search() }}>搜索</Button>
            <Button type="primary" onClick={() => { hashHistory.push('/flash-edit') }}>新增快讯</Button>
            <div style={{marginTop: 15}}>
                <Spin spinning={this.state.loading} size="large">
                    <Table dataSource={list.map((item, index) => ({...item, key: index}))} columns={columns} bordered pagination={{current: pageData.currPage, total: pageData.totalCount, pageSize: pageData.pageSize, onChange: (page) => this.changePage(page)}} />
                </Spin>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        flashInfo: state.flashInfo,
        list: state.flashInfo.list,
        search: state.flashInfo.search,
        pageData: state.flashInfo.pageData
    }
}

export default connect(mapStateToProps)(FlashIndex)
