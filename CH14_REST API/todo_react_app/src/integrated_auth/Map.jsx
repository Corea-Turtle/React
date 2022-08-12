import React, { useRef } from 'react'
import { RenderAfterNavermapsLoaded, NaverMap, Marker, loadNavermapsScript } from 'react-naver-maps';

const Map = () => {

  const mapRef = useRef(null)
  const clickHandler = ()=>{
    
  }

  return (
    <div>
      <RenderAfterNavermapsLoaded
        ncpClientId='nnonrapfvp'
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >

        <NaverMap
          mapDivId={'maps'}
          style={{
            width: '100%',
            height: '400px',
          }}
          defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
          defaultZoom={15}
          
        >

        </NaverMap>
      </RenderAfterNavermapsLoaded>
    </div>
  )
}

export default Map