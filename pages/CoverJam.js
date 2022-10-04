/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'




export default function CoverJam() {
  return (
    <div className="CoverJam">
      <Head>
        <title>D3G3N | Forms</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className="logo" src='/imgs/MetaLogo.png'/>



        <p> 
        <code>Present by D3G3N</code> <br/> <br/>
          The official Rules found here: <br/>
          <br/>
          Polishing up Rules - Check back soon <br/><br/>

          Stay up to day in Discord
         
        
        </p>

        <p className={styles.description}> 
          The song for the Jam:   <br/><br/><strong>The Metaverse song <br/>
            <code>By JleeWalls</code></strong><br/> <br/>
          The Theme for the Jam:  <br/><br/> <strong>TBA </strong>           {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className="FormContainer">
     <form className="formStyles" action="https://formsubmit.co/CoverJAM@d3g3n.com" method="POST">
        <input type="hidden" name="_subject" value="CoverJAM! - New SIGN UP"/>
        <input type="text" name="Artist Name"  placeholder="Artist Name" required/>
        <input type="email" name="Email" placeholder="Email Address" required/>
        <input type="text" name="Tiwtter"  placeholder="Twitter Handle" required/>
        <input type="text" name="name"  placeholder="Art Style" required/>
        <input type="hidden" name="_autoresponse" value="Thank you for signup! Here's your copy!"/>
 
        <p>Sign Up Deadline: <br/> <strong>October 14th | 12:00PM MST</strong>
        <br/><br/>
        Starts<br/> <strong>October 17th | 8:00AM MST</strong><br/><br/>
        Ends<br/> <strong>October 24th | 9:00PM MST</strong>
        </p>
        
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