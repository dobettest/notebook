const { config } = require('vuepress-theme-hope')

module.exports = config({
  title: '编程实录',
  description: 'A Book To Improve Your Development Skills ',
  dest: './dist',
  port: '7777',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.png' }],
    ['link', { rel: 'stylesheet', href: '/css/style.css' }],
    ['script', { charset: 'utf-8', src: 'https://unpkg.com/sweetalert/dist/sweetalert.min.js' }],
    ['script', { charset: 'utf-8', src: '/js/main.js' }]
  ],
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    logo: '/img/logo.png',
    nav: require('./nav.js'),
    sidebar: require('./sidebar.js'),
    sidebarDepth: 2,
    lastUpdated: '上次更新',
    searchMaxSuggestoins: 10,
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true,
    // vuepress-theme-hope config
    author: 'liugongming',
    hostname: 'http://notebook.dobettest.cn',
    darkmode: 'disable',
    themeColor: false,
    blog: false,
    pageInfo: false,
    mdEnhance: {
      enableAll: false
    },
    comment: false,
    copyright: false,
    git: {
      timezone: 'Asia/ShangHai'
    },
    pwa: false,
    copyCode: false,
    photoSwipe: false,
    repoDisplay: false,
    fullscreen: false,
    sidebarIcon: false,
    breadcrumb: false,
    contributor: false
  },
  plugins: ['one-click-copy']
})