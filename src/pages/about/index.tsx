import {View} from '@tarojs/components'
import {Image, ConfigProvider} from '@nutui/nutui-react-taro'
import './index.scss'

function Index() {


  return (
    <ConfigProvider>
      <View className='nutui-react-demo'>
        <Image src="https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png"/>

      </View>
    </ConfigProvider>
  )
}

export default Index
