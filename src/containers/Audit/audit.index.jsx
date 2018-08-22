/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Row, Col, Modal, Spin, Select } from 'antd'
import Cookies from 'js-cookie'
import './index.scss'
import { hashHistory } from 'react-router'
// import IconItem from '../../components/icon/icon'
import {getAuditList, setSearchQuery, setPageData, setFilterData, selectedData} from '../../actions/audit.action'
import {formatDate, cutString, auditStatus} from '../../public/index'
// const confirm = Modal.confirm
const Option = Select.Option

let columns = []
class AuditIndex extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            auditStatus: null,
            visible: false,
            previewVisible: false,
            previewImage: ''
        }
    }

    componentWillMount () {
        const {search, filter} = this.props
        this.doSearch(!search.type ? 'init' : search.type, {state: filter.status})
        columns = [{
            title: '姓名',
            key: 'identityName',
            render: (text, record) => (<div className="audit-info clearfix">
                <div>
                    <h4 title={record.identityName} dangerouslySetInnerHTML={this.createMarkup(record.identityName ? cutString(record.identityName, 30) : '暂无')} />
                    <div>
                        {!parseInt(record.recommend) ? '' : <div style={{'display': 'inline-block'}}><span className="org-bg mr10">推荐</span></div>}
                    </div>
                </div>
            </div>)
        }, {
            title: '审核状态',
            dataIndex: 'state',
            key: 'state',
            render: (text) => {
                if (text === 0) {
                    return <span className="state-btns pre-identify">{this.auditStatus(text)}</span>
                } else if (text === 1) {
                    return <span className="state-btns pass-identify">{this.auditStatus(text)}</span>
                } else if (text === -1) {
                    return <span className="state-btns cant-identify">{this.auditStatus(text)}</span>
                } else if (text === -2) {
                    return <span className="state-btns hasnot-identify">{this.auditStatus(text)}</span>
                } else {
                    return this.auditStatus(text)
                }
            }
        }, {
            title: '手机号',
            dataIndex: 'phoneNum',
            key: 'phoneNum',
            render: (text, record) => (<h3 title={record.phoneNum}>{record.phoneNum ? cutString(record.phoneNum, 30) : '暂无'}</h3>)
        }, {
            title: '标识',
            dataIndex: 'vGrade',
            key: 'vGrade',
            render: (record) => {
                if (record === 0) {
                    return <span className="state-btns ordinary-v">普通</span>
                } else if (record === 1) {
                    return <span className="state-btns personal-v">个人大 V </span>
                } else if (record === 2) {
                    return <span className="state-btns company-v">企业大 V </span>
                } else {
                    return <span className="state-btns ordinary-v">普通</span>
                }
            }
        }, {
            title: '身份证号 ',
            dataIndex: 'identityNum',
            key: 'identityNum',
            render: (text, record) => (<h3 title={record.identityNum}>{record.identityNum ? cutString(record.identityNum, 30) : '暂无'}</h3>)
        }, {
            title: '身份证正面图',
            width: 140,
            key: 'idFaceUrl',
            render: (record) => (<img onClick={this.handlePreview} style={{width: 100, cursor: 'pointer'}} src={record.idFaceUrl} alt=""/>)
        }, {
            title: '上传时间',
            key: 'createTime',
            render: (record) => (formatDate(record.createTime))
        }, {
            title: '操作',
            key: 'action',
            render: (item) => (<div>
                {/* <a className="mr10 opt-btn" onClick={() => { this.detailModal(item) }} style={{background: '#2b465f'}}>查看</a> */}
                {item.state !== 0 ? <a
                    className="mr10 opt-btn"
                    onClick={() => { this.detailModal(item) }}
                    style={{background: '#E95D01'}}>
                    重新审核
                </a> : <a
                    className="mr10 opt-btn"
                    onClick={() => { this.detailModal(item) }}
                    style={{background: '#108ee9'}}>
                    开始审核
                </a>}
                {/* <a className={`mr10 recommend-btn opt-btn ${item.status !== 1 ? 'disabled' : ''}`} href="javascript:void(0)" onClick={() => this._isTop(item)} disabled={item.status !== 1 && true}>
                    {item.recommend === 1 ? '取消推荐' : '推荐'}
                </a><a className="mr10" href="javascript:void(0)" onClick={() => this._forbidcomment(item)}>{item.forbidComment === '1' ? '取消禁评' : '禁评'}</a> */}
                {/* <a className="mr10 opt-btn" href="javascript:void(0)" onClick={() => this._isPublish(item)} style={{background: '#00a854'}}>
                    {item.status === 1 ? '撤回' : '发布'}
                </a> */}
                {/* <a onClick={() => this.delAudit(item)} className="mr10 opt-btn" href="javascript:void(0)" style={{background: '#d73435'}}>删除</a> */}
            </div>)
        }]
    }
    componentWillUnmount () {
        const {dispatch} = this.props
        dispatch(setSearchQuery({'type': 'init', 'nickName': '', 'title': ''}))
        dispatch(setPageData({'pageSize': 200, 'totalCount': 0}))
        // dispatch(selectedData({}))
    }
    createMarkup (str) { return {__html: str} }

    // 认证状态
    auditStatus (id) {
        let name = ''
        auditStatus.map((item, index) => {
            if (parseInt(item.value) === id) {
                name = item.label
            }
        })
        return name
    }

    doSearch (type, data) {
        const {dispatch, pageData, search, filter} = this.props
        let sendData = {
            state: filter.status,
            pageSize: 200,
            currentPage: pageData.currPage
            // 'appId': $.cookie('gameId')
        }
        if (type !== 'init') {
            sendData = {
                ...sendData,
                'nickName': search.nickName,
                'title': search.title
            }
        }
        sendData = {...sendData, ...data}
        // let sendData = !data ? {searchQuery: this.state.searchQuery} : {searchQuery: this.state.searchQuery, ...data}
        dispatch(getAuditList(type, sendData, () => {
            this.setState({
                loading: false
            })
        }))
    }
    _search () {
        const {dispatch, search} = this.props
        let type = 'init'
        if (!search.nickName && !search.title) {
            type = 'init'
        } else {
            type = 'search'
        }
        this.doSearch(type, {'currentPage': 1})
        dispatch(setSearchQuery({'type': type}))
        dispatch(setPageData({'currPage': 1}))
    }
    changePage (page) {
        this.setState({
            loading: true
        })
        const {dispatch, search, filter} = this.props
        // this.setState({'currPage': page})
        dispatch(setPageData({'currPage': page}))
        this.doSearch(search.type, {'currentPage': page, state: filter.status})
    }

    // 筛选广告状态
    handleChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({status: value}))
        this.setState({
            auditStatus: value,
            loading: true
        })
        this.doSearch('init', {'currentPage': 1, state: value})
    }

    // 详情
    detailModal (obj) {
        hashHistory.push({
            pathname: '/audit-details',
            query: {id: obj.passportid}
        })
        const {dispatch} = this.props
        dispatch(selectedData(obj))
        Cookies.set('hx_identify_info', JSON.stringify(obj))
    }

    handleOk = (e) => {
        this.setState({
            visible: false
        })
    }
    handleCancel = (e) => {
        this.setState({
            visible: false
        })
    }

    handleImgModalCancel = () => this.setState({previewVisible: false})

    handlePreview = (e) => {
        this.setState({
            previewImage: e.target.getAttribute('src'),
            previewVisible: true
        })
    }

    render () {
        const {list, filter} = this.props
        return <div className="audit-index">
            <Row>
                <Col span={4} className="audit-position">
                    <span>认证状态：</span>
                    <Select defaultValue={`${filter.status}`} style={{ width: 120 }} onChange={this.handleChange}>
                        {auditStatus.map(d => <Option value={d.value} key={d.value}>{d.label}</Option>)}
                    </Select>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table dataSource={list.map((item, index) => ({...item, key: index}))} columns={columns} bordered />
                </Spin>
            </div>
            <Modal className="pre-Modal" visible={this.state.previewVisible} footer={null} onCancel={this.handleImgModalCancel}>
                <img alt="example" style={{width: '100%'}} src={this.state.previewImage}/>
            </Modal>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        auditInfo: state.auditInfo,
        selectedData: state.auditInfo.selectedData,
        list: state.auditInfo.list,
        search: state.auditInfo.search,
        filter: state.auditInfo.filter,
        pageData: state.auditInfo.pageData
    }
}

export default connect(mapStateToProps)(AuditIndex)
