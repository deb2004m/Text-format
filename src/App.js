// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
function App() {
  return (
    <>
    {/* <h2>Hello</h2>
    <div className="App">
      <header className="App-header">
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
          Learn React with Debas
        </a>
      </header> 
    </div> */}
{/* //props */}
    <Navbar title="Textutils" about="About text"/>
    <div className="container">
      <TextFrom heading = "Enter the text to analyze "/>
    </div>
    </>
  );
}

export default App;
