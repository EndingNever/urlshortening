import React from 'react'
import UrlShortener from "../UrlShortener/UrlShortener"
import { GrayContainer } from '../../Styles'
import Statistics from '../Statistics/Statistics'

export default function Gray() {
  return (
    <GrayContainer>
      <UrlShortener/>
      <Statistics/>
    </GrayContainer>
  )
}
