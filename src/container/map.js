import React, { Component } from 'react'
import {Map} from 'react-amap'

const mapKey = '1234567809843asadasd' 

class MapTest extends Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }
    render() {
        return (
            <div style={{width: '100%', height: '400px'}}>
                我的地图
                <Map amapkey={mapKey} 
				     zoom={15}></Map>
            </div>
        )
    }
}

export default MapTest