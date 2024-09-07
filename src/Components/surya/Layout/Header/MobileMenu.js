import React from "react";

const MobileMenu = ({ mobileMenu, handleMobileMenu, menuItems }) => {
  const _renderSubMenu = (subMenu) => {
    return subMenu.map((item, index) => (
        <li key={index}>
          <a className="has-arrow" href={item.link}>
            {item.title}
          </a>

          {item.subMenu ? (
            <ul className="sub-menu">{_renderSubMenu(item.subMenu)}</ul>
          ) : null}
        </li>
      ));
  };
  return (
    <div
      className={`${mobileMenu ? "mobile-nav" : "mobile-nav show"} bg-white`}
    >
      <button onClick={handleMobileMenu} type="button" className="close-nav">
        <i className="fal fa-times-circle text-company"></i>
      </button>
      <nav className="sidebar-nav">
        <ul className="metismenu" id="mobile-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a className="has-arrow" href={item.link}>
                {item.title}
              </a>

              {item.subMenu ? (
                <ul className="sub-menu">{_renderSubMenu(item.subMenu)}</ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      <div className="action-bar">
        <a href="mailto:inquiry@suryaengineers.com">
          <i className="fal fa-envelope"></i>inquiry@suryaengineers.com
        </a>
        <a href="tel:+91-987-098-098-09">
          <i className="fal fa-phone"></i>987-098-098-09
        </a>
        <a href="/#contact-us" className="d-btn theme-btn bg-com">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
