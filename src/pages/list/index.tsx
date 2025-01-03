
import Taro from "@tarojs/taro";
import {View} from '@tarojs/components'
import {Cell} from "@nutui/nutui-react-taro";

import './index.scss'

function Index() {


  return (
    <View>
      <Cell title='grid_item' onClick={() => Taro.redirectTo({ url: '/pages/grid_item/index'})} />
      <Cell title='infinite_loading' onClick={() => Taro.redirectTo({ url: '/pages/infinite_loading/index'})} />
      <Cell title='inner_html' onClick={() => Taro.redirectTo({ url: '/pages/inner_html/index'})} />
      <Cell title='tailwindcss' onClick={() => Taro.redirectTo({ url: '/pages/tailwindcss/index'})} />
    </View>
  )
}

export default Index
