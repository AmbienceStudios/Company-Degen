/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'





export default function CoverJam() {

   const [deadline, setDeadline] =useState(false)
   const [days, setDays] = useState(0)
   const [hours, setHours] = useState(0)
   const [minutes, setMinutes] = useState(0)
   const [seconds, setSeconds] = useState(0)

   useEffect(() => {

    const target = new Date("10/31/2022 17:00:00")
    const subTarget = new Date("10/20/2022 12:00:00")
    // const target = new Date("10/18/2022 20:00:00")
      const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24 ))
      setDays(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24 )) / (1000* 60 * 60)
      );
      setHours(h)

      const m = Math.floor(
        (difference % (1000 * 60 * 60 )) / (1000* 60 )
      );
      setMinutes(m)

      const s = Math.floor(
        (difference % (1000 * 60)) / 1000)
      setSeconds(s)

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0){
        setDeadline(true);
      }

      }, 1000)

      return () => clearInterval(interval)
   }, [])

  return (
    <div className="CoverJam">
      <Head>
        <title>The Metaverse Song Cover Jam | D3G3N </title>
        <meta name="description" content="Using blockchain technology, we will showcase YOUR ORIGINAL WORK as the Cover Art of the OFFICIAL MINT release of THE METAVERSE SONG!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className='navbar'>
      <a  href="/">
      <img className='header-logo' src='/imgs/logo.png' alt="logo"/></a>

          <ul className='navbarList Details'>
            {/* <li>About</li> */}
        
            <a href="#Info"><li>Information</li></a>
            <a href="#Theme" ><li>Theme</li></a>
            <a href="#GetStarted"><li>Get Started</li></a>
            <a href="#Rules"><li>Rules</li></a>
            <a href="#ArtSpecs" ><li>Art Specs</li></a>
            <a href="#Submission"><li>Submit Artwork</li></a>
     
            
          </ul>
          <div className="smartButtons-header">
          {/* <button>Connect</button> */}
          {/* <button className='iconBtn'>Gift</button> */}
          </div>
        </nav>

        <div className='sectionMargin'></div>
      <main className={styles.main}>
  
      <div className='sectionMargin'></div>
      <a href="/">
      <img className='mheader-logo2' src='/imgs/logo.png' alt="logo"/></a>
        <img className="logo" src='/imgs/MetaLogo.png' alt=""/>

        <p><code> Artist : JleeWalls </code><br/>
      <code> Producer : JleeWalls </code><br/>
        <code> Engineer : Freequency </code>
        <br/><br/><br/>
        </p>

        {deadline ? ( <h1> Submissions Closed </h1> ) : (

        <div className='timer-wrapper'>
          <div className='timer-inner'>
            <div className='timer-segment'>
              <p className='time'>{days}</p>
              <p className='label'>Days</p>
            </div>
            <div className='timer-segment'>
              <p className='time'>{hours}</p>
              <p className='label'>Hours</p>
            </div>
            <div className='timer-segment'>
              <p className='time'>{minutes}</p>
              <p className='label'>Minutes</p>
            </div>
            <div className='timer-segment'>
              <p className='time'>{seconds}</p>
              <p className='label'>Seconds</p>
            </div>
          </div>
        </div>

        )}
<div className='sectionMargin'></div>
<a  id="Info" href="#Submission" target="blank"><button> Start Submission</button></a>

<div  className='sectionMargin'></div>

        <img  className="logo" src='/imgs/Info.png' alt=""/>



        <p id="Theme"  className="Details"> 
        <code>Presented by D3G3N</code> <br/> <br/>
        GM & Hello everyone! We are so happy and grateful that you have chosen to collaborate with us! <br/> <br/>

        For her own personal enjoyment, JLee Walls wrote the Metaverse Song utilizing touch screen technology and GarageBand for free on her iPhone. As most singers and songwriters do, she would refer to it as her diary entry.   <br/> <br/>

Since earlier this year, morale in the 1/1 artists space has declined, and the bear market has begun to show itself. It was JLee&apos;s determination to uplift others through the narrative and empathy infused lyrics of The Metaverse Song that led her to begin performing the song. <br/> <br/>

 Over the last several months, it has evolved into the version you have come to know and love today. Its LIVE guitar version was written way late into the night in a degen space. <br/> <br/>

 JLee felt like it was a meaningful way to show her love and appreciation for ALL of her brand-new frens and fellow creatives in the space because of all the support and love she has received on Twitter. By collaborating, we would INCLUDE their works on The Metaverse Song&apos;s official drop. <br/> <br/> We would attach it to the ERC Token, render it, and mint it onto the Ethereum blockchain as a rarity trait.  <br/> <br/>

         
        
        </p>

        <img className="logo" src='/imgs/THEME.png' alt=""/>

        <p id="GetStarted" className="Details"> 
        <code>ART OF THE METAVERSE</code> <br/> <br/>
        Bring your art to life by creating a world that highlights it<br/> <br/>
    </p>
        <img  className="logo" src='/imgs/START.png' alt=""/>


      <p  id="Rules" className="Details">
      Using blockchain technology, we will showcase YOUR ORIGINAL WORK as the Cover Art of the OFFICIAL MINT release of THE METAVERSE SONG! 
<br/> <br/>

Each cover art will have a &apos;The Metaverse Song&apos; title, and the Metaverse song will be attached and rendered with each non-fungible token. <br/> <br/>

A total of 10,000 versions of the Metaverse Song will be generated from 300 1 of 1 Artist Submissions from our Twitter NFT Community! <br/> <br/>

      </p>



      <img  className="logo" src='/imgs/rules.png' alt=""/>


<p className="Details">

<strong>The submissions open:</strong> <br/> October 20th at 12:00 PM MST <br/> <br/>
<strong>The submissions closing:</strong> <br/> October 31st at 12:00 PM MST <br/> <br/>

<strong>The verification process will be from:</strong><br/>
 November 1st - November 15th 2022<br/> <br/>


 You will need to provide an Artist Wallet to be able to be added to Smart Contracts for the Metaverse Song Royalties, the airdrop of your collaboration participation token to connect to our artist support and spotlight platform, and other future perks along the roadmap, which will be revealed to you after we have closed the submission process and validated the submitted artworks etc. <br/><br/> ** please submit the public address 0x12345678..1110 <br/> not your ens domain name **<br/> <br/>


</p>

<h1>&#9989; Allowed</h1>
<ul className='list'>
  <li className='list'> &#9989; Hand-Drawn - Polished Version </li>
  <li className='list'> &#9989; Digital Illustration - Polished Version  </li>
  <li className='list'> &#9989; 2D Renderings  </li>
  <li className='list'> &#9989; 3D Renderings  </li>
  <li className='list'> &#9989; AI-Generated Artwork will be allowed in this submission IF you have permissions from the platform/site used to create the AI Artworks,which must be provided, OR your AI image has been manually polished by YOU, the ARTIST</li>
</ul>

<h1>&#9940; Not Allowed</h1>
<ul  id="ArtSpecs" className='list'>
  <li className='list'> &#9940; Copyrighted Images </li>
  <li className='list'> &#9940; No Logos or other company related branding in submission  </li>
  <li className='list'> &#9940; 3D assets purchased from 3D websites without credits </li>
  <li className='list'> &#9940;  Anything derogatory towards any race, gender, culture, etc.. </li>
  <li className='list'> &#9940;  Artworks that have already been minted onto the Blockchain, or posted and currently visible on any social platforms that will come up in a reverse image search.  </li>

</ul>

<div className='sectionMargin'></div>

<img  className="logo" src='/imgs/ART.png' alt=""/>

<div className='sectionMargin'></div>
<h1>Final Output</h1>
<p className='Details'>
<strong>Cover Art Canvas Size:</strong> <br/>w: 1,600px / h: 1,600px <br/> <br/>
<strong>DPI:</strong> <br/> 72<br/> <br/>
<strong>File Type:</strong> <br/> PNG<br/> <br/>
<strong>Color Mode:</strong> <br/> RGB<br/> <br/>




</p>
<div className='sectionMargin'></div>

<img id="Submission" className="logo" src='/imgs/Submit.png' alt=""/>
<div className='sectionMargin'></div> 


        <div className="FormContainer">
     <form className="formStyles center" action="https://formsubmit.co/AmbienceXYZ@gmail.com" method="POST">
        <input type="hidden" name="_subject" value="CoverJAM! - New SIGN UP"/>
        <input type="text" name="Artist Name"  placeholder="Artist Name" required/>
        <input type="text" name="Artist Metamask Wallet" placeholder="Artist Metamask Wallet" required/>
        <input type="text" name="Twitter"  placeholder="Artist Twitter Handle" required/>
        <input type="email" name="email"  placeholder="Email Address" required/>
        {/* <input type="email" name="email-verify" pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" placeholder="Verify Email Address" required/> */}
        
        <h1>Upload Cover Art</h1>
        <p>To prove ownership and keep a time-stamp on when you first uploaded the cover art,  <br/> we recommend hosting your cover art on a decentralized hosting server. <br/> <br/> Although we aren&apos;t affiliated with this company,  <br/> here&apos;s an example to get started hosting your artwork file:</p>

        <a  href="https://www.storj.io/" target="blank"><button> STORJ Hosting </button></a>

        <p>Paste Artwork URL below </p>
        <input type="text" name="Artwork" placeholder='https://link.storjshare.io/jxcw6qqr64voi4zjjq4hykaq7mwa/metaverse-song-covers%2FUntitled-3.png'></input>
        
        <input type="hidden" name="_autoresponse" value="Thank you for signup! Here's your copy!"/>
        
        
        
        
        <div>

        <label for="ArtStyle"><h1>Are you the artist?</h1></label>
       
            
        <select name="user" id="userID" size="1">
          <option>Yes</option>
          <option>No</option>

        </select>
          
        <label for="ArtStyle"><h1>Art Style</h1></label>
                  <select name="ArtStyle" id="ArtStyle" multiple>
                    <option value="Hand Drawn">Hand Drawn</option>
                    <option value="Digital Illustration">Digital Illustration</option>
                    <option value="2D Graphics">2D Graphics</option>
                    <option value="audi">3D Render</option>
        </select>


              <label for="subscribeNews"><p>By checking this box, you agree to that you are the ORIGINAL creator of the artwork submitted and <br/> that you give D3G3N full permission to use it in the Metaverse Song Cover Art Collaboration Project.</p></label>
              <input
                type="checkbox"
                id="subscribeNews"
                name="Agreement"
                value="I agreed that I allow D3G3N to use my cover art for the Metaverse Song Cover NFT Drop"
                required />
   
        </div>
       
             <button type="submit">Send</button>
             
    </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
        >
        Home
        </a>
      </footer>
    </div>
  )
}
