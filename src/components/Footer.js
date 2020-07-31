import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="container-fluid footer text-center">
      <div className="container">
        <div className="row social mb-1">
          <div className="col-12">
            <a
              href="https://www.instagram.com/youthartsmovement/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/youth-arts-movement/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/Youth-Arts-Movement-108983467514325"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="mailto:official@youthartsmovement.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="email">
              <span className="d-none d-sm-block">
                <a
                  href="mailto:official@youthartsmovement.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  official@youthartsmovement.org
                </a>
              </span>
              <span className="d-block d-sm-none">
                <a
                  href="mailto:official@youthartsmovement.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  official
                </a>
                <a
                  href="mailto:official@youthartsmovement.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  @youthartsmovement.org
                </a>
              </span>
            </p>
            <p>
              <Link to="/about" className="underline">
                About
              </Link>{" "}
              ~{" "}
              <Link to="/gallery/submit" className="underline">
                Submit
              </Link>{" "}
              ~{" "}
              <Link to="/gallery/blm" className="underline">
                BLM Gallery
              </Link>
            </p>
            <p className="copyright">
              &copy; Copyright 2020 Youth Arts Movement. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
