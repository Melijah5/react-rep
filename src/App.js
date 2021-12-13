import './App.css';
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="card col-4 mx-auto">
      <h3 className="card-title">Hello World</h3>
      <Card />
    </div>
  );
}

export default App;
