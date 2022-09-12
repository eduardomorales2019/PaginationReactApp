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
        </section>
      </main>
    </ErrorBondary>
  );
}

export default App;
