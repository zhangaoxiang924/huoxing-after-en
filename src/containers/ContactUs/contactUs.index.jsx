/**
 * Author：tantingting
 * Time：2017/9/19
 * Description：Description
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Row, Col, Modal, message, Spin, Select, Button, Input } from 'antd'
import './index.scss'
import { hashHistory } from 'react-router'
import {getContactUsList, setSearchQuery, setPageData, setFilterData, selectedData} from '../../actions/contactUs/contactUs.action'
import {formatDate, axiosAjax, cutString, mobileAdPosition} from '../../public/index'
const confirm = Modal.confirm
const Option = Select.Option

let columns = []
class ContactUsIndex extends Component {
    constructor () {
        super()
        this.state = {
            loading: true,
            status: null,
            visible: false,
            previewVisible: false,
            previewImage: '',
            order: 1
        }
    }

    componentWillMount () {
        this.doSearch('init')
        columns = [{
            title: '姓名',
            key: 'name',
            render: (text, record) => (<div className="contactUs-info clearfix">
                <div>
                    <h4 title={record.name} dangerouslySetInnerHTML={this.createMarkup(record.name ? cutString(record.name, 30) : '暂无')} />
                </div>
            </div>)
        }, {
            title: '状态',
            key: 'status',
            render: (record) => {
                if (record.status === 0) {
                    return <span className="contactUs-status pre-publish">已删除</span>
                } else if (record.status === 1) {
                    return <span className="contactUs-status has-publish">显示中</span>
                } else {
                    return <span>暂无</span>
                }
            }
        }, {
            title: '主题',
            dataIndex: 'subject',
            key: 'subject',
            render: (text) => <h4 title={text} dangerouslySetInnerHTML={this.createMarkup(text ? cutString(text, 50) : '暂无')} />
        }, {
            title: '反馈内容',
            dataIndex: 'message',
            key: 'message',
            render: (text) => <h4 title={text} dangerouslySetInnerHTML={this.createMarkup(text ? cutString(text, 50) : '暂无')} />
        }, {
            title: '邮箱 ',
            dataIndex: 'email',
            key: 'email',
            render: (text) => text || '暂无'
        }, {
            title: '微信 ',
            dataIndex: 'wechat',
            key: 'wechat',
            render: (text) => text || '暂无'
        }, {
            title: '公司 ',
            dataIndex: 'company',
            key: 'company',
            render: (text) => text || '暂无'
        }, {
            title: '发布时间',
            key: 'create_time',
            render: (record) => (formatDate(record.create_time))
        }, {
            title: '操作',
            key: 'action',
            width: 90,
            render: (item) => (<div className="btns">
                <p><a className="mr10 opt-btn" onClick={() => { this.detailModal(item) }} style={{background: '#2b465f'}}>查看</a></p>
                <p>
                    <a
                        className="mr10 opt-btn"
                        onClick={() => { this._isPublish(item) }}
                        disabled={item.status === 0}
                        style={{background: `${item.status !== 0 ? '#3d9ae2' : '#afafaf'}`}}>
                        {item.status === 0 ? '已删除' : '删除'}
                    </a>
                </p>
            </div>)
        }]
    }
    componentWillUnmount () {
        const {dispatch} = this.props
        dispatch(setSearchQuery({'type': 'init', 'title': ''}))
        dispatch(setPageData({'pageSize': 20, 'totalCount': 0}))
        dispatch(selectedData({}))
    }
    createMarkup (str) { return {__html: str} }

    // 反馈位置
    adPosition (id) {
        let name = ''
        mobileAdPosition.map((item, index) => {
            if (parseInt(item.value) === id) {
                name = item.label
            }
        })
        return name
    }

    doSearch (type, data) {
        this.setState({
            loading: true
        })
        const {dispatch, pageData, search} = this.props
        let sendData = {
            status: search.status,
            search: search.search,
            pageSize: 20,
            currentPage: pageData.currPage
        }
        sendData = {...sendData, ...data}
        dispatch(getContactUsList(type, sendData, () => {
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
        dispatch(setPageData({'currPage': page}))
        this.doSearch(search.type, {'currentPage': page})
    }

    // 发表或存草稿
    _isPublish (item) {
        const {dispatch} = this.props
        const _this = this
        confirm({
            title: '提示',
            content: `确认${item.status === 1 ? '删除' : '已处理完毕'}吗 ?`,
            onOk () {
                let sendData = {
                    id: item.id,
                    status: item.status === 1 ? 0 : 1
                }
                axiosAjax('POST', '/contact/status', {...sendData}, (res) => {
                    if (res.code === 1) {
                        message.success(`操作成功`)
                        _this.doSearch('init')
                        dispatch(setSearchQuery({'type': 'init'}))
                    } else {
                        message.error(res.msg)
                    }
                })
            }
        })
    }

    // 筛选反馈状态
    handleChange = (value) => {
        const {dispatch} = this.props
        dispatch(setFilterData({status: value}))
        this.setState({
            status: value
        })
        this.doSearch('init', {'currentPage': 1, status: value})
    }

    // 新增
    incAd = () => {
        hashHistory.push('/adM-edit')
    }

    // 详情弹框
    detailModal (obj) {
        this.setState({
            visible: true
        })
        const {dispatch} = this.props
        dispatch(selectedData(obj))
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
        const {list, pageData, search, selectData, dispatch} = this.props
        return <div className="contactUs-index">
            <Row>
                <Col span={22} className="contactUs-position">
                    <span>状态：</span>
                    <Select defaultValue={`${search.status}`} style={{ width: 140 }} onChange={this.handleChange}>
                        <Option value="">全部</Option>
                        <Option value="0">已删除</Option>
                        <Option value="1">显示中</Option>
                    </Select>
                    <Input
                        value={search.search}
                        style={{width: 150, margin: '0 15px'}}
                        onChange={(e) => dispatch(setSearchQuery({search: e.target.value}))}
                        placeholder="姓名/邮箱/内容"
                        onPressEnter={() => { this._search() }}
                    />
                    <Button type="primary" onClick={() => { this._search() }}>搜索</Button>
                </Col>
            </Row>
            <div className="mt30">
                <Spin spinning={this.state.loading} size="large">
                    <Table dataSource={list.map((item, index) => ({...item, key: index}))} columns={columns} bordered pagination={{current: pageData.currPage, total: pageData.totalCount, pageSize: pageData.pageSize, onChange: (page) => this.changePage(page)}} />
                </Spin>
            </div>
            <Modal style={{zIndex: 2}} className="pre-Modal" visible={this.state.previewVisible} footer={null} onCancel={this.handleImgModalCancel}>
                <img alt="example" style={{width: '100%'}} src={this.state.previewImage}/>
            </Modal>
            <Modal
                title="查看详情"
                className="feed-detail-modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <div className="contactUsInfo" style={{padding: '0 10px 10px'}}>
                    <Row className="detail-row">
                        <Col span={10} className="" style={{fontWeight: 'bold'}}>用户名: {selectData.name || '无'}</Col>
                        <Col span={8} className="">微信: {selectData.wechat || '无'}</Col>
                        <Col span={6} className="">状态: {selectData.status === 0 ? '已删除' : '正常显示'}</Col>
                    </Row>
                    <Row className="detail-row">
                        <Col span={4} className="contactUs-title" style={{fontWeight: 'bold'}}>邮箱: </Col>
                        <Col span={20} className="">{selectData.email}</Col>
                    </Row>
                    <Row className="detail-row">
                        <Col span={4} className="contactUs-title" style={{fontWeight: 'bold'}}>公司: </Col>
                        <Col span={20} className="">{selectData.company}</Col>
                    </Row>
                    <Row className="detail-row">
                        <Col span={4} className="" style={{fontWeight: 'bold'}}>反馈时间: </Col>
                        <Col span={20} className="">{formatDate(selectData.createTime)}</Col>
                    </Row>
                    <Row className="detail-row">
                        <Col span={4} className="contactUs-title" style={{fontWeight: 'bold'}}>主题: </Col>
                        <Col span={20} className="">{selectData.subject}</Col>
                    </Row>
                    <Row className="detail-row">
                        <Col span={4} className="contactUs-title" style={{fontWeight: 'bold'}}>内容: </Col>
                        <Col span={20} className="">{selectData.message}</Col>
                    </Row>
                </div>
                {/*
                <Row className="detail-row">
                    {(() => {
                        if (!selectData.picture) {
                            return ''
                        } else {
                            return selectData.picture.split(';').map((item, index) => <Col
                                className="feedPic"
                                key={index}
                                style={{
                                    background: `url(${item}) no-repeat center`
                                }}
                                src={item}
                                onClick={this.handlePreview}
                            />)
                        }
                    })()}
                </Row>
                */}
            </Modal>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        contactUsInfo: state.contactUsInfo,
        selectData: state.contactUsInfo.selectedData,
        list: state.contactUsInfo.list,
        search: state.contactUsInfo.search,
        pageData: state.contactUsInfo.pageData
    }
}

export default connect(mapStateToProps)(ContactUsIndex)
