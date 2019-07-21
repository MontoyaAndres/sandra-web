import * as React from "react";
import Flickity from "react-flickity-component";

interface Props {
  title: string;
  nameId: string;
  list: Array<string>;
}

function CarouselList({ title, nameId, list }: Props) {
  const options = {
    contain: true,
    initialIndex: 0
  };

  return (
    <section className="section" id={nameId}>
      <div className="container">
        <div className="content has-text-centered">
          <h2 className="title is-2">{title}</h2>
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
