import { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../../../assets/surya/surya_logo.png";
import OffsetMenu from "./OffsetMenu";
import MobileMenu from "./MobileMenu";


const MENU_ITEMS = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "What we Do",
    link: "/services",
    subMenu: [
      {
        title: "Construction Services",
        link: "/services/construction",
        isSubMenu: true,
        subMenu: [
          {
            title: "Industrial Buildings",
            link: "/services/construction/#industrial-buildings",
          },
          {
            title: "PEB Structures",
            link: "/services/construction/#peb-structures",
          },
          {
            title: "Water Treatment Plants",
            link: "/services/construction/#water-treatment-plants",
          },
          {
            title: "Sewage Treatment Plants",
            link: "/services/construction/#sewage-treatment-plants",
          },
          {
            title: "Commercial Buildings",
            link: "/services/construction/#commercial-buildings",
          },
          {
            title: "Residential Buildings",
            link: "/services/construction/#residential-buildings",
          },
          {
            title: "Bungalows",
            link: "/services/construction/#bungalows",
          },
        ],
      },
      {
        title: "Structural Design Services",
        link: "/services/structural-design",
        isSubMenu: true,
        subMenu: [
          {
            title: "Commercial and Residential Buildings",
            link: "/services/structural-design/#commercial-and-residential-buildings",
          },
          {
            title: "Bungalows",
            link: "/services/structural-design/#bungalows",
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
    link: "/#contact-us",
  },
  {
    title: "Careers",
    link: "/careers",
  },
];

const Header = () => {
  const [offset, setOffset] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(true);



  const handleOffset = (e) => {
    e.preventDefault();
    setOffset(!offset);
  };

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

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
    <>
      <OffsetMenu offset={offset} handleOffset={handleOffset} />
      {/* <HeroSocials/> */}
      <header className="header-wrap header-1">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/">
              <img src={mainLogo} alt="logo" style={{ maxHeight: 48 }} />
            </Link>
          </div>
          <div className="header-right-area d-flex">
            <div className="main-menu d-none d-xl-block">
              <ul>
                {MENU_ITEMS.map((item, index) => (
                  <li key={index}>
                    <a className="has-arrow" href={item.link}>
                      {item.title}
                    </a>

                    {item.subMenu ? (
                      <ul className="sub-menu">
                        {_renderSubMenu(item.subMenu)}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
            <div className="header-right-elements d-flex align-items-center justify-content-between">
              {/* <Link to="/contact" className="theme-btn d-none d-sm-block">
                Get Free Quote
              </Link> */}
              <span
                onClick={handleOffset}
                className="side-menu-toggle d-none d-xl-block"
              >
                <i className="fal fa-bars"></i>
              </span>
              <div className="d-inline-block ms-4 d-xl-none">
                <div className="mobile-nav-wrap">
                  <div id="hamburger" onClick={handleMobileMenu}>
                    <i className="fal fa-bars text-company"></i>
                  </div>
                  <MobileMenu
                    mobileMenu={mobileMenu}
                    handleMobileMenu={handleMobileMenu}
                    menuItems={MENU_ITEMS}
                  />
                </div>
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
