import Header from '../components/Header';
import Footer from '../components/Footer';
import Aspect from '../components/Aspect';
import CountUp from 'react-countup';
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  const aspects = [
    {
      title: "Create An Account",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      icon: 'fas fa-user-plus'
    },
    {
      title: "Preferences",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      icon: 'fas fa-sliders-h'
    },
    {
      title: "Find A Party",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      icon: 'fas fa-users'
    },
    {
      title: "Roll Initiative",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      icon: 'fas fa-dice-d20'
    }
  ];

  return (
    <div>
      <Header />
      <section className={`py-5 shadow-lg ${styles.banner}`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="jumbotron mb-0 bg-none">
              <h1 className="display-4">YOUR ADVENTURE AWAITS!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <button className="btn btn-default">START YOUR ADVENTURE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`py-5`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="mb-0 pb-5 text-center thin">HOW IT WORKS</h2>
            </div>
          </div>
          <div className="row">
            {
              aspects.map((value, index) => {
                return <Aspect key={index} title={value.title} description={value.description} icon={value.icon} />
              })
            }
          </div>
        </div>
      </section>
      <section className={`text-light py-5 ${styles.statsWrapper}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-1">
              <h2 className="mb-0 text-center thin">JOIN THE COMMUNITY</h2>
              <div className="row">
                <div className="col-md-6 text-center">
                  <h4 className="mb-2 mt-5">PLAYERS</h4>
                  <div className={`${styles.counterCircle} flex align-items-center justify-content-center`}>
                  <CountUp start={0} end={42069} separator="," delay={0}>
                    {({ countUpRef }) => (
                      <div className="d-flex align-items-center justify-content-center w-100 h-100">
                        <p className="mb-1 font-weight-bold" ref={countUpRef}></p>
                      </div>
                    )}
                  </CountUp>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <h4 className="mb-2 mt-5">GROUPS</h4>
                  <div className={`${styles.counterCircle} flex align-items-center justify-content-center`}>
                  <CountUp start={0} end={57} delay={0}>
                    {({ countUpRef }) => (
                      <div className="d-flex align-items-center justify-content-center w-100 h-100">
                        <p className="mb-1 font-weight-bold" ref={countUpRef}></p>
                      </div>
                    )}
                  </CountUp>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <h4 className="mb-2 mt-5">GAME MASTERS</h4>
                  <div className={`${styles.counterCircle} flex align-items-center justify-content-center`}>
                  <CountUp start={0} end={121} separator="," delay={0}>
                    {({ countUpRef }) => (
                      <div className="d-flex align-items-center justify-content-center w-100 h-100">
                        <p className="mb-1 font-weight-bold" ref={countUpRef}></p>
                      </div>
                    )}
                  </CountUp>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <h4 className="mb-2 mt-5">HOMES</h4>
                  <div className={`${styles.counterCircle} flex align-items-center justify-content-center`}>
                  <CountUp start={0} end={1} separator="," delay={0}>
                    {({ countUpRef }) => (
                      <div className="d-flex align-items-center justify-content-center w-100 h-100">
                        <p className="mb-1 font-weight-bold" ref={countUpRef}></p>
                      </div>
                    )}
                  </CountUp>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className={styles.statsOverlay}></div>
        <img className={`${styles.statsFeature}`} src="/images/lighthouse.jpg" />
        
      </section>
      {/* <section className={`py-5 shadow-lg text-light ${styles.statsWrapper}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 offset-md-2">
              test
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  )
}
