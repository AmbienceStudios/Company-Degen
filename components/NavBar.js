
const NavBar = () => {
  return (
    <nav class="navBarContainer blur">
  <div class="navBarMenuContainer">
    
      <div class="navBar-NavigationMenu">

      <div class="navBar-LogoContainer"> 
      <a href="/"><img class="navBar-Logo" src="../imgs/Logo.png" alt="Logo" /></a>
      </div>

      <div class="navbar-Links">
          {/* <a href="/"><h3>Events</h3></a>
          <a href="/"><h3>Articles</h3></a>
          <a href="/"><h3>Merch</h3></a>
          <a href="/"><h3>About Us</h3></a>
          <a href="/"><h3>Contact</h3></a> */}
      </div>

  </div>
    </div>
    <button  class="navBar-ConnectWalletBase">Connect</button>

  </nav>
  )
}

export default NavBar