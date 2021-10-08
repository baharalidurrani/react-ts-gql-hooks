import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useFindAllUsersQuery } from "./generated/graphql";

function App() {
  const { data, error, loading } = useFindAllUsersQuery();
  return (
    <div className="App">
      {error ? (
        error.message
      ) : (
        <>
          <h1>
            Id:
            {loading ? "Loading..." : data?.findAllUsers[0].id}
          </h1>
          <h1>
            Name:
            {loading ? "Loading..." : data?.findAllUsers[0].name}
          </h1>
        </>
      )}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
