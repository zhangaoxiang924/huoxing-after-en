/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：root route
 */

import React from 'react'
import Cookies from 'js-cookie'
import {Route, IndexRoute} from 'react-router'
function isLogin (nextState, replace) {
    let loginStatus = $.cookie('loginStatus')
    if (!loginStatus || !$.cookie('hx_passportId') || !$.parseJSON(loginStatus)) {
        replace('/login')
    }
}
const role = Cookies.get('hx_role')
const rootRoutes = <div>
    {/*
    <Route path="/" onEnter={isLogin} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Main').default)
        }, 'HasHeader')
    }}>
        <Route path='/enter' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Enter').default)
            }, 'Enter')
        }}/>
        <Route path='/system' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/System/system.index').default)
            }, 'SystemIndex')
        }}/>
        <Route path='/game-init' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/GameInit/game.init').default)
            }, 'GameInit')
        }}/>
    </Route>
    */}
    <Route path="/" onEnter={isLogin} getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Main').default)
        }, 'Main')
    }}>
        {(() => {
            if (role && parseInt(role) === 5) {
                return <IndexRoute getComponent={(nextState, callback) => {
                    require.ensure([], (require) => {
                        callback(null, require('../containers/MarsTrip/marsTrip.index').default)
                    }, 'MarsTripEnter')
                }}/>
            } else {
                return <IndexRoute getComponent={(nextState, callback) => {
                    require.ensure([], (require) => {
                        callback(null, require('../containers/Post/post.index').default)
                    }, 'Enter')
                }}/>
            }
        })()}
        <Route path='/post-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Post/post.index').default)
            }, 'PostIndex')
        }}/>
        <Route path='/post-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Post/post.detail').default)
            }, 'PostDetail')
        }}/>
        <Route path='/post-send' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Post/post.send').default)
            }, 'PostSend')
        }}/>
        <Route path='/post-channel' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Post/post.channel').default)
            }, 'PostChannel')
        }}/>
        {/* 视频管理 */}
        <Route path='/video-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Video/video.index').default)
            }, 'VideoIndex')
        }}/>
        <Route path='/video-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Video/video.detail').default)
            }, 'VideoDetail')
        }}/>
        <Route path='/video-send' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Video/video.send').default)
            }, 'VideoSend')
        }}/>
        {/* 快讯 */}
        <Route path='/flash-lists' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Flash/flash.index').default)
            }, 'FlashIndex')
        }}/>
        <Route path='/flash-audit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Flash/flash.audit').default)
            }, 'FlashAudit')
        }}/>
        <Route path='/flash-auditEdit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Flash/flash.auditEdit').default)
            }, 'FlashAuditEdit')
        }}/>
        <Route path='/flash-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Flash/flash.detail').default)
            }, 'FlashDetail')
        }}/>
        <Route path='/flash-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Flash/flash.send').default)
            }, 'FlashSend')
        }}/>
        <Route path='/comment-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Comment/comment.index').default)
            }, 'CommentIndex')
        }}/>
        <Route path='/postUser' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/User/user.index').default)
            }, 'UserIndex')
        }}/>
        <Route path='/postUser-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/User/user.detail').default)
            }, 'UserDetail')
        }}/>
        <Route path='/images' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Imgs/img.index').default)
            }, 'ImgsIndex')
        }}/>
        {/* <Route path='/gameConfig' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/GameConfig/game.index').default)
            }, 'GameIndex')
        }}/> */}
        <Route path='/language' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Language/language.index').default)
            }, 'LanguageIndex')
        }}/>
        <Route path='/ad-pc' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Ad/pcAd.index.jsx').default)
            }, 'AdIndex')
        }}/>
        <Route path='/ad-mobile' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Ad/mobileAd.index.jsx').default)
            }, 'AdIndex')
        }}/>
        <Route path='/ad-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Ad/pcAd.send.jsx').default)
            }, 'AdEdit')
        }}/>
        <Route path='/audit-identify' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/audit.index.jsx').default)
            }, 'AuditIndex')
        }}/>
        <Route path='/audit-details' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/audit.detail.jsx').default)
            }, 'AuditDetails')
        }}/>
        <Route path='/audit-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/checkArticle.index.jsx').default)
            }, 'ArticleIndex')
        }}/>
        <Route path='/checkArticle-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/checkArticle.send.jsx').default)
            }, 'ArticleSend')
        }}/>
        <Route path='/checkArticle-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/checkArticle.detail.jsx').default)
            }, 'ArticleDetail')
        }}/>
        <Route path='/audit-official' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Audit/official.index').default)
            }, 'OfficialIndex')
        }}/>
        <Route path='/adM-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Ad/mobileAd.send.jsx').default)
            }, 'MAdEdit')
        }}/>
        <Route path='/ico-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Ico/ico.index.jsx').default)
            }, 'IcoIndex')
        }}/>
        <Route path='/ico-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Ico/ico.edit.jsx').default)
            }, 'IcoEdit')
        }}/>
        <Route path='/ico-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Ico/ico.detail.jsx').default)
            }, 'IcoDetail')
        }}/>
        <Route path='/live-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Live/live.index.jsx').default)
            }, 'LiveIndex')
        }}/>
        <Route path='/live-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Live/live.edit.jsx').default)
            }, 'LiveEdit')
        }}/>
        <Route path='/live-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Live/live.detail.jsx').default)
            }, 'LiveDetail')
        }}/>
        <Route path='/live-userList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Live/live.userList.jsx').default)
            }, 'LiveUserList')
        }}/>
        <Route path='/live-userEdit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Live/live.userEdit.jsx').default)
            }, 'LiveUserEdit')
        }}/>
        <Route path='/live-commentList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Live/live.commentList.jsx').default)
            }, 'commentList')
        }}/>
        <Route path='/specialTopic-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/SpecialTopic/specialTopic.index.jsx').default)
            }, 'specialTopicList')
        }}/>
        <Route path='/specialTopic-add' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/SpecialTopic/specialTopic.add.jsx').default)
            }, 'SpecialTopicAdd')
        }}/>
        <Route path='/specialTopic-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/SpecialTopic/specialTopic.edit.jsx').default)
            }, 'SpecialTopicEdit')
        }}/>
        <Route path='/topicContent-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/SpecialTopic/topicContent.edit.jsx').default)
            }, 'TopicContentEdit')
        }}/>
        <Route path='/specialTopic-detail' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/SpecialTopic/specialTopic.detail.jsx').default)
            }, 'SpecialTopicDetail')
        }}/>

        <Route path='/webCoinRecommend-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/WebCoinRecommend/webCoinRecommend.index.jsx').default)
            }, 'WebCoinRecommendList')
        }}/>

        <Route path='/coinRecommend-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/CoinRecommend/coinRecommend.index.jsx').default)
            }, 'CoinRecommendList')
        }}/>

        <Route path='/hotCoin-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/HotCoin/hotCoin.index.jsx').default)
            }, 'HotCoinList')
        }}/>

        <Route path='/newsHotWords-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/NewsHotWords/newsHotWords.index.jsx').default)
            }, 'NewsHotWordsList')
        }}/>

        {/* app 发现页轮播管理 */}
        <Route path='/appTopic-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/AppTopic/appTopic.index.jsx').default)
            }, 'AppTopicList')
        }}/>
        <Route path='/appTopic-add' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/AppTopic/appTopic.add.jsx').default)
            }, 'AppTopicAdd')
        }}/>
        <Route path='/appTopic-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/AppTopic/appTopic.edit.jsx').default)
            }, 'AppTopicEdit')
        }}/>

        {/* pc 和 M 端轮播管理 */}
        <Route path='/banner-topList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Banner/banner.top.jsx').default)
            }, 'BannerTop')
        }}/>
        <Route path='/banner-trList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Banner/banner.topRight.jsx').default)
            }, 'BannerTr')
        }}/>
        <Route path='/banner-activeList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Banner/banner.active.jsx').default)
            }, 'BannerActive')
        }}/>
        <Route path='/banner-productList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Banner/banner.product.jsx').default)
            }, 'BannerProduct')
        }}/>
        <Route path='/banner-add' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Banner/banner.add.jsx').default)
            }, 'BannerAdd')
        }}/>
        <Route path='/columnAuthor-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/ColumnAuthor/columnAuthor.index').default)
            }, 'ColumnAuthorIndex')
        }}/>
        <Route path='/columnAuthor-setTop' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/ColumnAuthor/authorTop.edit.jsx').default)
            }, 'ColumnAuthorSetTop')
        }}/>
        <Route path='/merge-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/NewsMerge/newsMerge.index').default)
            }, 'NewsMergeIndex')
        }}/>
        <Route path='/merge-edit' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/NewsMerge/newsMerge.edit').default)
            }, 'NewsMergeEdit')
        }}/>
        <Route path='/account-flashAccount' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Account/flashAccount/flashAccount.index').default)
            }, 'FlashAccount')
        }}/>
        <Route path='/account-blackList' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Account/blackListAccount/blackListAccount').default)
            }, 'BlackListAccount')
        }}/>
        <Route path='/cooperation' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/Cooperation/cooperation.index').default)
            }, 'Cooperation')
        }}/>
        <Route path='/systemAccount-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/SystemManager/managerAccount.index').default)
            }, 'SystemManager')
        }}/>
        <Route path='/marsTrip-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/MarsTrip/marsTrip.index').default)
            }, 'MarsTripList')
        }}/>
        <Route path='/registrant-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/MarsTrip/registrant.list').default)
            }, 'RegistrantList')
        }}/>
        <Route path='/contactUs-list' getComponent={(nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('../containers/ContactUs/contactUs.index').default)
            }, 'ContactUsList')
        }}/>
    </Route>
    <Route path='/login' getComponent={(nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('../containers/Login').default)
        }, 'Login')
    }}/>
</div>

export default rootRoutes
