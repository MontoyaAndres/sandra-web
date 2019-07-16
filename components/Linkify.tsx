import React, { useState, memo } from "react";

const Linkify = ({ items, amountItems }) => {
  const [expression, setExpression] = useState(false);

  function renderItems() {
    return items.map((item, i) => {
      if (item.includes("\t")) {
        return (
          <ul key={i}>
            {item.split("\t").map((subitem, j) => (
              <li key={j}>{subitem}</li>
            ))}
          </ul>
        );
      }

      return <li key={i}>{item}</li>;
    });
  }

  return items.length > amountItems ? (
    expression ? (
      <>
        {renderItems()}
        <a onClick={() => setExpression(false)}>Ver menos</a>
      </>
    ) : (
      <>
        {renderItems().slice(0, amountItems)}
        <a onClick={() => setExpression(true)}>Ver más</a>
      </>
    )
  ) : (
    renderItems()
  );
};

export default memo(Linkify);
