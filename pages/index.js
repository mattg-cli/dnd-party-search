import Header from '../components/Header';
import Footer from '../components/Footer';
import Aspect from '../components/Aspect';
import StatCircle from '../components/StatCircle';
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

  const stats = [
    { title: 'Players', number: 42069 },
    { title: 'Groups', number: 57 },
    { title: 'Game Masters', number: 121 },
    { title: 'Placeholder', number: 1 }
  ]

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
      <section className={`text-light shadow-lg py-5 ${styles.statsWrapper}`}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 offset-lg-1">
              <h2 className="mb-0 text-center thin">JOIN THE COMMUNITY</h2>
              
              <div className="row">
                {
                  stats.map((value, index) => {
                    return <StatCircle key={index} title={value.title} number={value.number} />
                  })
                }
              </div>
              
            </div>
          </div>
        </div>
        <div className={styles.statsOverlay}></div>
        <img className={`${styles.statsFeature}`} src="/images/lighthouse.jpg" />
      </section>
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="text-center">
                <h2 className="mb-3 thin">ARE YOU READY?</h2>
                <button className="btn btn-default">Start Your Adventure!</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
