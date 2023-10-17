import './App.css';
import Header from './components/Header';
import Sections from './components/Sections';
import data from './data.json';
function App() {
  return (
    <>
      <Header data={data} />
      <main>
        <Sections data={data} />
      </main>
    </>
  );
}

export default App;
