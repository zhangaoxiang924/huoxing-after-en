/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：root reducer
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import loginInfo from './loginInfo'
import channelListInfo from './channelList'
import gameListInfo from './gameListInfo'
import postInfo from './post.reducer'
import videoInfo from './video.reducer'
import postChannelInfo from './postChannel.reducer'
import commentInfo from './comment.reducer'
import flashInfo from './flash.reducer'
import flashAuditInfo from './flashAudit.reducer'
import userPostInfo from './userPost.reducer'
import imgsInfo from './imgs.reducer'
import languageInfo from './language.reducer'
import InitGameInfo from './initGame.reducer'
import authorityInfo from './authority.reducer'
import auditInfo from './audit.reducer'
import officialAuditInfo from './officialAudit.reducer'
import adInfo from './ad.reducer'
import articleAudit from './articleAudit.reducer'
import icoInfo from './ico.reducer'
import liveInfo from './live.reducer'
import specialTopicInfo from './specialTopic.reducer'
import appTopicInfo from './appTopic.reducer'
import columnAuthorInfo from './columnAuthor.reducer'
import newsMergeInfo from './newsMerge.reducer'
import liveUserInfo from './liveUser.reducer'
import liveContent from './liveContent.reducer'
import liveComment from './liveComment.reducer'
import flashAccountInfo from './flashAccount.reducer'
import managerAccountInfo from './managerAccount.reducer'
import blackListInfo from './blackList.reducer'
import cooperationInfo from './cooperation.reducer'
import coinRecommendInfo from './coinRecommend.reducer'
import webCoinRecommendInfo from './webCoinRecommend.reducer'
import hotCoinInfo from './hotCoin.reducer'
import newsHotWordsInfo from './newsHotWords.reducer'
import bannerInfo from './banner.reducer'
import marsTripInfo from './marsTrip.reducer'
import registrantInfo from './registrant.reducer'
import contactUsInfo from './contactUs.reducer'

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
    marsTripInfo,
    registrantInfo,
    contactUsInfo,
    routing: routerReducer
})

const rootReducer = combineReducers(reducers)
export default rootReducer
