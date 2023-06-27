// import logo from './logo.svg';
import './App.css';
import { EventList } from './components';
import mockData from './mockData.json'
function App() {
  return (
    <div className="App">
      <EventList events={mockData.data}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
