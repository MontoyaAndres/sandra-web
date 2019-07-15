// useMemo
import * as React from "react";

function useSearch() {
  const [value, setValue] = React.useState("");

  return [value, "none", setValue];
}

export default useSearch;
