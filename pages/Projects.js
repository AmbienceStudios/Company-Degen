import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>D3G3N | Projects</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Metaverse
        </h1>

        <p className={styles.description}> 
          Here are a few resrouces to get you started
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          <a href="/Forms" className={styles.card}>
            <h2>Forms &rarr;</h2>
            <p> From music, artwork and more will be found here</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Community &rarr;</h2>
            <p>Learn and share with our community!</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Projects &rarr;</h2>
            <p>Get to know what we have been up to! </p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Metaverse &rarr;</h2>
            <p>
              Experience the virtual worlds we have created! 
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <h1>AmbienceStudios</h1>
          </span>
        </a>
      </footer>
    </div>
  )
}
