
const NavBar = () => {
  return (
    <nav className='navbar'>

    <a  href="/">
    <img className='header-logo' src='/imgs/logo.png' alt="logo"/></a>

        <ul className='navbarList Details'>
          {/* <li>About</li> */}
          <a href="#About"><li>About</li></a>
          <a href="#Exp"><li>Experiences</li></a>
          <a href="#Events" ><li>Events</li></a>
          <a href="#Services"><li>Services</li></a>
          <a href="#Team" ><li>Team</li></a>
          <a href="#RoadMap"><li>Road Map</li></a>
          
        </ul>
        <div className="smartButtons-header">
        {/* <button>Connect</button> */}
        {/* <button className='iconBtn'>Gift</button> */}
        </div>
      </nav>
  )
}

export default NavBar