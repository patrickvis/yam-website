import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";

export default function Header() {
  const path = useLocation().pathname; // to determine which is active

  useEffect(() => {
    // clicking outside the navbar closes it
    $(document).ready(() => {
      $(document).click(function (event) {
        var click = $(event.target);
        var _open =
          $(".navbar-collapse").hasClass("show") &&
          !$(".nav-item").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
          $(".navbar-toggler").click();
        }
      });
    });
  });

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h1 id="navlogotext">
              <img
                src={require("../assets/yamLogo.png")}
                alt="logo"
                height="25px"
                title="Youth Arts Movement"
              />
            </h1>
          </Link>
          {/* Hamburger Menu for collapse */}
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ml-auto">
              <li className={"nav-item " + (path === "/projects" && "active")}>
                <Link className="nav-link" to="/projects">
                  Our Work
                </Link>
              </li>
              <li className={"nav-item " + (path === "/chapters" && "active")}>
                <Link className="nav-link" to="/chapters">
                  Our Chapters
                </Link>
              </li>
              <li
                className={
                  "nav-item dropdown " +
                  (path.startsWith("/about") && "active")
                }
              >
                <Link
                  className="nav-link dropdown-toggle"
                  to="/about"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About Us
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    className={
                      "dropdown-item " +
                      (path === "/about/story" && "active")
                    }
                    to="/about/story"
                  >
                    Our Story
                  </Link>
                  <Link
                    className={
                      "dropdown-item " + (path === "/about/team" && "active")
                    }
                    to="/about/team"
                  >
                    Our Team
                  </Link>
                  <Link
                    className={
                      "dropdown-item " + (path === "/about/partners" && "active")
                    }
                    to="/about/partners"
                  >
                    Our Partners
                  </Link>
                </div>
              </li>
              <li
                className={
                  "nav-item dropdown " +
                  (path.startsWith("/gallery") && "active")
                }
              >
                <Link
                  className="nav-link dropdown-toggle"
                  to="/gallery"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Galleries
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    className={
                      "dropdown-item " + (path === "/gallery" && "active")
                    }
                    to="/gallery"
                  >
                    <b>Overview</b>
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className={
                      "dropdown-item " +
                      (path === "/gallery/submit" && "active")
                    }
                    to="/gallery/submit"
                  >
                    Submit
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className={
                      "dropdown-item " +
                      (path.startsWith("/gallery/blm") && "active")
                    }
                    to="/gallery/blm"
                  >
                    Social Justice Gallery
                  </Link>
                  <Link
                    className={
                      "dropdown-item " +
                      (path === "/gallery/visualarts" && "active")
                    }
                    to="/gallery/visualarts"
                  >
                    Visual Arts
                  </Link>
                  <Link
                    className={
                      "dropdown-item " +
                      (path === "/gallery/creativewriting" && "active")
                    }
                    to="/gallery/creativewriting"
                  >
                    Creative Writing
                  </Link>
                  <Link
                    className={
                      "dropdown-item " +
                      (path === "/gallery/photography" && "active")
                    }
                    to="/gallery/photography"
                  >
                    Photography
                  </Link>
                  <Link
                    className={
                      "dropdown-item " + (path === "/gallery/music" && "active")
                    }
                    to="/gallery/music"
                  >
                    Music
                  </Link>
                </div>
              </li>
              <li
                className={
                  "nav-item dropdown " +
                  (path.startsWith("/events") && "active")
                }
              >
                <Link
                  className="nav-link dropdown-toggle"
                  to="/events"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Events
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {/* <Link
                    className={
                      "dropdown-item " +
                      (path === "/events/overview" && "active")
                    }
                    to="/events/overview"
                  >
                    Overview
                  </Link>
                  <div className="dropdown-divider"></div> */}
                  <Link
                    className={
                      "dropdown-item " + (path === "/events/yamtalks" && "active")
                    }
                    to="/events/yamtalks"
                  >
                    YAMtalks
                  </Link>
                </div>
              </li>
              <li>
                <a type="button"
                  className="btn btn-secondary donate-btn mb-2"
                  href="https://charity.gofundme.com/o/en/campaign/helping-to-close-the-gap" target="blank">
                  Donate
              </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
