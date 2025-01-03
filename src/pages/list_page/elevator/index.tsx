import {useState} from "react";
import Taro, {useDidHide, useDidShow, useLoad, useReady, useUnload} from "@tarojs/taro";
import {Elevator} from "@nutui/nutui-react-taro";

import './index.scss'

type DataListType = { id: number, name: string }[]

type DataType = { title: string, list: DataListType }[]

const Index = () => {
  const [data, setData] = useState<DataType>([])

  const onItemClick = (key: string, item: any) => {
    console.log(key, JSON.stringify(item))
  }

  const onIndexClick = (key: string) => {
    console.log(key)
  }

  const initData = () => {

    const dataList: DataType = []

    // 字母顺序生成数据
    const letters = ['A', 'B', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];

      const itemList: DataListType = []
      for (let j = 0; j < 50; j++) {
        itemList.push({
          name: letter + '-' + j,
          id: j,
        })
      }
      dataList.push({
        title: letter,
        list: itemList
      });
    }
    setData(dataList);
  }

  useLoad((callback) => {
    console.log("ElevatorPage useLoad", callback);
  });

  useDidShow((callback) => {
    console.log('ElevatorPage useDidShow', callback);
  })

  useReady(() => {
    console.log('ElevatorPage useReady')

    Taro.showShareMenu({
      withShareTicket: true,
      showShareItems: ['wechatFriends', 'wechatMoment', 'shareAppMessage', 'shareTimeline']
    })

    initData();
  })


  useDidHide(() => {
    console.log('ElevatorPage useDidHide');
  })

  useUnload(() => {
    console.log('ElevatorPage useUnload');
  })

  return (
    <Elevator
      className='test-elevator5'
      list={data}
      height='600'
      onItemClick={(key: string, item: any) => onItemClick(key, item)}
      onIndexClick={(key: string) => onIndexClick(key)}
    >
      <Elevator.Context.Consumer>
        {(value) => {
          return (
            <>
              <span style={{marginLeft: '15px'}}>{value?.name}</span>
            </>
          )
        }}
      </Elevator.Context.Consumer>
    </Elevator>
  )
}
export default Index
