import React from 'react';
import PropTypes from 'prop-types';

export const About = () => {
  return (
    <section className="row d-flex justify-content-between mt-md-1 mt-5">
      <AboutCard
        img="img/tools.jpg"
        title="Our Shoes have souls"
        description="We truly believe that. We live for our shoes. Each one is created as an unique beeing. We do not manufacture shoes, we give birth to them."
      />
      <AboutCard
        img="img/shoemaker.jpg"
        title="Handmade with passion"
        description="Shoemaking is an art. A centuries old creafmanship. Behind each
              existing Leatha shoea there are years of experience."
      />
      <AboutCard
        img="img/needle.jpg"
        title="The finesse is in the details"
        description="Every seam. Every thred. Carefully placed. Delightfully made. Only
              the best should be good enough for your foot."
      />
    </section>
  );
};

function AboutCard({ img, title, description }) {
  return (
    <article className="col-sm d-flex justify-content-center mt-md-1 mt-2">
      <div className="card" style={{ width: '18rem' }}>
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/" className="btn btn-light shadow">
            Read More
          </a>
        </div>
      </div>
    </article>
  );
}

AboutCard.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
