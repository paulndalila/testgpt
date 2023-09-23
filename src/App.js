import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [prompt, setprompt] = useState("");
  const [messages, setmessage] = useState([]);

  const handleClick = () => {
    console.log(prompt);
    setprompt("");

    const data = [{
      'header': 'user',
      'message': prompt
    }]

    setmessage(data);
  };

  // useEffect(()=>{

  // }, [messages])

  return (
    <div className="App">
      <div className="navbar">
        <h3>OpenAI APIs</h3>
        <h2>textGPT</h2>
        <button>&#x2B; New chat</button>
      </div>

      <div className="main">
        {/* <div className='user'>
          <p>User</p>
          <p>hello</p>
        </div>

        <div className='assistant'>
          <p>Assistant</p>
          <p>Hello! How can I assist you today?</p>
        </div> */}

        {messages.map((message) => {
          
          if (message["header"] === "user") {
            <div className="user">
              <p>User</p>
              <p>message</p>
            </div>;
          } else {
            <div className="assistant">
              <p>Assistant</p>
              <p>Hello! How can I assist you today?</p>
            </div>;
          }
        })}
      </div>

      <div className="bottom-section">
        <div className="input-field">
          <input
            type="text"
            name="text-input"
            value={prompt}
            onChange={(e) => setprompt(e.target.value)}
            placeholder="Entet text prompt here..."
            required
          />
          <button onClick={handleClick}>Send</button>
        </div>

        <div>
          <p>
            Paul's version of chatGPT. TestGPT may produce inaccurate
            information about people, places or facts.{" "}
          </p>
          <p>Copywrite &copy;2023 Paul Ndalila</p>
        </div>
      </div>
    </div>
  );
}

export default App;
