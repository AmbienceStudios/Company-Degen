
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Welcome Degen!  </title>
        <meta name="description" content="A platform built for creatives to express their world" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

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


      <main className={styles.main}>



  <section className='hero-section'>
  <div className='hero'>
    
  <img className='mheader-logo' src='/imgs/logo.png' alt="logo"/>
  <div className='msectionMargin'></div>
    <a  href="/MetaverseCoverArt">
    <button className='enter'>Enter</button></a>
    <img className="logo4" src='/imgs/MetaLogo.png' alt=""/>
    
  </div>

{/* 
       <h1>MINT YOUR STYLE</h1>
<div class="container">
  <div class="product">
    <div class="effect-1"></div>
    <div class="effect-2"></div>
    <div class="content">
      <div class="exercise"></div>
    </div>
    <span class="title">
      Exercise
      <span>Boost Endorphins</span>
    </span>
  </div>
  <div class="product">
    <div class="effect-1"></div>
    <div class="effect-2"></div>
    <div class="content">
      <div class="sleep"></div>
    </div>
    <span class="title">
      Sleep
      <span>Restore Balance</span>
    </span>
  </div>
  <div class="product">
    <div class="effect-1"></div>
    <div class="effect-2"></div>
    <div class="content">
      <div class="meditation"></div>
    </div>
    <span class="title">
      Meditation
      <span>Practice gratitude</span>
    </span>
  </div>
</div> */}



  </section>

  <section id="About" className='about-container'>
      <div className='about-section'>
        <div className='history-section'>
          <h1 className='left section-title'> 
            HOW IT STARTED
            {/* <code className={styles.code}>pages/index.js</code> */}
          </h1>
            <p className='left'>D3G3N is a network of creative and talented people who want and need a safe place to create, collaborate, and network. It was originally founded by Jleewalls with the purpose of learning how to make a profit in the NFT space by degening and representing being a degen. The goal was to have a tower or space that represented what degens are about and onboard users into the metaverse/NFT community.
