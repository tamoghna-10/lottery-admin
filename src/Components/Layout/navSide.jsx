import React from "react";
import { Link } from "react-router-dom";

const NavSide = () => {
  return (
  <nav className="sidebar">
  <div className="logo d-flex justify-content-between">
    <a className="large_logo" href="index.html"><img src="img/logo.png" alt /></a>
    <a className="small_logo" href="index.html"><img src="img/mini_logo.png" alt /></a>
    <div className="sidebar_close_icon d-lg-none">
      <i className="ti-close" />
    </div>
  </div>
  <ul id="sidebar_menu">
    <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/dashboard.svg" alt />
        </div>
        <div className="nav_title">
          <span> Game Management </span>
        </div>
      </a>
      <ul>
        <li><Link to="/lottery-markets">Lottery Markets</Link></li>
   
      </ul>
    </li>
    <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/2.svg" alt />
        </div>
        <div className="nav_title">
          <span> Expired Games </span>
        </div>
      </a>
      {/* <ul>
        <li><a href="editor.html">editor</a></li>
        <li><a href="mail_box.html">Mail Box</a></li>
        <li><a href="chat.html">Chat</a></li>
        <li><a href="faq.html">FAQ</a></li>
      </ul> */}
    </li>
    {/* <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/3.svg" alt />
        </div>
        <div className="nav_title">
          <span>Pages</span>
        </div>
      </a>
      <ul>
        <li><a href="login.html">Login</a></li>
        <li><a href="resister.html">Register</a></li>
        <li><a href="error_400.html">Error 404</a></li>
        <li><a href="error_500.html">Error 500</a></li>
        <li><a href="forgot_pass.html">Forgot Password</a></li>
        <li><a href="gallery.html">Gallery</a></li>
      </ul>
    </li> */}
    {/* <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/4.svg" alt />
        </div>
        <div className="nav_title">
          <span>Admins</span>
        </div>
      </a>
      <ul>
        <li><a href="admin_list.html">Admin List</a></li>
        <li><a href="add_new_admin.html">Add New Admin</a></li>
      </ul>
    </li> */}
    {/* <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/11.svg" alt />
        </div>
        <div className="nav_title">
          <span>Role &amp; Permissions</span>
        </div>
      </a>
      <ul>
        <li><a href="module_setting.html">Module Setting</a></li>
        <li><a href="role_permissions.html">Role &amp; Permissions</a></li>
      </ul>
    </li> */}
    {/* <li className>
      <a href="navs.html" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/12.svg" alt />
        </div>
        <div className="nav_title">
          <span>Navs</span>
        </div>
      </a>
    </li> */}
    {/* <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/5.svg" alt />
        </div>
        <div className="nav_title">
          <span>Users</span>
        </div>
      </a>
      <ul>
        <li><a href="user_list.html">Users List</a></li>
        <li><a href="add_new_user.html">Add New User</a></li>
      </ul>
    </li> */}
    {/* <li>
      <a href="Builder.html" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/6.svg" alt />
        </div>
        <div className="nav_title">
          <span>Builder </span>
        </div>
      </a>
    </li> */}
    {/* <li className>
      <a href="invoice.html" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/7.svg" alt />
        </div>
        <div className="nav_title">
          <span>Invoice</span>
        </div>
      </a>
    </li> */}
    {/* <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/8.svg" alt />
        </div>
        <div className="nav_title">
          <span>forms</span>
        </div>
      </a>
      <ul>
        <li><a href="Basic_Elements.html">Basic Elements</a></li>
        <li><a href="Groups.html">Groups</a></li>
        <li><a href="Max_Length.html">Max Length</a></li>
        <li><a href="Layouts.html">Layouts</a></li>
      </ul>
    </li> */}
    {/* <li className>
      <a href="Board.html" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/9.svg" alt />
        </div>
        <div className="nav_title">
          <span>Board</span>
        </div>
      </a>
    </li> */}
    {/* <li className>
      <a href="calender.html" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/10.svg" alt />
        </div>
        <div className="nav_title">
          <span>Calander</span>
        </div>
      </a>
    </li> */}
    {/* <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/11.svg" alt />
        </div>
        <div className="nav_title">
          <span>Themes</span>
        </div>
      </a>
      <ul>
        <li><a href="dark_sidebar.html">Dark Sidebar</a></li>
        <li><a href="light_sidebar.html">light Sidebar</a></li>
      </ul>
    </li>
    <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/12.svg" alt />
        </div>
        <div className="nav_title">
          <span>General</span>
        </div>
      </a>
      <ul>
        <li><a href="Minimized_Aside.html">Minimized Aside</a></li>
        <li><a href="empty_page.html">Empty page</a></li>
        <li><a href="fixed_footer.html">Fixed Footer</a></li>
      </ul>
    </li>
    <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/13.svg" alt />
        </div>
        <div className="nav_title">
          <span>Products</span>
        </div>
      </a>
      <ul>
        <li><a href="Products.html">Products</a></li>
        <li><a href="Product_Details.html">Product Details</a></li>
        <li><a href="Cart.html">Cart</a></li>
        <li><a href="Checkout.html">Checkout</a></li>
      </ul>
    </li>
    <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/14.svg" alt />
        </div>
        <div className="nav_title">
          <span>Icons</span>
        </div>
      </a>
      <ul>
        <li><a href="Fontawesome_Icon.html">Fontawesome Icon</a></li>
        <li><a href="themefy_icon.html">themefy icon</a></li>
      </ul>
    </li>
    <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/15.svg" alt />
        </div>
        <div className="nav_title">
          <span>Animations</span>
        </div>
      </a>
      <ul>
        <li><a href="wow_animation.html">Animate</a></li>
        <li><a href="Scroll_Reveal.html">Scroll Reveal</a></li>
        <li><a href="tilt.html">Tilt Animation</a></li>
      </ul>
    </li>
    <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/16.svg" alt />
        </div>
        <div className="nav_title">
          <span>Components</span>
        </div>
      </a>
      <ul>
        <li><a href="accordion.html">Accordions</a></li>
        <li><a href="Scrollable.html">Scrollable</a></li>
        <li><a href="notification.html">Notifications</a></li>
        <li><a href="carousel.html">Carousel</a></li>
        <li><a href="Pagination.html">Pagination</a></li>
      </ul>
    </li>
    <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/17.svg" alt />
        </div>
        <div className="nav_title">
          <span>Table</span>
        </div>
      </a>
      <ul>
        <li><a href="data_table.html">Data Tables</a></li>
        <li><a href="bootstrap_table.html">Bootstrap</a></li>
      </ul>
    </li>
    <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/18.svg" alt />
        </div>
        <div className="nav_title">
          <span>Cards</span>
        </div>
      </a>
      <ul>
        <li><a href="basic_card.html">Basic Card</a></li>
        <li><a href="theme_card.html">Theme Card</a></li>
        <li><a href="dargable_card.html">Draggable Card</a></li>
      </ul>
    </li>
    <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/19.svg" alt />
        </div>
        <div className="nav_title">
          <span>Charts</span>
        </div>
      </a>
      <ul>
        <li><a href="chartjs.html">ChartJS</a></li>
        <li><a href="apex_chart.html">Apex Charts</a></li>
        <li><a href="chart_sparkline.html">Chart sparkline</a></li>
        <li><a href="am_chart.html">am-charts</a></li>
        <li><a href="nvd3_charts.html">nvd3 charts.</a></li>
      </ul>
    </li>
    <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/20.svg" alt />
        </div>
        <div className="nav_title">
          <span>UI Kits </span>
        </div>
      </a>
      <ul>
        <li><a href="colors.html">colors</a></li>
        <li><a href="Alerts.html">Alerts</a></li>
        <li><a href="buttons.html">Buttons</a></li>
        <li><a href="modal.html">modal</a></li>
        <li><a href="dropdown.html">Droopdowns</a></li>
        <li><a href="Badges.html">Badges</a></li>
        <li><a href="Loading_Indicators.html">Loading Indicators</a></li>
        <li><a href="color_plate.html">Color Plate</a></li>
        <li><a href="typography.html">Typography</a></li>
        <li><a href="datepicker.html">Date Picker</a></li>
      </ul>
    </li>
    <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/21.svg" alt />
        </div>
        <div className="nav_title">
          <span>Widgets</span>
        </div>
      </a>
      <ul>
        <li><a href="chart_box_1.html">Chart Boxes 1</a></li>
        <li><a href="profilebox.html">Profile Box</a></li>
      </ul>
    </li> */}
    {/* <li className>
      <a className="has-arrow" href="#" aria-expanded="false">
        <div className="nav_icon_small">
          <img src="img/menu-icon/12.svg" alt />
        </div>
        <div className="nav_title">
          <span>Maps</span>
        </div>
      </a>
      <ul>
        <li><a href="mapjs.html">Maps JS</a></li>
        <li><a href="vector_map.html">Vector Maps</a></li>
      </ul>
    </li> */}
  </ul>
</nav>

  );
};

export default NavSide;
