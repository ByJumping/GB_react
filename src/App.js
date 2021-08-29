import './style.css'
import './App.css';
import {Message} from "./components/message";

function App() {
  return (
    <div className="App">
      <Message name='Alex' age={300}></Message>
    </div>
  );
}

export default App;
