import {View} from '@tarojs/components'
import {Grid} from '@nutui/nutui-react-taro'
import './index.scss'

function Index() {

  return (
    <View>
      <View className='nutui-react-demo'>
        <Grid columns={2} gap={50} square style={{paddingLeft: "0!important"}}>
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
    </View>
  )
}

export default Index
