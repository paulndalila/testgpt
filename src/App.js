import './App.css';

function App() {
  return (
    <div className="App">
        <div className='navbar'>
          <h3>OpenAI APIs</h3>
          <h2>textGPT</h2>
          <button>&#x2B; New chat</button>
        </div>

        <div className='main'>
          <div className='user'>
            <p>User</p>
            <p>hello</p>
          </div>

          <div className='assistant'>
            <p>Assistant</p>
            <p>Hello! How can I assist you today?</p>
          </div>

        </div>

        <div className='bottom-section'>
          <div className='input-field'>
            <input type='text' name='text-input' placeholder='Entet text prompt here...' required/>
            <button>Send</button>
          </div>

          <div>
            <p>Paul's version of chatGPT. TestGPT may produce inaccurate information about people, places or facts. </p>
            <p>Copywrite &copy;2023 Paul Ndalila</p>
          </div>
        </div>
    </div>
  );
}

export default App;
