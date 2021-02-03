import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link'
import styles from '../styles/FindAParty.module.css'

export default function Home() {
  return (
    <div>
      <Header />
      <section className={`${styles.findAPartyBackground}`}>
        <div className="bg-dark-overlay-50 py-5">
          <div className="container">

            <div className="row">
              <div className="col">
                <div className="jumbotron mb-0 bg-none text-center text-light">
                  <h1 className="display-4">Find A Party!</h1>
                  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className={`py-5 ${styles.findAPartySearch}`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="mb-0 pb-1 thin">Search</h2>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div className={styles.searchBox}>
                <div class="row">
                  <div class="col-3">
                    <label htmlFor="field1">Field 1</label>
                    <input type="field1" className="form-control" id="field1" />
                  </div>
                  <div class="col-3">
                    <label htmlFor="field2">Field 2</label>
                    <input type="field2" className="form-control" id="field2" />
                  </div>
                  <div class="col-3">
                    <label htmlFor="field3">Field 3</label>
                    <input type="field3" className="form-control" id="field3" />
                  </div>
                  <div class="col-3">
                    <label htmlFor="field4">Field 4</label>
                    <input type="field4" className="form-control" id="field4" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 justify-content-end">
                    <button className="btn btn-default w-100">FILTER</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="mb-0 pb-5 thin">Listings</h2>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}