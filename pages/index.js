import Header from '../components/Header';
import Footer from '../components/Footer';
import Aspect from '../components/Aspect';
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  const aspects = [
    {
      title: "Aspect #1",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: "Aspect #2",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      icon: 'fas fa-bolt'
    },
    {
      title: "Aspect #3",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      icon: 'fas fa-users'
    },
    {
      title: "Aspect #4",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      icon: 'fab fa-d-and-d'
    }
  ];

  return (
    <div>
      <Header />
      <section className={`py-5 ${styles.banner}`}>
        <div className="container">
          <div className="row">
            <div className="jumbotron mb-0 bg-none">
            <h1 className="display-4">YOUR ADVENTURE AWAITS!</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-4" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <button className="btn btn-default">START YOUR ADVENTURE</button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            {
              aspects.map((value, index) => {
                return <Aspect key={index} title={value.title} description={value.description} icon={value.icon} />
              })
            }
            {/* <Aspect 
              title="Aspect #1" 
              description="test" 
              icon="fa-shield-alt"
            /> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
