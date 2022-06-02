import React from 'react'
import { UrlContainer, CyanButton,  } from '../../Styles'

export default function UrlShortener() {
  return (
    <UrlContainer>
      <div className="input-container">
        <input type="text" placeholder='Shorten A Link Here...'/>
        <CyanButton className='input-button'> Shorten it! </CyanButton>
      </div>
    </UrlContainer>
  )
}