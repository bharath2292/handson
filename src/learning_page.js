import logo from './logo.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import '@fortawesome/fontawesome-svg-core/index.js';
// import 'https://code.jquery.com/jquery-3.6.0.min.js';
// import 'public/componements/js/jquery-3.4.1.min.js';
// import 'jquery-ui/external/jquery-3.1.0/jquery.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import React from 'react';
import MyProgress from '../src/custom'
function App() {
  return (
    <div className="App">
      <MyProgress />
      <div className="App-header">
        <div className="wapper fixed_height">
          <div className="wapper fixed_height">
            <header >
              <div className="header_left fl">
                <div className="logo_header">
                  <img className="align-middle" src="../assets/svg/logo.svg" alt="" />
                  <span>Application Learning Tool</span>
                </div>
              </div>
              <div className="header_right fr">
                <span><a href="about"><img src="../assets/svg/progress_icon.svg" alt="" /></a></span>
                <span className="review_icon"><a href="help_page.html"><img src="../assets/svg/review.svg" alt="" /></a></span>
                <span className="user_icon"><i className="bi bi-person-fill"></i>
                  <div className="sub_menu"> <span className="sub_menu_link"><a href="logout">Log out</a></span></div>
                </span>
              </div>
              <div className="clearfix"></div>

            </header>
            <div className="subheader">
              <div className="sub_header_title fl">Patient Wallet Card </div>
              <div className="fl tool_view">
                <span className="single_view opacti"><span></span></span>
                <span className="double_view ">
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div className="subheader_right fr">
                <div className="progress_sec fl">
                  <label>Progress: <b className="ligtest-blue">0%</b> </label>
                  <div className="progress">
                    <div className="progress-bar" id="file" style={{ width: '0%' }} role="progressbar" value="0" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="fl">
                  <span className="preview_btn" href="#"><img src="../assets/svg/Preview.svg" alt="" /></span>
                  <span className="save_btn"><img src="../assets/svg/save.svg" alt="" /></span>
                  <span disabled="disabled" className="btn btn-secondary submit_btn">Submit</span>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="canvas">
              <div className="left_canvas bg-white">
                <div className="left_section ">
                  <div id="accordion">
                    <div className="card eachTab cursor-pointer" data-format="1">
                      <div className="card-header" id="heading0" data-toggle="collapse" data-target="#collapse0" aria-expanded="false" aria-controls="collapseOne">
                        <h5 className="mb-0">
                          Background
                          <i className="bi bi-chevron-down"></i>
                        </h5>
                      </div>
                      <div id="collapse0" className="collapse" aria-labelledby="heading0" data-parent="#accordion">
                        <div className="card-body">
                          <div className="row bg_color_main">
                            <div className="col-lg-4">
                              <div className="bg_color mb-3" style={{ width: '90px', height: '60px', background: '#FFF' }} bg-color="#FFF" points="1" data-format="1" left-parent="heading0">
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="bg_color mb-3" style={{ width: '90px', height: '60px', background: '#034EA2' }} bg-color="#034EA2" points="2" data-format="1" left-parent="heading0">
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="bg_color mb-3" style={{ width: '90px', height: '60px', background: '#000' }} bg-color="#000" points="3" data-format="1" left-parent="heading0">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card name_header eachTab" data-format="2">
                      <div className="card-header collapsed" id="heading1" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapseOne">
                        <h5 className="mb-0">Header <i className="bi bi-chevron-down"></i></h5>
                      </div>
                      <div id="collapse1" className="collapse" aria-labelledby="heading1" data-parent="#accordion">
                        <div className="card-body-1">
                          <div className="nav nav-tabs" role="tablist">
                            <a className="nav-item nav-link active" href="#nav-text1" data-toggle="tab">
                              <div className="mb-1"><img src="../assets/svg/text.svg" alt="" /></div>
                              Text
                            </a>
                            <a className="nav-item nav-link" href="#nav-style1" data-toggle="tab">
                              <div className="mb-1"><img src="../assets/svg/font.svg" alt="" /></div>
                              Style
                            </a>
                            <a className="nav-item nav-link" href="#nav-color1" data-toggle="tab">
                              <div className="mb-1"><img src="../assets/svg/color-palette.svg" alt="" /></div>
                              Color
                            </a>
                            <a className="nav-item nav-link" href="#nav-image1" data-toggle="tab">
                              <div className="mb-1"><img src="../assets/svg/image.svg" alt="" /></div>
                              Image
                            </a>
                          </div>
                          <div className="tab-content" id="nav-tabContent1">
                            <div className="tab-pane fade active show" id="nav-text1" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual" sec="header_text">
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="header" points="1">Clinical Trial Results – Product X<sup>TM</sup></p>
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="header" points="2">Does Product X<sup>TM</sup> Help Treat Patients With Transthyretin Amyloid Cardiomyopathy?</p>
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="header" points="3">Treatment of Transthyretin Amyloid Cardiomyopathy</p>
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="header" points="3">Side Effects of Using Product X<sup>TM</sup> While Treating Transthyretin Amyloid Cardiomyopathy</p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-style1" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual_font_color" sec="header_text">
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="header" font="Arial" points="1">Arial</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1 " data-format="2" data-name="header" font="ITC Bradley Hand" points="2">ITC Bradley Hand
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="header" font="Impact" points="3">Impact</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="header" font="Monotype Corsiva" points="4">
                                    Monotype Corsiva
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-color1" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual_font_color color_sec row" sec="header_text">
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#ff4141' }} points="1" data-format="2" text-color="#ff4141" data-name="header" left-parent="heading1"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#21cf44' }} points="2" data-format="2" text-color="#21cf44" data-name="header" left-parent="heading1"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer " style={{ width: '90px', height: '60px', background: '#301934' }} points="3" data-format="2" text-color="#301934" data-name="header" left-parent="heading1"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#034EA2' }} points="4" data-format="2" text-color="#034EA2" data-name="header" left-parent="heading1"></div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-image1" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual row" sec="header_image">
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="1" data-image="1" data-name="header">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/200/120?random=1,1,1" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="2" data-image="1" data-name="header">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=2,2,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="3" data-image="1" data-name="header">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=3,3,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="4" data-image="1" data-name="header">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=4,4,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="5" data-image="1" data-name="header">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=5,5,0" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card name_sub_header eachTab" data-format="2">
                      <div className="card-header" id="heading2" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapseOne">
                        <h5 className="mb-0">
                          Sub Header
                          <i className="bi bi-chevron-down"></i>
                        </h5>
                      </div>
                      <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordion">
                        <div className="card-body-2">
                          <div className="nav nav-tabs" role="tablist">
                            <a className="nav-item nav-link active" href="#nav-text2" data-toggle="tab">
                              <div className=""><img src="../assets/svg/text.svg" alt="" /></div>
                              Text
                            </a>
                            <a className="nav-item nav-link" href="#nav-style2" data-toggle="tab">
                              <div className=""><img src="../assets/svg/font.svg" alt="" /></div>
                              Style
                            </a>
                            <a className="nav-item nav-link" href="#nav-color2" data-toggle="tab">
                              <div className=""><img src="../assets/svg/color-palette.svg" alt="" /></div>
                              Color
                            </a>
                            <a className="nav-item nav-link " href="#nav-image2" data-toggle="tab">
                              <div className=""><img src="../assets/svg/image.svg" alt="" /></div>
                              Image
                            </a>
                          </div>
                          <div className="tab-content" id="nav-tabContent2">
                            <div className="tab-pane fade active show" id="nav-text2" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual" sec="sub_header_text">
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="sub_header" points="1">Product X Study Purpose in Treating ATTR-CM</p>
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="sub_header" points="2">Why Was This Study Done?</p>
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="sub_header" points="3">Study Overview</p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-style2" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual_font_color" sec="sub_header_text">
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="sub_header" font="Arial" points="1">Arial</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="sub_header" font="ITC Bradley Hand" points="2">
                                    ITC Bradley Hand</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1 " data-format="2" data-name="sub_header" font="Impact" points="3">Impact</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="sub_header" font="Monotype Corsiva" points="4">
                                    Monotype Corsiva</div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-color2" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual_font_color color_sec row" sec="sub_header_text">
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#ff4141' }} points="1" data-format="2" text-color="#ff4141" data-name="sub_header" left-parent="heading1"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#21cf44' }} points="2" data-format="2" text-color="#21cf44" data-name="sub_header" left-parent="heading1"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer " style={{ width: '90px', height: '60px', background: '#301934' }} points="3" data-format="2" text-color="#301934" data-name="sub_header" left-parent="heading1"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#034EA2' }} points="4" data-format="2" text-color="#034EA2" data-name="sub_header" left-parent="heading1"></div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade " id="nav-image2" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual row" sec="sub_header_image">
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="1" data-image="1" data-name="sub_header">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=1,1,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="2" data-image="1" data-name="sub_header">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=2,2,1" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="3" data-image="1" data-name="sub_header">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=3,3,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="4" data-image="1" data-name="sub_header">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=4,4,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="5" data-image="1" data-name="sub_header">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=5,5,0" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card name_body_text1 eachTab" data-format="2">
                      <div className="card-header collapsed" id="heading3" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapseOne">
                        <h5 className="mb-0">
                          Body Text 1
                          <i className="bi bi-chevron-down"></i>
                        </h5>
                      </div>
                      <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordion">
                        <div className="card-body-3">
                          <div className="nav nav-tabs" role="tablist">
                            <a className="nav-item nav-link active" href="#nav-text3" data-toggle="tab">
                              <div className=""><img src="../assets/svg/text.svg" alt="" /></div>
                              Text
                            </a>
                            <a className="nav-item nav-link" href="#nav-style3" data-toggle="tab">
                              <div className=""><img src="../assets/svg/font.svg" alt="" /></div>
                              Style
                            </a>
                            <a className="nav-item nav-link" href="#nav-color3" data-toggle="tab">
                              <div className=""><img src="../assets/svg/color-palette.svg" alt="" /></div>
                              Color
                            </a>
                            <a className="nav-item nav-link" href="#nav-image3" data-toggle="tab">
                              <div className=""><img src="../assets/svg/image.svg" alt="" /></div>
                              Image
                            </a>
                          </div>
                          <div className="tab-content" id="nav-tabContent3">
                            <div className="tab-pane fade active show" id="nav-text3" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual" sec="body_text1_text">
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="body_text1" points="1">1.Body Text 1
                                  Lorem Ipsum is simply dummy text of the printing</p>
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="body_text1" points="2">2.Body Text 1
                                  Lorem Ipsum is simply dummy text of the printing</p>
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="body_text1" points="3">3.Body Text 1
                                  Lorem Ipsum is simply dummy text of the printing</p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-style3" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual_font_color" sec="body_text1_text">
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="body_text1" font="Arial" points="1">Arial</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="body_text1" font="ITC Bradley Hand" points="2">
                                    ITC Bradley Hand</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="body_text1" font="Impact" points="3">Impact</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1 " data-format="2" data-name="body_text1" font="Monotype Corsiva" points="4">Monotype Corsiva</div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-color3" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual_font_color color_sec row" sec="body_text1_text">
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#FFF' }} points="1" data-format="2" text-color="#FFF" data-name="body_text1" left-parent="heading3"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#CCC' }} points="2" data-format="2" text-color="#CCC" data-name="body_text1" left-parent="heading3"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer " style={{ width: '90px', height: '60px', background: '#000' }} points="3" data-format="2" text-color="#000" data-name="body_text1" left-parent="heading3"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#ff4141' }} points="4" data-format="2" text-color="#ff4141" data-name="body_text1" left-parent="heading3"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#21cf44' }} points="5" data-format="2" text-color="#21cf44" data-name="body_text1" left-parent="heading3"></div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-image3" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual row" sec="body_text1_image">
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="1" data-image="1" data-name="body_text1">
                                  <div className="nav_image">
                                    <img src="../assets/images/Picture1.png" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="2" data-image="1" data-name="body_text1">
                                  <div className="nav_image">
                                    <img src="../assets/images/Picture2.png" alt="" />
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card name_body_text2 eachTab" data-format="2">
                      <div className="card-header collapsed" id="heading4" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapseOne">
                        <h5 className="mb-0">
                          Body Text 2
                          <i className="bi bi-chevron-down"></i>
                        </h5>
                      </div>
                      <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordion">
                        <div className="card-body-4">
                          <div className="nav nav-tabs" role="tablist">
                            <a className="nav-item nav-link active" href="#nav-text4" data-toggle="tab">
                              <div className=""><img src="../assets/svg/text.svg" alt="" /></div>
                              Text
                            </a>
                            <a className="nav-item nav-link" href="#nav-style4" data-toggle="tab">
                              <div className=""><img src="../assets/svg/font.svg" alt="" /></div>
                              Style
                            </a>
                            <a className="nav-item nav-link" href="#nav-color4" data-toggle="tab">
                              <div className=""><img src="../assets/svg/color-palette.svg" alt="" /></div>
                              Color
                            </a>
                            <a className="nav-item nav-link" href="#nav-image4" data-toggle="tab">
                              <div className=""><img src="../assets/svg/image.svg" alt="" /></div>
                              Image
                            </a>
                          </div>
                          <div className="tab-content" id="nav-tabContent4">
                            <div className="tab-pane fade active show" id="nav-text4" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual" sec="body_text2_text">
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="body_text2" points="1">1.Body Text 2
                                  Lorem Ipsum is simply dummy text of the printing</p>
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="body_text2" points="2">2.Body Text 2
                                  Lorem Ipsum is simply dummy text of the printing</p>
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="body_text2" points="3">3.Body Text 2
                                  Lorem Ipsum is simply dummy text of the printing</p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-style4" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual_font_color" sec="body_text2_text">
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="body_text2" font="Arial" points="1">Arial</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="body_text2" font="ITC Bradley Hand" points="2">
                                    ITC Bradley Hand</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="body_text2" font="Impact" points="3">Impact</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="body_text2" font="Monotype Corsiva" points="4">
                                    Monotype Corsiva</div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-color4" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual_font_color color_sec row" sec="body_text2_text">
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#FFF' }} points="1" data-format="2" text-color="#FFF" data-name="body_text2" left-parent="heading4"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#CCC' }} points="2" data-format="2" text-color="#CCC" data-name="body_text2" left-parent="heading4"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#000' }} points="3" data-format="2" text-color="#000" data-name="body_text2" left-parent="heading4"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#ff4141' }} points="4" data-format="2" text-color="#ff4141" data-name="body_text2" left-parent="heading4"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#21cf44' }} points="5" data-format="2" text-color="#21cf44" data-name="body_text2" left-parent="heading4"></div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-image4" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual row" sec="body_text2_image">
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="1" data-image="1" data-name="body_text2">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=12,1,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="2" data-image="1" data-name="body_text2">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=22,2,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="3" data-image="1" data-name="body_text2">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=32,3,1" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="4" data-image="1" data-name="body_text2">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=42,4,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="5" data-image="1" data-name="body_text2">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=52,5,0" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card name_body_text3 eachTab" data-format="2">
                      <div className="card-header collapsed" id="heading5" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapseOne">
                        <h5 className="mb-0">
                          Body Text 3
                          <i className="bi bi-chevron-down"></i>
                        </h5>
                      </div>
                      <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordion">
                        <div className="card-body-5">
                          <div className="nav nav-tabs" role="tablist">
                            <a className="nav-item nav-link active" href="#nav-text5" data-toggle="tab">
                              <div className=""><img src="../assets/svg/text.svg" alt="" /></div>
                              Text
                            </a>
                            <a className="nav-item nav-link" href="#nav-style5" data-toggle="tab">
                              <div className=""><img src="../assets/svg/font.svg" alt="" /></div>
                              Style
                            </a>
                            <a className="nav-item nav-link" href="#nav-color5" data-toggle="tab">
                              <div className=""><img src="../assets/svg/color-palette.svg" alt="" /></div>
                              Color
                            </a>
                            <a className="nav-item nav-link" href="#nav-image5" data-toggle="tab">
                              <div className=""><img src="../assets/svg/image.svg" alt="" /></div>
                              Image
                            </a>
                          </div>
                          <div className="tab-content" id="nav-tabContent5">
                            <div className="tab-pane fade active show" id="nav-text5" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual" sec="body_text3_text">
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="body_text3" points="1">1.Body Text 1
                                  Lorem Ipsum is simply dummy text of the printing</p>
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="body_text3" points="2">2.Body Text 1
                                  Lorem Ipsum is simply dummy text of the printing</p>
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="body_text3" points="3">3.Body Text 1
                                  Lorem Ipsum is simply dummy text of the printing</p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-style5" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual_font_color" sec="body_text3_text">
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="body_text3" font="Arial" points="1">Arial</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="body_text3" font="ITC Bradley Hand" points="2">
                                    ITC Bradley Hand</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="body_text3" font="Impact" points="3">Impact</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="body_text3" font="Monotype Corsiva" points="4">
                                    Monotype Corsiva</div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-color5" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual_font_color color_sec row" sec="body_text3_text">
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#FFF' }} points="1" data-format="2" text-color="#FFF" data-name="body_text3" left-parent="heading5"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#CCC' }} points="2" data-format="2" text-color="#CCC" data-name="body_text3" left-parent="heading5"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#000' }} points="3" data-format="2" text-color="#000" data-name="body_text3" left-parent="heading5"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#ff4141' }} points="4" data-format="2" text-color="#ff4141" data-name="body_text3" left-parent="heading5"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#21cf44' }} points="5" data-format="2" text-color="#21cf44" data-name="body_text3" left-parent="heading5"></div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-image5" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual row" sec="body_text3_image">
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="1" data-image="1" data-name="body_text3">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=13,1,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="2" data-image="1" data-name="body_text3">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=23,2,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="3" data-image="1" data-name="body_text3">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=33,3,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="4" data-image="1" data-name="body_text3">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=43,4,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="5" data-image="1" data-name="body_text3">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=53,5,1" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card name_footer eachTab" data-format="2">
                      <div className="card-header collapsed" id="heading6" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapseOne">
                        <h5 className="mb-0">
                          Footer
                          <i className="bi bi-chevron-down"></i>
                        </h5>
                      </div>
                      <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordion">
                        <div className="card-body-6">
                          <div className="nav nav-tabs" role="tablist">
                            <a className="nav-item nav-link active" href="#nav-text6" data-toggle="tab">
                              <div className=""><img src="../assets/svg/text.svg" alt="" /></div>
                              Text
                            </a>
                            <a className="nav-item nav-link" href="#nav-style6" data-toggle="tab">
                              <div className=""><img src="../assets/svg/font.svg" alt="" /></div>
                              Style
                            </a>
                            <a className="nav-item nav-link" href="#nav-color6" data-toggle="tab">
                              <div className=""><img src="../assets/svg/color-palette.svg" alt="" /></div>
                              Color
                            </a>
                            <a className="nav-item nav-link" href="#nav-image6" data-toggle="tab">
                              <div className=""><img src="../assets/svg/image.svg" alt="" /></div>
                              Image
                            </a>
                          </div>
                          <div className="tab-content" id="nav-tabContent6">
                            <div className="tab-pane fade active show" id="nav-text6" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual" sec="footer_text">
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="footer" points="1">1.Footer Lorem
                                  Ipsum is simply dummy text of the printing</p>
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="footer" points="20000">2.BFooter
                                  Lorem Ipsum is simply dummy text of the printing</p>
                                <p className="drag-able text-content cursor-move ui-draggable ui-draggable-handle" data-format="2" data-name="footer" points="3">3.BFooterLorem
                                  Ipsum is simply dummy text of the printing</p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-style6" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual_font_color" sec="footer_text">
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="footer" font="Arial" points="1">Arial</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="footer" font="ITC Bradley Hand" points="2">ITC
                                    Bradley Hand</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="footer" font="Impact" points="3">Impact</div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="each_val cursor-pointer mb-1" data-format="2" data-name="footer" font="Monotype Corsiva" points="4">
                                    Monotype Corsiva</div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-color6" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual_font_color color_sec row" sec="footer_text">
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#FFF' }} points="1" data-format="2" text-color="#FFF" data-name="footer" left-parent="heading6"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#CCC' }} points="2" data-format="2" text-color="#CCC" data-name="footer" left-parent="heading6"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#000' }} points="3" data-format="2" text-color="#000" data-name="footer" left-parent="heading6"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#ff4141' }} points="4" data-format="2" text-color="#ff4141" data-name="footer" left-parent="heading6"></div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="cards each_val mb-3 cursor-pointer" style={{ width: '90px', height: '60px', background: '#21cf44' }} points="5" data-format="2" text-color="#21cf44" data-name="footer" left-parent="heading6"></div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="nav-image6" role="tabpanel" aria-labelledby="nav-home-tab">
                              <div className="individual row" sec="footer_image">
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="1" data-image="1" data-name="footer">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=13,1,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="2" data-image="1" data-name="footer">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=23,2,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="3" data-image="1" data-name="footer">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=33,3,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="4" data-image="1" data-name="footer">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=43,4,0" alt="" />
                                  </div>
                                </div>
                                <div className="drag-able cursor-move ui-draggable ui-draggable-handle" data-format="2" points="5" data-image="1" data-name="footer">
                                  <div className="nav_image">
                                    <img src="https://picsum.photos/111/120?random=53,5,1" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right_canvas ">
                <div className="main_canvas bg-white float-left">
                  <div className="canvas_sec">
                    <div className="header position-relative border_btm_1 w-100">
                      <div className="header_main drop-able ui-droppable w-100" sec="header_text" data-placeholder="Header Text">

                      </div>

                      <div className="clearfix"></div>
                      <span className="block_header">Front</span>
                      <div id="header_action" className="actions"><span className="cursor-pointer edit"><i className="fas fa-pen"></i></span><span className="cursor-pointer redo" data-val="header_main"><i className="fas fa-redo-alt"></i></span></div>
                      <div id="header_edit_action" className="edit_actions"><button className="edit_save">Save</button><button className="edit_cancel">Cancel</button></div>
                    </div>
                    <div className="sub_header position-relative border_btm_1 w-100">
                      <div className="sub_header_main drop-able ui-droppable w-100" sec="sub_header_text" data-placeholder="Sub Header Text">

                      </div>

                      <div className="clearfix"></div>
                      <span className="block_header">Inside Top</span>
                      <div id="sub_header_action" className="actions"><span className="cursor-pointer edit"><i className="fas fa-pen"></i></span><span className="cursor-pointer redo" data-val="sub_header_main"><i className="fas fa-redo-alt"></i></span></div>
                      <div id="sub_header_edit_action" className="edit_actions"><button className="edit_save">Save</button><button className="edit_cancel">Cancel</button></div>
                    </div>
                    <div className="body_text1 position-relative border_btm_1 w-100">
                      <div className="body_text1_main drop-able ui-droppable" sec="body_text1_text" data-placeholder="Body Text 1 Text">

                      </div>
                      <div className="body_text1_main drop-able ui-droppable" sec="body_text1_image" data-placeholder="Body Text 1 Image">

                      </div>
                      <div className="clearfix"></div>
                      <div id="body_text1_action" className="actions"><span className="cursor-pointer edit"><i className="fas fa-pen"></i></span><span className="cursor-pointer redo" data-val="body_text1_main"><i className="fas fa-redo-alt"></i></span></div>
                      <div id="body_text1_edit_action" className="edit_actions"><button className="edit_save">Save</button><button className="edit_cancel">Cancel</button></div>
                    </div>
                    <div className="body_text2 position-relative border_btm_1 w-100">
                      <div className="body_text2_main drop-able ui-droppable" sec="body_text2_text" data-placeholder="Body Text 2 Text">

                      </div>
                      <div className="body_text2_main drop-able ui-droppable" sec="body_text2_image" data-placeholder="Body Text 2 Image">

                      </div>
                      <div className="clearfix"></div>
                      <div id="body_text2_action" className="actions"><span className="cursor-pointer edit"><i className="fas fa-pen"></i></span><span className="cursor-pointer redo" data-val="body_text2_main"><i className="fas fa-redo-alt"></i></span></div>
                      <div id="body_text2_edit_action" className="edit_actions"><button className="edit_save">Save</button><button className="edit_cancel">Cancel</button></div>
                    </div>
                    <div className="body_text3 position-relative border_btm_1 w-100">
                      <div className="body_text3_main drop-able ui-droppable" sec="body_text3_text" data-placeholder="Body Text 3 Text">

                      </div>
                      <div className="body_text3_main drop-able ui-droppable" sec="body_text3_image" data-placeholder="Body Text 3 Image">

                      </div>
                      <div className="clearfix"></div>
                      <div id="body_text3_action" className="actions"><span className="cursor-pointer edit"><i className="fas fa-pen"></i></span><span className="cursor-pointer redo" data-val="body_text3_main"><i className="fas fa-redo-alt"></i></span></div>
                      <div id="body_text3_edit_action" className="edit_actions"><button className="edit_save">Save</button><button className="edit_cancel">Cancel</button></div>
                    </div>
                    <div className="footer position-relative border_btm_1 w-100">
                      <div className="footer_main drop-able ui-droppable" sec="footer_text" data-placeholder="Footer Text">

                      </div>
                      <div className="footer_main drop-able ui-droppable" sec="footer_image" data-placeholder="Footer Image">

                      </div>
                      <div className="clearfix"></div>
                      <div id="footer_action" className="actions"><span className="cursor-pointer edit"><i className="fas fa-pen"></i></span><span className="cursor-pointer redo" data-val="footer_action"><i className="fas fa-redo-alt"></i></span></div>
                      <div id="footer_edit_action" className="edit_actions"><button className="edit_save">Save</button><button className="edit_cancel">Cancel</button></div>

                    </div>
                  </div>
                </div>
                <div className="canvas_demo bg-white float-left">
                  <div className="canvas_sec_demo float-left" bg-color="#000">
                    <div className="header position-relative border_btm_1 float-left">
                      <div className="header_main drop-able ui-droppable" sec="header_text" font="Arial" text-color="#ff4141">
                        <span>1. Lorem Ipsum is simply dummy text of the printing</span>
                      </div>
                      <div className="header_main drop-able ui-droppable" sec="header_image" data-placeholder="header Image">
                        <span>
                          <div className="mb-3"><img src="https://picsum.photos/111/120?random=1" alt="" /></div>
                        </span>
                      </div>
                    </div>
                    <div className="sub_header position-relative border_btm_1 float-left">
                      <div className="sub_header_main drop-able ui-droppable" sec="sub_header_text" font="ITC Bradley Hand" text-color="#CCC">
                        <span>2.Sub Header Lorem Ipsum is simply dummy text of the printing</span>
                      </div>
                      <div className="sub_header_main drop-able ui-droppable" sec="sub_header_image" data-placeholder="sub_header Image">
                        <span>
                          <div className="mb-3"><img src="https://picsum.photos/111/120?random=2" alt="" /></div>
                        </span>
                      </div>
                    </div>
                    <div className="body_text1 position-relative border_btm_1 float-left">
                      <div className="body_text1_main drop-able ui-droppable" sec="body_text1_text" font="Monotype Corsiva" text-color="#21cf44">
                        <span>3.Body Text 1 Lorem Ipsum is simply dummy text of the printing</span>
                      </div>
                      <div className="body_text1_main drop-able ui-droppable" sec="body_text1_image" data-placeholder="body_text1 Image">
                        <span>
                          <div className="mb-3"><img src="https://picsum.photos/111/120?random=4" alt="" /></div>
                        </span>
                      </div>
                    </div>
                    <div className="body_text2 position-relative border_btm_1 float-left">
                      <div className="body_text2_main drop-able ui-droppable" sec="body_text2_text" font="Monotype Corsiva" text-color="#CCC">
                        <span>3.Body Text 2 Lorem Ipsum is simply dummy text of the printing</span>
                      </div>
                      <div className="body_text2_main drop-able ui-droppable" sec="body_text2_image" data-placeholder="body_text2 Image">
                        <span>
                          <div className="mb-3"><img src="https://picsum.photos/111/120?random=32" alt="" /></div>
                        </span>
                      </div>
                    </div>
                    <div className="body_text3 position-relative border_btm_1 float-left">
                      <div className="body_text3_main drop-able ui-droppable" sec="body_text3_text" font="Arial" text-color="#21cf44">
                        <span>3.Body Text 1 Lorem Ipsum is simply dummy text of the printing</span>
                      </div>
                      <div className="body_text3_main drop-able ui-droppable" sec="body_text3_image" data-placeholder="body_text3 Image">
                        <span>
                          <div className="mb-3"><img src="https://picsum.photos/111/120?random=53" alt="" /></div>
                        </span>
                      </div>
                    </div>
                    <div className="footer position-relative border_btm_1 float-left">
                      <div className="footer_main drop-able ui-droppable" sec="footer_text" font="Monotype Corsiva" text-color="#21cf44">
                        <span>2.BFooter Lorem Ipsum is simply dummy text of the printing</span>
                      </div>
                      <div className="footer_main drop-able ui-droppable" sec="footer_image" data-placeholder="footer Image">
                        <span>
                          <div className="mb-3"><img src="https://picsum.photos/111/120?random=53" alt="" /></div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

}

export default App;
