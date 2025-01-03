import { View } from '@tarojs/components'
import './index.scss'

function Index() {
  const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`

  return (
    <View>
      <View className='nutui-react-demo'>
        <View>下面应该显示dangerouslySetInnerHTML的内容</View>
        <View dangerouslySetInnerHTML={{ __html: html }}></View>
        <View>上面应该显示dangerouslySetInnerHTML的内容</View>
      </View>
    </View>
  )
}

export default Index
