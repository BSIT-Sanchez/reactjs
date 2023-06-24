
import './App.css';

function App() {
  return (
    <div className="App">
      <Arrow name="sanchez" address="alba tago surigao del sur"/>
    </div>
  );
}
const Arrow = (props)=>{
  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{props.address}</h2>

    </div>

  )
}

export default App;
