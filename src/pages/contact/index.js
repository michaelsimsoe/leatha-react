import React from 'react';

export const Contact = () => {
  return (
    <section className="row d-flex justify-content-between">
      <FrequentlyAskedQuestions />
      <ContactForm />
      <SocialIcons />
    </section>
  );
};

function SocialIcons() {
  return (
    <section className="contact-social d-flex flex-column justify-content-end col-sm-1 mb-5">
      <img className="mb-3" src="img/facebook.svg" alt="cart" />
      <img className="mb-3" src="img/instagram.svg" alt="cart" />
      <img className="mb-3" src="img/pinterest.svg" alt="cart" />
      <img src="img/youtube.svg" alt="cart" />
    </section>
  );
}

function ContactForm() {
  return (
    <section className="contact-message col-sm-5 mt-5 mb-5 ml-md-5 p-5">
      <h3>Send us a message</h3>
      <form method="get">
        <div className="form-group">
          <label for="contact-name">Name</label>
          <input
            name="contact-name"
            type="text"
            className="form-control"
            id="contact-name"
            placeholder="Who goes there?"
            spellcheck="false"
          />
          <span id="contact-name-message"></span>
        </div>
        <div className="form-group">
          <label for="contact-email">Email address *</label>
          <input
            name="contact-email"
            type="email"
            className="form-control"
            id="contact-email"
            aria-describedby="emailHelp"
            placeholder="So we can reply you"
            required=""
          />
          <span id="contact-email-message">
            ⚠ This email address doesn't look right.
          </span>
        </div>
        <div className="form-group">
          <label for="contact-message">
            What do you want to tell us?Or ask us?
          </label>
          <textarea
            name="contact-message"
            className="form-control"
            id="contact-message"
            rows="3"
            required=""
            pattern=".{2,}"
          ></textarea>
          <span id="contact-message-message">
            ⚠ Your message is a bit short.You need at least two letters. Maybe
            start with a "Hi"?
          </span>
        </div>
        <button
          id="contact-submit"
          type="submit"
          className="btn btn-primary cta-btn shadow"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

function FrequentlyAskedQuestions() {
  return (
    <section className="contact-faq col-sm-4 mt-5 mb-5 ml-md-5 p-5">
      <h3 className="mb-5">Frequently Asked Questions</h3>
      <div className="list-group">
        <a href="/" className="list-group-item list-group-item-action">
          What is the shipping process like?
        </a>
        <a href="/" className="list-group-item list-group-item-action">
          How do I take care of my lethas?
        </a>
        <a href="/" className="list-group-item list-group-item-action">
          Why do you only make mens shoes?
        </a>
        <a href="/" className="list-group-item list-group-item-action">
          Do you make soccer shoes?
        </a>
        <a href="/" className="list-group-item list-group-item-action">
          Do you have camel leather?
        </a>
        <a href="/" className="list-group-item list-group-item-action">
          How long is the guarantie?
        </a>
      </div>
    </section>
  );
}
