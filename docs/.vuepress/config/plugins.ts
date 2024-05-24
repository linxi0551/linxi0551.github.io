import { UserPlugins } from 'vuepress/config'
import dayjs from 'dayjs'
const DOMAIN_NAME = 'regulus.icu' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址

export default <UserPlugins>[
    [
        'reading-progress' //顶部进度条
    ],
    [
        {
            name: 'custom-plugins', //代码块样式
            globalUIComponents: ["BlockToggle"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
        }
    ],
    [
        '@vuepress-reco/vuepress-plugin-bgm-player', {
            audios: [
                // 网络文件示例
                {
                    name: '达尔文',
                    artist: '林俊杰',
                    url: 'http://music.163.com/song/media/outer/url?id=2019573476.mp3',
                    cover: 'https://p1.music.126.net/ssPAqFStzmN4KKsHQGrfbg==/109951169493493172.jpg?param=300x300'
                },
                {
                    name: '浪漫血液',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product5th/product25/2018/12/06/2018%E5%B9%B411%E6%9C%8805%E6%97%A521%E7%82%B925%E5%88%86%E6%89%B9%E9%87%8F%E9%A1%B9%E7%9B%AE%E5%8D%8E%E7%BA%B357%E9%A6%96-3/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005751L235.mp3?channelid=02&msisdn=c8c13833-74f5-49b4-8787-3f137593890d&Tim=1709976194547&Key=bc90bd0d64aafca0',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/2k/kf/9x.webp'
                },
                {
                    name: '交换余生',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product9th/product45/2021/11/0315/2021%E5%B9%B404%E6%9C%8808%E6%97%A511%E7%82%B948%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E5%8D%8E%E7%BA%B355%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005759Z0S5153807.mp3?channelid=02&msisdn=516fe7c2-beaa-4aa3-8917-2df783b912e6&Tim=1709976384971&Key=7be7f40ce8273af7',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/2s/1h/46780cb8fee14362ba0381f5c235cf34.webp'
                },
                {
                    name: '我还想她',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product10th/productB36/2022/05/0716/2008%E5%B9%B410%E6%9C%8820%E6%97%A5%E6%B5%B7%E8%9D%B6%E5%94%B1%E7%89%87/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60058621415163835.mp3?channelid=02&msisdn=3d289834-405a-419e-bfd9-958e4e590003&Tim=1711755487745&Key=c6bda9e004deb932',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/1w/hn/qo.webp'
                },
                {
                    name: '当你',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product5th/product28/2019/02/13/2010%E5%B9%B412%E6%9C%8809%E6%97%A500006%E6%89%B9%E6%AC%A1/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60058622883.mp3?channelid=02&msisdn=a1a5eb03-dfdc-467c-ac30-7664d582f72b&Tim=1709976594018&Key=53f859f1413ce0a2',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/2h/7s/nu.webp'
                },
                {
                    name: '落在生命里的光',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product9th/product46/2023/02/0616/2023%E5%B9%B402%E6%9C%8806%E6%97%A512%E7%82%B921%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5SONY1%E9%A6%96115243/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005974B7U0164510.mp3?channelid=02&msisdn=ed3d146d-0f30-46c1-8f7a-572ea0c85cb5&Tim=1710051536538&Key=83f85513fa30bbfa',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/2p/77/e2abf44924a040379acdd0fbee7643ff.webp'
                },
                {
                    name: '爱不会绝迹',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product10th/productB35/2023/12/0814/2009%E5%B9%B412%E6%9C%8808%E6%97%A5%E6%B5%B7%E8%9D%B6%E5%94%B1%E7%89%87/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60058622726141315.mp3?channelid=02&msisdn=34d0df09-9cbb-4756-b0f1-b41f5b58afb1&Tim=1709977061423&Key=a8fec43f0b44749a',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/3a/u5/03559cb54e5b49cf9c92215bc06343f4.webp'
                },
                {
                    name: '简简单单',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product5th/product30/2019/03/21/4%E6%9C%88%E5%A5%A5%E8%BF%90%E8%A1%A5%E5%85%85%E6%8C%AF%E9%93%8352%E9%A6%96%E6%AD%8C%E6%9B%B2600586/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60058601082.mp3?channelid=02&msisdn=2c373ebb-667f-483c-9f05-27b8cbaf7ec2&Tim=1711934639427&Key=7c34e332492cbcfc',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/2y/0v/277d9be039f14587a4f592efe4cf4ba8.webp'
                },

                {
                    name: '想见你想见你想见你',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product9th/product46/2023/02/0616/2023%E5%B9%B402%E6%9C%8806%E6%97%A512%E7%82%B900%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5SONY1%E9%A6%96015229/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005974B7UE164523.mp3?channelid=02&msisdn=6b45f073-e7e1-40ad-9fe1-7f0610f9ccab&Tim=1710051771082&Key=1ae17cde34c4f559',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/2h/y1/an.webp'
                },
                {
                    name: '关键词',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product9th/product43/2021/04/0813/2021%E5%B9%B404%E6%9C%8808%E6%97%A511%E7%82%B948%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E5%8D%8E%E7%BA%B355%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005759Z0RK133448.mp3?channelid=02&msisdn=f1af4d6b-9566-4de9-9a34-3992ae8e32b6&Tim=1709976699561&Key=0122aca6b1c3147e',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/2f/cw/2x.webp'
                },
                {
                    name: '恨幸福来过',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product9th/product46/2023/02/0616/2023%E5%B9%B402%E6%9C%8806%E6%97%A511%E7%82%B956%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5SONY5%E9%A6%96615230/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005974B7U7164528.mp3?channelid=02&msisdn=2e772461-0788-413d-bf11-407f96bcbc59&Tim=1710063060302&Key=43ca807279311f98',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/2h/y1/an.webp'
                },
                {
                    name: '握不住的他',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product6th/productB22/2020/05/2822/2010%E5%B9%B412%E6%9C%8809%E6%97%A500009%E6%89%B9%E6%AC%A1/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60058622886222331.mp3?channelid=02&msisdn=e1ea21e6-887a-41ef-a77e-e075b37a55bd&Tim=1710139318119&Key=8f149301751a686d',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/1w/hn/qo.webp'
                },
                {
                    name: '那女孩对我说',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product9th/product46/2023/02/0616/2023%E5%B9%B402%E6%9C%8806%E6%97%A511%E7%82%B956%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5SONY5%E9%A6%96615230/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005974B7U5165410.mp3?channelid=02&msisdn=20433d13-acaf-4127-aa5a-2e8b5c931bb3&Tim=1709977097298&Key=75e4b4491ebba19c',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/2p/77/e2abf44924a040379acdd0fbee7643ff.webp'
                },
                {
                    name: '修炼爱情',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product9th/product45/2022/07/0419/2018%E5%B9%B411%E6%9C%8809%E6%97%A518%E7%82%B920%E5%88%86%E6%89%B9%E9%87%8F%E9%A1%B9%E7%9B%AE%E5%8D%8E%E7%BA%B353%E9%A6%96-8/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005751KTMT193420.mp3?channelid=02&msisdn=49f48c10-b4a8-4611-94dc-3d1035a02fe6&Tim=1709976872762&Key=d92ffaff279918cf',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/2u/mb/d93864e0a1874b3f804185304d768987.webp'
                },
                {
                    name: '原来',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/ringmaker01/n10/music2/2016/05/4%E6%9C%88%E5%A5%A5%E8%BF%90%E6%AD%8C%E6%9B%B2%E8%A1%A5%E5%85%85%E5%BD%A9%E9%93%8334%E9%A6%96600586/%E6%AD%8C%E6%9B%B2%E4%B8%8B%E8%BD%BD/MP3_320_16_Stero/%E5%8E%9F%E6%9D%A5%28%E5%AE%8C%E7%BE%8E%E6%8E%A8%E8%8D%90%E7%89%88%29-%E6%9E%97%E4%BF%8A%E6%9D%B0.mp3?channelid=02&msisdn=ad4c243f-371d-4d61-8acf-685ce2af183a&Tim=1711768331921&Key=4079f883f9ae6d01',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/2y/0v/277d9be039f14587a4f592efe4cf4ba8.webp'
                },
                {
                    name: '可惜没如果',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product9th/product44/2021/08/0306/2017%E5%B9%B412%E6%9C%8819%E6%97%A511%E7%82%B916%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E4%B8%96%E7%BA%AA%E6%81%92%E9%80%9A670%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/63268606554061205.mp3?channelid=02&msisdn=a8c5dd1f-900b-4b96-ae77-de44fd7e6fdb&Tim=1709977798906&Key=1a5e2956e4796df4',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/2u/ig/bbedab5618f2474fb7c581030a5c3889.webp'
                },
                {
                    name: '不懂',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product6th/productB23/2020/06/0520/4%E6%9C%88%E5%A5%A5%E8%BF%90%E6%AD%8C%E6%9B%B2%E8%A1%A5%E5%85%85%E5%BD%A9%E9%93%8334%E9%A6%96600586/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60058600886201202.mp3?channelid=02&msisdn=f1549a0b-0a0d-481a-ac48-249c160cc05c&Tim=1711830729561&Key=c5870768e0411b28',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/2y/0v/277d9be039f14587a4f592efe4cf4ba8.webp'
                },
                {
                    name: '心墙',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product10th/productB35/2022/05/0916/2010%E5%B9%B412%E6%9C%8809%E6%97%A500010%E6%89%B9%E6%AC%A1/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60058622887161757.mp3?channelid=02&msisdn=0f3abcd0-10d0-4fb0-bd3b-edee31374846&Tim=1709976804801&Key=8e60956bb9c28222',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/2h/7s/nu.webp'
                },
                {
                    name: 'Despacito 缓缓',
                    artist: '林俊杰',
                    url: 'https://freetyst.nf.migu.cn/public/product5th/product34/2019/07/2520/2018%E5%B9%B401%E6%9C%8826%E6%97%A516%E7%82%B906%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E6%AD%A3%E4%B8%9C1%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005669Z0YX.mp3?channelid=02&msisdn=14e55c08-1d94-4976-91ea-fc033a3928e2&Tim=1713496342893&Key=21965e788e962c1b',
                    cover: 'https://d.musicapp.migu.cn/data/oss/resource/00/2w/iw/608f71ce568140a0b82d134470dd8289.webp'
                },

            ],
            autoplay: false,//是否自动播放
            autoShrink: true,//是否自动缩小
            shrinkMode: 'float',//指定PC端缩小为哪种模式
            position: { left: '0px', bottom: '10px', 'z-index': '999999' },//播放器位置
            floatPosition: 'left'//指定浮窗模式浮动在哪一侧
        }
    ],

    [
        "sitemap", // 网站地图
        {
            hostname: WEB_SITE,
        },
    ],

    'vuepress-plugin-baidu-autopush', // 百度自动推送

    [
        'vuepress-plugin-baidu-tongji', // 百度统计
        {
            hm: '5734cb65195c55455906a66aa60cee5f',
        },
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    // 'fulltext-search',

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    [
        // 'thirdparty-search',
        'fulltext-search',
        {
            thirdparty: [
                {
                    title: '在MDN中搜索',
                    frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
                    behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
                },
                {
                    title: '在Runoob中搜索',
                    frontUrl: 'https://www.runoob.com/?s=',
                },
                {
                    title: '在Vue API中搜索',
                    frontUrl: 'https://cn.vuejs.org/v2/api/#',
                },
                {
                    title: '在Bing中搜索',
                    frontUrl: 'https://cn.bing.com/search?q=',
                },
                {
                    title: '通过百度搜索本站的',
                    frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`,
                },
            ],
        }
    ],

    [
        'one-click-copy', // 代码块复制按钮
        {
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
            copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
            duration: 1000, // prompt message display time.
            showInMobile: false, // whether to display on the mobile side, default: false.
        },
    ],

    [
        'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
        {
            settings: {
                // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                // cssLib: ['http://xxx'], // 在线示例中的css依赖
                // vue: 'https://jsd.cdn.zzko.cn/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                jsfiddle: false, // 是否显示 jsfiddle 链接
                codepen: true, // 是否显示 codepen 链接
                horizontal: false, // 是否展示为横向样式
            },
        },
    ],
    [
        'vuepress-plugin-zooming', // 放大图片
        {
            selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
            options: {
                bgColor: 'rgba(0,0,0,0.6)',
            },
        },
    ],
    [
        'vuepress-plugin-comment', // 评论
        {
            choosen: 'gitalk',
            options: {
                clientID: '0be0f686cd1e80bc313d',
                clientSecret: '42737e70bbf82218c6fd5e0500ef04acd84ff179',
                repo: 'linxi0551.github.io', // GitHub 仓库
                owner: 'linxi0551', // GitHub仓库所有者
                admin: ['linxi0551'], // 对仓库有写权限的人
                // distractionFreeMode: true,
                pagerDirection: 'last', // 'first'正序 | 'last'倒序
                id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
                title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
                labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
                body:
                    '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
            },
        },
    ],
    [
        '@vuepress/last-updated', // "上次更新"时间格式
        {
            transformer: (timestamp, lang) => {
                return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
            },
        },
    ],
]