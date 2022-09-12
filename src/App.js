import React, { useState, useEffect } from "react";
import "./index.css";
// usefetch will the loading adn data.
// followers.- responsible fro render the one component

import { useFetch } from "./components/usefetchHook";
import Follower from "./components/follower";
import ErrorBondary from "./components/errorbondary";

// ===============
function App() {
  const { data, loading } = useFetch();
  console.log(data); // now these data is the array of arrays
  // ===================s
  // ! so i have to add new states for the info can display.

  const [page, setPages] = useState(0);
  const [followers, setFollowers] = useState([]);

  const handlePage = (index) => {
    setPages(index);
  };

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page, data]); // react ask for data!!! but not understand pretty well.

  // =========
  return (
    <ErrorBondary>
      <main>
        <div className="section-title">
          <h1>{loading ? "loading..." : "pagination"}</h1>
          <div className="underline"></div>
        </div>
        <section className="followers">
          <div className="container">
            {followers.map((follower) => {
              return <Follower key={follower.id} {...follower} />;
            })}
          </div>
          {/* 1.- for low speed do ot rendder the button first  */}
          {/* 2.- Inside the div, we render the data but the main option to render is the index, taht depends abput numbers of pages.  */}
          {!loading && (
            <div className="btn-container">
              {data.map((item, index) => {
                return (
                  <button onClick={handlePage} className="page-btn" key={index}>
                    {/* +1 for not show the index 0.  */}
                    {index + 1}
                  </button>
                );
              })}{" "}
            </div>
          )}
        </section>
      </main>
    </ErrorBondary>
  );
}

export default App;
