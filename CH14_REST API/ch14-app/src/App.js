import logo from './logo.svg';
import './App.css';
import MainPage from './styledComponents/MainPage';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'

/**JS에서 비동기 HTTP 통신
 * Ajax, fetch, axios    //axios 설치
 */

/** REST API
 * (Representational State Transfer)
 *  두 컴퓨터 시스템이 인터넷을 통해
 *  정보를 교환하기 위해 사용하는 인터페이스(구현체는 없고 틀만 있는 것)
 *  HTTP Method : GET, POST, PUT, DELETE
 */


const MyImg = styled.img`
  width:50px;
  border-radius: 100%;
`;


function App() {
  const [posts, setPosts] = useState([]);

  // useEffect(()=>{
  //   axios({
  //     method:'get',
  //     url:'https://jsonplaceholder.typicode.com/photos',
  //   }).then((res)=>{
  //     setPosts(res.data)
  //   })} //방식이 두가지가 있다.
  // ,[]);

  axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => { setPosts(res.data) }).catch((error) => { });

  // useEffect(()=>{    //구조 : useEffect(()=>{axios({}).then().catch();},[])
  //   axios({
  //     method: 'get',
  //     url: 'https://jsonplaceholder.typicode.com/photos',
  //   })
  //   .then((res)=>{
  //     setPosts(res.data);
  //     console.log("hello~~~~~~");
  //   })
  //   .catch((e)=>{console.log(e)});
  // },[])


  return (
    <div className="App">
      <header className="App-header">
        <div className='d-flex' style={{ alignItems: 'center' }}>
          <img src='./imgs/orange.jpg' alt='얄리얄리얄랑성얄라리얄라' style={{ width: 100, height: 100, borderRadius: 100 }} />
          <div className='d-flex'>
            <input className='form-control ml-5' />
            <button className='btn btn-danger ml-1'>Search</button>
          </div>
        </div>
        <div className='container'>
          {/* <span style={{ color: '#999' }}>{`Total: ${posts.length}`}</span>
          <hr />
          <table className='table text-light' style={{ fontSize: '1rem' }}>
            <thead>
              <tr>
                <th scope='col'>No</th>
                <th scope='col'>ID</th>
                <th scope='col'>TITLE</th>
                <th scope='col'>URL</th>
              </tr>
            </thead>
            <tbody>
              {
                posts.map((post, idx) => {
                  return (
                    <tr key={idx}>
                      <th scope='row'>{post.id}</th>
                      <td><MyImg src={post.thumbnailUrl} alt='' /></td>
                      <td>{post.title}</td>
                      <td>{post.url}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table> */}
        </div>
      </header>

      <div id="map" style={{ width:200,height:200 }}></div>

    </div>

  );
}

export default App;