<br/><br/>
For the time being, D3G3N will be known as an onboarding platform to help users get familiar with the NFT’s and Metaverse while building out the platforms that will be used to create new journeys.</p> 
        </div>
        <div className='image-section'>
             <div className='imageSlider'>
             
             </div>
        </div>
        </div>
        <div className='partner-section'>
        <h1 className='left'> 
           WE BUILD FOR
            {/* <code className={styles.code}>pages/index.js</code> */}
        </h1>
        <div className='partner-tiles'>

          <a href="https:\\www.metavate.io" target="_blank" rel="noreferrer">
        <div className='tiles metavatePartner'></div></a>
          <div className='tiles'><br/>🔒</div>
          <div className='tiles'><br/>🔒</div>
          <div className='tiles'><br/>🔒</div>
          <div className='tiles'><br/>🔒</div>
        </div>


        </div>

  </section>

    <section id="Exp" className='xp-container'>
      <div className='xp-main'>
      <div className='header-style'>
      <h1 className='left'> 
            EXPERIENCES
            {/* <code className={styles.code}>pages/index.js</code> */}
      </h1>
      <h5 className='left'> 
      THE VIRTUAL BUILDS WE&apos;VE CREATED
            {/* <code className={styles.code}>pages/index.js</code> */}
      </h5>
      </div>
      <div className='xp-tiles'>
      <a href="https:\\www.d3g3n.games" target="_blank" rel="noreferrer">
        <div className='tiles-2 degenMetaverse2'></div></a>
        <a href="https:\\www.metavate.io" target="_blank" rel="noreferrer">
        <div className='tiles-2 metavateMetaverse2'></div></a>
        <div className='tiles-2'><br/>🔒<br/><br/><p>REQUIRES<br/> SILVER TOKEN</p></div>
        <div className='tiles-2'><br/>🔒<br/><br/><p>REQUIRES<br/> GOLD TOKEN</p></div>
        <div className='tiles-2'><br/>🔒<br/><br/><p>REQUIRES<br/> DIAMOND TOKEN</p></div>
      </div>
      {/* <button> View More </button> */}
      </div>


    </section>


    <section id="Events" className='xp-container'>
      <div className='xp-main'>
      <div className='header-style'>
      <h1 className='left'> 
            EVENTS
            {/* <code className={styles.code}>pages/index.js</code> */}
      </h1>
      <h5 className='left'> 
      DIGITAL + REAL LIFE
            {/* <code className={styles.code}>pages/index.js</code> */}
      </h5>
      </div>
      <div className='xp-tiles'>
        
      <a href="/MetaverseCoverArt" target="blank">
        <div className='tiles-2 metaverseSong'></div></a>
        <div className='tiles-2'><br/>🔒<br/><br/><p>MUSIC FESTIVAL<br/>IRL/METAVERSE</p></div>
        <div className='tiles-2'><br/>🔒<br/><br/><p>REQUIRES<br/> SILVER TOKEN</p></div>
        <div className='tiles-2'><br/>🔒<br/><br/><p>REQUIRES<br/> GOLD TOKEN</p></div>
        <div className='tiles-2'><br/>🔒<br/><br/><p>REQUIRES<br/> DIAMOND TOKEN</p></div>
      </div>
      {/* <button> View More </button> */}
      </div>


    </section>


    <section id="Services" className='xp-container3'>
      <div className='xp-main'>
      <div className='header-style'>
      <h1 className='left'> 
            SERVICES
            {/* <code className={styles.code}>pages/index.js</code> */}
      </h1>
      <h5 className='left'> 
      WHAT WE DO
            {/* <code className={styles.code}>pages/index.js</code> */}
      </h5>
      </div>
      <div className='xp-tiles'>
        <div className='tiles-3'>

          <div className='icon1'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5V204.7c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7V413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3V294.7c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3V92.5c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2V152.6L392 121v89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4V354.8L256 323.2v95.9l-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1V354.8L528 323.2v90.7c0 3.2-1.9 6-4.8 7.3z"/></svg>
          </div>

          <h1>3D DEVELOPMENT</h1>
          {/* <p> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.  </p> */}
          {/* <button> View More </button> */}
        </div>
        <div className='tiles-3'>
    
      <div className='icon1'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 248c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zm-24 56c0 22.1-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"/></svg>
          </div>
          <h1>GAME PRODUCTION</h1>
          {/* <p> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.  </p> */}
          {/* <button> View More </button> */}
        </div>


        <div className='tiles-3'>
      
 
        <div className='icon1'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M576 64H64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H184.4c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4H576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM224 240c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm256 64c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>


          </div>



          <h1>VIRTUAL PRODUCTION</h1>
          {/* <p> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.  </p> */}
          {/* <button> View More </button> */}
        </div>
        <div className='tiles-3'>
        <div className='icon1'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M184 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zM568 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm8 157.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 160c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"/></svg>
        </div>
          <h1>MARKETING</h1>
          {/* <p> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.  </p> */}
          {/* <button> View More </button> */}
        </div>
        <div className='tiles-3'>
        <div className='icon1'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
        </div>
          <h1>METAVERSE + WEB DEV</h1>
          {/* <p> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.  </p> */}
          {/* <button> View More </button> */}
        </div>
        <div className='tiles-3'>
        <div className='icon2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M151.2 69.7l55.9 167.7-11 33.1c-2.7 8.2-4.1 16.7-4.1 25.3V464c0 14.5 3.9 28.2 10.7 39.9C195 509 185.9 512 176 512H48c-26.5 0-48-21.5-48-48V270.5c0-9.5 2.8-18.7 8.1-26.6l47.9-71.8c5.3-7.9 8.1-17.1 8.1-26.6V128 54.3 48C64 21.5 85.5 0 112 0h4.5c.2 0 .4 0 .6 0c.4 0 .8 0 1.2 0c18.8 0 34.1 9.7 44.1 18.8C171.6 27.2 190.8 40 224 40s52.4-12.8 61.7-21.2C295.7 9.7 311 0 329.7 0c.4 0 .8 0 1.2 0c.2 0 .4 0 .6 0H336c26.5 0 48 21.5 48 48v6.3V128v17.5c0 9.5 2.8 18.7 8.1 26.6l47.9 71.8c5.3 7.9 8.1 17.1 8.1 26.6V464c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V295.8c0-5.2 .8-10.3 2.5-15.2L296.8 69.7C279.4 79.7 255.4 88 224 88s-55.4-8.3-72.8-18.3zM96 456c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40zM63.5 255.5c-4.7 4.7-4.7 12.3 0 17L79 288 63.5 303.5c-4.7 4.7-4.7 12.3 0 17s12.3 4.7 17 0L96 305l15.5 15.5c4.7 4.7 12.3 4.7 17 0s4.7-12.3 0-17L113 288l15.5-15.5c4.7-4.7 4.7-12.3 0-17s-12.3-4.7-17 0L96 271 80.5 255.5c-4.7-4.7-12.3-4.7-17 0zM304 280v8 32c0 8.8 7.2 16 16 16h32 8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
        </div>
          <h1>IRL + DIGITAL FASHION </h1>
          {/* <p> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.  </p> */}
          {/* <button> View More </button> */}
        </div>
      </div>
      {/* <button> View More </button> */}
      </div>


    </section>



    <section id="Team" className='xp-container2'>
      <div className='xp-main'>
      <div className='header-style'>
      <h1 className='left'> 
            CORE TEAM
            {/* <code className={styles.code}>pages/index.js</code> */}
      </h1>
      <h5 className='left'> 
      MADE POSSIBLE BY DEDICATED MEMBERS
            {/* <code className={styles.code}>pages/index.js</code> */}
      </h5>
      </div>
      <div className='xp-tiles'>
        <div className='tiles-4'>
        <div className='pfp2 '>
        <div className='outer-circle'>
        
        {/* <div className='pfp'> */}
       <div class="inner-circle jlee">  
           </div>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
       {/* </div> */}
       </div>


        </div>
          <h1>JLEE WALLS</h1>
          {/* <p> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.  </p> */}
          {/* <button> View Portal </button> */}
        </div>
        <div className='tiles-4'>
        <div className='pfp2 free'>
        <div className='outer-circle'>
        
        {/* <div className='pfp'> */}
       <div class="inner-circle free">  
           </div>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
       {/* </div> */}
       </div>
        </div>
          <h1>FREEQUENCY</h1>
          {/* <p> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.  </p> */}
          {/* <button> View Portal </button> */}
        </div>
        <div className='tiles-4'>
        <div className='pfp2 '>
        <div className='outer-circle'>
        
        {/* <div className='pfp'> */}
       <div class="inner-circle strudel">  
           </div>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
       {/* </div> */}
       </div>
        </div>
          <h1>STRUDEL</h1>
          {/* <p> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.  </p> */}
          {/* <button> View Portal </button> */}
        </div>
        <div className='tiles-4'>
        <div className='pfp2 '>
        <div className='outer-circle'>
        
        {/* <div className='pfp'> */}
       <div class="inner-circle nat">  
           </div>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
       {/* </div> */}
       </div>
        </div>
          <h1>NAT 3D</h1>
          {/* <p> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.  </p> */}
          {/* <button> View Portal </button> */}
        </div>

      </div>
      {/* <button> View More </button> */}
      </div>


    </section>





    <section id="Community" className='xp-container5'>
      <div className='xp-main'>
      <div className='header-style'>
      <h1 className='left'> 
            COMMUNITY
            {/* <code className={styles.code}>pages/index.js</code> */}
      </h1>
      <h5 className='left'> 
      JOIN THE CONVERSATION!
            {/* <code className={styles.code}>pages/index.js</code> */}
      </h5>
      </div>
      <div className='xp-tiles'>
        <div className='tiles-3'>
              <div className='icon1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>
              </div>
          <h1>COMMUNITY + FAQ </h1>
          {/* <p> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.  </p> */}
          <a href="https://discord.gg/yR7pAUxz5s" target="_blank" rel="noreferrer"><button> Discord</button></a>
         
        </div>
        <div className='tiles-3'>
        <div className='icon1'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
        </div>
          <h1>FOLLOW US </h1>
          {/* <p> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.  </p> */}
          <a href="https://twitter.com/d3g3nerous" target="_blank" rel="noreferrer"> <button>Twitter</button></a>
         
       
        </div>
        <div className='tiles-3'>
        <div className='icon3'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480v32h32 64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z"/></svg>
        </div>
          <h1>FREN PORTALS </h1>
          {/* <p> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.  </p> */}
          <button>🔒</button>
        </div>
      
      </div>
      {/* <button> View More </button> */}
      </div>


    </section>


    <section id="RoadMap" className='xp-container2'>
      <div className='xp-main'>
      <div className='header-style'>
      <h1 className='left'> 
            ROAD MAP
            {/* <code className={styles.code}>pages/index.js</code> */}
      </h1>
      <h5 className='left'> 
      THE PAST. THE PRESENT. THE FUTURE
            {/* <code className={styles.code}>pages/index.js</code> */}
      </h5>
      </div>
      <div className='xp-tiles'>
        <div className='tiles-4'>
        <div className='icon4'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>
        </div>
          <h1>PREP: Q1 2022 </h1>
          <p> Rebrand and getting business legal work handled before relaunching to the public.  </p>
        </div>
        <div className='tiles-4'>
        <div className='icon4'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>
        </div>
          <h1>PHASE 1: Q2 2022</h1>
          <p> Rebrand the direction to fit the communities perspective and understand the market. </p>
        </div>
        <div className='tiles-4'>
        <div className='icon4'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>
        </div>
          <h1>PHASE 2: Q3 2022 </h1>
          <p> Polish the build out&apos;s we have to present to public for ready to use access.  </p>
        </div>
        <div className='tiles-4'>
        <div className='icon4'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>
        </div>
          <h1>PHASE 3: Q4 2022  </h1>
          <p> Metaverse Song Released. Testing out Metaverse with our token collectors  </p>
        </div>
        

      </div>
      {/* <button> View More </button> */}
      </div>


    </section>








      </main>

      {/* <footer className={styles.footer}>
     
      </footer> */}
    </div>
  )
}
