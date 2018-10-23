/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：root reducer
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import loginInfo from './public/loginInfo'
import channelListInfo from './post/channelList'
import gameListInfo from './others/gameListInfo'
import postInfo from './post/post.reducer'
import videoInfo from './video.reducer'
import postChannelInfo from './post/postChannel.reducer'
import commentInfo from './comment.reducer'
import flashInfo from './flash/flash.reducer'
import flashAuditInfo from './flash/flashAudit.reducer'
import userPostInfo from './others/userPost.reducer'
import imgsInfo from './others/imgs.reducer'
import languageInfo from './others/language.reducer'
import InitGameInfo from './others/initGame.reducer'
import authorityInfo from './authority.reducer'
import auditInfo from './audit/audit.reducer'
import officialAuditInfo from './audit/officialAudit.reducer'
import adInfo from './ad/ad.reducer'
import articleAudit from './audit/articleAudit.reducer'
import icoInfo from './ico.reducer'
import liveInfo from './live/live.reducer'
import specialTopicInfo from './specialTopic.reducer'
import appTopicInfo from './appTopic.reducer'
import columnAuthorInfo from './columnAuthor.reducer'
import newsMergeInfo from './post/newsMerge.reducer'
import liveUserInfo from './live/liveUser.reducer'
import liveContent from './live/liveContent.reducer'
import liveComment from './live/liveComment.reducer'
import flashAccountInfo from './flash/flashAccount.reducer'
import managerAccountInfo from './managerAccount.reducer'
import blackListInfo from './blackList.reducer'
import cooperationInfo from './entries/cooperation.reducer'
import coinRecommendInfo from './entries/coinRecommend.reducer'
import webCoinRecommendInfo from './entries/webCoinRecommend.reducer'
import hotCoinInfo from './entries/hotCoin.reducer'
import newsHotWordsInfo from './entries/newsHotWords.reducer'
import bannerInfo from './banner/banner.reducer'
import marsTripInfo from './marsTrip.reducer'
import registrantInfo from './registrant.reducer'
import contactUsInfo from './contactUs/contactUs.reducer'
import flashTypeInfo from './flash/flashType.reducer'
import flashTypeListInfo from './flash/flashTypeList'

const reducers = Object.assign({
    loginInfo,
    channelListInfo,
    gameListInfo,
    postInfo,
    videoInfo,
    postChannelInfo,
    commentInfo,
    userPostInfo,
    imgsInfo,
    flashInfo,
    coinRecommendInfo,
    webCoinRecommendInfo,
    hotCoinInfo,
    newsHotWordsInfo,
    flashAuditInfo,
    languageInfo,
    InitGameInfo,
    authorityInfo,
    adInfo,
    auditInfo,
    officialAuditInfo,
    articleAudit,
    icoInfo,
    liveInfo,
    liveUserInfo,
    liveContent,
    liveComment,
    specialTopicInfo,
    appTopicInfo,
    columnAuthorInfo,
    newsMergeInfo,
    flashAccountInfo,
    managerAccountInfo,
    blackListInfo,
    cooperationInfo,
    bannerInfo,
    flashTypeListInfo,
    marsTripInfo,
    registrantInfo,
    contactUsInfo,
    flashTypeInfo,
    routing: routerReducer
})

const rootReducer = combineReducers(reducers)
export default rootReducer
