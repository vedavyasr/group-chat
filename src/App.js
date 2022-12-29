import logo from "./logo.svg";
import "./App.css";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io("http://localhost:5000");

function App() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    socket.on("connection", (res) => console.log(res));
  }, []);
  return (
    <div className="app">
      <form
        className="login-form center"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <input
          type="text"
          className="text-field"
          value={name}
          onChange={(e) => setName(e.target.name)}
          placeholder="enter display name"
        />
        <input
          type="text"
          className="text-field"
          value={room}
          onChange={(e) => setRoom(e.target.name)}
          placeholder="enter room id/name"
        />
        <button type="submit">Enter!</button>
      </form>
    </div>
  );
}

export default App;
