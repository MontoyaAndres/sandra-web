import * as React from "react";
import Flickity from "react-flickity-component";

import Offers from "../data/offers.json";

function OfferList() {
  const options = {
    contain: true,
    initialIndex: 0,
    accessibility: true
  };

  return (
    <Flickity className="carousel" options={options} reloadOnUpdate>
      {Offers.map((offer, i) => (
        <img src={offer} alt="" key={i} />
      ))}
    </Flickity>
  );
}

export default OfferList;
