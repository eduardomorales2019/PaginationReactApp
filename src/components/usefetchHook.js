import React, { useEffect, useState } from "react";
import axios from "axios";

// import paginate from "utils".--- we will see. its the paginate functions

//

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

// create the usefetch ,, custom hook and Export

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const Fetch = async () => {
    const { data } = await axios(url);
    // const data = await response.json();

    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    Fetch();
  }, []);

  //   IMPORTANT	TO ALWAYS RETURN FUNCTION.
  return { loading, data };
};
