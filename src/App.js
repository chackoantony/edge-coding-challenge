import logo from './logo.svg';
import './App.css';
import List from './components/List';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className="App">
      <SearchBox/>
      <List/> 
    </div>
  );
}

export default App;
