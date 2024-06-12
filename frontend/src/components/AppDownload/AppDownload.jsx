import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
      <div className='app-download' id='app-download'>
          <p>For anywhere, anytime access download <br/> <span style={{color:"red"}}>Veg-Mania App</span></p>
           <div className='app-download-platform'>
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" /> 
           </div>
      </div>
  )
}

export default AppDownload