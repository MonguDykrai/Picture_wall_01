import React from 'react'
import { NavLink as Link } from 'react-router-dom'

export default function PWNavigation(props) {
  return (
    <div className="navigation-container display-flex">
      <div className="nav-left display-flex">
        <Link className="nav-left-link actived" to="/">Home</Link>
        <a className="nav-left-link" href="javascript:void (0);">Latest Wallpapers</a>
        <a className="nav-left-link" href="javascript:void (0);">Hot Wallpapers</a>
        <a className="nav-left-link" href="javascript:void (0);">Categories</a>
      </div>
      <div className="nav-right display-flex">
        <a className="nav-right-link" href="javascript:void (0);">Login</a>
        <a className="nav-right-link" href="javascript:void (0);">Register</a>
      </div>
    </div>
  )
}