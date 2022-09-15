import React, { useRef } from 'react'
import { RenderAfterNavermapsLoaded, NaverMap, Marker,withNaverMaps} from 'react-naver-maps';

function Map(props) { 
  

  return (
      <RenderAfterNavermapsLoaded
        ncpClientId='nnonrapfvp'
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >

        <NaverMap
          id={'map'+{id}}
          style={{
            width: '100%',
            height: '400px',
          }}
          defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
          defaultZoom={15}
          
        >
          {props.address !== null
          ? props.test.map((ele, idx) => {
              return (
                <Marker
                  // icon={""}
                  key={idx}
                  position={{ lat: ele.lat, lng: ele.lng }}
                  animation={2}
                  onClick={() => {
                    alert('hello');
                  }}
                />
              );
            })
          : null}
        </NaverMap>
      </RenderAfterNavermapsLoaded>
  )
}

export default Map