import Button from './components/Button/Button';
import Container from './components/Container/Container';
import Input from './components/Input/Input';
import './index.css';

function App() {
  return (
    <Container>
      <Button buttonStyle='btn--default'>Testing</Button>
      <Button buttonStyle='btn--primary'>Testing</Button>
      <Button buttonStyle='btn--secondary'>Testing</Button>
      <Button buttonStyle='btn--danger'>Testing</Button>
      <Button buttonStyle='btn--success'>Testing</Button>
      <Button buttonStyle='btn--dark'>Testing</Button>
      <Input helperText='testing 123' icon='search' />
      <Input helperText='testing 123' />
    </Container>
  );
}

export default App;
