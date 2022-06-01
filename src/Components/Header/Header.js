import React from 'react'
import { CyanButton } from "../../Styles"
import "./Header.scss"
import logo from "../../images/logo.svg"

export default function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="" />
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </nav>
      <div className="login-details">
        <p>Login</p>
        <CyanButton>Sign Up</CyanButton>
      </div>
    </header>
  )
}
