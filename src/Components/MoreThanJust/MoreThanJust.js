import React from 'react'
import { MoreThanJustContainer } from '../../Styles'
import "./MoreThanJust.scss"
import working from "../../images/working.svg"

export default function MoreThanJust() {
  return (
    <MoreThanJustContainer>
      <div className="left-container">Left</div>
      <div className="right-container">
        <img src={working} alt="" />
      </div>
    </MoreThanJustContainer>
  )
}
