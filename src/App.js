import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';

const App = () => {
  return (
  
    <div className="App">
      <NavBar />
      <ItemDetailContainer greeting="Desarrollo personal"/>
    </div>
  );
}

export default App;
