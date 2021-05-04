import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import List from './components/List';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1> Edge Coding Challenge </h1>
        <SearchBox/>
        <List/> 
      </div>
    </Provider>
  );
}

export default App;
