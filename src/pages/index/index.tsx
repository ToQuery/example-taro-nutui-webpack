import { useState } from 'react'
import { View } from '@tarojs/components'
import {Button, Image, ConfigProvider, TextArea, Dialog, Cell, Grid} from '@nutui/nutui-react-taro'
import enUS from '@nutui/nutui-react-taro/dist/locales/en-US'
import zhCN from '@nutui/nutui-react-taro/dist/locales/zh-CN'
import './index.scss'
function Index() {
  const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`

  const [locale, setLocale] = useState(zhCN)
  const localeKey = locale === zhCN ? 'zhCN' : 'enUS'
  const [visible, setVisible] = useState(false)
  const [translated] = useState({
    zhCN: {
      welcome: '欢迎使用 NutUI React 开发 Taro 多端项目。',
      button: '使用英文',
      open: '点击打开',
    },
    enUS: {
      welcome: 'Welcome to use NutUI React to develop Taro multi-terminal projects.',
      button: 'Use Chinese',
      open: 'Click Me',
    },
  })
  const handleSwitchLocale = () => {
    setLocale(locale === zhCN ? enUS : zhCN)
  }
  return (
    <ConfigProvider locale={locale}>
      <View className='nutui-react-demo'>
        {/*<View>{translated[localeKey].welcome}</View>*/}
        <Cell title={
          <View>
            <Button type='primary' onClick={handleSwitchLocale}>
              {translated[localeKey].button}
            </Button>
            <Button type='success' onClick={() => setVisible(true)}>
              {translated[localeKey].open}
            </Button>
            <Dialog
              visible={visible}
              onConfirm={() => setVisible(false)}
              onCancel={() => setVisible(false)}>
              {translated[localeKey].welcome}
            </Dialog>
            <TextArea disabled showCount maxLength={20} />
          </View>
        }/>
        <View>下面应该显示dangerouslySetInnerHTML的内容</View>
        <View dangerouslySetInnerHTML={{ __html: html }}></View>
        <View>上面应该显示dangerouslySetInnerHTML的内容</View>

        <Image src="https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png" height={200} />


        <Grid columns={2} gap={50} square style={{ paddingLeft: "0!important" }}>
          <Grid.Item text='文字'>
            1
          </Grid.Item>
          <Grid.Item text='文字'>
            2
          </Grid.Item>
          <Grid.Item text='文字'>
            3
          </Grid.Item>
          <Grid.Item text='文字'>
            4
          </Grid.Item>
          <Grid.Item text='文字'>
            5
          </Grid.Item>
          <Grid.Item text='文字'>
            6
          </Grid.Item>
        </Grid>
      </View>
    </ConfigProvider>
  )
}

export default Index
