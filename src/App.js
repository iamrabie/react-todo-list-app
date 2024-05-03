import './App.css';
import SearchField from './components/SearchField/searchField.component';

function App() {
  return (
    <div className="App">
      <p className='text-center text-2xl'>TODO LIST APP</p>
      <div className='h-[500px] mt-2 border border-black w-[500px] mx-auto px-3 py-5'>
          <SearchField />
      </div>
    </div>
  );
}

export default App;
