import React from "react";
import { Link } from "react-router-dom";

const MENU_ITEMS = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "What we Do",
    // link: "/services",
    subMenu: [
      {
        title: "Construction Services",
        link: "/services/construction",
        isSubMenu: true,
        subMenu: [
          {
            title: "Industrial Buildings",
            src: "services/construction/industrial-buildings",
          },
          {
            title: "PEB Structures",
            src: "services/construction/peb-structures",
          },
          {
            title: "Water Treatment Plants",
            src: "services/construction/water-treatment-plants",
          },
          {
            title: "Sewage Treatment Plants",
            src: "services/construction/sewage-treatment-plants",
          },
          {
            title: "Commercial Buildings",
            src: "services/construction/commercial-buildings",
          },
          {
            title: "Residential Buildings",
            src: "services/construction/residential-buildings",
          },
          {
            title: "Bungalows",
            src: "services/construction/bungalows",
          },
        ],
      },
      {
        title: "Structural Design Services",
        link: "/services/structural-design",
        isSubMenu: true,
        subMenu: [
          {
            title: "Commercial Buildings",
            src: "services/structural-design/commercial-buildings",
          },
          {
            title: "Residential Buildings",
            src: "services/structural-design/residential-buildings",
          },
          {
            title: "Bungalows",
            src: "services/structural-design/bungalows",
          },
        ],
      },
    ],
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
  {
    title: "Careers",
    link: "/careers",
  },
];

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
        <a href="tel:123-456-7890">
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
