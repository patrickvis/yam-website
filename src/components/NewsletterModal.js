import React from "react";
import { useState } from "react";
import firebase from "firebase";

export default function NewsletterModal(props) {
  const [state, updateState] = useState({
    emailAdded: false,
    message: "Join the YAM Newsletter to stay updated!",
    email: "",
  });

  return (
    <div
      className="modal fade mt-3"
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
              onSubmit={(e) => {
                e.preventDefault();
                addEmailToFirebase(state, updateState, props.db);
              }}
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
              onClick={() => addEmailToFirebase(state, updateState, props.db)}
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

function addEmailToFirebase(state, updateState, db) {
  if (!state.email) {
    updateState({
      ...state,
      message: "You have not entered an email address.",
    });
    return;
  }
  if (!validateEmail(state.email)) {
    updateState({
      ...state,
      message: "You have entered an invalid email address!",
    });
    return;
  }

  db.collection("mailing-list")
    .doc("YiTg4mDbzdYGRVCfr2CJ")
    .update({
      emails: firebase.firestore.FieldValue.arrayUnion(state.email),
    });

  updateState({
    ...state,
    message: "Success! You have been added to our mailing list.",
    emailAdded: true,
  });
}

function validateEmail(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(String(email).toLowerCase());
}
