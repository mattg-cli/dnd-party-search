import styles from '../styles/Login.module.css'

export default function Login() {

  return (
    <div>
      <section className={`vh-100 ${styles.background}`}>
        <div className="container-fluid vh-100">
          <div className="row">
            <div className="col-12 col-lg-5 bg-opaque vh-100">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-10 col-md-8 col-lg-6 py-3 bg-light">
                  <h4 className="display-4 text-center">LOGIN</h4>
                  <form className="px-4 py-3">
                  <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="email@example.com" />
                  </div>
                  <div className="form-group">
                    <label for="pwd">Password</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Password" />
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                    <label className="form-check-label" for="dropdownCheck">
                      Remember me
                    </label>
                  </div>
                  <div className="text-center pt-3">
                    <button type="submit" className="btn btn-default">Login</button>
                  </div>
                </form>
                {/* <div className="dropdown-divider"></div> */}
                {/* <a className="dropdown-item" href="#">New around here? Sign up</a>
                <a className="dropdown-item" href="#">Forgot password?</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
