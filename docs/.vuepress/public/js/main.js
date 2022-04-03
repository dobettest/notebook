window.onload = function() {
  function webLocation() {
    // 判断浏览器的首选语言
    let protocol = 'https://'
    let cnDomain = 'fedbook.gitee.io'
    let language = navigator.language
    let host = window.location.host
    let urlRelativePath = getUrlRelativePath()
    if (language === 'zh-CN') {
      if (host !== cnDomain) {
        swal('提示', '建议大陆用户访问部署在国内的站点(但内容可能会滞后)，是否跳转？', {
          buttons: ['取消', '确定'],
        }).then(value => {
          if (value) {
            location.href = protocol + cnDomain + urlRelativePath
          }
        })
      }
    }
  }

  function getUrlRelativePath() {
    let url = window.location.href.toString()
    let arrUrl = url.split('//')
    let start = arrUrl[1].indexOf('/')
    let relUrl = arrUrl[1].substring(start) //stop省略，截取从start开始到结尾的所有字符
    if (relUrl.indexOf('?') !== -1) {
      relUrl = relUrl.split('?')[0]
    }
    return relUrl
  }

  function init() {
    // console.clear(); // clear theme bug errors
    console.log('%cWelcome', 'color:#0a0;font-size:5em')
    console.log("%c任何高超的技术，初看都与魔法无异", "color:#3fa9f5;line-height:28px;font-size:16px;");
    console.log("%c欢迎通过 GitHub Issue 交流心得：%chttps://github.com/wenyuan/fedbook/issues","color:#3fa9f5;line-height:28px;font-size:16px;","color:#3fa9f5;line-height:28px;font-size:16px;");
  }

  webLocation()
  init()
}
