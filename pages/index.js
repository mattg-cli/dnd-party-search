import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Dnd Party Search
        </h1>
        <div className="container">
          <div className="row">
            <Link href="find-party">
              <div className="col">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title">
                      Find Party
                    </h5>
                  </div>
                </div>
              </div>
            </Link>
            <div className="col">
              <Link href="find-player">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title">
                      Find Player
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
      </main>
      
    </div>
  )
}
