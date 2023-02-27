import logo from './logo.svg';
import './App.css';
import data from './data.json';

function App() {

  console.log(data)

  const fileteredItens = data.filter(checkDestino);

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="FlexContainer">
        {fileteredItens.map((key, i) => ( 
          <div className="FlexItens" key={i}>
            <div className="photo"></div>
            <p>{fileteredItens[i].Item}</p>
            <p>R$ {fileteredItens[i].Valor}</p>
          </div>
        ))}
      </div>
    </div>
  );

  function checkDestino(item) {
    console.log(item.Destino)
    return item.Destino == "Bazar";
  }
}

export default App;
