import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const contact = () => {
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isMessageFocused, setIsMessageFocused] = useState(false);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event, setStateFunction) => {
    const inputText = event.target.value;
    setStateFunction(inputText);

    if (inputText.trim() !== "") {
      // Determine which input triggered the change and set the corresponding state
      if (setStateFunction === setFirstName) {
        setIsFirstNameFocused(true);
      } else if (setStateFunction === setLastName) {
        setIsLastNameFocused(true);
      } else if (setStateFunction === setEmail) {
        setIsEmailFocused(true);
      } else if (setStateFunction === setMessage) {
        setIsMessageFocused(true);
      }
    } else {
      // If the input is empty, set the corresponding state to false
      if (setStateFunction === setFirstName) {
        setIsFirstNameFocused(false);
      } else if (setStateFunction === setLastName) {
        setIsLastNameFocused(false);
      } else if (setStateFunction === setEmail) {
        setIsEmailFocused(false);
      } else if (setStateFunction === setMessage) {
        setIsMessageFocused(false);
      }
    }
  };

  return (
    <section className="contact 2xl:max-w-screen-lg mx-auto">
      <div className="container z-10 grid grid-cols-1 ">
        <div className="form-wrapper">
          <div className="contact-heading">
            <h1 className="uppercase font-jakarta text-4xl font-semibold text-white">
              Let's work together <span>.</span>
            </h1>
            <p className="text-tint font-jakarta">
              or reach us via :{" "}
              <a className="text-blue-400" href="mailto:">
                Monster@mail.com
              </a>
            </p>
          </div>
          <form
            action="index.html"
            method="post"
            className="grid grid-cols-2 gap-5 p-5 rounded "
          >
            <div className="input-wrap relative ">
              <input
                className="w-full p-6 rounded-2xl border-none bg-form"
                type="text"
                autoComplete="off"
                name="FirstName"
                required
                value={firstName}
                onChange={(event) => handleInputChange(event, setFirstName)}
                onFocus={() => setIsFirstNameFocused(true)}
                onBlur={() => setIsFirstNameFocused(false)}
              />
              <label
                className={`form-text absolute ${
                  isFirstNameFocused ? "small-label" : ""
                }`}
              >
                First Name
              </label>
              <FontAwesomeIcon
                className="icon-text absolute fa-lg"
                icon={faAddressCard}
              />
            </div>
            <div className="input-wrap relative">
              <input
                className="w-full border-none rounded-2xl bg-form p-6"
                type="text"
                autoComplete="off"
                name="LastName"
                required
                value={lastName}
                onChange={(event) => handleInputChange(event, setLastName)}
                onFocus={() => setIsLastNameFocused(true)}
                onBlur={() => setIsLastNameFocused(false)}
              />
              <label
                className={`form-text absolute ${
                  isLastNameFocused ? "small-label" : ""
                }`}
              >
                Last Name
              </label>
              <FontAwesomeIcon
                className="icon-text absolute fa-lg"
                icon={faAddressCard}
              />
            </div>
            <div className="input-wrap relative col-span-2">
              <input
                className="w-full input-wrap border-none rounded-2xl bg-form p-6"
                type="text"
                autoComplete="off"
                name="Email"
                required
                value={email}
                onChange={(event) => handleInputChange(event, setEmail)}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
              />
              <label
                className={`form-mail absolute ${
                  isEmailFocused ? "small-label" : ""
                }`}
              >
                Email
              </label>
              <FontAwesomeIcon
                className="icon-mail absolute fa-lg"
                icon={faEnvelope}
              />
            </div>
            <div className="input-wrap relative col-span-2">
              <textarea
                className="w-full rounded-2xl border-none bg-form p-8"
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={message}
                onChange={(event) => handleInputChange(event, setMessage)}
                onFocus={() => setIsMessageFocused(true)}
                onBlur={() => setIsMessageFocused(false)}
              ></textarea>
              <label
                className={`form-message absolute ${
                  isMessageFocused ? "small-label" : ""
                }`}
              >
                Message
              </label>
              <FontAwesomeIcon
                className="icon-message absolute fa-lg"
                icon={faInbox}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default contact;
