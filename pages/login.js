import styles from '../styles/Login.module.css'

export default function Login() {

  return (
    <div>
      <section className={`vh-100 ${styles.background}`}>
        <div className="container-fluid vh-100">
          <div className="row">
            <div className="col-12 col-lg-6 bg-light shadow-lg vh-100">

              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-12 col-md-8 col-lg-6 py-3 text-default ">
                  <h4 className="display-4 text-center mb-4">LOGIN</h4>
                  <form className="">
                    <div className="form-group">
                      <label htmlFor="email">USER NAME or EMAIL ADDRESS</label>
                      <input type="email" className="form-control" id="email" placeholder="email@example.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pwd">PASSWORD</label>
                      <input type="password" className="form-control" id="pwd" placeholder="" />
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                      <label className="form-check-label" htmlFor="dropdownCheck">
                        REMEMBER ME
                      </label>
                    </div>
                    <div className="text-center my-3">
                      <button type="submit" className="btn btn-default w-100">LOGIN</button>
                    </div>
                  </form>
                
                <a href="#">New around here? Sign up</a>
                <a className="float-right" href="#">Forgot password?</a>
                <div className="separator">OR</div>
                <button className="btn btn-secondary mb-2 py-4 w-100">test</button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
