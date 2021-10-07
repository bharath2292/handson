import logo from './logo.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-svg-core/index.js';
// import 'https://code.jquery.com/jquery-3.6.0.min.js';
// import 'public/componements/js/jquery-3.4.1.min.js';
// import 'jquery-ui/external/jquery-3.1.0/jquery.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div class="wapper">
          <div class="container-fluid p-0">
            <div class="login_main">
              <div class="logo">
                <img src="../assets/svg/logo.svg" alt="" /> 
              </div>
              <div class="login_block">
                <div class="login_img fl">
                  <img src="../assets/images/login_img.png" alt="" />
                </div>
                <div class="login_text_block fl">
                  <h3 class="f-18">Welcome to the<br /> Application Learning Tool</h3>
                  <h3 class="f-18 f-w-600 mb-4 mt-4">Log in</h3>
                  <div class="mb-3">
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Username" aria-describedby="emailHelp" />
                  </div>
                  <div class="mb-3 position-relative">
                    <input type="password" class="form-control" placeholder="Password " id="password" />
                    <i class ="bi bi-eye-slash" id="togglePassword"></i>
                  </div>
                  <div class="form-check d-inline-block">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class ="form-check-label" for="defaultCheck1">
                    Remember me
                    </label>
                  </div>
                  <a class="f-12 forgot_pass fr" href="fotgot_password.html">Forgot Password?</a>
                  <div class="log_btn mt-3">
                    <a href="welcome" type="button" class="btn btn-primary fl">Login</a>
                    <a href="welcome" type="button" class="btn btn-primary fl">SSO Login</a>
                  </div>
                  <div class="clearfix"></div>
                  <p class="f-14 light_black textc sign_up_link">External User? <a href="sign_in.html">Sign up</a></p>
                </div>
                <div class="clearfix"></div>
              </div>
              <p class="f-12 light_black">For colleagues and approved external partners.</p>
            </div>
          </div>

          <script>

          </script>
        </div>
      </div>
    </div>
    
  );
}

export default App;
