
const About = () => {
  return (
    <section id="About" className='about-container'>
    <div className='about-section'>
      <div className='history-section'>
        <h5>Hello Degen!</h5>
        <h1> 
        Welcome to the community        
        </h1>
     

          <p className='left'>D3G3N is a network of creative and talented people who want and need a safe place to create, collaborate, and network. It was originally founded by Jleewalls with the purpose of learning how to make a profit in the NFT space by degening and representing being a degen. The goal was to have a tower or space that represented what degens are about and onboard users into the metaverse/NFT community.
<br/><br/>
For the time being, D3G3N will be known as an onboarding platform to help users get familiar with the NFT’s and Metaverse while building out the platforms that will be used to create new journeys.</p> 
<button className='enter'>Join the community</button>
    
      </div>

    

      <div className='image-section'>
           <div className='imageSlider'>
           
           </div>
      </div>
      </div>
      <div className='partner-section'>
      <h5 className='center'> 
         Community Partners
          {/* <code className={styles.code}>pages/index.js</code> */}
      </h5>
      <div className='partner-tiles'>

        <a href="https:\\www.metavate.io" target="_blank" rel="noreferrer">
      <div className='metavatePartner'>
        <img src="../imgs/metavate.png" alt="metavate" />
        </div></a>

        <a href="https://supportdistrictradio.com" target="_blank" rel="noreferrer">
      <div className='sdrnPartner'>
        <img src="../imgs/SDRN.png" alt="hashlips" />
        </div></a>

        <a href="/" target="_blank" rel="noreferrer">
      <div className='hashlipsPartner'>
        <img src="../imgs/hashlips.png" alt="hashlips" />
        </div></a>
      
        {/* <div className='tiles'><br/></div>
        <div className='tiles'><br/></div> */}
      </div>


      </div>

</section>

  )
}

export default About