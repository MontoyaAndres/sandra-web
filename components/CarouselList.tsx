import * as React from "react";
import Flickity from "react-flickity-component";

interface Props {
  list: Array<string>;
}

function CarouselList({ list }: Props) {
  const options = {
    contain: true,
    initialIndex: 0
  };

  return (
    <section className="section" id="combos">
      <div className="container">
        <div className="content has-text-centered">
          <h2 className="title is-2">¡Combos del mes!</h2>
        </div>

        <Flickity className="carousel" options={options} static>
          {list.map((item, i) => (
            <img
              style={{ padding: "0 10px" }}
              src={item}
              alt=""
              key={i}
              width={500}
              height={500}
            />
          ))}
        </Flickity>
      </div>
    </section>
  );
}

export default CarouselList;
