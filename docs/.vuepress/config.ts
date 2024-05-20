/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块

const DOMAIN_NAME = 'regulus.icu' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  // theme: 'vdoing', // 使用npm主题包
  theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Regulus blog",
      description: 'web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
            text: '学习笔记',
            items: [
              { text: '《Vue2笔记》', link: '/note/vue2/' },
            ],
          },
          // {
          //   text: '前端文章',
          //   items: [
          //     { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
          //   ],
          // },
          // {
          //   text: '学习笔记',
          //   items: [
          //     { text: '《JavaScript教程》', link: '/note/javascript/' },
          //     { text: '《JavaScript高级程序设计》', link: '/note/js/' },
          //     { text: '《ES6 教程》', link: '/note/es6/' },
          //     { text: '《Vue》', link: '/note/vue/' },
          //     { text: '《React》', link: '/note/react/' },
          //     {
          //       text: '《TypeScript 从零实现 axios》',
          //       link: '/note/typescript-axios/',
          //     },
          //     {
          //       text: '《Git》',
          //       link: '/note/git/',
          //     },
          //     {
          //       text: 'TypeScript',
          //       link: '/pages/51afd6/',
          //     },
          //     {
          //       text: 'JS设计模式总结',
          //       link: '/pages/4643cd/',
          //     },
          //   ],
          // },
        ],
      },
      {
        text: '后端',
        link: '/hd/',
        items: [
          {
            text: '学习笔记',
            items: [
              { text: '《Java学习笔记》', link: '' },
              // { text: '《缓存框架》', link: '' },
              // { text: '《持久层框架》', link: '' }
            ]
          },
          {
            text: '数据库教程',
            items: [
              // { text: '《Mysql》', link: '' }
            ]
          },
        ],
      },
      {
        text: '技术', link: '/technology/', items: [
          {
            text: '教程', items: [
              { text: '《程序员入职指南》', link: '/pages/44f0e1/' },
              { text: '《IDEA 2024.1.1安装教程》', link: '/pages/cb8da0/' }
            ],
          }
        ],
      },
      {
        text: '更多',
        link: '/more/',
        items: [
          // { text: '学习', link: '/pages/f2a556/' },
          // { text: '面试', link: '/pages/aea6571b7a8bae86/' },
          // { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
          { text: '实用技巧', link: '/pages/dcebaf/' },
          { text: '友情链接', link: '/friends/' },
        ],
      },
      { text: '关于', link: '/about/' },
      {
        text: '收藏',
        link: '/pages/beb6c0bd8a66cea6/',
        // items: [
        //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
        //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
        //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
        // ],
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
    ],
    sidebarDepth: 1, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/r.png', // 导航栏logo
    repo: 'linxi0551/linxi0551.github.io', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
    // editLinks: true, // 启用编辑
    // editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    bodyBgImg: [
      // 'https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
      // 'https://tuchuang.voooe.cn/images/2024/04/25/home_bg.webp',
      // 'https://tuchuang.voooe.cn/images/2024/04/28/sky.jpg',
      'https://tuchuang.voooe.cn/images/2024/04/28/starrysky1.jpg',
      // 'https://tuchuang.voooe.cn/images/2024/04/28/sky2.jpg',
      // 'https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
      // 'https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
    bodyBgImgOpacity: 1.0, // body背景图透明度，选值 0.1~1.0, 默认0.5
    bodyBgImgInterval: 15, // body多张背景图时的切换间隔, 默认15，单位s
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: true, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
    // defaultMode: 'auto',

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'Regulus', // 必需
      link: 'https://github.com/linxi0551', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: 'https://tuchuang.voooe.cn/images/2024/04/26/tx.jpg',
      name: 'Regulus🦁',
      slogan: '朝全栈努力前行的小学生',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:linxi0551@outlook.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/linxi0551',
        },
        {
          iconClass: 'icon-yuque',
          title: '语雀',
          link: 'https://www.yuque.com/knowledge-ocean',
        },
        {
          iconClass: 'icon-weixin',
          title: '微信',
          link: '/img/wx.jpg',
        }
      ],
    },

    // 页脚信息
    footer: {
      link: 'https://github.com/linxi0551',
      createYear: 2024, // 博客创建年份
      copyrightInfo:
        'Regulus Lin | MIT License', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'Regulus',
        link: 'https://github.com/linxi0551'
      }
    },
    indexImg: {
      navColor: 2,    // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
      switchNavColor: true,    // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
      // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
      bgTimeColor: false,     // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
      bgTimeColorArray: ['transparent', 'rgba(255, 148, 48, .2)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .5)'],   // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
      descFade: true,   // 是否开启图片中间描述的淡入效果，默认为 false
      desc: ["我们都生活在阴沟里，但仍有人仰望星空 —— 来自 王尔德", "唯一的好是知识，唯一的坏是无知 —— 来自 苏格拉底", "宁可去追求虚无，也不能无所追求 —— 来自 弗里德里希", "停止奋斗，生命也就停止了 —— 来自 托马斯"],  // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFade 为 true 生效
      descFontSize: '1.4rem',   // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
      descFadeInTime: 200,  // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
      descFadeOutTime: 100,  // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
      descNextTime: 800,  // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
      bubble: false,    // 是否开启图片的气泡效果，默认为 false
      bubblePosition: 0,  // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
      bubbleNum: 200,   // 气泡的个数，bubble 为 true 生效，默认 200 个
    },
    
    // 自定义hmtl(广告)模块
    htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js",
      // "src": "/js/jquery.min.js"
    }],
    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }],
    ['link', { rel: 'icon', href: '/img/r.png' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
    // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ["meta", { name: "referrer", content: "no-referrer" }]
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],


  // 插件配置
  plugins: <UserPlugins>[
    //  [
    //     {
    //         name: 'custom-plugins',
    //         globalUIComponents: ["Fantasy"]
    //     }
    // ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player", {
        audios: [
          // 本地文件示例
          // {
          //   name: '장가갈 수 있을까',
          //   artist: '咖啡少年',
          //   url: '/bgm/1.mp3',
          //   cover: '/bgm/1.jpg'
          // },
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
        position: { right: '100px', bottom: '10px', 'z-index': '999999' },
        floatPosition: 'left'
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
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
