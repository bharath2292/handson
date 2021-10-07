// import logo from './logo.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-svg-core/index.js';
// import 'https://code.jquery.com/jquery-3.6.0.min.js';
// import 'public/componements/js/jquery-3.4.1.min.js';
// import 'jquery-ui/external/jquery-3.1.0/jquery.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import { Link } from 'react-router-dom';

function WelCome() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="wapper">
          <div className="container-fluid p-0">
            <header>
              <div className="header_left fl">
                <div className="logo_header">
                  <img className="align-middle" src="../assets/svg/logo.svg" alt="" />
                  <span>Application Learning Tool</span>
                </div>
              </div>
              <div className="header_right fr">
                <span><img src="../assets/svg/progress_icon.svg" alt="" /></span>
                <span className="user_icon"><i className="bi bi-person-fill"></i>
                  <div className="sub_menu">
                    <span className="sub_menu_link"><a>Log out</a></span>
                  </div>
                </span>
              </div>
              <div className="clearfix"></div>
            </header>
            <div className="welcome_block">
              <div className="row m-0">
                <div className="col-lg-8 col-md-8 col-sm-12 br-right p-0">
                  <div className="welcome_block_left">
                    <h3 className="mb-30">Welcome to the Application Learning Tool!</h3>
                    <div className="wel_sub_1">
                      <span className="wel_sub_1_img fl">
                        <img src="../assets/svg/feel.svg" alt=""/>
                      </span>
                      <span className="wel_sub_1_text fl">
                        <h5>Feel Inspired</h5>
                        <p>Simple, fun, and easy-to-use platform to design health literacy-compliant materials. Optimize materials to empower patients.</p>
                      </span>
                      <div className="clearfix"></div>
                    </div>
                    <div className="wel_sub_1">
                      <span className="wel_sub_1_img fl">
                        <img src="../assets/svg/creating.svg" alt="" />
                      </span>
                      <span className="wel_sub_1_text fl">
                        <h5>Start Creating</h5>
                        <p>Choose from a set of pre-populated options for the background, images, graphics, and text to create patient-facing content by just dragging and dropping onto the workspace.</p>
                      </span>
                      <div className="clearfix"></div>
                    </div>
                    <div className="wel_sub_1">
                      <span className="wel_sub_1_img fl">
                        <img src="../assets/svg/score_icon.svg" alt="" />
                      </span>
                      <span className="wel_sub_1_text fl">
                        <h5>Get Your Score</h5>
                        <p>Submit your work and review your performance by receiving a score and personalized feedback.</p>
                      </span>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                  <div className="welcome_block_right">
                    <h6 className="mb-30">Choose a patient education material to proceed</h6>
                    <Link to="/entry" className="d-block choice_btn">
                      <div className="wel_sub_2">
                        <span className="card_name fl">Patient Wallet Card</span>
                        <span className="card_time fr">5-7 <span className="card_time_min">Minutes</span></span>
                        <div className="clearfix"></div>
                      </div>
                    </Link>
                    <Link to="#" className="d-block choice_btn">
                      <div className="wel_sub_2 completed_full">
                        <span className="card_name fl">Women's Health Infographic</span>
                        <span className="card_time fr">7-10 <span className="card_time_min">Minutes</span></span>
                        <div className="clearfix"></div>
                      </div>
                    </Link>
                    <Link to="#" className="d-block choice_btn">
                      <div className="wel_sub_2">
                        <span className="card_name fl">Plain Language Summary</span>
                        <span className="card_time fr">20-25 <span className="card_time_min">Minutes</span></span>
                        <div className="clearfix"></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <p className="f-12 light_black">For colleagues and approved external partners.</p>
            </div>
          </div>
          <div className="modal fade" id="e-learning" tabIndex="-1" aria-labelledby="exampleModalLabel" style={{display: 'none'}} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <p className="f-15 textc mb-30">Please confirm that you have completed the e-learning in P2L.</p>
                  <div className="textc f-18">
                    <a type="button" href="entry.html" className="btn btn-primary" data-dismiss="modal">Yes</a>
                    <a type="button" href="index.html" className="btn btn-secondary">No</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default WelCome;
