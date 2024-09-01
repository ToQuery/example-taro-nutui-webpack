export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/about/index'
  ],
  tabBar: {
    color: '#000000',
    position: 'bottom',
    selectedColor: '#339AF0',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/about/index',
        text: '关于'
      },
    ]
  },
  window: {
    backgroundColor: '#b3b3b3',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#339AF0',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
