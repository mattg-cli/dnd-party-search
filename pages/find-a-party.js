import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link'
import styles from '../styles/FindAParty.module.css'

export default function Home() {
  return (
    <section className={`${styles.findAPartyBackground}`}>
      <Header />
      <div className="container">

        <div className="row vh-100">
          <div className="col">
            <div className="jumbotron mb-0 bg-none text-center">
              <h1 className="display-4">Find A Party!</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            search and advanced search
          </div>
        </div>

        <div class="row">
          <div class="col">
            listings
          </div>
        </div>

      </div>
      <Footer />
    </section>
  )
}