import logo from './logo.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-svg-core/index.js';
// import 'https://code.jquery.com/jquery-3.6.0.min.js';
// import 'public/componements/js/jquery-3.4.1.min.js';
// import 'jquery-ui/external/jquery-3.1.0/jquery.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div class="wapper">
        <div class="container-fluid p-0">
            <header>
                <div class="header_left fl">
                    <div class="logo_header">
                        <img class="align-middle" src="../assets/svg/logo.svg" alt="" />
                        <span>Application Learning Tool</span>
                    </div>
                </div>
                <div class="header_right fr">
                    <span><a href="progress.html"><img src="../assets/svg/progress_icon.svg" alt="" /></a></span>
                    <span class="user_icon"><i class="bi bi-person-fill"></i>
                    <div class="sub_menu">
                        <span class="sub_menu_link"><a href="#">Log out</a></span>
                    </div>
                </span>
                </div>
                <div class="clearfix"></div>
            </header>
            <div class="wallet_card">
                <div class="wallet_card_1 fl">
                    <h3 class="f-16 Roboto f-w-600 mb-20 Roboto">Product XTM Generic Name Patient Wallet Card</h3>
                    <p class="f-12 Roboto">This card has important information about Product X.</p>
                    <p class="f-12 Roboto mb-20">Keep this card with you and show it to all healthcare professionals involved in your care. This includes pharmacists, dentists, emergency room or urgent care doctors, or anyone giving you a vaccine.</p>
                    <h6 class="f-13 f-w-500 Roboto mb-20">Immediately call your doctor if you have:</h6>
                    <p class="f-11 Roboto">Any symptoms of an infection. This includes: fever, cough, feeling very tired, or a painful rash.</p>
                    <p class="f-11 Roboto">Any signs of a blood clot. This includes: difficulty breathing, pain in your chest or upper back, or swelling, soreness, or redness in your leg or arm Close contact with someone who has tuberculosis.</p>
                    <p class="f-11 Roboto mb-20">Become pregnant or are planning a pregnancy. Product X should not be taken during pregnancy or while breastfeeding.</p>
                    <h4 class="f-13 f-w-500 Roboto mb-20">Remember:</h4>
                    <p class="f-11 Roboto">Live vaccines should not be given right before or while taking Product X.</p>
                    <p class="f-11 Roboto mb-20">Effective birth control is recommended while taking Product X and for 4 weeks after the last dose.</p>
                    <table>
                        <tbody><tr>
                            <td>Name of the doctor who prescribed Product X:</td>
                            <td></td>
                        </tr>    
                        <tr>
                            <td>Doctor’s phone number:</td>
                            <td></td>
                        </tr>    
                        <tr>
                            <td>The date you started taking Product X:</td>
                            <td></td>
                        </tr>    
                    </tbody></table>
                    <p class="f-12 mt-20">Talk to your doctor or pharmacist about ALL the medicines you take.</p>
                    <p class="f-12">This includes prescription medications, over-the-counter medicines, vitamins, and herbal supplements.</p>
                </div>
                <div class="wallet_card_2 fl">
                    <h3 class="f-16 f-w-600 mb-2">Patient Wallet Card</h3>
                    <p class="mb-20">Review the material you have chosen to optimize. Click/Tap Start Optimizing when you ready to begin.</p>
                    <Link to="learning_page" class="btn btn-primary mr-2">Start Optimizing</Link>
                    <Link to="welcome" class="btn btn-secondary">Back</Link>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
      </div>
    </div>
    );
}

export default App;
