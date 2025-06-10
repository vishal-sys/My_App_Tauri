import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container">
      <h1>Welcome to Samaro</h1>

      <div className="row">
        {/* <a href="https://x.com/samaroai" target="_blank">
          <img src="/X.svg" className="logo vite" alt="Vite logo" />
        </a> */}
        <a href="https://samaro.ai/" target="_blank">
          <img src="/file.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        {/* <a href="https://www.youtube.com/@samaroai" target="_blank">
          <img src= "/YT.svg"className="logo react" alt="React logo" />
        </a> */}
      </div>
      <p>AI Photo Sharing & Event Experience App</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Namastey</button>
      </form>
      <p>{greetMsg}</p>
    </main>
  );
}

export default App;
