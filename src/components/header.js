import React from 'react'

const header = () => {
  return (
    <div className="navBar">
      Rockets and Missions
    <ul className="navbar-menu">
        <li><link to="/">rockets</link></li>
        <li><link to="/missions">Missions</link></li>
        <li><link to="/myProfile">MyProfile</link></li>
    </ul>
</div>
  )
}

export default header
