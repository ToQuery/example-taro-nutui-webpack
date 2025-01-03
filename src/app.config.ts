export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/list/index',
    'pages/about/index',
    'pages/grid_item/index',
    'pages/infinite_loading/index',
    'pages/inner_html/index',
    'pages/tailwindcss/index',
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
        pagePath: 'pages/list/index',
        text: '功能列表'
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
