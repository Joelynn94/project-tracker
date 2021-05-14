import Button from './components/Button/Button';
import './index.css';

function App() {
  return (
    <div className='App'>
      <Button buttonStyle='btn--default'>Testing</Button>
      <Button buttonStyle='btn--primary'>Testing</Button>
      <Button buttonStyle='btn--secondary'>Testing</Button>
      <Button buttonStyle='btn--danger'>Testing</Button>
      <Button buttonStyle='btn--success'>Testing</Button>
      <Button buttonStyle='btn--dark'>Testing</Button>
    </div>
  );
}

export default App;
