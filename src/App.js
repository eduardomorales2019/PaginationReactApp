import React from "react";
import "./index.css";
// usefetch will the loading adn data.
// followers.- responsible fro render the one component

import { useFetch } from "./components/usefetchHook";
import Follower from "./components/follower";

// ===============
function App() {
  const { data, loading } = useFetch();
  // console.log(data);

  // =========
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {data.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
