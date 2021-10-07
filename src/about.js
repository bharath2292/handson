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
        <header >
          <div className="header_left fl">
            <div className="logo_header">
              <img className="align-middle" src="../assets/svg/logo.svg" alt=""  />
              <span>Application Learning Tool</span>
            </div>
          </div>
          <div className="header_right fr">
            <span><a href="progress.html"><img src="../assets/svg/progress_icon.svg" alt=""  /></a></span>
            <span className="review_icon"><a href="help_page.html"><img src="../assets/svg/review.svg" alt=""  /></a></span>
            <span className="user_icon"><i className="bi bi-person-fill"></i>
                <div className="sub_menu"> <span className="sub_menu_link"><a href="logout">Log out</a></span></div>
            </span>
          </div>
          <div className="clearfix"></div>
        </header>
      </div>
    </div>
    
  );
}

export default App;
