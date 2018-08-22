/**
 * Author：zhoushuanglong
 * Time：2017/7/27
 * Description：menu data
 * , {
        key: 'postUser',
        icon: 'icon-postUser',
        link: '/postUser',
        text: '用户管理'
    }, {
        key: 'images',
        icon: 'icon-images',
        link: '/images',
        text: '图片鉴别'
    }, {
        key: 'language',
        icon: 'icon-language',
        link: '/language',
        text: '多语言词条管理'
    }
 */
const menuData = [
    {
        key: 'systemAccount',
        icon: 'icon-systemAccount',
        link: '/systemAccount-list',
        text: '系统账号管理'
    }, {
        key: 'post',
        icon: 'icon-post',
        link: '',
        text: '新闻管理',
        children: [
            {
                key: 'post-list',
                icon: 'icon-post-list',
                link: '/post-list',
                text: '新闻列表'
            }, {
                key: 'post-send',
                icon: 'icon-post-send',
                link: '/post-send',
                text: '新闻添加/编辑'
            }, {
                key: 'post-channel',
                icon: 'icon-post-channel',
                link: '/post-channel',
                text: '频道管理'
            }
        ]
    },
    /*
    {
        key: 'video',
        icon: 'icon-video',
        link: '',
        text: '视频管理',
        children: [
            {
                key: 'video-list',
                icon: 'icon-video-list',
                link: '/video-list',
                text: '视频列表'
            }, {
                key: 'video-send',
                icon: 'icon-video-send',
                link: '/video-send',
                text: '视频添加/编辑'
            }
        ]
    }, {
        key: 'merge',
        icon: 'icon-merge',
        link: '',
        text: '新闻聚合',
        children: [
            {
                key: 'merge-list',
                icon: 'icon-post-list',
                link: '/merge-list',
                text: '新闻主体列表'
            }
        ]
    }, {
        key: 'flash',
        icon: 'icon-flash',
        link: '',
        text: '快讯管理',
        children: [
            {
                key: 'flash-lists',
                icon: 'icon-flash-list',
                link: '/flash-lists',
                text: '快讯列表'
            }, {
                key: 'flash-edit',
                icon: 'icon-flash-send',
                link: '/flash-edit',
                text: '快讯添加/编辑'
            }, {
                key: 'flash-audit',
                icon: 'icon-flash-audit',
                link: '/flash-audit',
                text: '快讯审核'
            }
        ]
    },
    */
    {
        key: 'ad',
        icon: 'icon-ad',
        link: '',
        text: '广告管理',
        children: [
            {
                key: 'ad-pc',
                icon: 'icon-pc-list',
                link: '/ad-pc',
                text: 'PC端广告'
                // children: [
                //     {
                //         key: 'ad-pc',
                //         icon: 'icon-ad-list',
                //         link: '/ad-pc',
                //         text: 'PC端广告'
                //     }
                // ]
            },
            {
                key: 'ad-mobile',
                icon: 'icon-mobile-list',
                link: '/ad-mobile',
                text: '手机端广告'
                // children: [
                //     {
                //         key: 'ad-mobile',
                //         icon: 'icon-ad-list',
                //         link: '/ad-mobile',
                //         text: '手机端广告'
                //     }
                // ]
            }
        ]
    },
    /*
    {
        key: 'audit',
        icon: 'icon-audit',
        link: '',
        text: '审核管理',
        children: [
            {
                key: 'audit-identify',
                icon: 'icon-identify',
                link: '/audit-identify',
                text: '身份认证'
            },
            {
                key: 'audit-official',
                icon: 'icon-identify',
                link: '/audit-official',
                text: '官方添加认证'
            },
            {
                key: 'audit-list',
                icon: 'icon-article',
                link: '/audit-list',
                text: '文章审核'
            }
        ]
    }, {
        key: 'ico',
        icon: 'icon-ico',
        link: '',
        text: 'ICO 管理',
        children: [
            {
                key: 'ico-list',
                icon: 'icon-post-list',
                link: '/ico-list',
                text: 'ICO 列表'
            }, {
                key: 'ico-edit',
                icon: 'icon-ico-edit',
                link: '/ico-edit',
                text: 'ICO 添加/编辑'
            }
        ]
    }, {
        key: 'comment',
        icon: 'icon-comment',
        link: '',
        text: '评论管理',
        children: [
            {
                key: 'comment-list',
                icon: 'icon-comment-list',
                link: '/comment-list',
                text: '评论列表'
            }
        ]
    }, {
        key: 'live',
        icon: 'icon-live',
        link: '',
        text: '直播管理',
        children: [
            {
                key: 'live-userList',
                icon: 'icon-live-user',
                link: '/live-userList',
                text: '用户列表'
            }, {
                key: 'live-list',
                icon: 'icon-post-list',
                link: '/live-list',
                text: '直播列表'
            }, {
                key: 'live-edit',
                icon: 'icon-ico-edit',
                link: '/live-edit',
                text: '直播添加/编辑'
            }
            // , {
            //     key: 'live-commentList',
            //     icon: 'icon-comment-list',
            //     link: '/live-commentList',
            //     text: '直播评论列表'
            // }
        ]
    }, {
        key: 'specialTopic',
        icon: 'icon-st',
        link: '',
        text: '专题管理',
        children: [
            {
                key: 'specialTopic-list',
                icon: 'icon-post-list',
                link: '/specialTopic-list',
                text: '专题列表'
            }, {
                key: 'specialTopic-add',
                icon: 'icon-ico-edit',
                link: '/specialTopic-add',
                text: '新增专题'
            }
        ]
    }, {
        key: 'appTopic',
        icon: 'icon-banner',
        link: '',
        text: 'App发现页轮播',
        children: [
            {
                key: 'appTopic-list',
                icon: 'icon-post-list',
                link: '/appTopic-list',
                text: '轮播图列表'
            }, {
                key: 'appTopic-add',
                icon: 'icon-ico-edit',
                link: '/appTopic-add',
                text: '新增Banner'
            }
        ]
    }, */
    {
        key: 'banner',
        icon: 'icon-banner',
        link: '',
        text: '首页Banner管理(Beta)',
        children: [
            {
                key: 'banner-topList',
                icon: 'icon-top-list',
                link: '/banner-topList',
                text: '顶部轮播'
            }, {
                key: 'banner-trList',
                icon: 'icon-tr-list',
                link: '/banner-trList',
                text: '顶部右侧'
            }, {
                key: 'banner-productList',
                icon: 'icon-product-list',
                link: '/banner-productList',
                text: '产品轮播'
            }, {
                key: 'banner-activeList',
                icon: 'icon-active-list',
                link: '/banner-activeList',
                text: '活动轮播'
            }
        ]
    }
    /*
    {
        key: 'coinRecommend',
        icon: 'icon-cr',
        link: '',
        text: 'APP 词条管理',
        children: [
            {
                key: 'coinRecommend-list',
                icon: 'icon-coinRecommend-list',
                link: '/coinRecommend-list',
                text: '币种推荐列表'
            },
            {
                key: 'hotCoin-list',
                icon: 'icon-hotCoin-list',
                link: '/hotCoin-list',
                text: '热搜币种列表'
            },
            {
                key: 'newsHotWords-list',
                icon: 'icon-newsHotWords-list',
                link: '/newsHotWords-list',
                text: '热搜新闻列表'
            }
        ]
    }, {
        key: 'webCoinRecommend',
        icon: 'icon-homecr',
        link: '/webCoinRecommend-list',
        text: '首页币种推荐'
    }, {
        key: 'columnAuthor',
        icon: 'icon-columnAuthor',
        link: '',
        text: '专栏作者管理',
        children: [
            {
                key: 'columnAuthor-list',
                icon: 'icon-post-list',
                link: '/columnAuthor-list',
                text: '专栏作者列表'
            }
        ]
    }, {
        key: 'account',
        icon: 'icon-accountManager',
        link: '',
        text: '账号管理',
        children: [
            {
                key: 'account-flashAccount',
                icon: 'icon-post-list',
                link: '/account-flashAccount',
                text: '快讯账号管理'
            },
            {
                key: 'account-blackList',
                icon: 'icon-heimingdan',
                link: '/account-blackList',
                text: '黑名单管理'
            }
        ]
    }, {
        key: 'cooperation',
        icon: 'icon-hezuo',
        link: '/cooperation',
        text: '底部链接管理'
    }
     */
]
export default menuData
