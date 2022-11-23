
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Community from '../components/Community'
import Events from '../components/Events'
import Experiences from '../components/Experiences'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Services from '../components/Services'
import Team from '../components/Team'
import Roadmap from '../components/Roadmap'
import styles from '../styles/Home.module.css'




export default function Home() {
  return (
    <div id="scrollbar-wrapper">
      <Head>
      <title>Welcome Degen!  </title>
        <meta name="description" content="A platform built for creatives to express their world" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

  

      <NavBar/>

    
    <div class="scrollbar" id="style-4">
      <div class="force-overflow"></div>
    </div>

      <main className={styles.main}>
        <Hero/>
        <About/>
        <Experiences/>
        {/* <Events/> */}
        <Services/>
        <Team/>
        {/* <Community/> */}
        <Roadmap />
      </main>

      <Footer/>
     
    </div>
  )
}
