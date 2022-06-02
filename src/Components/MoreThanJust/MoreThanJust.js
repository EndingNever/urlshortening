import React from 'react'
import { MoreThanJustContainer, CyanStarted } from '../../Styles'
import "./MoreThanJust.scss"
import working from "../../images/working.svg"

export default function MoreThanJust() {
  return (
    <MoreThanJustContainer>
      <div className="left-container">
        <h1>More than just shorter links</h1>
        <h2>Build your brand's recognition and get detailed insights on how your links are performing.</h2>
        <CyanStarted>Get Started</CyanStarted>
      </div>
      <div className="right-container">
        <img src={working} alt="" />
      </div>
    </MoreThanJustContainer>
  )
}
