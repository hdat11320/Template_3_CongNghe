"use client";
import "../../public/css/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from "../public/images/logo.svg"
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping, faEnvelope, faMagnifyingGlass, faPhone, faX } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useState } from "react";
import Link from 'next/link';

export default function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  return (
    <header id='site-header' className="site-header">
      <div className="header-topbar style-2">
        <div className="octf-area-wrap mx-auto flex justify-between">
          <div className="container w-full px-[15px] mx-auto">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="md:w-1/3">
          <ul className="social-list">
            <li><a href="#" className="text-gray-400 cursor-pointer active:" ><FontAwesomeIcon icon={faTwitter}/></a></li>
            <li><a href="#" className="text-gray-400"><FontAwesomeIcon icon={faFacebookF}/></a></li>
            <li><a href="#" className="text-gray-400"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
            <li><a href="#" className="text-gray-400"><FontAwesomeIcon icon={faInstagram}/></a></li>
          </ul>
            </div>
          <div className="md:w-8/12">
            <ul className="topbar-info self-end">
            <li><a href="tel:+1-800-456-478-23" className="hover:text-gray-400"><FontAwesomeIcon icon={faPhone} />+1-800-456-478-23</a></li>
            <li><a href="mailto:engitech@mail.com" className="hover:text-gray-400"><FontAwesomeIcon icon={faEnvelope} /> engitech@mail.com</a></li>
          </ul>
          </div>
        </div>
        </div>
        </div>
      </div>

      <div className="octf-main-header">
    <div className="octf-area-wrap">
      <div className="container octf-mainbar-container px-[15px] mx-auto">
        <div className="octf-mainbar">
          <div className="octf-mainbar-row octf-row">
            <div className="octf-col logo-col">
              <div id="site-logo" className="site-logo">
                <a href="index.html">
                  <Image src="/images/logo.svg" alt="Engitech" width={100} height={40} />
                </a>
              </div>
            </div>
            <div className="octf-col menu-col">
              <nav id="site-navigation" className="main-navigation">
                <ul className="menu">
                  <li className="menu-item-has-children current-menu-item current-menu-ancestor">
                    <Link href="/" >Home</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Company</a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/Company/AboutUs">About us</Link>
                      </li>
                      <li>
                        <Link href="/Company/WhyChooseUs">Why Choose Us</Link>
                      </li>
                      <li>
                        <Link href="/Company/OurTeam">Our team</Link>
                      </li>
                      <li>
                        <Link href="/Company/SingleTeam">Single team</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="/Company/Shop/shops">Shop</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/Company/Shop/singleProduct">Single Product</Link>
                          </li>
                          <li>
                            <Link href="/Company/Shop/checkout">Checkout Page</Link>
                          </li>
                          <li>
                            <Link href="/Company/Shop/cart">Cart Page</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/Company/Typography">Typography</Link>
                      </li>
                      <li>
                        <Link href="/Company/Elements">Elements</Link>
                      </li>
                      <li>
                        <Link href="/Company/FAQS">FAQS</Link>
                      </li>
                      <li>
                        <Link href="/Company/404">404 Error</Link>
                      </li>
                      <li>
                        <Link href="/Company/ComingSoon">Coming Soon</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Services</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/Services/It-Service">It Services</a>
                      </li>
                      <li>
                        <a href="/Services/Web-Development">Web Development</a>
                      </li>
                      <li>
                        <a href="/Services/Mobile-Development">Mobile Development</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Projects</a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/Portfo">Portfolio Masonry</Link>
                      </li>
                      <li>
                        <a href="portfolio-carousel.html">Portfolio Carousel</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="portfolio-grid.html">Portfolio Grid</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="portfolio-grid.html">
                              Portfolio 3 Columns
                            </a>
                          </li>
                          <li>
                            <a href="portfolio-4-column.html">
                              Portfolio 4 Columns
                            </a>
                          </li>
                          <li>
                            <a href="portfolio-no-gap.html">Portfolio No Gap</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="portfolio-details-1.html">Portfolio Details</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="portfolio-details-1.html">
                              Single Layout 1
                            </a>
                          </li>
                          <li>
                            <a href="portfolio-details-2.html">
                              Single Layout 2
                            </a>
                          </li>
                          <li>
                            <a href="portfolio-details-3.html">
                              Single Layout 3
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="blog.html">Blog</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog.html">Blog Listing</a>
                      </li>
                      <li>
                        <Link href="/blogGrid">Blog Grid</Link>
                      </li>
                      <li>
                        <a href="post.html">Blog Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contacts</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="octf-col cta-col text-right">
              <div className="octf-btn-cta">
                <div className="octf-header-module cart-btn-hover">
                  <div className="h-cart-btn octf-cta-icons">
                    <a className="cart-icon" href="cart-page.html">
                    <FontAwesomeIcon icon={faBagShopping} />
                      <span className="count">0</span>
                    </a>
                  </div>
                  <div className="site-header-cart">
                    <div className="widget woocommerce widget_shopping_cart">
                      <div className="widget_shopping_cart_content">
                        <p className="woocommerce-mini-cart__empty-message">
                          No products in the cart.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
    <div className="octf-header-module">
      <div className="toggle_search icon-container octf-cta-icons" onClick={toggleSearch}>
        <FontAwesomeIcon icon={isSearchVisible ? faX : faMagnifyingGlass} />
      </div>

      {/* Conditionally render the search form based on isSearchVisible */}
      {isSearchVisible && (
        <div className="h-search-form-field show">
          <div className="h-search-form-inner">
            <form
              role="search"
              method="get"
              id="hsearch-form"
              className="search-form"
            >
              <label>
                <span className="screen-reader-text">Search for:</span>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Search …"
                  defaultValue=""
                  name="s"
                />
              </label>
              <button type="submit" className="search-submit cursor-pointer">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </header>
  );
}
