import React from 'react'
import cyanButton from "../../Styles"
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
        <cyanButton>Sign Up</cyanButton>
      </div>
    </header>
  )
}
