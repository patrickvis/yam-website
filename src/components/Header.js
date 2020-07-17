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
        var _open = $(".navbar-collapse").hasClass("show");
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
            <h1 id="navlogotext">YAM</h1>
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
                  "nav-item " + (path.startsWith("/gallery") && "active")
                }
              >
                <Link className="nav-link" to="/gallery">
                  Galleries
                </Link>
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
              <li className={"nav-item " + (path === "/events" && "active")}>
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
