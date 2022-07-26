import React, { Component } from 'react'

const reservedNotifications =[
  {id:1, header:'알림', message:'안녕하세요0.'},
  {id:2, header:'공지', message:'안녕하세요1.'},
  {id:3, header:'노티', message:'안녕하세요2.'},
  {id:4, header:'안내', message:'안녕하세요3.'},
  {id:5, header:'기타', message:'안녕하세요4.'},
  {id:6, header:'등등', message:'안녕하세요5.'},
  {id:7, header:'아이', message:'안녕하세요6.'},
  {id:8, header:'고많', message:'안녕하세요7.'},
  {id:9, header:'다이', message:'안녕하세요8.'}
];

let timer;

export default class ReservedNotification extends Component {

constructor(props){
  super(props);

  //state 선언 및 초기화

  this.state ={
    notification : [],
  }
}


// 클래스 컴포넌트 생명주기 함수
componentDidMount(){
  const notis = [];

  timer = setInterval(()=>{
    if(notis.length < reservedNotifications.length){
    //inex 0~8
    const index = notis.length;
    //notis 오브젝트 추가
    notis.push(reservedNotifications[index])

    //추가된 오브젝트를 담고 있는 notifications리스트가 업데이트
    this.setState(
      {
        notification: notis
      }
    );
    }else{
      //반복 종료
      clearInterval(timer);
    }
    //
  },1000);

}
  render() {
    return (
      <>
      {
        this.state.notification.map((obj, idx)=>{
          return <notification key={idx} id={obj.id} header={obj.header} message={obj.message}/>
        })
      }
      </>
    );
  }
}
