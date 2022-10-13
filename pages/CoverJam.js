/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'




export default function CoverJam() {
  return (
    <div className="CoverJam">
      <Head>
        <title>The Metaverse Song Cover Jam | D3G3N </title>
        <meta name="description" content="the best way to show her love and appreciation for ALL of her new Frens and Fellow Creatives in the space, would be to INCLUDE them in the drop of The Metaverse Song via COLLABORATION" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className="logo" src='/imgs/MetaLogo.png'/>
        <div className='marginSection'></div>

        

        <img className="logo" src='/imgs/Info.png'/>

        <p className="Details"> 
        <code>Present by D3G3N</code> <br/> <br/>
        Hey Everyone!! GM!  We feel SO happy and SO grateful that YOU have decided to collaborate with us!  <br/> <br/>

The Metaverse Song was Originally written by JLee Walls back in july of 2021, using touch screen technology and the free iphone app GarageBand for her own personal enjoyment, JLee would refer to it as her diary entry, as most singers and songwriters do.  <br/> <br/>

As morale in the space for 1/1 artists seemed to decline, and the bear market began to show itself earlier this year, JLee felt inspired to begin performing The Metaverse Song to uplift others with the songs narrative and empathy infused lyrics, and quickly composed the LIVE guitar version way late into the night in a degen space, which has over the last several months transformed into the version that You have all come to know and love Today!  <br/> <br/>

Because of all of the support and love that she has received from our NFT Community on Twitter, JLee felt like the best way to show her love and appreciation for ALL of her new Frens and Fellow Creatives in the space, would be to INCLUDE them in the drop of The Metaverse Song via COLLABORATION by featuring their 1/1 Artworks as a rarity trait on the OFFICIAL DROP of The Metaverse Song, attached to the ERC Token, render and MINT it onto the Ethereum Blockchain!  <br/> <br/>

         
        
        </p>

        <img className="logo" src='/imgs/THEME.png'/>

        <p className="Details"> 
        <code>SOUND OF THE METAVERSE</code> <br/> <br/>
        How would you invision the future of the world?  <br/> <br/>
    </p>
        <img className="logo" src='/imgs/START.png'/>


      <p className="Details">
      The form below is for submitting YOUR ARTWORK for the OFFICIAL MINT release of THE METAVERSE SONG, showcasing YOUR ORIGINAL WORK as the Cover Art, using Blockchain Technology! <br/> <br/>

There will be a “The Metaverse Song”  Title on each cover art, and the Metaverse song attached and rendered with each non fungible token. <br/> <br/>

We will be accepting 300 1 of 1 Artist Submissions from our Twitter NFT Community, to generate 10,000 versions of the Metaverse Song! <br/> <br/>

      </p>



      <img className="logo" src='/imgs/rules.png'/>


<p className="Details">

<strong>The submissions open:</strong> <br/> October 14th at 12:00 PM MST <br/> <br/>
<strong>The submissions closing:</strong> <br/> October 31st at 12:00 PM MST <br/> <br/>

<strong>The verification process will be from:</strong><br/>
 November 1st - November 15th 2022<br/> <br/>

The Cover Art will follow <strong>#THEMETAVERSESONG </strong>Theme!<br/> <br/>

 that will be announced on FRIDAY October 12th before 12:00 PM MST via our Website, Twitter post on @D3generous and retweeted by @JleeWalls and @Freequency and official rules will be posted in Discord. <br/> <br/>

Artist Wallet will be needed to be able to be added to Smart Contract for the Metaverse Song Royalties, for the airdrop of your collaboration participation token, to allow you as an artist to connect to our artist support and spotlight platform and other future perks along the roadmap that will be revealed to you after we have closed the submission process, and had time to validate the submitted artworks etc. (please submit the public
 i.e. 0x12345678..1110 not your ens domain name)<br/> <br/>

Entry content must be original and not purchased from Asset Marketplaces or other sources. Please allow the artist to use the creative resources they have available to create something that is original for the entry  <br/> <br/>

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
<ul className='list'>
  <li className='list'> &#9940; Copyrighted Images </li>
  <li className='list'> &#9940; No Logos or other company related branding in submission  </li>
  <li className='list'> &#9940; 3D assets purchased from 3D websites without credits </li>
  <li className='list'> &#9940;  Anything derogatory towards any race, gender, culture, etc.. </li>
  <li className='list'> &#9940;  Artworks that have already been minted onto the Blockchain, or posted and currently visible on any social platforms that will come up in a reverse image search.  </li>

</ul>

<div className='marginSection'></div>

<img className="logo" src='/imgs/Submit.png'/>

<div className='marginSection'></div> 

        <div className="FormContainer">
     <form className="formStyles" action="https://formsubmit.co/CoverJAM@d3g3n.com" method="POST">
        <input type="hidden" name="_subject" value="CoverJAM! - New SIGN UP"/>
        <input type="text" name="Artist Name"  placeholder="Artist Name" required/>
        <input type="text" name="Artist Metamask Wallet" placeholder="Artist Metamask Wallet" required/>
        <input type="text" name="Twitter"  placeholder="Artist Twitter Handle" required/>
        <input type="hidden" name="_autoresponse" value="Thank you for signup! Here's your copy!"/>
 
       
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
