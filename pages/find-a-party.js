import React, { useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link'
import { Collapse, CardBody, Card } from 'reactstrap';
import styles from '../styles/FindAParty.module.css'

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSearch = () => setIsOpen(!isOpen);

  return (
    <div className="bg-light">
      <Header />
      <section className={`${styles.findAPartyBanner}`}>
        <div className="bg-dark-overlay-50 py-5">
          <div className="container">

            <div className="row">
              <div className="col">
                <div className="jumbotron mb-0 bg-none text-center text-light">
                  <h1 className="display-4">Find A Party!</h1>
                  <p className="lead">Journey through the steps below to find your next group of companions!</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className={`py-5 ${styles.filterWrapper}`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="mb-0 thin d-inline">Filter</h3>
              <button className={`btn btn-default mb-1 ml-2 d-inline`} onClick={toggleSearch}>
                <i className="fas fa-search"></i>
              </button>
              {/* <Button color="default" onClick={toggle}>Toggle</Button> */}
              <div style={{borderTop: '3px solid #a00c0c'}}>
                <Collapse isOpen={isOpen}>
                  <Card>
                    <CardBody>
                      <div className="row">
                        <div className="col-lg-3">
                          <label htmlFor="how">How do you want to play?</label>
                          <select className="form-control">
                            <option value="">Any</option>
                            <option value="online">Online</option>
                            <option value="inperson">In Person</option>
                          </select>
                        </div>
                        <div className="col-lg-3">
                          <label htmlFor="role">How do you want to play?</label>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="online" />
                            <label class="form-check-label" for="online">
                              Online
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="inperson" />
                            <label class="form-check-label" for="inperson">
                              In Person
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <label htmlFor="field1">Label 3</label>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                              Default radio
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                            <label className="form-check-label" htmlFor="exampleRadios2">
                              Second default radio
                            </label>
                          </div>
                          <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled />
                            <label className="form-check-label" htmlFor="exampleRadios3">
                              Disabled radio
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <label htmlFor="field1">Label 4</label>
                          <br />
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label class="form-check-label" htmlFor="inlineCheckbox1">1</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label class="form-check-label" htmlFor="inlineCheckbox2">2</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled />
                            <label class="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
                          </div>
                        </div>
                      </div>

                    </CardBody>
                  </Card>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-5 ${styles.resultsWrapper}`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="mb-0 thin text-light">Results</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
            <div class="card">
              <img class="card-img-top" src="..." alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-default">View Party</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}