import React from "react";
import { useState } from "react";

export default function NewsletterModal() {
  const [state, updateState] = useState({
    emailAdded: false,
    message: "Stay updated.",
    email: "",
  });
  return (
    <div
      className="modal fade"
      id="newsletterModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="newsletterModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="newsletterModalLabel">
              Join our Newsletter
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body email-modal-body">
            <form
              onSubmit={() => addEmailToFirebase(state, updateState)}
              className="pb-1"
            >
              <input
                placeholder="Enter your email address"
                value={state.email}
                onChange={(e) => {
                  updateState({ ...state, email: e.target.value });
                }}
                type="text"
                className="form-control"
                disabled={state.emailAdded}
              ></input>
            </form>
            {state.message}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => addEmailToFirebase(state, updateState)}
              disabled={state.emailAdded}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function addEmailToFirebase(state, updateState) {
  if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(state.email)) {
    updateState({
      ...state,
      message: "You have entered an invalid email address!",
    });
    return;
  }

  updateState({
    ...state,
    message: "Success! You have been added to our mailing list.",
    emailAdded: true,
  });
}
