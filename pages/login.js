import Header from '../components/Header';
import styles from '../styles/Login.module.css'

export default function Login() {

  return (
    <div>
      <Header />
      <section className={`vh-100 ${styles.background}`}>
        <div className="container vh-100">
          <div className="row">
            <div className="col-12 vh-100">
              <div className="row h-100 justify-content-center align-items-center">
                <div className={`col-10 col-md-8 col-lg-4 bg-dark-overlay-90 text-light ${styles.loginBoxBorder}`}>
                  <div className="px-3 py-4">
                    <h4 className="display-4 text-center">LOGIN</h4>
                    <form className="pb-3">
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="email@example.com" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="pwd">Password</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Password" />
                      </div>
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                        <label className="form-check-label" htmlFor="dropdownCheck">
                          Remember me
                        </label>
                      </div>
                      <div className="text-center pt-3">
                        <button type="submit" className="btn btn-default w-100">Login</button>
                      </div>
                    </form>
                    <a href="/register">New around here? Register</a>
                    <br />
                    <a href="#">Forgot password?</a>
                    {/* <div className="separator">OR</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}