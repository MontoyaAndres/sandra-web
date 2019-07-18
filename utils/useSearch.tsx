import { useState, useMemo } from "react";

import { getJSONToRead } from "./getJSONToReact";

interface SearchValue {
  inputValue: string;
  selectValue: string;
}

function useSearch(values: SearchValue, limit: number) {
  const { inputValue, selectValue } = values;
  const [products, setProducts] = useState([]);

  useMemo(() => {
    const result = getJSONToRead(selectValue)
      .slice(0, limit)
      .filter(value =>
        `${value.name} ${value.description}`
          .toLowerCase()
          .includes(inputValue.toLowerCase())
      );

    setProducts(result);
  }, [inputValue, selectValue, limit]);

  return { products };
}

export default useSearch;
