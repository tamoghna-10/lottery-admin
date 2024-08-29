import React from 'react'

const NavTop = () => {
  return (
   <div className="container-fluid g-0">
  <div className="row">
    <div className="col-lg-12 p-0 ">
      <div className="header_iner d-flex justify-content-between align-items-center">
        <div className="sidebar_icon d-lg-none">
          <i className="ti-menu" />
        </div>
        <div className="line_icon open_miniSide d-none d-lg-block">
          <img src="img/line_img.png" alt />
        </div>
        {/* <div className="serach_field-area d-flex align-items-center">
          <div className="search_inner">
            <form action="#">
              <div className="search_field">
                <input type="text" placeholder="Search" />
              </div>
              <button type="submit"> <img src="img/icon/icon_search.svg" alt /> </button>
            </form>
          </div>
        </div> */}
        <div className="header_right d-flex justify-content-between align-items-center">
          <div className="header_notification_warp d-flex align-items-center">
            <li>
              <a className="bell_notification_clicker" href="#"> <img src="img/icon/bell.svg" alt />
                <span>2</span>
              </a>
              {/* Menu_NOtification_Wrap  */}
              <div className="Menu_NOtification_Wrap">
                <div className="notification_Header">
                  <h4>Notifications</h4>
                </div>
                <div className="Notification_body">
                  {/* single_notify  */}
                  <div className="single_notify d-flex align-items-center">
                    <div className="notify_thumb">
                      <a href="#"><img src="img/staf/2.png" alt /></a>
                    </div>
                    <div className="notify_content">
                      <a href="#"><h5>Cool Marketing </h5></a>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  {/* single_notify  */}
                  <div className="single_notify d-flex align-items-center">
                    <div className="notify_thumb">
                      <a href="#"><img src="img/staf/4.png" alt /></a>
                    </div>
                    <div className="notify_content">
                      <a href="#"><h5>Awesome packages</h5></a>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  {/* single_notify  */}
                  <div className="single_notify d-flex align-items-center">
                    <div className="notify_thumb">
                      <a href="#"><img src="img/staf/3.png" alt /></a>
                    </div>
                    <div className="notify_content">
                      <a href="#"><h5>what a packages</h5></a>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  {/* single_notify  */}
                  <div className="single_notify d-flex align-items-center">
                    <div className="notify_thumb">
                      <a href="#"><img src="img/staf/2.png" alt /></a>
                    </div>
                    <div className="notify_content">
                      <a href="#"><h5>Cool Marketing </h5></a>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  {/* single_notify  */}
                  <div className="single_notify d-flex align-items-center">
                    <div className="notify_thumb">
                      <a href="#"><img src="img/staf/4.png" alt /></a>
                    </div>
                    <div className="notify_content">
                      <a href="#"><h5>Awesome packages</h5></a>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  {/* single_notify  */}
                  <div className="single_notify d-flex align-items-center">
                    <div className="notify_thumb">
                      <a href="#"><img src="img/staf/3.png" alt /></a>
                    </div>
                    <div className="notify_content">
                      <a href="#"><h5>what a packages</h5></a>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
                <div className="nofity_footer">
                  <div className="submit_button text-center pt_20">
                    <a href="#" className="btn_1">See More</a>
                  </div>
                </div>
              </div>
              {/*/ Menu_NOtification_Wrap  */}
            </li>
            <li>
              <a className="CHATBOX_open" href="#"> <img src="img/icon/msg.svg" alt /> <span>2</span></a>
            </li>
          </div>
          <div className="profile_info">
            <img src="img/client_img.png" alt="#" />
            <div className="profile_info_iner">
              <div className="profile_author_name">
                <p>Neurologist </p>
                <h5>Demo Username</h5>
              </div>
              <div className="profile_info_details">
                <a href="#">My Profile </a>
                <a href="#">Settings</a>
                <a href="#">Log Out </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default NavTop