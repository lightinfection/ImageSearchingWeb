import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  let [input, resetinput] = useState("");
  let [data, resetdata] = useState(null);
  let [page, resetpage] = useState(1);
  let [currentsearch, resetsearch] = useState("");
  const path = "563492ad6f91700001000001f9bd2d55d924453c9db01fc21312e2e5";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${currentsearch}&per_page=15&page=1`;
  const search = async (url) => {
    resetpage(2);
    //console.log(url);
    let x = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: path,
      },
    });
    let y = await x.json();
    //console.log(y);
    resetdata(y.photos);
  };
  const morepicture = async () => {
    let newURL;
    if (currentsearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentsearch}&per_page=15&page=${page}`;
    }
    let x = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: path,
      },
    });
    let y = await x.json();
    resetdata(data.concat(y.photos));
    resetpage(page + 1);
  };

  useEffect(() => {
    if (currentsearch === "") {
      search(initialURL);
    } else {
      search(searchURL);
    }
  }, [currentsearch]);
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        updatesearch={() => {
          resetsearch(input);
        }}
        resetinput={resetinput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="more">
        <button onClick={morepicture}>Load More</button>
      </div>
    </div>
  );
};

export default Homepage;
