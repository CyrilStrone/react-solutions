import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Input } from './pages/Input/Organoids/Input';
import { Solutions } from './pages/Solutions/Organoids/Solutions';

function App() {
  return (
    <div className="App">
      <div className="App__Actual">
        <Routes>
          <Route path={"/Solutions"} element={<Solutions />} />
          <Route path={"/Input"} element={<Input />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
