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
                src={require("../assets/logo.png")}
                alt="logo"
                height="25px"
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
              <li className={"nav-item " + (path === "/" && "active")}>
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
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
                    BLM Gallery
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
              <li className={"nav-item " + (path === "/about" && "active")}>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className={"nav-item " + (path === "/chapters" && "active")}>
                <Link className="nav-link" to="/chapters">
                  Chapters
                </Link>
              </li>
              <li className={"nav-item " + (path === "/projects" && "active")}>
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              {/* <li className={"nav-item " + (path === "/events" && "active")}>
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
